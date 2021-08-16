import React, { ReactNode } from 'react';
import styles from './SearchButton.module.css';

type SearchButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

function SearchButton({ children, onClick }: SearchButtonProps): JSX.Element {
  return (
    <label className={styles.container}>
      <button className={styles.searchButton} onClick={onClick}>
        {children}
      </button>
    </label>
  );
}
export default SearchButton;
