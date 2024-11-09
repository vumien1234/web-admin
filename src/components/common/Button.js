import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton } from '@mui/material';

const CustomButton = ({ 
  children, 
  color = 'primary', 
  variant = 'contained', 
  className = '', 
  onClick = () => {}, 
  ...rest 
}) => {
  const mappedColor = color === 'success' ? 'success' : color;

  return (
    <MuiButton
      variant={variant}
      color={mappedColor}
      className={className}
      onClick={onClick}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']),
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default CustomButton;
