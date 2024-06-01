"use client";
import { useRef, useState } from "react";

type Result = {
  status: "success" | "fail"
  results?: any
  error?: any
}

export default function UploadForm() {
  const fileInput = useRef<HTMLInputElement>(null);
  const nameInput = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState<Result>(null);

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
    setResult(result);

    setTimeout(function(){
      location.reload();
    }, 1000);
  }

  function renderResult() {
    if(!result)
      return null;

    switch(result.status) {
      case "success":
        return <p className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50">Upload was successful.</p>
      case "fail":
        return <p className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50">Upload failed.</p>
    }
  }
  
  return (
    <form className="max-w-lg mx-auto">
      {renderResult()}

      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">Image name</label>
        <input type="text" name="name" ref={nameInput} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1" required />
      </div>

      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">Upload image</label>
        <input className="block w-full text-sm text-gray-900 border border-gray-300" type="file" name="image" ref={fileInput} />
      </div>

      <div className="mb-5">
        <button type="submit" onClick={uploadFile} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
      </div>
    </form>
  );
}
