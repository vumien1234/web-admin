import Support from "./modules/support/Support";
import { FaAddressBook, FaUserCog } from "react-icons/fa";
import Login from "./modules/auth/Login";
import Profile from "./modules/auth/Profile";
import Course from "./modules/course/page";
import Overview from "./modules/overview/Overview";
import { IoHomeSharp } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import AccountStudent from "./modules/account-management/account-student/AccountStudent";
import AccountTeacher from "./modules/account-management/account-teacher/AccountTeacher";
import Schedule from "./modules/schedule-manage/page";
import ScheduleStudent from "./modules/schedule-manage/ScheduleStudent";
import ScheduleTeacher from "./modules/schedule-manage/ScheduleTeacher";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";
import PaymentTeacher from "./modules/payment-manage/PaymentTeacher";
import PaymentStudent from "./modules/payment-manage/PaymentStudent";

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
    component: (props) => injectProps(props, AccountStudent),
    title: "Tài khoản người dùng",
  },
  teacher: {
    exact: false,
    path: "/tai-khoan-gia-su",
    component: (props) => injectProps(props, AccountTeacher),
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
  schedule: {
    exact: false,
    path: "/quan-ly-thoi-khoa-bieu",
    component: (props) => injectProps(props, Schedule),
    title: "Quản lý thời khoá biểu",
  },
  schedule_student: {
    exact: false,
    path: "/quan-ly-thoi-khoa-bieu-hoc-sinh",
    component: (props) => injectProps(props, ScheduleStudent),
    title: "Quản lý thời khoá biểu học sinh",
  },
  schedule_teacher: {
    exact: false,
    path: "/quan-ly-thoi-khoa-bieu-gia-su",
    component: (props) => injectProps(props, ScheduleTeacher),
    title: "Quản lý thời khoá biểu gia sư",
  },
  payment_teacher: {
    exact: false,
    path: "/quan-ly-thanh-toan-gia-su",
    component: (props) => injectProps(props, PaymentTeacher),
    title: "Quản lý thanh toán gia sư",
  },
  payment_student: {
    exact: false,
    path: "/quan-ly-thanh-toan-hoc-sinh",
    component: (props) => injectProps(props, PaymentStudent),
    title: "Quản lý thanh toán học sinh",
  },
};

export const paths = [
  {
    category: "Tổng quan",
    to: routes.overview.path,
    name: routes.overview.title,
    key: "overview",
    icon: <IoHomeSharp />,
    children: null,
  },
  {
    category: "Quản lý khóa học",
    to: routes.course.path,
    name: routes.course.title,
    key: "course",
    icon: <FaAddressBook />,
    children: null,
  },
  {
    category: "Quản lý tài khoản",
    key: "checkList",
    icon: <IoMdPersonAdd />,
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
  {
    category: "Quản lý thanh toán",
    key: "payment",
    icon: <MdOutlinePayments />,
    children: [
      {
        to: routes.payment_teacher.path,
        name: routes.payment_teacher.title,
        key: "teacher",
      },
      {
        to: routes.payment_student.path,
        name: routes.payment_student.title,
        key: "student",
      },
    ],
  },
  {
    category: "Quản lý thời khoá biểu",
    key: "schedule",
    icon: <RiCalendarScheduleFill />,
    children: [
      {
        to: routes.schedule_teacher.path,
        name: routes.schedule_teacher.title,
        key: "schedule teacher",
      },
      {
        to: routes.schedule_student.path,
        name: routes.schedule_student.title,
        key: "schedule student",
      },
    ],
  },
];
