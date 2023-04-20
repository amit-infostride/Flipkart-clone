import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { InputSearchBase, SearchIconWrapper, SerachContainer } from '../../themes/header/Search';

const Search = () => {
    return (
        <SerachContainer>

            <InputSearchBase placeholder='Search for products, brands and more ' />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
        </SerachContainer>
    )
}

export default Search