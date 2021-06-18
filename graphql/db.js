let movies = [
    {
        id: 0,
        name: "Parasite",
        score: 5
    },
    {
        id: 1,
        name: "Avengers - The new one",
        score: 5
    },
    {
        id: 2,
        name: "God's not dead",
        score: 5
    },
    {
        id: 3,
        name: "The Boys",
        score: 4
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
}

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(m => m.id !== id);
    if (movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }else{
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}