import React, { useState } from 'react';
import SearchButton from '../SearchButton/SearchButton';
import SearchField from '../SearchField/SearchField';
import styles from './SearchResult.module.css';

type SearchResultProps = {
  onSubmit: (value: string) => void;
};

function SearchResult({ onSubmit }: SearchResultProps): JSX.Element {
  const [search, setSearch] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(search);
      }}
      className={styles.container}
    >
      <SearchField
        placeholder="Please enter a genre or artist."
        value={search}
        onChange={setSearch}
      />
      <SearchButton children="search" />
    </form>
  );
}
export default SearchResult;
