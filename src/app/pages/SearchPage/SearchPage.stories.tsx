import React from 'react';
import SearchPage from './SearchPage';

export default {
  title: 'Page/SearchPage',
  component: SearchPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = (): JSX.Element => <SearchPage />;
