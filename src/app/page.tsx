import Link from "next/link";

export default async function Home() {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  const entries = await response.json();

  return (
    <main>
      <h1>Home</h1>
      {entries.map(entry => (
        <Link href={`/entries/${entry.id}`}>{entry.title}</Link>
      ))}
    </main>
  );
}
