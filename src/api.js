import axios from "axios"

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "338180ef1dc53f478b264a5a3f718b8a",
        language: "en-US",
    }
});

api.get("tv/popular");

export default api;