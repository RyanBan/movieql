import {getMovies, getById} from "./db"

const resolvers = {
    Query: {
        movies: (_, { rating, limit }) => getMovies(limit, rating),
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