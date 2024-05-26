import Image from "next/image";

export default async function Entry({
  params: { entryId },
}: {
  params: { entryId: string };
}) {
  const response = await fetch(`${process.env.BASE_URL}/api/entries/${entryId}`, {cache: "force-cache"});
  const {results, status} = await response.json();
  //@Todo: Check if entries.status fail
  const {name, image} = results;

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{name}</h1>
        </div>
        <Image
          alt={name}
          src={image}
          className="w-full object-cover aspect-square "
          width="50"
          height="50"
        />
      </div>
    </div>
  );
}