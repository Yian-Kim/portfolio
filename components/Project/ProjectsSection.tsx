import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "../SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Portfolio 2019",
    description:
      "Single-page portfolio static website with HTML5, CSS3, JavaScript.",
    image: "./images/Project/portfolio-thumbnail.png",
    github: "https://github.com/Yian-Kim/portfolio/tree/2019",
    link: "https://github.com/Yian-Kim/portfolio/blob/2019/README.md",
  },
  {
    name: "Tramap Basket",
    description:
      "A free travel agency site that packs servlets and JSP-based baskets.",
    image: "./images/Project/tramap-basket-thumbnail.png",
    github: "https://github.com/Yian-Kim/tramap-basket",
    link: "https://github.com/Yian-Kim/Tramap-Basket/blob/main/README.md",
  },
  {
    name: "SEDU Center",
    description:
      "SW Education Center Operation Program Based on Relational Database.",
    image: "./images/Project/sedu-center-thumbnail.png",
    github: "https://github.com/Yian-Kim/sedu-center-thumbnail",
    link: "https://github.com/Yian-Kim/SEDU-Center/blob/main/README.md",
  },
  {
    name: "Jeju Double Dragon Tour",
    description:
      "Jeju Random Matching Travel Schedule Management Program Using Java Collection and File Input/Output.",
    image: "./images/Project/jeju-double-dragon-tour-thumbnail.png",
    github: "https://github.com/Yian-Kim/jeju-double-dragon-tour",
    link: "https://github.com/Yian-Kim/Jeju-Double-Dragon-Tour/blob/main/README.md",
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
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
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
