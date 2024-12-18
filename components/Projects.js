import Title from './Title';
import ProjectCard from './ProjectCard';
import noteableImage from '@/assets/noteable_screenshot.png';
import curiosityCurveImage from '@/assets/curiosity_curve.png';

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center w-full mb-32"
    >
      <Title text="Projects" />
      <ProjectCard
        name="Noteable"
        details="A full-stack web application..."
        siteLink="https://usenoteable.com"
        sourceLink="https://github.com/kush-singhy/noteable"
        imageUrl={noteableImage}
      />
      <ProjectCard
        name="Curiosity Curve"
        details="A wordpress website..."
        siteLink="https://curiositycurve.com.au/"
        imageUrl={curiosityCurveImage}
      />
    </div>
  );
}
