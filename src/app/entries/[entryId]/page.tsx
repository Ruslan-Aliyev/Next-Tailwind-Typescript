import Image from "next/image";

export default async function Entry({
  params: { entryId },
}: {
  params: { entryId: string };
}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${entryId}`, {cache: "force-cache"});
  const {url, title} = await response.json();

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{title}</h1>
        </div>
        <Image
          alt={title}
          src={url}
          className="w-full object-cover aspect-square "
          width="50"
          height="50"
        />
      </div>
    </div>
  );
}