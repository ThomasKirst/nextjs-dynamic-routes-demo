import Link from "next/link";
import { useRouter } from "next/router";
import { movies } from "../../lib/data";
import Head from "next/head";
import MovieDetails from "../../components/MovieDetails";

export default function Movie() {
  // useRouter() Next Router Hook
  const router = useRouter();
  //                              [slug]
  // http://localhost:3000/movies/aquaman
  const { slug } = router.query;

  const currentMovie = movies.find((movie) => movie.slug === slug);

  if (!currentMovie) {
    return <p>Not Found</p>;
  }

  return (
    <>
      <Head>
        <title>{currentMovie.title}</title>
      </Head>

      <MovieDetails {...currentMovie}></MovieDetails>

      <p>
        <Link href="/movies">← Back to all movies</Link>
      </p>
    </>
  );
}
