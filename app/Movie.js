import Link from "next/link";
export default function Movie({ title, id, release_date }) {
  return (
    <div>
      <h1> {title}</h1>
      <Link href={`/abc`}></Link>
      <p>{release_date}</p>
    </div>
  );
}
