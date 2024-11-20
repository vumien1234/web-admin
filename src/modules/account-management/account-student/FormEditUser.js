import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Grid } from "@mui/material";
// import { useSelector } from "react-redux";
import CustomButton from "../../../components/common/Button";

const FormEditUser = ({ onCancel }) => {

  const { handleSubmit, control } = useForm()
  const onSubmit = (data) => {
		console.log(data,"data");
	};
  return (
    <div>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid item xs={6}>
						<Controller
							name="id"
							control={control}
							render={({ field }) => <TextField {...field} label="id" fullWidth />}
						/>
					</Grid>
          <Grid item xs={6}>
						<Controller
							name="email"
							control={control}
							render={({ field }) => <TextField {...field} label="Email" fullWidth />}
						/>
					</Grid>
					<Grid item xs={6}>
						<Controller
							name="username"
							control={control}
							render={({ field }) => (
								<TextField {...field} label="Họ và tên" fullWidth />
							)}
						/>
					</Grid>
          <Grid item xs={6}>
						<Controller
							name="phone"
							control={control}
							render={({ field }) => <TextField {...field} label="Số điện thoại" fullWidth />}
						/>
					</Grid>
					<Grid item xs={6}>
						<Controller
							name="dob"
							control={control}
							render={({ field }) => (
								<TextField {...field} label="Ngày sinh" fullWidth />
							)}
						/>
					</Grid>
          <Grid item xs={6}>
						<Controller
							name="gender"
							control={control}
							render={({ field }) => <TextField {...field} label="Giới tính" fullWidth />}
						/>
					</Grid>
					<Grid item xs={6}>
						<Controller
							name="expertise"
							control={control}
							render={({ field }) => (
								<TextField {...field} label="Chuyên môn" fullWidth />
							)}
						/>
					</Grid>
          <Grid item xs={6}>
						<Controller
							name="id"
							control={control}
							render={({ field }) => <TextField {...field} label="id" fullWidth />}
						/>
					</Grid>
          <Grid item xs={6}>
						<Controller
							name="status"
							control={control}
							render={({ field }) => (
								<TextField {...field} label="Trạng thái" fullWidth />
							)}
						/>
					</Grid>
          <Grid item xs={6}>
						<Controller
							name="created_at"
							control={control}
							render={({ field }) => (
								<TextField {...field} label="Ngày tạo" fullWidth />
							)}
						/>
					</Grid>
          <Grid item xs={6}>
						<Controller
							name="updated_at"
							control={control}
							render={({ field }) => (
								<TextField {...field} label="Ngày cập nhật" fullWidth />
							)}
						/>
					</Grid>
				</Grid>
        <Grid item xs={6} className="!mt-10">
          <CustomButton onClick={onCancel} variant="contained" color="inherit">
            <p className="font-bold uppercase">cancel</p>
          </CustomButton>
          <CustomButton type="submit" variant="contained" color="primary">
            save
          </CustomButton>
        </Grid>
      </form>
    </div>
  );
};

export default FormEditUser;
