import db from '../db';
import Movie from '../components/Movie';
import { MovieProps } from '../types';

export default async function Home() {

  const movies = db.collection('movies');
  const result = (await movies.find({}, {}).toArray()) as MovieProps[];

  return (
    <div>
      <h1>Movie List</h1>
        {result.map((movie) => {
            console.log("movie", movie);
            return <Movie key={movie._id} movie={movie} />;
        })}
    </div>
  );
}
