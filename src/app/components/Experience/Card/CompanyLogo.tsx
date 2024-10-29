interface CompanyLogoProps {
  src: string;
  alt: string;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({ src, alt }) => (
  <div className='flex-shrink-0'>
    <div className='relative w-12 h-12'>
      <img
        src={src}
        alt={alt}
        className='rounded-lg w-full h-full object-contain'
      />
    </div>
  </div>
);
