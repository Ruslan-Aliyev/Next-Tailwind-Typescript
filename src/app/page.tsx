import Link from "next/link";
import Image from "next/image";
import UploadForm from "./_components/UploadForm";

export default async function Home() {
  const response = await fetch(`${process.env.BASE_URL}/api/entries`, {cache: "no-store"});
  const entries = await response.json();
  //@Todo: Check if entries);

  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">
        Gallery
      </h1>

      <UploadForm />

      <div className="px-10">
        <div className="grid grid-cols-4 gap-4">
          {entries.results.map( ({id, name, image}) => (
            <Link key={id} href={`/entries/${id}`}>
              <Image
                alt={name}
                src={image}
                className="w-full object-cover aspect-square"
                width="500"
                height="500"
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
