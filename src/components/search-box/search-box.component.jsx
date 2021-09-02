import React from "react";

import "./search-box.component.jsx";

export const SearchBox = ({ placeholder, handleChange }) => {
    return (<input type="search" placeholder={placeholder} onChange={handleChange} />)
}