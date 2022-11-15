import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import myContext from './myContext';

function MyProvider({ children }) {
  const handleChange = ({ target }, state, setState) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const store = {
    handleChange,
  };

  const memoStore = useMemo(() => store);

  return <myContext.Provider value={memoStore}>{children}</myContext.Provider>;
}

MyProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default MyProvider;
