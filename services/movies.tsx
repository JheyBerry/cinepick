import db from "../db";
import { MovieProps, MovieSumary } from "../types";
import { notFound } from "next/navigation";

const movies = db.collection("movies");

export async function FetchAllMoviesData() {
  const allMovies = (await movies.find({}, {}).toArray()) as MovieProps[];
  return allMovies;
}

export async function FetchMovieData(params: { params: { id: string } }) {
  const { id } = params.params;
  const movie = await movies.find({ _id: id }, {projection: { $vectorize: true, $vector: true }});

  console.log(id)

  if (await movie.hasNext()) {
    return (await movie.next()) as MovieProps;
  }

  return notFound();
}

export async function FetchSimilarMoviesData(params: { params: { id: string } }) {
  const { id } = params.params;
  const search = await movies.find({ _id: id }, {projection: { $vectorize: true, $vector: true }});

  if (!(await search.hasNext())) {
    return notFound();
  }

  const movie = (await search.next()) as MovieProps;

  const similarMovies = (await movies
    .find(
      {},
      {
        vector: movie.$vector,
        limit: 11,
        includeSimilarity: true,
      }
    )
    .toArray());

  // cut the first movie because it is the same as the movie we are looking for
  similarMovies.shift(); // Remove the first movie
  return { movie, similarMovies };
}

export async function FetchMoviesbySearch(params: { params: { term: string } }) {
  const { term } = params.params;
  const movieSearchResults = (await movies
    .find(
      {},
      {
        vectorize: term,
        limit: 10,
        // Do not include vectors in the output.
        projection: { $vector: 0 },
      }
    )
    .toArray()) as MovieSumary[];

    return movieSearchResults;
}
