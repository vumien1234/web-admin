import Support from "./modules/support/Support";
import { FaUserCog } from "react-icons/fa";
import { BiSolidPlane } from "react-icons/bi";
import Login from "./modules/auth/Login";
import Profile from "./modules/auth/Profile";
import BeforeFlying from "./modules/account-management/account-student/AccountStudent";
import { FaPlaneCircleCheck } from "react-icons/fa6";
import AfterFlying from "./modules/account-management/account-student/AccountStudent";
import Course from "./modules/cource/page";
import Overview from "./modules/overview/Overview";

const injectProps = (props, Component) => {
    return <Component {...props} />;
};

export const routes = {
    overview: {
        exact: false,
        path: "/",
        component: (props) => injectProps(props, Overview),
        title: "Tổng quan",
    },
    course: {
        exact: false,
        path: "/quan-ly-khoa-hoc",
        component: (props) => injectProps(props, Course),
        title: "Quản lý khóa học",
    },
    student: {
        exact: false,
        path: "/tai-khoan-nguoi-dung",
        component: (props) => injectProps(props, AfterFlying),
        title: "Tài khoản người dùng",
    },
    teacher: {
        exact: false,
        path: "/tai-khoan-gia-su",
        component: (props) => injectProps(props, BeforeFlying),
        title: "Tài khoản gia sư",
    },
    login: {
        exact: false,
        path: "/dang-nhap",
        component: (props) => injectProps(props, Login),
        title: "Đăng nhập",
    },
    profile: {
        exact: false,
        path: "/trang-ca-nhan",
        component: (props) => injectProps(props, Profile),
        title: "Trang cá nhân",
    },
    support: {
        exact: false,
        path: "/ho-tro-khach-hang",
        component: (props) => injectProps(props, Support),
        title: "Hỗ trợ khách hàng",
    },
};

export const paths = [
    {
        category: "Tổng quan",
        to: routes.overview.path,
        name: routes.overview.title,
        key: "overview",
        icon: <BiSolidPlane />,
        children: null,
    },
    {
        category: "Quản lý khóa học",
        to: routes.course.path,
        name: routes.course.title,
        key: "course",
        icon: <FaUserCog />,
        children: null,
    },
    {
        category: "Quản lý tài khoản",
        key: "checkList",
        icon: <FaPlaneCircleCheck />,
        children: [
            {
                to: routes.teacher.path,
                name: routes.teacher.title,
                key: "teacher",
            },
            {
                to: routes.student.path,
                name: routes.student.title,
                key: "student",
            },
        ],
    },
    {
        category: "Hỗ trợ khách hàng",
        to: routes.support.path,
        name: routes.support.title,
        key: "support",
        icon: <FaUserCog />,
        children: null,
    },
];
