import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "../SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import { Project } from "../../../config/constants"

const projects = [
  {
    name: Project['04'].name,
    description: Project['04'].description,
    image: Project['04'].image,
    github: Project['04'].github,
    link: Project['04'].link,
  },
  {
    name: Project['03'].name,
    description: Project['03'].description,
    image: Project['03'].image,
    github: Project['03'].github,
    link: Project['03'].link,
  },
  {
    name: Project['02'].name,
    description: Project['02'].description,
    image: Project['02'].image,
    github: Project['02'].github,
    link: Project['02'].link,
  },
  {
    name: Project['01'].name,
    description: Project['01'].description,
    image: Project['01'].image,
    github: Project['01'].github,
    link: Project['01'].link,
  }
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {project.github ? (
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      ) : null}
                      {project.link ? (
                        <Link href={project.link} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection
