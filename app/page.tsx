import db from "../db";
import { MovieProps } from "../types";
import SimilarMovies from "../components/SimilarMovies";
import Header from "../components/Header";

export default async function Home() {
  const movieCollection = db.collection("movies");
  const movie = await movieCollection.findOne(
    { Title: "The Shawshank Redemption" },
    { projection: { $vector: true } }
  );

  const movies = (await movieCollection
    .find(
      {},
      {
        vector: movie?.$vector,
        limit: 10,
        projection: { $vectorize: true },
        includeSimilarity: true,
      }
    )
    .toArray()) as MovieProps[];

  console.log(movies);

  return (
    <>
    <Header />
    <div className="flex relative min-h-screen select-none overflow-hidden text-white antialiased">
      <SimilarMovies movies={movies} />
    </div>
    </>
  );
}
