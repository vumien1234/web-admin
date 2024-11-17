import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Grid } from "@mui/material";
import CustomButton from "../../../components/common/Button";

const FormCreateBeforeFly = ({ onCancel }) => {
    const { handleSubmit, control } = useForm({
        defaultValues: {
            id: "",
            time: "",
            user_id: "",
            created_at: "",
            updated_at: "",
            flight_check_id: "",
        },
    });

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission logic for creating a new record
    };

    return (
        <div>
            <div className="mb-4 text-[18px] font-bold bg-[#E5F7F2] p-4 header-edit-afterFlying">
                <p>Tạo thông tin mới</p>
            </div>
            <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Controller
                            name="id"
                            control={control}
                            render={({ field }) => <TextField {...field} label="id" fullWidth />}
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

export default FormCreateBeforeFly;
