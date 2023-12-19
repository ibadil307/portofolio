import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "TALENT SCOUTING ACADEMY",
    imgSrc: "project-imgs/projek.png",
    code: "https://www.github.com",
    projectLink: "#",
    tech: ["Network"],
    description:
      "Pelopor Teknisi Jaringan Membangun Desa di Kantor Desa Kayu Abang.",
    modalContent: (
      <>
        <p>
          Pelopor Teknisi Jaringan Membangun Desa di Kantor Desa Kayu Abang.
        </p>
      </>
    ),
  },
];
