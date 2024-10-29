import SlideUp from '../common/SlideUp';
import { ExperienceCard } from './Card';
import { Experience } from '../../../constants';

const experiences = [
  Experience['01'],
  Experience['02'],
  Experience['03'],
  Experience['04'],
  Experience['05'],
].filter(Boolean);

const ExperienceSection = () => {
  return (
    <section id='experience'>
      <h1 className='my-10 text-center font-bold text-4xl'>
        Experience
        <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded' />
      </h1>

      <div className='space-y-12'>
        {experiences.map((experience, index) => (
          <SlideUp key={index} offset='-300px 0px -300px 0px'>
            <ExperienceCard experience={experience} />
          </SlideUp>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
