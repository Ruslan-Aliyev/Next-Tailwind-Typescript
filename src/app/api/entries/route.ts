export async function GET() {
	return Response.json({a: "b"});
}

// export async function GET(request: Request, { params }: {params: { entryId: string }} /*This is the context*/) {
// 	return Response.json(`Get one: ${entryId}`);
// }

export async function POST(request: Request) {
	const entry = await request.json();

	return Response.json(entry);
}

export async function PATCH(request: Request, { params }: {params: { id: string }} /*This is the context*/) {
	return Response.json("To be finished");
}

export async function DELETE(request: Request, { params }: {params: { id: string }} /*This is the context*/) {
	return Response.json("To be finished");
}
