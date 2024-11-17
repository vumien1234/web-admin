import React, { useEffect } from "react";
import { routes } from "./routes";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateRoute from "./components/custom/PrivateRoute";
import Loading from "./components/common/Loading";
import { useDispatch, useSelector } from "react-redux";
// import { setMessageText, setseverity } from "./components/global/slices";

const Routing = () => {
    // const { loadingStatus, messageText, severity, isLogoutSuccess } = useSelector((state) => state.global);
    const dispatch = useDispatch();

    const routeComponents = Object.values(routes).map((value, index) => (
        <Route
            key={index.valueOf()}
            path={value.path}
            exact={value.exact}
            element={<PrivateRoute title={value.title} component={value.component} />}
        />
    ));

    return (
        <>
            {/* {loadingStatus && <Loading />} */}
            <Router>
                <Routes>{routeComponents}</Routes>
            </Router>
        </>
    );
};

export default Routing;
