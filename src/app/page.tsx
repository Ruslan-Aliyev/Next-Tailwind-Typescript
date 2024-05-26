import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5', {cache: "force-cache"});
  const entries = await response.json();

  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">
        Gallery
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {entries.map( ({id, title, thumbnailUrl}) => (
          <Link key={id} href={`/entries/${id}`}>
            <Image
              alt={title}
              src={thumbnailUrl}
              className="w-full object-cover aspect-square"
              width="50"
              height="50"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
