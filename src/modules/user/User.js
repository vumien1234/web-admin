import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Table, TableBody, TableHead, TablePagination, TextField } from "@mui/material";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { CiCircleRemove } from "react-icons/ci";
import { Empty } from "antd";
import TableRow from "../../components/common/TableRow";
import TableCell from "../../components/common/TableCell";
import {
    getListUserAsync,
    setCurrentPage,
    setOpenCreate,
    setPageSize,
    setSearchKeyword,
} from "./slices";
import Overlay from "../../components/common/Overlay";
import FormCreateUser from "./FormCreateUser";
import CustomButton from "../../components/common/Button";

const User = () => {
    const { listUser, page, pageSize, openCreate } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState("");
    const inputRef = useRef(null);

    // Xử lý thay đổi giá trị input
    const handleInputChange = (event) => {
        setKeyword(event.target.value);
    };

    // Xử lý khi nhấn vào nút clear
    const handleClearClick = () => {
        setKeyword("");
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    // Xử lý khi thay đổi trang
    const handleChangePage = (event, newPage) => {
        event.preventDefault();
        dispatch(setCurrentPage(newPage + 1));
    };

    // Xử lý khi thay đổi số hàng mỗi trang
    const handleChangeRowsPerPage = (event) => {
        dispatch(setPageSize(parseInt(event.target.value, 10)));
        dispatch(setCurrentPage(1));
    };

    useEffect(() => {
        const params = {
            page: page,
            size: pageSize,
        };
        dispatch(getListUserAsync(params));
    }, [dispatch, page, pageSize]);

    // handle search
    const handleSearchUser = useCallback(async () => {
        dispatch(setSearchKeyword(keyword));
        dispatch(setCurrentPage(1));
        const params = {
            page: 1,
            size: pageSize,
            keyword: keyword,
        };
        dispatch(getListUserAsync(params));
    }, [dispatch, pageSize, keyword]);

    const handleOpenCreate = () => {
        dispatch(setOpenCreate());
    };

    // Định nghĩa các cột cho bảng
    const columns = [
        { title: "id", type: "number" },
        { title: "userId", type: "number" },
        { title: "title", type: "string" },
        { title: "body", type: "string" },
        { title: "action" },
    ];

    return (
        <div>
            <p>DAY LA MOC MIEN</p>
            <div className="flex items-center justify-between">
                <p className="text-[18px] font-bold">user_management</p>
                <CustomButton>
                    <p onClick={handleOpenCreate}>create_infor</p>
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
                            onClick={handleClearClick}
                            className="mr-2 cursor-pointer"
                        />
                    )}
                </div>

                <button
                    onClick={handleSearchUser}
                    id="button-search"
                    style={{ width: "15%" }}
                    className="h-10 flex justify-center items-center bg-blue-700 text-white text-[20px] absolute right-0">
                    <IoSearchOutline />
                </button>
            </div>

            <div className="flex justify-end mt-3">
                <p className="text-sm text-gray-500">Total: {listUser.length}</p>
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
                        {listUser.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {columns.map((column, colIndex) => (
                                    <TableCell key={colIndex} type={column.type}>
                                        {column.title === "action" ? (
                                            <div className="text-[16px]">
                                                <button className="pr-3">
                                                    <FiEdit />
                                                </button>
                                                <button>
                                                    <FaRegTrashCan />
                                                </button>
                                            </div>
                                        ) : column.title === "body" ? (
                                            <div className="truncate" style={{ maxWidth: "200px" }}>
                                                {row[column.title]}
                                            </div>
                                        ) : (
                                            row[column.title]
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                    {listUser.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="py-4">
                                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                            </TableCell>
                        </TableRow>
                    )}
                </Table>
                {listUser?.length > 0 && (
                    <Box display="flex" justifyContent="end" mt={1}>
                        <TablePagination
                            component="div"
                            count={listUser?.length}
                            rowsPerPageOptions={[5, 10, 25]}
                            page={page - 1}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            rowsPerPage={pageSize}
                            showFirstButton
                            showLastButton
                            labelRowsPerPage="number_of_records"
                        />
                    </Box>
                )}
            </div>
            {/* create */}
            <Overlay isOpen={openCreate} onClose={() => dispatch(setOpenCreate())}>
                <div className="relative w-full sm:w-auto sm:max-w-md">
                    <FormCreateUser onCancel={() => dispatch(setOpenCreate())} />
                </div>
            </Overlay>
        </div>
    );
};

export default User;
