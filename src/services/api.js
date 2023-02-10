import axios from "axios";

const token="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjE5NDY4OTU1ZWQ3NzMzYTc2OWQxMzc4ZmQ4YmJiZSIsInN1YiI6IjYzZTVjZDMyZjQ4YjM0MDA4Y2I2ZTUzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8U0GIk6pvx5ukTQmzBN7t2NCwpfLC7PkkW2FC_f1Yfo";

export default axios.create({
    baseURL:"https://api.themoviedb.org/3/movie/popular?api_key=7b19468955ed7733a769d1378fd8bbbe",
    headers: {
        Authorization: `Bearer ${token}`
    }
})