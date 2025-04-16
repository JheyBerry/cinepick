import { IoMdSearch } from "react-icons/io";
import { searchAction } from "../actions/search";
import { useRouter } from "next/navigation";

export default function SearchInput() {
  const router = useRouter();

  const handleSearchSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const url = await searchAction(formData);

    router.push(url);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="max-w-md mx-auto">
      <div className="flex items-center justify-between w-full relative">
        <label htmlFor="search" className="sr-only">
          Movie search
        </label>
        <input
          type="search"
          maxLength={60}
          name="searchTerm"
          id="movie-search"
          className="block w-full mr-2 rounded-full border border-gray-300 p-4 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-yellow-400"
          placeholder="Search Movies"
          required
        />
        <button
          type="submit"
          className="text-white p-2 font-medium rounded-full text-sm hover:border hover:border-gray-300 hover:ring hover:ring-yellow-400 focus:ring focus:bg-orange-300"
        >
          <IoMdSearch className="text-lg" />
        </button>
      </div>
    </form>
  );
}
