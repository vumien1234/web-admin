import React, { useCallback, useEffect } from "react";
import Table from "../../components/common/Table";
import TableRow from "../../components/common/TableRow";
import TableCell from "../../components/common/TableCell";
import { TableHead, TableBody, TablePagination, Box } from "@mui/material";
import { Empty } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getListPlaneAsync, setCurrentPage, setPageSize } from "./slice";
import { useTranslation } from "react-i18next";
// import CustomButton from "../../components/common/Button";
// import { setIsErrorAlert, setMessageText, setseverity } from "../../components/global/slices";

const Plane = () => {
  const { page, pageSize, listPlane } = useSelector((state) => state.plane);
  const dispatch = useDispatch();
  const { t } = useTranslation("translation");

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (name) => `${name.title}. ${name.first} ${name.last}`,
      width: "20%",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      width: "20%",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];

  useEffect(() => {
    const param = {
      results: pageSize,
      page: page,
    };
    dispatch(getListPlaneAsync(param));
  }, [dispatch, page, pageSize]);

  const handleChangePage = (event, newPage) => {
    event.preventDefault();
    dispatch(setCurrentPage(newPage + 1));
  };

  const handleChangeRowsPerPage = (event) => {
    dispatch(setPageSize(parseInt(event.target.value, 10)));
    dispatch(setCurrentPage(1));
  };

  return (
    <div className="overflow-x-auto">
      <Table sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow isHeader={true}>
            {columns.map((column, index) => (
              <TableCell key={index} align="center">
                {column.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {listPlane?.map((data, dataIndex) => (
            <TableRow key={dataIndex}>
              {Object.keys(columns).map((columnKey, columnIndex) => (
                <TableCell key={columnIndex}>
                  {columns[columnKey].render ? columns[columnKey].render(data[columns[columnKey].dataIndex]) : data[columns[columnKey].dataIndex]}
                </TableCell>
              ))}
            </TableRow>
          ))}
          {/* Kiểm tra nếu không có dữ liệu */}
          {listPlane?.length === 0 && (
            <TableRow>
              <TableCell colSpan={Object.keys(columns).length} className="py-4">
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              </TableCell>
            </TableRow>
          )}
        </TableBody>

      </Table>
      {listPlane?.length > 0 && (
        <Box display="flex" justifyContent="end" mt={1}>
          <TablePagination
            component="div"
            count={listPlane.length}
            rowsPerPageOptions={[5, 10, 25]}
            page={page - 1}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPage={pageSize}
            showFirstButton
            showLastButton
            labelRowsPerPage={t('number_of_records')}
          />
        </Box>
      )}
    </div>
  );
};

export default Plane;
