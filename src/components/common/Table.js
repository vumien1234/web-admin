// Table.js
import React from 'react';
import { Table as MuiTable, TableContainer, Paper } from '@mui/material';

const Table = ({ children, ...props }) => {
  return (
    <TableContainer component={Paper} className="shadow-md rounded-lg">
      <MuiTable {...props}>
        {children}
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
