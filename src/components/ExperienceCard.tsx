import Image from 'next/image'

type TExperienceCardProps = {
  title: string
  description: string
  link: string
  ctaLabel: string
  image: any;
}

const ExperienceCard: React.FC<TExperienceCardProps> = ({ title, description, link, ctaLabel, image }) => {
  return (
    <div className="rounded-2xl h-[37rem] overflow-hidden shrink-0 flex flex-row items-end justify-start relative">
      <Image
        className="self-stretch relative max-h-full w-[31.75rem] object-cover z-[0]"
        alt=""
        src={image}
      />
      <div className="my-0 absolute bottom-0 [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.86)_79.24%)] w-[31.75rem] h-[22.13rem] flex flex-col items-start justify-end pt-[2rem] px-[1rem] pb-[1.5rem] box-border gap-[2rem] z-[1]">
        <div className="leading-[2.5rem] font-semibold">
          {title}
        </div>

        <p className="text-base tracking-[0.5px] leading-[1.5rem] text-m3-sys-light-tertiary-container m-0">
          {description}
        </p>

        <a href={link} className="no-underline rounded-81xl bg-m3-sys-light-secondary-container text-center text-base text-m3-sys-light-on-primary-container">
          <div className="py-2 px-4 tracking-[0.1px] leading-[1.25rem] font-semibold">
            {ctaLabel}
          </div>
        </a>
      </div>
    </div>
  )
}

export default ExperienceCard
