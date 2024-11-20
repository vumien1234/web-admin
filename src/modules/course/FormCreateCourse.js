import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Grid } from "@mui/material";
import CustomButton from "../../components/common/Button";

const FormCreateCourse = ({ onCancel }) => {
	const { handleSubmit, control } = useForm();

	const onSubmit = (data) => {
		console.log(data, "data");
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
							name="courseName"
							control={control}
							render={({ field }) => <TextField {...field} label="Tên khoá học" fullWidth />}
						/>
					</Grid>
					<Grid item xs={6}>
						<Controller
							name="instructor"
							control={control}
							render={({ field }) => (
								<TextField {...field} label="Giảng viên" fullWidth />
							)}
						/>
					</Grid>
					<Grid item xs={6}>
						<Controller
							name="major"
							control={control}
							render={({ field }) => <TextField {...field} label="Chuyên nghành" fullWidth />}
						/>
					</Grid>
					<Grid item xs={6}>
						<Controller
							name="credits"
							control={control}
							render={({ field }) => (
								<TextField {...field} label="Số tín chỉ" fullWidth />
							)}
						/>
					</Grid>
					<Grid item xs={6}>
						<Controller
							name="status"
							control={control}
							render={({ field }) => <TextField {...field} label="Trạng thái" fullWidth />}
						/>
					</Grid>
					<Grid item xs={6}>
						<Controller
							name="tuition"
							control={control}
							render={({ field }) => (
								<TextField {...field} label="Học phí" fullWidth />
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
          <Grid item xs={6}>
						<Controller
							name="startDate"
							control={control}
							render={({ field }) => (
								<TextField {...field} label="Ngày bắt đầu" fullWidth />
							)}
						/>
					</Grid>
					<Grid item xs={6}>
						<Controller
							name="endDate"
							control={control}
							render={({ field }) => (
								<TextField {...field} label="Ngày kết thúc" fullWidth />
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

export default FormCreateCourse;
