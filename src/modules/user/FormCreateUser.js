import React, { useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Grid } from "@mui/material";
import { createUserAsync } from "./slices";
import CustomButton from "../../components/common/Button";
import { useDispatch } from "react-redux";

const FormCreateUser = ({ onCancel }) => {
    const dispatch = useDispatch();
    const { handleSubmit, control } = useForm();

    const onSubmit = useCallback(
        async (data) => {
            try {
                await dispatch(createUserAsync(data));
                onCancel();
            } catch (error) {
                console.error("Error creating user:", error);
            }
        },
        [dispatch, onCancel]
    );

    return (
        <div>
            <div className="mb-4 text-[18px] font-bold bg-[#E5F7F2] p-4 header-edit-afterFlying">
                <p>create_new_info</p>
            </div>
            <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Controller
                            name="title"
                            control={control}
                            render={({ field }) => <TextField {...field} label="title" fullWidth />}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="userId"
                            control={control}
                            render={({ field }) => (
                                <TextField {...field} label="userId" fullWidth />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="body"
                            control={control}
                            render={({ field }) => <TextField {...field} label="body" fullWidth />}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomButton onClick={onCancel} variant="contained" color="inherit">
                            <p className="font-bold uppercase">'cancel'</p>
                        </CustomButton>
                        <CustomButton type="submit" variant="contained" color="primary">
                            save
                        </CustomButton>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default FormCreateUser;
