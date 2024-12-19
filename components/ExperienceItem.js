import Image from 'next/image';

export default function ExperienceItem({ title, role, description, logo }) {
  return (
    <div className="relative flex items-center justify-between md:justify-normal md:even:flex-row-reverse group">
      <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-300 bg-white shrink-0 md:order-1 md:group-even:-translate-x-1/2 md:group-odd:translate-x-1/2"></div>
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-[#F2F2F7] shadow-[0px_4px_10px_rgba(0,0,0,0.2)]">
        <div className="flex gap-3 mb-3">
          <Image src={logo} alt={title} width={40} height={40} />
          <div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-gray-600">{role}</p>
          </div>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
