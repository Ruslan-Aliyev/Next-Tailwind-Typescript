export async function GET(request: Request, { params }: {params: { entryId: string }} /*This is the context*/) {
	console.log(params);
	return Response.json(`Get one: ${params.entryId}`);
}