import React, { useState, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Grid } from "@mui/material";
import ImageLogin from "../../assets/image/img-login.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAsync } from "./slices";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	// const { isAuthenticated } = useSelector((state) => state.auth);
	// const [anchorEl, setAnchorEl] = useState(null);

	const { handleSubmit, control } = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const handleLogin = useCallback(
		async (data) => {
			// const rs = await dispatch(loginAsync(data))
			// if(rs.payload?.token){
			//   navigate(routes.plane.path)
			// }
		},
		[dispatch, navigate]
	);

	return (
		<div className="relative" style={{ height: "100vh", overflow: "hidden" }}>
			<Grid
				container
				justifyContent="center"
				alignItems="center"
				style={{ minHeight: "100vh" }}>
				<Grid item xs={12} sm={6} md={4}>
					<div style={{ textAlign: "center", maxWidth: "300px", margin: "auto" }}>
						<h2 className="text-[#205493] font-bold text-[18px] uppercase mb-4">
							Login
						</h2>

						<form
							onSubmit={handleSubmit(handleLogin)}
							style={{ width: "100%", textAlign: "center" }}>
							<div style={{ marginBottom: "1rem" }}>
								<Controller
									name="email"
									control={control}
									rules={{ required: "Email is required" }}
									render={({ field, fieldState }) => (
										<TextField
											{...field}
											label="Email"
											variant="outlined"
											fullWidth
											style={{ marginBottom: "1rem" }}
											error={!!fieldState.error}
											helperText={
												fieldState.error ? fieldState.error.message : ""
											}
										/>
									)}
								/>
							</div>
							<div>
								<Controller
									name="password"
									control={control}
									rules={{ required: "Password is required" }}
									render={({ field, fieldState }) => (
										<TextField
											{...field}
											label="Password"
											type="password"
											variant="outlined"
											fullWidth
											style={{ marginBottom: "1rem" }}
											error={!!fieldState.error}
											helperText={
												fieldState.error ? fieldState.error.message : ""
											}
										/>
									)}
								/>
							</div>
							<p
								style={{ float: "right" }}
								className="text-[10px] mt-1 text-[#3c8fbe]">
								Forgot Password?
							</p>
							<div className="mt-10">
								<Button
									type="submit"
									variant="contained"
									color="primary"
									style={{ minWidth: "150px" }}>
									Login
								</Button>
							</div>
							<div className="flex justify-center items-center mt-4 max-w-[300px] mx-auto">
								<div
									style={{
										flex: "1",
										height: "1px",
										backgroundColor: "#205493",
										marginRight: "0.5rem",
									}}></div>
								<p style={{ color: "#205493", margin: "0", fontSize: "14px" }}>
									Or login with
								</p>
								<div
									style={{
										flex: "1",
										height: "1px",
										backgroundColor: "#205493",
										marginLeft: "0.5rem",
									}}></div>
							</div>
							<div className="flex justify-center items-center mt-4 max-w-[300px] mx-auto">
								<Button
									variant="outlined"
									startIcon={<FacebookIcon />}
									style={{
										marginTop: "10px",
										marginRight: "10px",
										textTransform: "none",
										width: "100%",
									}}>
									Facebook
								</Button>
								<Button
									variant="outlined"
									startIcon={<GoogleIcon />}
									style={{
										marginTop: "10px",
										textTransform: "none",
										width: "100%",
									}}>
									Google
								</Button>
							</div>
						</form>
					</div>
				</Grid>
				<Grid item xs={false} sm={6} md={8}>
					<img
						className="login-right"
						src={ImageLogin}
						alt="Login"
						style={{ width: "100%", height: "auto", objectFit: "cover" }}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default Login;
