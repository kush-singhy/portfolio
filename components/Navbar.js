import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className="flex items-center justify-center p-11">
      <div
        id="nav"
        className="flex gap-10 px-6 py-2 border border-gray-900 rounded-full font-medium"
      >
        <Link href="#">Home</Link>
        <Link href="#">Experience</Link>
        <Link href="#">Projects</Link>
        <Link href="#">Runs</Link>
      </div>
    </nav>
  );
}
