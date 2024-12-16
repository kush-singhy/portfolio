import Title from '@/components/Title';
import westpacLogo from '@/assets/westpac.svg';
import unswLogo from '@/assets/unsw.svg';
import Image from 'next/image';

export default function Experience() {
  return (
    <div id="experience" className="flex flex-col items-center justify-center">
      <Title text="Experience" />
      <div id="vertical-timeline" className="">
        <div
          id="experience-card"
          className="w-[440px] p-4 rounded-xl bg-[#F2F2F7]"
        >
          <div>
            <Image src={westpacLogo} alt="Westpac" />
            <div>
              <h2>Westpac</h2>
              <p>UI Developer</p>
            </div>
          </div>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>
              Vestibulum congue sapien et odio feugiat, vitae sollicitudin quam
              rhoncus.
            </li>
            <li>Quisque ut velit sed ipsum varius varius.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
