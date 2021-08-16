import React from 'react';
import SearchButton from '../SearchButton/SearchButton';
import SearchField from '../SearchField/SearchField';
import SearchResult from './SearchResult';

export default {
  title: 'Component/SearchResult',
  component: SearchResult,
};

export const search = (): JSX.Element => (
  <div>
    <SearchField
      value=""
      placeholder="Please enter genre or artist"
      onChange={console.log}
    />
    <SearchButton>Search</SearchButton>;
  </div>
);
