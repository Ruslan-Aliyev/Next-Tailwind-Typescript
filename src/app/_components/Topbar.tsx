import Link from "next/link";
import {getServerSession} from 'next-auth';
import Logout from "./Logout";

export default async function Topbar() {
  const session = await getServerSession();

  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between p-4">
        <div className="flex items-start">
          {!!session && 
            <ul className="font-medium flex flex-col p-4 md:flex-row md:space-x-8">
              <li>
                <Link href="/" className="text-gray-900 dark:text-white hover:underline">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-900 dark:text-white hover:underline">About</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-900 dark:text-white hover:underline">Contact</Link>
              </li>
            </ul>
          }
        </div>

        <div className="md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:flex-row md:space-x-8">
            {!session && 
              <li>
                <Link href="/login" className="text-gray-900 dark:text-white hover:underline">Login</Link>
              </li>
            }
            {!session && 
              <li>
                <Link href="/register" className="text-gray-900 dark:text-white hover:underline">Register</Link>
              </li>
            }
            {!!session && 
              <li>
                <Logout />
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}
