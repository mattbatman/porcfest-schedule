import React from 'react';
import { FilterProvider } from './filter.context';

function AppProvider({ children }) {
  return (
    <FilterProvider>
      {children}
    </FilterProvider>
  );
}

export default AppProvider;