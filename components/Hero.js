import SocialIcon from './SocialIcon';
import Image from 'next/image';
import pinIcon from '@/assets/map-pin.svg';
import { FiGithub } from 'react-icons/fi';
import { FiYoutube } from 'react-icons/fi';
import { FaMediumM } from 'react-icons/fa';

export default function Hero() {
  return (
    <div id="hero" className="flex justify-between py-20 max-w-4xl">
      <div
        id="hero-text"
        className="flex-initial w-7/12 flex flex-col justify-center"
      >
        <h1 className="text-5xl font-bold leading-relaxed">Hi, Kush here ✌🏼</h1>
        <p className="text-2xl mb-5">
          I&apos;m obsessed with understanding user needs, focusing on
          what&apos;s important, and presenting my work beautifully.
        </p>
        <div id="social-icons" className="flex gap-3">
          <SocialIcon
            icon={<FiGithub className="w-5 h-5" />}
            text="Code"
            url="https://github.com/kush-singhy"
          />
          <SocialIcon
            icon={<FiYoutube className="w-5 h-5" />}
            text="Videos"
            url="https://www.youtube.com/@kushsinghy"
          />
          <SocialIcon
            icon={<FaMediumM className="w-5 h-5" />}
            text="Writing"
            url="https://medium.com/@kushsinghy02"
          />
        </div>
      </div>
      <div
        id="hero-image"
        className="flex-initial w-4/12 flex flex-col justify-center items-center"
      >
        <div className="w-56 h-56 border border-gray-900 rounded-full mb-4"></div>
        <div id="location" className="flex gap-2">
          <Image src={pinIcon} alt="Map pin icon" />
          <span className="font-bold">Sydney, Australia</span>
        </div>
      </div>
    </div>
  );
}
