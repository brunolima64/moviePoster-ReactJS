import { useContext, useEffect, useState } from 'react'
import * as C from './styles';
import axios from 'axios';
import { MovieItem } from '../../comoponents/MovieItem';
import { MovieType } from '../../types/MovieType';
import { Skeleton } from '../../comoponents/Skeleton';
import { SearchContext } from '../../contexts/SearchContext';
import { SearchShowCtx } from '../../contexts/SearchShowCtx';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export const Home = () => {
	const searchCtx = useContext(SearchContext);
	const searchShowCtx = useContext(SearchShowCtx); // renderizar o searchMovi
	const [movies, setMovies] = useState<MovieType[]>([]);// movies é apenas para controlar o skeleton
	const [moviesFiltered, setMoviesFiltered] = useState<MovieType[]>([]);

	useEffect(()=>{
		// função para cuidar do search
		const handleSearchMovie = () => {
			setTimeout(()=>{
				let newList = movies.filter(it => {
					if(searchCtx?.search && searchCtx?.search !== '') {
						let verificationSearch = it.title.toLowerCase().indexOf(searchCtx?.search.toLowerCase());
						if(verificationSearch !== -1) return it;
					} else {
						return it;
					}
				});
				
				setMoviesFiltered(newList);
			}, 1000);
		}

		handleSearchMovie();
	}, [moviesFiltered]);

	useEffect(()=>{	const getTopRatedMovies = async () => {
		const res = await axios.get(`${moviesURL}top_rated?${apiKey}`); 
			setMovies(res.data.results);//movies é apenas para controlar o skeleton
			setMoviesFiltered(res.data.results); // para inicializar os filmes
			searchShowCtx?.setSearchShow(true); // para exibir o searchMovi;
		};

		getTopRatedMovies();
	}, [])



	return (
		<C.Container>
			{movies.length === 0 && <Skeleton />}

			<C.Movies>
				{moviesFiltered.length > 0 &&
					moviesFiltered.map(item => <MovieItem key={item.id} item={item} />)
				}
			</C.Movies>

			{/* Quando nao tiver itens. */}
			{searchCtx?.search && moviesFiltered.length === 0 &&
				<C.HaveNotMovie>There are no items to display.</C.HaveNotMovie>
			}
    	</C.Container>
	)
}
