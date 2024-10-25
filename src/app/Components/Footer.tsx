import Link from "next/link";


export default function Footer() {
  return (
      <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-red-500 via-purple-500 to-yellow-500 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="mb-4">Follow us:</p>
          <div className="flex justify-center space-x-10 font-semibold">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Facebook
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Twitter
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Instagram
            </Link>
          </div>
          <p className="mt-4 text-sm">© 2024 My Company. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  


