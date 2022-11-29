import Link from "next/link";
import { movies } from "../../lib/data";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Movies() {
  const router = useRouter();

  /**
  function handleSubmit(event) {
    // ...

    router.push('/thank-you')
  }
  */

  return (
    <>
      <Head>
        <title>List of Movies</title>
      </Head>
      <h1>List of Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.slug}>
            <Link href={`/movies/${movie.slug}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>

      <button
        onClick={() => {
          if (confirm("Are you really Aquaman")) {
            const whereIsAtlantis = prompt("Tell me, where is Atlantis?!");
            router.push(`/movies/${whereIsAtlantis}`);
          }
        }}
      >
        Are you Aquaman?
      </button>
    </>
  );
}
