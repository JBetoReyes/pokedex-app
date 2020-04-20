import React, { ReactNode } from 'react';
import SearchInput from './search.input.component';

export default {
  title: 'SearchInput',
  component: SearchInput,
  decorators: [
    (storyFn: () => ReactNode) => (
      <div
        style={{
          backgroundColor: '#ececec',
          height: '90vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {storyFn()}
      </div>
    ),
  ],
};

export const Default = () => <SearchInput />;
export const WithPlaceHolder = () => (
  <SearchInput placeHolder="A placeholder" />
);
