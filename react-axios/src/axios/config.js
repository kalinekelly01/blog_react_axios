import axios from "axios";

const blogFech = axios.create({ baseURL: "https://jsonplaceholder.typicode.com",
headers: {
    "Content-Type": "application-json",
},
});

export default blogFech;