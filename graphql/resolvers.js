import {getMovies, getById} from "./db"

const resolvers = {
    Query: {
        movies: (_, { rating, limit, page, genre }) => getMovies(limit, rating, page, genre),
        movie: (_, {id}) => getById(id)
    //     movies: () => getMovies(),
    //     
    // },
    // Mutation: {
    //     addMovie: (_, {name, score}) => addMovie(name, score),
    //     deleteMovie: (_, { id }) => deleteMovie(id)
        
    }
};

export default resolvers;