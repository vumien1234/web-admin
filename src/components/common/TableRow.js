// TableRow.js
import React from 'react';
import { TableRow as MuiTableRow } from '@mui/material';

const TableRow = ({ children, isHeader = false, ...props }) => {
  const rowClasses = isHeader 
    ? 'bg-gray-100'
    : 'transition-colors duration-200 cursor-pointer hover:bg-gray-100';

  const cellStyles = {
    textAlign: 'left'
  };

  return (
    <MuiTableRow {...props} className={rowClasses}>
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child, { style: { ...child.props.style, ...cellStyles } })
          : child
      )}
    </MuiTableRow>
  );
};

export default TableRow;
