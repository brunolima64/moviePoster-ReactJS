import { useContext } from 'react';
import { SearchMovi } from '../SearchMovi';
import * as C from './styles';
import { SearchShowCtx } from '../../contexts/SearchShowCtx';
import { Link } from 'react-router-dom';

export const Header = () => {
	const searchShowCtx = useContext(SearchShowCtx);
	
	return (
		<C.Container>
           <C.HeaderArea>
			<Link to='/'>
				<C.Logo>Movies</C.Logo>
			</Link>
				
				{searchShowCtx?.searchShow &&
					<C.SearchInputArea>
						<SearchMovi />
					</C.SearchInputArea>
				}
		   </C.HeaderArea>
        </C.Container>
	)
}
