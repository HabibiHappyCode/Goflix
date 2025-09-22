export async function fetchingTvShowsData() {
    const response = await fetch("https://api.themoviedb.org/3/trending/tv/day?api_key=feb5c0d6f258fa2a47b5828787b5f9b9");
    const resData = await response.json();

    if (!response.ok) {
        throw new Error("there is an error in fetching data");
    }
    return resData.results
}
