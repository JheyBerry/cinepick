import { FetchMoviesbySearch } from "../../../services/movies";
import SearchResults from "../../../components/SearchResults";

export default async function MoviePage({ params }: { params: Promise<{ term: string }> }) {
  return (
    <AsyncSearchPageComponents params={params} />
  );
}

async function AsyncSearchPageComponents({ params }: { params: Promise<{ term: string }> }) {
  const { term } = await params;
  const decodedTerm = decodeURIComponent(term);
  const searchResults = await FetchMoviesbySearch({ params: { term } });

  if (!searchResults) {
    return <div className="text-white">Theres no movie to this match</div>;
  }

  return (
    <SearchResults searchResults={searchResults} term={decodedTerm} />
  );
}
