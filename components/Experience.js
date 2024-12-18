import Title from '@/components/Title';
import unswLogo from '@/assets/unsw.svg';
import westpacLogo from '@/assets/westpac.svg';
import Image from 'next/image';

export default function Experience() {
  return (
    <div id="experience" className="flex flex-col items-center gap-8 mb-32">
      <Title text="Experience" />
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-tl before:from-transparent before:via-slate-300 before:to-transparent">
        {/* <!-- Westpac --> */}
        <div className="relative flex items-center justify-between md:justify-normal md:even:flex-row-reverse group">
          {/* <!-- Icon --> */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-300 bg-white text-slate-500 shrink-0 md:order-1 md:group-even:-translate-x-1/2 md:group-odd:translate-x-1/2"></div>
          {/* <!-- Card --> */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-[#F2F2F7] shadow-[0px_4px_10px_rgba(0,0,0,0.2)]">
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

        {/* <!-- UNSW --> */}
        <div className="relative flex items-center justify-between md:justify-normal md:even:flex-row-reverse group">
          {/* <!-- Icon --> */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-300 bg-white text-slate-500 shrink-0 md:order-1 md:group-even:-translate-x-1/2 md:group-odd:translate-x-1/2"></div>
          {/* <!-- Card --> */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-[#F2F2F7] shadow-[0px_4px_10px_rgba(0,0,0,0.2)]">
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
