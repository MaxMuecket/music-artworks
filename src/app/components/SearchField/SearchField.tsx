import React from 'react';
import styles from './SearchField.module.css';

type SearchFieldProps = {
  placeholder: string;
  value: string | number;
  onChange: (value: string) => void;
};

function SearchField({
  placeholder,
  value,
  onChange,
}: SearchFieldProps): JSX.Element {
  return (
    <label className={styles.container}>
      <input
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoFocus
      />
    </label>
  );
}

export default SearchField;
