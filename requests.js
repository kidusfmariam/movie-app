const key='1fe04e0ed06825cd39cd1eb75b9a25e1'
const requests = {
    featured: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    recommended: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
}

export default requests