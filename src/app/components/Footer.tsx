import React from "react"
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin } from "react-icons/ai"
import { SiTistory } from "react-icons/si"
import { FaDev } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import { Author, SocialMedia } from "../../../src/config/constants";

const Footer = () => {
  const { GITHUB_URL, LINKEDIN_URL, TISTORY_URL, DEV_COMMUNITY_URL, THREADS_URL, TWITTER_URL } = SocialMedia;

  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © 2024 {Author}<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
        <a href={GITHUB_URL} rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href={LINKEDIN_URL}
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href={TISTORY_URL}
            rel="noreferrer"
            target="_blank"
          >
            <SiTistory
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={23}
            />
          </a>
          <a
            href={DEV_COMMUNITY_URL}
            rel="noreferrer"
            target="_blank"
          >
            <FaDev
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={27}
            />
          </a>
          <a
            href={THREADS_URL}
            rel="noreferrer"
            target="_blank"
          >
            <BsFillThreadsFill
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={25}
            />
          </a>
          <a
            href={TWITTER_URL}
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
