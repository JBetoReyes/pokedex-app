import React from 'react';
import 'Assets/styles/components/_search.input.scss';

type ownPropsType = {
  placeHolder?: string;
};

type propsType = ownPropsType;

const SearchInput = ({ placeHolder }: propsType) => {
  return (
    <div className="search input_container">
      <input type="text" placeholder={placeHolder} />
    </div>
  );
};

export default SearchInput;
