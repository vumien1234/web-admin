import React, { useState, useEffect, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Grid, IconButton, Menu, MenuItem } from '@mui/material';
import ImageLogin from '../../assets/image/img-login.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';
import i18n from '../../locales/i18n';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { loginAsync } from './slices';
import { routes } from '../../routes';
import { showAlert } from '../../components/custom/Alert';

const Login = () => {
  const { t } = useTranslation('translation');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isAuthenticated} = useSelector((state) => state.auth); 
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || 'vi');

  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  useEffect(() => {
    localStorage.setItem('language', selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setAnchorEl(null);
  };

  const handleLogin = useCallback(async(data)=>{
    const rs = await dispatch(loginAsync(data))
    if(rs.payload?.token){
      navigate(routes.plane.path)
    }
  },[dispatch,navigate])

  useEffect(() => {
    if (isAuthenticated) {
      showAlert("success", t('login-successfully'), 3);
    }
  }, [isAuthenticated]);

  return (
    <div className='relative' style={{ height: '100vh', overflow: 'hidden' }}>
      <div className='absolute top-0 right-0 m-4'>
        <div className='flex items-center w-30 h-7 border border-gray-300 rounded-md pr-2'>
          <IconButton
            aria-controls="language-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className="text-white"
          >
            <LanguageIcon />
          </IconButton>
          <p className='text-[14px]'>{selectedLanguage === 'vi' ? 'Tiếng Việt' : 'English'}</p>
        </div>
        <Menu
          id="language-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          className="mt-2"
        >
          <MenuItem onClick={() => handleLanguageChange('en')}>{t('english')}</MenuItem>
          <MenuItem onClick={() => handleLanguageChange('vi')}>{t('vietnamese')}</MenuItem>
        </Menu>
      </div>
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12} sm={6} md={4}>
          <div style={{textAlign: 'center', maxWidth: '300px', margin: 'auto' }}>
            <h2 className='text-[#205493] font-bold text-[18px] uppercase mb-4'>{t('login')}</h2>

            <form onSubmit={handleSubmit(handleLogin)} style={{ width: '100%', textAlign: 'center' }}>
              <div style={{ marginBottom: '1rem' }}>
                <Controller
                  name='email'
                  control={control}
                  rules={{ required: t('required_email') }}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      label={t('email')}
                      variant="outlined"
                      fullWidth
                      style={{ marginBottom: '1rem' }}
                      error={!!fieldState.error}
                      helperText={fieldState.error ? fieldState.error.message : ''}
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: t('required_password') }}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      label={t('password')}
                      type="password"
                      variant="outlined"
                      fullWidth
                      style={{ marginBottom: '1rem' }}
                      error={!!fieldState.error}
                      helperText={fieldState.error ? fieldState.error.message : ''}
                    />
                  )}
                />
              </div>
              <p style={{ float: 'right' }} className='text-[10px] mt-1 text-[#3c8fbe]'>{t('forgot_password')}</p>
              <div className='mt-10'>
                <Button type="submit" variant="contained" color="primary" style={{ minWidth: '150px' }}>
                  {t('login')}
                </Button>
              </div>
              <div className='flex justify-center items-center mt-4 max-w-[300px] mx-auto'>
                <div style={{ flex: '1', height: '1px', backgroundColor: '#205493', marginRight: '0.5rem' }}></div>
                <p style={{ color: '#205493', margin: '0', fontSize: '14px' }}>{t('orLoginWith')}</p>
                <div style={{ flex: '1', height: '1px', backgroundColor: '#205493', marginLeft: '0.5rem' }}></div>
              </div>
              <div className='flex justify-center items-center mt-4 max-w-[300px] mx-auto'>
                <Button
                  variant="outlined"
                  startIcon={<FacebookIcon />}
                  style={{ marginTop: '10px', marginRight: '10px', textTransform: 'none', width: '100%' }}
                >
                  Facebook
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                  style={{ marginTop: '10px', textTransform: 'none', width: '100%' }}
                >
                  Google
                </Button>
              </div>
            </form>
          </div>
        </Grid>
        <Grid item xs={false} sm={6} md={8}>
          <img
            className='login-right'
            src={ImageLogin}
            alt="Login"
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
