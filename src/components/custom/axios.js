// import axios from "axios";

// const instance = axios.create({
//   https: {
//     rejectUnauthorized: false,
//   },
//   headers: {
//     "Content-type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//   },
//   responseType: "json",
// });

// instance.interceptors.request.use((config) => {
//   const accessToken = localStorage.getItem("token");
//   if (accessToken) {
//     config.headers.Authorization = `Bearer ${accessToken}`;
//   }
//   return config;
// });

// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const refreshToken = localStorage.getItem("refreshToken");
//     const { config: oldRequest, response } = error;
//     if (response.status === 401 && oldRequest.url !== "/auth/get-tokens") {
//       const refreshTokenApi = await axios.post("/auth/refresh-token", null, {
//         headers: {
//           RefreshToken: refreshToken,
//         },
//       });
//       if (refreshTokenApi.status === 200) {
//         localStorage.setItem("token", refreshTokenApi.data?.token);
//         localStorage.setItem(
//           "refreshToken",
//           refreshTokenApi.data?.refreshToken
//         );
//         oldRequest.headers.Authorization = `Bearer ${refreshTokenApi.data?.token}`;
//         return axios(oldRequest);
//       }
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );

// export default instance;
