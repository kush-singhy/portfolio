'use client';

export default function SocialIcon({ icon, text, url }) {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div className="social-icon group" onClick={handleClick}>
      {icon}

      <span className="social-text group-hover:scale-100">{text}</span>
    </div>
  );
}
