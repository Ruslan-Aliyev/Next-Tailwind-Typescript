import Image from "next/image";
import Modal from "../../../../_components/Modal";

export default async function Entry({
  params: { entryId },
}: {
  params: { entryId: string };
}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${entryId}`, {cache: "force-cache"});
  const {url, title} = await response.json();

  return (
    <Modal>
      <p>Modal Intercept here - for debug</p>
      <Image
        alt={title}
        src={url}
        className="w-full object-cover aspect-square "
        width="50"
        height="50"
      />
    </Modal>
  );
}