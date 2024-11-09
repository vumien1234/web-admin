import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import CustomButton from '../../../components/common/Button';
import { useTranslation } from 'react-i18next';

const FormEdit = ({ onCancel }) => {
  const { initialData } = useSelector((state) => state.afterFly);
  const { t } = useTranslation("translation");
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: initialData
  });

  useEffect(() => {
    setValue('id', initialData.id);
    setValue('username', initialData.username);
    setValue('created_at', initialData.created_at);
    setValue('updated_at', initialData.updated_at);
  }, [initialData, setValue]);

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic
  };

  return (
    <div>
      <div className='mb-4 text-[18px] font-bold bg-[#E5F7F2] p-4 header-edit-afterFlying'>
        <p>{t('edit_infor')}</p>
      </div>
      <form className='p-4' onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name="id"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="ID"
                  fullWidth
                  disabled
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={t('username')}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="created_at"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={t('created_at')}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="updated_at"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={t('updated_at')}
                  fullWidth
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <CustomButton onClick={onCancel} variant="contained" color="inherit">
              <p className="font-bold uppercase">{t('cancel')}</p>
            </CustomButton>
            <CustomButton type="submit" variant="contained" color="primary">
              {t('save')}
            </CustomButton>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormEdit;
