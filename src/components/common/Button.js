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
  let buttonStyles = '';

  // Áp dụng styles đặc biệt cho các màu 'cancel' và 'save'
  if (color === 'cancel') {
    buttonStyles = '!border !border-red-500 !text-black !bg-white !hover:bg-red-50';
  } else if (color === 'save') {
    buttonStyles = 'bg-green-500 text-white hover:bg-green-600';
  }

  return (
    <MuiButton
      variant={variant}
      color={color === 'cancel' ? 'inherit' : color}
      className={`${className} !h-[34px] !font-bold !text-[12px] ${buttonStyles}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired, // Nội dung của nút
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'success',
    'error',
    'info',
    'warning',
    'cancel',  // Thêm màu "cancel"
    'save',    // Thêm màu "save"
  ]),  // Màu sắc nút
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),  // Loại variant nút
  className: PropTypes.string, // Thêm class tùy chỉnh
  onClick: PropTypes.func, // Hàm xử lý sự kiện khi nút được nhấn
};

export default CustomButton;
