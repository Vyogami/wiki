import { Link } from "nextra-theme-docs";
import styles from "./Projects.module.css";
import { Project } from "./Project";
import { projectsData } from "../assets/Projects";

export function Projects() {
  return (
    <div className={styles.root}>
      <h3>Projects</h3>
      <ul className={styles.projects}>
        {projectsData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={
              <>
                {project.description}
                <br />
                <Link href={project.link}>Github →</Link>
              </>
            }
            icon={project.icon}
          />
        ))}
      </ul>
    </div>
  );
}
