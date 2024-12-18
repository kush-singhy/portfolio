import Link from 'next/link';
import Image from 'next/image';
import ProjectLink from '@/components/ProjectLink';

export default function ProjectCard({
  name,
  details,
  siteLink,
  sourceLink,
  imageUrl,
}) {
  return (
    <div className="w-full max-w-2xl pt-4 px-4 mb-14 rounded-xl bg-[#F2F2F7] relative ">
      <div className="flex justify-between mb-10">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="text-base">{details}</p>
        </div>
        <div className="flex gap-3 items-start">
          <ProjectLink url={siteLink} text="Visit Site" />
          {sourceLink && (
            <ProjectLink url={sourceLink} text="View Source Code" />
          )}
        </div>
      </div>
      <div className="flex justify-center relative">
        <Image
          src={imageUrl}
          alt={name}
          className="rounded-t-xl w-4/5 shadow-[0px_4px_10px_rgba(0,0,0,0.2)]"
          style={{ clipPath: 'inset(-10px -10px 0px -10px)' }}
        />
      </div>
    </div>
  );
}
