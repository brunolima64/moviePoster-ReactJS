import { ReactNode, createContext, useState } from "react"

type SearchType = {
    search: string;
    setSearch: (s: string)=>void;
}
export const SearchContext = createContext<SearchType | null>(null);

type Props = {
    children: ReactNode;
}
export const SearchProvider = ({children}: Props) => {
    const [search, setSearch] = useState('');

    return (
        <SearchContext.Provider value={ { search, setSearch } }>
            {children}
        </SearchContext.Provider>
    )
}