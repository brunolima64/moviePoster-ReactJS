import { useContext } from 'react';
import * as C from './styles';
import { SearchContext } from '../../contexts/SearchContext';
import  logoImg  from '../../../public/assets/search.png';


export const SearchMovi = () => {
    const searchCtx = useContext(SearchContext);
    
    return (
        <C.Container>
            <img src={logoImg} alt="logo" />

            <input 
                type="text"
                placeholder='Search for a movie'
                value={searchCtx?.search}
                onChange={e => searchCtx?.setSearch(e.target.value)}
             />
        </C.Container>
    )
}