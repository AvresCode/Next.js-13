export default async function MovieDetail({ params }) {
  const { movie } = params;
  console.log(movie);
  const movieData = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const response = await movieData.json();
  console.log("movie detail", response);
  return <div>movie</div>;
}
