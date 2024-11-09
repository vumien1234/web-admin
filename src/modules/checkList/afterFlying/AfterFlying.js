import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Table, TableBody, TableHead, TablePagination, TextField } from "@mui/material";
import TableRow from "../../../components/common/TableRow";
import TableCell from "../../../components/common/TableCell";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
import Overlay from "../../../components/common/Overlay";
import FormEdit from "./FormEditAfterFly";
import FormCreate from "./FormCreateAfterFly";
import { IoSearchOutline } from "react-icons/io5";
import { CiCircleRemove } from "react-icons/ci";
import CustomButton from "../../../components/common/Button";
import {
    setOpenCreate,
    setOpenDelete,
    setOpenEdit,
    setInitialData,
    setPageSizeAfterfly,
    setCurrentPageAfterfly,
} from "./slices";
import { Empty } from "antd";

const AfterFlying = () => {
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState("");
    const inputRef = useRef(null);

    const { openEdit, openCreate, openDelete, page, pageSize } = useSelector(
        (state) => state.afterFly
    );

    const handleInputChange = (event) => {
        setKeyword(event.target.value);
    };

    const handleClearClick = () => {
        setKeyword("");
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const columns = [
        { title: "id", type: "number" },
        { title: "username", type: "text" },
        { title: "created_at", type: "date" },
        { title: "updated_at", type: "date" },
        { title: "action" },
    ];

    const data = [
        { id: 1, username: "Nguyễn văn A", created_at: "16/03/2023", updated_at: "17/03/2023" },
        { id: 2, username: "Nguyễn văn A", created_at: "12/12/2012", updated_at: "13/12/2012" },
        { id: 3, username: "Nguyễn văn A", created_at: "24/06/2020", updated_at: "25/06/2020" },
        { id: 4, username: "Nguyễn văn A", created_at: "18/05/2019", updated_at: "19/05/2019" },
        { id: 5, username: "Nguyễn văn A", created_at: "30/09/2021", updated_at: "01/10/2021" },
    ];

    const totalCount = data.length;

    const handleOpenEdit = (rowData) => {
        dispatch(setInitialData(rowData));
        dispatch(setOpenEdit());
    };

    const handleOpenCreate = () => {
        dispatch(setOpenCreate());
    };

    const handleOpenDelete = () => {
        dispatch(setOpenDelete());
    };

    const handleChangePage = (event, newPage) => {
        event.preventDefault();
        dispatch(setCurrentPageAfterfly(newPage + 1));
    };

    const handleChangeRowsPerPage = (event) => {
        dispatch(setPageSizeAfterfly(parseInt(event.target.value, 10)));
        dispatch(setCurrentPageAfterfly(1));
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <p className="text-[18px] font-bold">check after flying</p>
                <CustomButton>
                    <p onClick={handleOpenCreate}>create infor</p>
                </CustomButton>
            </div>

            <div className="relative border border-gray-300 flex items-center mx-auto rounded-lg max-w-md h-10  mt-3 mb-5">
                <div style={{ width: "85%" }} className="flex items-center justify-between">
                    <TextField
                        id="keyword"
                        type="text"
                        placeholder="search"
                        size="small"
                        fullWidth
                        value={keyword}
                        onChange={handleInputChange}
                        inputProps={{ maxLength: 255 }}
                        InputProps={{
                            style: {
                                border: "none",
                                width: "100%",
                            },
                            classes: {
                                notchedOutline: "customOutline",
                            },
                        }}
                        className="relative border"
                        variant="outlined"
                    />
                    {keyword && (
                        <CiCircleRemove
                            className="mr-2 cursor-pointer"
                            onClick={handleClearClick}
                        />
                    )}
                </div>

                <button
                    id="button-search"
                    style={{ width: "15%" }}
                    className=" h-10 flex justify-center items-center bg-blue-700 text-white text-[20px] absolute right-0">
                    <IoSearchOutline />
                </button>
            </div>

            <div className="flex justify-end mt-3">
                <p className="text-sm text-gray-500">Total: {totalCount}</p>
            </div>
            <div className="overflow-x-auto">
                <Table sx={{ minWidth: 700 }}>
                    <TableHead>
                        <TableRow isHeader={true}>
                            {columns.map((column, index) => (
                                <TableCell key={index} type="header">
                                    {column.title}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {columns.map((column, colIndex) => (
                                    <TableCell key={colIndex} type={column.type}>
                                        {column.title === "action" ? (
                                            <div className="text-[16px]">
                                                <button
                                                    onClick={() => handleOpenEdit(row)}
                                                    className="pr-3">
                                                    <FiEdit />
                                                </button>
                                                <button onClick={() => handleOpenDelete()}>
                                                    <FaRegTrashCan />
                                                </button>
                                            </div>
                                        ) : (
                                            row[column.title]
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                    {data?.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={Object.keys(columns).length} className="py-4">
                                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                            </TableCell>
                        </TableRow>
                    )}
                </Table>
                {data?.length > 0 && (
                    <Box display="flex" justifyContent="end" mt={1}>
                        <TablePagination
                            component="div"
                            count={data.length}
                            rowsPerPageOptions={[5, 10, 25]}
                            page={page - 1}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            rowsPerPage={pageSize}
                            showFirstButton
                            showLastButton
                            labelRowsPerPage={"Số bản ghi hiển thị trên mỗi trang"}
                        />
                    </Box>
                )}
            </div>

            {/* Modal chỉnh sửa */}
            <Overlay isOpen={openEdit} onClose={() => dispatch(setOpenEdit())}>
                <div className="relative w-full sm:w-auto sm:max-w-md">
                    <FormEdit onCancel={() => dispatch(setOpenEdit())} />
                </div>
            </Overlay>
            {/* Modal xóa */}
            <Overlay isOpen={openDelete} onClose={() => dispatch(setOpenDelete())}>
                <div style={{ width: "500px" }}>
                    <div className="mb-4 text-[16px] font-bold bg-[#c1fdec] p-3 header-edit-afterFlying">
                        Xóa thông tin
                    </div>
                    <div className="pl-4 pr-4 pb-4">
                        <div className="text-[16px]">Bạn có chắc chắn muốn xóa không?</div>
                        <div className="flex justify-end gap-2 mt-4">
                            <CustomButton type="primary" color="inherit">
                                <p onClick={() => dispatch(setOpenDelete())}>Hủy</p>
                            </CustomButton>
                            <CustomButton type="success" color="primary">
                                <p>Đồng ý</p>
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </Overlay>
            {/* Modal tạo mới */}
            <Overlay isOpen={openCreate} onClose={() => dispatch(setOpenCreate())}>
                <div className="relative w-full sm:w-auto sm:max-w-md">
                    <FormCreate onCancel={() => dispatch(setOpenCreate())} />
                </div>
            </Overlay>
        </div>
    );
};

export default AfterFlying;
