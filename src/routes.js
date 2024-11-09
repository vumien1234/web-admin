import Plane from './modules/plane/Plane';
import User from './modules/user/User';
import AfterFlying from "./modules/checkList/afterFlying/AfterFlying";
import { FaUserCog } from "react-icons/fa";
import { BiSolidPlane } from "react-icons/bi";
import Login from "./modules/auth/Login";
import Profile from './modules/auth/Profile';
import BeforeFlying from './modules/checkList/beforeFlying/BeforeFlying';
import { FaPlaneCircleCheck } from 'react-icons/fa6';

const injectProps = (props, Component) => {
    return <Component {...props} />;
};

export const routes = {
    plane:{
        exact : false,
        path:'/',
        component:(props) => injectProps(props,Plane),
        title:"plane"
    },
    user:{
        exact:false,
        path:'/user',
        component:(props) => injectProps(props,User),
        title:"user"
    },
    afterFlying:{
        exact:false,
        path:'/afterFlying',
        component:(props) => injectProps(props,AfterFlying),
        title:"afterFlying"
    },
    beforeFlying:{
        exact:false,
        path:'/beforeFlying',
        component:(props) => injectProps(props,BeforeFlying),
        title:"beforeFlying"
    },
    login:{
        exact:false,
        path:'/login',
        component:(props) => injectProps(props,Login),
        title:'login'
    },
    profile:{
        exact:false,
        path:'/profile',
        component:(props) => injectProps(props,Profile),
        title:'profile'
    },
}
export const paths = [
    {
        category: "aircraft_management",
        to: routes.plane.path,
        name: routes.plane.title,
        key: "plane",
        icon: <BiSolidPlane />,
        children: null
    },
    {
        category: "user_management",
        to: routes.user.path,
        name: routes.user.title,
        key: "user",
        icon: <FaUserCog />,
        children: null
    },
    {
        category: "check_flight",
        key: "checkList",
        icon: <FaPlaneCircleCheck />,
        children: [
            {
                to: routes.beforeFlying.path,
                name: "check_before_flying",
                key: "beforeFlying",
            },
            {
                to: routes.afterFlying.path,
                name: "check_after_flying",
                key: "afterFlying",
            }
        ]
    },
  
];
