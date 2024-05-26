import fs from "node:fs/promises";
import { initializeDatabase } from "../../_utils/db.ts";

export async function GET() {
	try {
		const db = await initializeDatabase();
		const [results, columns] = await db.execute("SELECT * FROM entries");

		return Response.json({ status: "success", results: results });
	} catch(e) {
		console.error(e);
		return Response.json({ status: "fail", error: e });
	}
}

export async function POST(request: Request) {
	try {
		const formData = await request.formData();
		const name = formData.get("name") as string;
		const file = formData.get("image") as File;
		const arrayBuffer = await file.arrayBuffer();
		const buffer = new Uint8Array(arrayBuffer);
		const filename = `/uploads/${file.name}`;
		await fs.writeFile(`./public/${filename}`, buffer);

		const db = await initializeDatabase();
		const [results, columns] = await db.execute("INSERT INTO entries (name, image) VALUES (?,?)", [name, filename]);

		return Response.json({ status: "success", results: results });
	} catch (e) {
		console.error(e);
		return Response.json({ status: "fail", error: e });
	}
}
