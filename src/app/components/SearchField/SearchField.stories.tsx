import React from 'react';
import SearchField from './SearchField';

export default {
  title: 'Component/Searchfield',
  component: SearchField,
};

export const search = (): JSX.Element => (
  <SearchField
    value=""
    placeholder="Please enter genre or artist"
    onChange={console.log}
  />
);
