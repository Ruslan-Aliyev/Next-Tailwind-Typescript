import {NextResponse} from 'next/server';
import { initializeDatabase } from "../../../_utils/db.ts";

export async function POST(request: Request) {
	try {
		const {email, password} = await request.json();

		// Input field validation here

		console.log({email, password});

		const db = await initializeDatabase();
		const [results, columns] = await db.execute("INSERT INTO users (email, password) VALUES (?,?)", [email, password]);

		console.dir(results);

	} catch(err) {
		console.error(err);
	}

	return NextResponse.json({message: 'success'});
}