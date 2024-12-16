import Link from 'next/link';
import Image from 'next/image';
import houseIcon from '@/assets/houseIcon.svg';
import treeIcon from '@/assets/treeIcon.svg';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center p-11">
      <div
        id="nav"
        className="flex gap-8 px-6 py-2 rounded-full font-bold bg-black text-white shadow-md shadow-gray-400"
      >
        <Image src={houseIcon} alt="house-icon" />
        <Link href="#">Home</Link>
        <Link href="#">Experience</Link>
        <Link href="#">Projects</Link>
        <Link href="#">Runs</Link>
        <Image src={treeIcon} alt="tree-icon" />
      </div>
    </nav>
  );
}
