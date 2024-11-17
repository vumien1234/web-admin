import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Grid } from "@mui/material";
import CustomButton from "../../../components/common/Button";

const FormEditBeforeFly = ({ initialData, onCancel }) => {
    const { handleSubmit, control, setValue } = useForm();

    useEffect(() => {
        if (initialData) {
            setValue("id", initialData.id);
            setValue("username", initialData.username);
            setValue("created_at", initialData.created_at);
            setValue("updated_at", initialData.updated_at);
        }
    }, [initialData, setValue]);

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission logic
    };

    return (
        <div>
            <div className="mb-4 text-[18px] font-bold bg-[#E5F7F2] p-4 header-edit-afterFlying">
                <p>edit_infor</p>
            </div>
            <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Controller
                            name="id"
                            control={control}
                            render={({ field }) => (
                                <TextField {...field} label="ID" fullWidth disabled />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Controller
                            name="username"
                            control={control}
                            render={({ field }) => (
                                <TextField {...field} label="username" fullWidth />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="created_at"
                            control={control}
                            render={({ field }) => (
                                <TextField {...field} label="created_at" fullWidth />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="updated_at"
                            control={control}
                            render={({ field }) => (
                                <TextField {...field} label="updated_at" fullWidth />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <CustomButton onClick={onCancel} variant="contained" color="inherit">
                            <p className="font-bold uppercase">cancel</p>
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

export default FormEditBeforeFly;
