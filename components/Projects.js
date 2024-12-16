import Link from 'next/link';
import Title from './Title';

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Title text="Projects" />
      <div id="project-card" className="w-full p-4 rounded-xl bg-[#F2F2F7]">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">Noteable</h2>
            <p className="text-base">Create a beautiful digital library</p>
          </div>
          <div className="flex gap-3 items-start">
            <Link
              href="https://usenoteable.com"
              className="bg-white px-3 py-1 rounded-lg"
            >
              Visit Site
            </Link>
            <Link href="#" className="bg-white px-3 py-1 rounded-lg">
              View Source Code
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

function ProjectLink() {
  const handleClick = () => {
    window.open(url, '_blank');
  };
  return <div onClick={handleClick}></div>;
}
