import Link from "next/link";
import Image from "next/image";
import UploadForm from "./_components/UploadForm";

export default async function Home() {
  const response = await fetch(`${process.env.BASE_URL}/api/entries`);
  const entries = await response.json();
  //@Todo: Check if entries.status fail

  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">
        Gallery
      </h1>

      <UploadForm />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {entries.results.map( ({id, name, image}) => (
          <Link key={id} href={`/entries/${id}`}>
            <Image
              alt={name}
              src={image}
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
