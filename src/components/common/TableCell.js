// TableCell.js
import React from 'react';
import { TableCell as MuiTableCell } from '@mui/material';

const TableCell = ({ children, header = false, align = "left", ...props }) => {
  return (
    <MuiTableCell
      {...props}
      align={align}
      className={`px-6 py-4 whitespace-nowrap ${
        header 
          ? 'text-xs font-semibold text-gray-600 uppercase bg-gray-100'
          : 'text-sm font-medium text-gray-900 border-b border-gray-200' 
      }`}
    >
      {children}
    </MuiTableCell>
  );
};

export default TableCell;
