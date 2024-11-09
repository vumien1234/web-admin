import axios from "axios";

export const login = async (param) => {
    return await axios.post('https://reqres.in/api/login',param)
}