 // Base da URL: https://api.themoviedb.org/3/
 //URL DA API: /movie/now_playing?api_key=5e0edf77f63b17b20c98535fa7a6e073

 import axios from "axios";

 const api= axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
 });


 export default api;




