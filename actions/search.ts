"use server";

export async function searchAction(formData: FormData) {
  const searchQuery = formData.get("searchTerm") as string;
  const url = `/search/${searchQuery}`;

  return url;
}
