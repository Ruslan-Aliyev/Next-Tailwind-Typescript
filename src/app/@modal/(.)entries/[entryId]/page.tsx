import Image from "next/image";
import Modal from "../../../_components/Modal";

export default async function Entry({
  params: { entryId },
}: {
  params: { entryId: string };
}) {
  const response = await fetch(`${process.env.BASE_URL}/api/entries/${entryId}`, {cache: "no-store"});
  const {results, status} = await response.json();
  //@Todo: Check if entries.status fail
  const {name, image} = results;

  return (
    <Modal>
      <Image
        alt={name}
        src={image}
        className="w-full object-cover aspect-square "
        width="500"
        height="500"
      />
    </Modal>
  );
}