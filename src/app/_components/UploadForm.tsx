"use client";
import { useRef } from "react";

export default function UploadForm() {
  const fileInput = useRef<HTMLInputElement>(null);
  const nameInput = useRef<HTMLInputElement>(null);

  async function uploadFile(
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("image", fileInput?.current?.files?.[0]!);
    formData.append("name", nameInput?.current?.value);

    const response = await fetch("/api/entries", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    console.log(result);
  }

  return (
    <form className="flex flex-col gap-4">
      <label>
        <span>Name</span>
        <input type="text" name="name" ref={nameInput} />
      </label>
      <label>
        <span>Upload a file</span>
        <input type="file" name="image" ref={fileInput} />
      </label>
      <button type="submit" onClick={uploadFile}>
        Submit
      </button>
    </form>
  );
}