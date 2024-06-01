'use client';

import {signOut} from 'next-auth/react';

export default function Logout() {
	return (
		<span  className="text-gray-900 dark:text-white hover:underline hover:cursor-pointer" onClick={() => {
			signOut();
		}}>
			Logout
		</span>
	);
}