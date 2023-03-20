import Image from "next/image";
export default async function MovieDetail({ params }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  const { movie } = params;
  console.log(movie);
  const movieData = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const response = await movieData.json();
  console.log("movie detail", response);
  return (
    <div>
      <h1> {response.title}</h1>
      <p>{response.release_date}</p>
      <p>{response.status}</p>
      <Image
        src={imagePath + response.backdrop_path}
        alt={response.title}
        width={1000}
        height={1000}
      />
    </div>
  );
}
