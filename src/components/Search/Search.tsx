import React from 'react';

import classes from './Search.module.scss';

type SearchProps = {
  search: string;
  handleSearch: React.ChangeEventHandler<HTMLInputElement>;
};

const Search: React.FC<SearchProps> = (props) => {
  const { search, handleSearch } = props;
  return (
    <>
      <input id="name" className={classes.component} type="text" placeholder="Enter the name of char" value={search} onChange={handleSearch}/>
    </>
  );
};

export default Search;
