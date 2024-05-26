import { initializeDatabase } from "../../../_utils/db.ts";

export async function GET(request: Request, { params }: {params: { entryId: number }}) {
	try {
		const db = await initializeDatabase();
		const [results, columns] = await db.execute("SELECT * FROM entries WHERE id = ?", [params.entryId]);

		return Response.json({ status: "success", results: results[0] });
	} catch(e) {
		console.error(e);
		return Response.json({ status: "fail", error: e });
	}
}

export async function PATCH(request: Request, { params }: {params: { entryId: number }} /*This is the context*/) {
	try {
		const formData = await request.formData();
		const name = formData.get("name") as string; // Only update name for now
		// @Todo: Update image

		const db = await initializeDatabase();
		const [results, columns] = await db.execute("UPDATE entries SET name = ? WHERE id = ?", [name, params.entryId]);

		return Response.json({ status: "success", results: results });
	} catch(e) {
		console.error(e);
		return Response.json({ status: "fail", error: e });
	}
}

export async function DELETE(request: Request, { params }: {params: { entryId: number }} /*This is the context*/) {
	try {
		const db = await initializeDatabase();
		const [results, columns] = await db.execute("DELETE FROM entries WHERE id = ?", [params.entryId]);
		// @Todo: Delete image too

		return Response.json({ status: "success", results: results });
	} catch(e) {
		console.error(e);
		return Response.json({ status: "fail", error: e });
	}
}
