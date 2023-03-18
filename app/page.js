import Movie from "./Movie";
export default async function Home() {
  const moviesData = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const response = await moviesData.json();
  console.log(response);

  return (
    <main>
      <h1 className="text-3xl font-bold underline"> Popular Movies</h1>
      <div className="grid gap-16 grid-cols-fluid">
        {response.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
    </main>
  );
}
