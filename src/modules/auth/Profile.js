import React, { useState } from 'react';
import { Box, TextField, FormControl, InputLabel, Select, MenuItem, Grid, Button } from '@mui/material';
import { Image, Upload } from 'antd';
import { MdOutlineEmail } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import { FaRegEdit } from 'react-icons/fa';
import { PlusOutlined } from '@ant-design/icons';
import Overlay from '../../components/common/Overlay';
import AvataProfile from '../../assets/image/avatar.jpg';
import CustomButton from '../../components/common/Button';
import { useTranslation } from 'react-i18next';

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const Profile = () => {
  const [changeAvataOpen, setChangeAvataOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([]);
  const [changeInfor, setChangeInfor] = useState('account-infor');
  const {t} = useTranslation('translation')

  const [formValues, setFormValues] = useState({
    name: 'Vũ Thị Miên',
    email: 'mocmien@gmail.com',
    address: 'yên nghĩa, hà đông, hà nội',
    phone: '',
    gender: '',
  });

  const handleCloseAvata = () => {
    setChangeAvataOpen(false);
    setFileList([]); // Clear any selected files
  };

  const handleOpenAvata = () => {
    setChangeAvataOpen(true);
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ file, fileList }) => {
    // Limit upload to one image
    const newFileList = fileList.slice(-1);
    setFileList(newFileList);
  };

  const handleSave = () => {
    if (fileList.length > 0) {
      console.log('Saved file:', fileList[0]);
    }
    handleCloseAvata();
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handlePassword = () => {
    setChangeInfor('password');
  };

  const handleAccountInfor = () => {
    setChangeInfor('account-infor');
  };

  const uploadButton = (
    <div
      style={{
        border: 0,
        background: 'none',
      }}
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <div className='wrapper-profile m-2'>
      <div className='content-header-profile bg-white pt-4 pl-4 pr-4'>
        <div className='item-header-profile w-full flex justify-between items-center'>
          <div className='box-item-header-profile flex w-full'>
            <img className='avatar-header w-20 h-20 rounded-full border border-gray-300 shadow-md' src={AvataProfile} alt='' />
            <div className=' ml-4 mt-4'>
              <p className='username-header-profile font-bold text-[17px]'>{t(formValues.name)}</p>
              <div className='infor-header-profile flex items-center text-[#6B6B6B] text-[12px] mt-1'>
                <MdOutlineEmail /><p className='ml-1 mr-3'>{t(formValues.email)}</p>
                <CiLocationOn /><p className='pl-1'>{t(formValues.address)}</p>
              </div>
            </div>
          </div>
          <div className='button-upload-avatar'>
            <button
              onClick={handleOpenAvata}
              style={{ background: '#00B27B', width: '120px', height: '35px' }}
              className='text-white rounded-lg flex items-center justify-center'
            >
              <FaRegEdit className='mr-2' />Sửa Avata
            </button>
          </div>
        </div>
        <div className='border-t mt-5'>
          <div className='pt-2 flex'>
            <div
              className={changeInfor === 'account-infor' ? 'mr-10 font-bold cursor-pointer text-[#00B27B] border-b-2 border-b-green-500'
                : 'mr-10 cursor-pointer'} onClick={handleAccountInfor}>
              <p className='pb-2'>Thông tin tài khoản</p>
            </div>
            <p className={changeInfor === 'password' ?
              'font-bold cursor-pointer text-[#00B27B] border-b-2 border-b-green-400' : 'cursor-pointer'} onClick={handlePassword}>
              Mật khẩu
            </p>
          </div>
        </div>
      </div>
      <div className='content-profile mt-4 w-full bg-white p-3'>
        {changeInfor === 'account-infor' ? (
          <div className='tab-content pb-2' key='account-infor'>
            <div>
              <p className='font-bold text-[12px] pl-2 uppercase'>{t("account_information")}</p>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '100%'},
                }}
                noValidate
                autoComplete="off"
                className='mt-3'
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      label={t('username')}
                      name="name"
                      value={formValues.name}
                      onChange={handleFormChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      label="Email"
                      name="email"
                      value={formValues.email}
                      onChange={handleFormChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label={t('address')}
                      name="address"
                      value={formValues.address}
                      onChange={handleFormChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label={t('phone_number')}
                      name="phone"
                      value={formValues.phone}
                      onChange={handleFormChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} >
                    <Box className='ml-2 w-full'> 
                      <FormControl fullWidth >
                        <InputLabel id="gender-label">{t('gender')}</InputLabel>
                        <Select
                          labelId="gender-label"
                          label="Giới tính"
                          name="gender"
                          value={formValues.gender}
                          onChange={handleFormChange}
                        >
                          <MenuItem value="male">{t('male')}</MenuItem>
                          <MenuItem value="female">{t('female')}</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                </Grid>
                <div className='mt-6 flex justify-end'>
                  <CustomButton variant="outlined" color="success">{t('save')}</CustomButton>
                </div>
              </Box>
            </div>
          </div>
        ) : (
          <div className='tab-content' key='password'>
            <div>
              <p className='font-bold text-[12px] pl-2'>{t('password')}</p>
              {/* Thêm các trường thay đổi mật khẩu */}
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
                className='pt-2'
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      label={t('current_password')}
                      name="currentPassword"
                      type="password"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      label={t('new_password')}
                      name="newPassword"
                      type="password"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      label={t('confirm_new_password')}
                      name="confirmPassword"
                      type="password"
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <div className='mt-6'>
                  <CustomButton variant="outlined" color="success">{t('save')}</CustomButton>
                </div>
              </Box>
            </div>
          </div>
        )}
      </div>
      {/* Overlay for changing avatar */}
      <Overlay isOpen={changeAvataOpen} onClose={handleCloseAvata}>
        <Box>
          <Upload
            action='https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload'
            listType='picture-card'
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
          {previewImage && (
            <Image
              wrapperStyle={{ display: 'none' }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterClose: () => setPreviewImage(''),
              }}
              src={previewImage}
            />
          )}
          <div style={{ marginTop: 16 }}>
            <CustomButton variant="outlined" color="primary" onClick={handleCloseAvata} style={{ marginRight: 8 }}>{t('close')}</CustomButton>
            <CustomButton variant="outlined" color="success" onClick={handleSave}>{t('save')}</CustomButton>
          </div>
        </Box>
      </Overlay>
    </div>
  );
};

export default Profile;
