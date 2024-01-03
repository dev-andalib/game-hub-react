import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "8267329154a8413698ad3a8279e0445a"
    },
})