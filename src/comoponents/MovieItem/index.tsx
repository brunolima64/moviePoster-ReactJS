import * as C from './styles';
import { MovieType } from '../../types/MovieType';
import { useNavigate } from 'react-router-dom';

const VITE_IMG =  import.meta.env.VITE_IMG;

type Props = {
    item: MovieType;
}
export const MovieItem = ({item}: Props) => {
    const navigate = useNavigate();

    const handleMovieItemShow = () => {
        navigate(`/${item.id}`);

    }

	return (
		<C.Container>
            <C.MovieArea>
                <img src={`${VITE_IMG+item.poster_path}`} alt="" />
                <C.Title>{item.title}</C.Title>

                <C.Button onClick={handleMovieItemShow}>Saiba mais</C.Button>
            </C.MovieArea>
        </C.Container>
	)
}
