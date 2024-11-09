import Layout from "./Layout";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return(
        <Layout>
            <Component {...rest} />
        </Layout>
    )
}
export default PrivateRoute;