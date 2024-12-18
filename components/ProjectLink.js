'use client';

export default function ProjectLink({ url, text }) {
  const handleClick = () => {
    window.open(url, '_blank');
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white px-3 py-1 rounded-lg cursor-pointer"
    >
      {text}
    </div>
  );
}
