import * as C from './styles';
import { MovieType } from '../../types/MovieType';
import { Link } from 'react-router-dom';

const VITE_IMG =  import.meta.env.VITE_IMG;

type Props = {
    item: MovieType;
}
export const MovieItem = ({item}: Props) => {
    
	return (
		<C.Container>
            <C.MovieArea>
                <img src={`${VITE_IMG+item.poster_path}`} alt="" />
                <C.Title>{item.title}</C.Title>

                <Link to={`/${item.id}`}>
                    <C.Button>Saiba mais</C.Button>
                </Link>
            
            </C.MovieArea>
        </C.Container>
	)
}
