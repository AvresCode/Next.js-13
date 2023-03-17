export default async function Home() {
  const moviesData = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const response = await moviesData.json();
  console.log(response);

  return (
    <main>
      <h1 className="text-3xl font-bold underline"> Hello world</h1>
    </main>
  );
}
