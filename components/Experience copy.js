import Title from '@/components/Title';
import westpacLogo from '@/assets/westpac.svg';
import Image from 'next/image';

export default function Experience() {
  return (
    <div
      id="experience"
      className="flex flex-col items-center justify-center mb-60"
    >
      <Title text="Experience" />
      <div
        id="vertical-timeline"
        className="w-full relative flex flex-col items-start"
      >
        {/* Timeline line */}
        <div
          id="timeline"
          className="absolute left-6 top-0 w-[3px] h-full bg-gray-300"
        ></div>

        {/* Experience Item */}
        <div className="relative flex items-start my-5 w-full">
          {/* Timeline Circle */}
          <div
            id="timeline-circle"
            className="absolute left-[calc(1.5rem-0.75rem)] top-0 w-6 h-6 bg-white border-[3px] border-gray-300 rounded-full z-10"
          ></div>

          {/* Experience Card */}
          <div
            id="experience-card"
            className="ml-16 p-4 rounded-xl bg-[#F2F2F7] w-full max-w-3xl"
          >
            <div className="flex gap-3 mb-3">
              <Image src={westpacLogo} alt="Westpac" width={40} height={40} />
              <div>
                <h2 className="text-xl font-semibold">Westpac</h2>
                <p className="text-gray-600">UI Developer</p>
              </div>
            </div>
            <div>
              <p>
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Duis
                vehicula consequat purus, nec venenatis ligula.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
