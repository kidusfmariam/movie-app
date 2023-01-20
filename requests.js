const key= import.meta.env.VITE_API_KEY
const requests = {
    featured: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&page=1`,
    recommended: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
    recommended2: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&page=2`,
    recommended3: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&page=3`,
    recommended4: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&page=4`,
    recommended5: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&page=5`,
    recommended6: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&page=6`,
    recommended7: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&page=7`,
    latest: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
    movies: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
    movies1: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=2`,
    movies2: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=3`,
    movies3: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=4`,
    movies4: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=5`,
    movies5: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=6`,
}

export default requests