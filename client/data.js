export default {
    getMovies: function () {
        return fetch('api/movies').then(res => {console.log(res); return res.json()});
    }
}