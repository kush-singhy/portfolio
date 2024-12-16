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
          <div className="flex gap-3 mb-3">
            <Image src={westpacLogo} alt="Westpac" />
            <div>
              <h2 className="text-xl font-semibold">Westpac</h2>
              <p className="text-gray-600">UI Developer</p>
            </div>
          </div>
          <div>
            <p>Lorem Ipsum</p>
          </div>
        </div>
        <div
          id="experience-card"
          className="w-[440px] p-4 rounded-xl bg-[#F2F2F7]"
        >
          <div className="flex gap-3 mb-3">
            <Image src={unswLogo} alt="UNSW" />
            <div>
              <h2 className="text-xl font-semibold">UNSW</h2>
              <p className="text-gray-600">
                B. Computer Science & B. Actuarial Studies
              </p>
            </div>
          </div>
          <div>
            <p>Lorem Ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
}
