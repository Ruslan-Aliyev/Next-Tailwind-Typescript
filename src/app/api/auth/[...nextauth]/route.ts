import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "../../../_utils/db.ts";

const handler = NextAuth({
	session: {
		strategy: 'jwt'
	},
	pages: {
		signIn: '/login',
	},
	providers: [CredentialsProvider({
	    credentials: {
	      email: {},
	      password: {}
	    },
	    async authorize(credentials, req) {
			try {
				const [results, columns] = await db.execute("SELECT * FROM users WHERE email = ?", [credentials?.email]);

				const user = results[0];
				const passwordCorrect = credentials?.password === user.password;

				if (passwordCorrect)
				{
					console.log({id: user.id, email: user.email});
					return {id: user.id, email: user.email};
				}
			} catch(err) {
				console.error(err);
			}
			
			return null;
	    }
	})]
})

export {handler as GET, handler as POST};