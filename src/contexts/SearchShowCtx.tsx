import { ReactNode, createContext, useState } from "react"

type SearchType = {
    searchShow: boolean;
    setSearchShow: (s: boolean)=>void;
}
export const SearchShowCtx = createContext<SearchType | null>(null);

type Props = {
    children: ReactNode;
}
export const SerachProvider = ({children}: Props) => {
    const [searchShow, setSearchShow] = useState(false);

    return (
        <SearchShowCtx.Provider value={ { searchShow, setSearchShow } }>
            {children}
        </SearchShowCtx.Provider>
    )
}