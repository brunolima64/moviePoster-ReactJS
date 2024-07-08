import { useNavigate, useParams } from 'react-router-dom';
import * as C from './styles';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { SkeletonMovi } from '../../comoponents/SkeletonMovi.tsx/index.tsx';
import { MoviPageType } from '../../types/MoviPageType.ts';
import { SearchShowCtx } from '../../contexts/SearchShowCtx.tsx';

const VITE_API = import.meta.env.VITE_API;
const VITE_API_KEY  = import.meta.env.VITE_API_KEY;
const VITE_IMG =  import.meta.env.VITE_IMG;

export const MoviePage = () => {
	const params = useParams();
	const navigate = useNavigate();
	const searchShowCtx = useContext(SearchShowCtx); // remove o searchMovi;
	const [movi, setMovi] = useState<MoviPageType| null>(null);

	const budget = movi?.budget.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' }); // formatar o price;
	const revenue = movi?.revenue.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' }); // formatar o price;
	
	useEffect(()=>{
		const handleShowMoviItem = async () => {
			const res = await axios.get(VITE_API+params.id+"?"+VITE_API_KEY);
			setMovi(res.data);
			searchShowCtx?.setSearchShow(false);
		}
		handleShowMoviItem();
	}, []);

	const handlePrev = () => {
		navigate(-1);
		setMovi(null);
	}

	return (
		<C.Container>
            <C.MovieArea>
                {movi?.id !== undefined &&
					<img src={`${VITE_IMG+movi?.poster_path}`} alt="" />
				}

				{movi?.id === undefined &&
				<SkeletonMovi />}

				{movi?.id !== undefined &&
				<C.InfoArea>
					<C.Title className='title'>{movi?.title}</C.Title>
					
					<C.infoP style={{color: '#424242'}}>
						{movi?.overview}
					</C.infoP>

					<C.infoP>
						<strong>Status: </strong>{movi?.status}
					</C.infoP>

					<C.infoP>
						<p><strong>Original language: </strong> {movi.spoken_languages[0].name}</p>
					</C.infoP>
					
					<C.infoP>
						<strong>Date: </strong>{movi?.release_date}
					</C.infoP>

					<C.infoP>
						<strong>Budget: </strong>{budget}
					</C.infoP>

					<C.infoP>
						<strong>Revenue: </strong>{revenue}
					</C.infoP>

					<C.Button onClick={handlePrev}>Voltar</C.Button>  
				</C.InfoArea>}

				      
            </C.MovieArea>
        </C.Container>
	)
}
