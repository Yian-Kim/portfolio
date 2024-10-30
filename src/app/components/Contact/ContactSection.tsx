'use client';

import React, { useState } from 'react';
import config from '../../../config/config.json';
import { Author, EmailAddressForMailTo, SocialMedia } from '../../../constants';
import { EmailAddressDisplay } from './EmailAddressDisplay';

interface ImageData {
  src: string;
  alt: string;
}

const ContactSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imageData: ImageData[] = config.Contact;

  const scrollToSlide = (index: number) => {
    setCurrentSlide(index);
    const container = document.getElementById('slideContainer');
    container?.scrollTo({
      left: index * container.offsetWidth,
      behavior: 'smooth',
    });
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.target as HTMLDivElement;
    const newIndex = Math.round(container.scrollLeft / container.offsetWidth);
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % imageData.length;
    scrollToSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex =
      currentSlide === 0 ? imageData.length - 1 : currentSlide - 1;
    scrollToSlide(newIndex);
  };

  return (
    <div
      className='min-h-min bg-white dark:bg-gray-900 p-4 md:p-8 transition-colors duration-200 mt-40'
      id='contact'
    >
      <div className='relative w-full mx-auto max-w-[90vw] md:max-w-6xl'>
        <div className='relative w-full mb-16'>
          <div className='absolute inset-0 bg-gradient-to-r from-pink-100 via-white to-blue-100 rounded-xl md:rounded-3xl transform rotate-1 transition-colors duration-200'></div>
          <div className='relative w-full h-[300px] md:h-[500px] rounded-xl md:rounded-3xl bg-purple-200 dark:bg-purple-200'>
            <div className='w-full h-full relative'>
              <div
                id='slideContainer'
                className='flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-none rounded-xl md:rounded-3xl'
                onScroll={handleScroll}
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch',
                }}
              >
                <style jsx>{`
                  #slideContainer::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                {imageData.map((image, index) => (
                  <div
                    key={index}
                    className='flex-shrink-0 w-full h-full snap-center'
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className='w-full h-full object-cover rounded-xl md:rounded-3xl'
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className='flex justify-center items-center gap-4 mt-4'>
              <button onClick={prevSlide} aria-label='Previous slide'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='#34D399'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 19l-7-7 7-7'
                  />
                </svg>
              </button>

              {imageData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    currentSlide === index
                      ? 'bg-emerald-400'
                      : 'bg-[#E6F6F0]/50 hover:bg-[#E6F6F0]/75 border border-black-200'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}

              <button onClick={nextSlide} aria-label='Next slide'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='#34D399'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-center'>
            <div className='mb-2'>
              <svg
                className='w-8 h-8 md:w-12 md:h-12 text-gray-500 dark:text-gray-400 mx-auto transition-colors duration-200'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              ></svg>
            </div>

            <h1 className='mt-32 text-3xl md:text-4xl font-bold text-gray-800 dark:text-white transition-colors duration-200'>
              Contact
            </h1>
            <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
          </div>
        </div>

        <div className='text-center mt-32 md:mt-30 px-4'>
          <p className='text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200'>
            The best way to get in touch is to either DM me on{' '}
            <a
              href={SocialMedia.LINKEDIN_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-blue-100 dark:bg-blue-900 px-2 py-0.5 rounded transition-colors duration-200 hover:bg-blue-200 dark:hover:bg-blue-800'
            >
              LinkedIn {Author}
            </a>
            <br />
            or send me an email
            <br />
            <span className='text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200 transition-colors duration-200 block mt-2'>
              <EmailAddressDisplay />
            </span>
          </p>

          <div className='flex justify-center gap-2 text-sm md:text-base flex-wrap'>
            <a
              href={EmailAddressForMailTo}
              className='bg-pink-100 dark:bg-pink-900 px-3 py-1 rounded transition-colors duration-200'
            >
              Email
            </a>
            <span className='dark:text-gray-300'>•</span>
            <a
              href={SocialMedia.LINKEDIN_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded transition-colors duration-200 hover:bg-blue-200 dark:hover:bg-blue-800'
            >
              LinkedIn
            </a>
            <span className='dark:text-gray-300'>•</span>
            <a
              href={SocialMedia.GITHUB_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-green-100 dark:bg-green-900 px-3 py-1 rounded transition-colors duration-200'
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
