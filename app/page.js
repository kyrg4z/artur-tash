import Image from "next/image";
import styles from "./page.module.css";
import TechIcons from "@/components/Icons";
import {
  SiAdobephotoshop,
  SiAdobelightroom,
  SiDavinciresolve,
} from "react-icons/si";
import { TbBrandAdobeIllustrator } from "react-icons/tb";
import { executeQuery } from "@/lib/db";
export const revalidate = 10;

export default async function Home() {
  let projects = [];
  let error = null;
  try {
    const result = await executeQuery("SELECT * FROM projects");
    projects = Array.isArray(result?.rows) ? result.rows : [];
  } catch (err) {
    error = err?.message || "Failed to load projects";
  }
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles["nav-content"]}>
          <div className={styles.logo}>AT</div>
          <div className={styles["nav-links"]}>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#work">Work</a>
            <a href="#photography">Photography</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles["hero-content"]}>
          <div className={styles.text}>
            <h1>Artur Tashbolotov</h1>
            <p>Developer • Photographer • CS</p>
          </div>
        </div>
      </section>

      <section id="about" className={styles.section}>
        <h2 className={styles["section-title"]}>About Me</h2>
        <div className={styles.me}>
            <Image src="/left.jpg" width={400} height={600} alt="Left" />
            <Image src="/center.jpg" width={500} height={600} alt="Center" />
            <Image src="/bitmap_rc.jpg" width={400} height={600} alt="Right" />
        </div>

        <div className={styles["about-content"]}>
          <p>
            I&apos;m a curious and driven individual passionate about exploring
            the intersections of STEM, finance, and entrepreneurship. With a
            strong interest in computer science (and cybersecurity) and a knack
            for problem-solving and analytics, I enjoy learning new technologies
            and applying them to real-world challenges. Beyond academics,
            I&apos;m deeply fascinated by history, chess, classic literature,
            and combat sports.
          </p>
        </div>
      </section>

      <section id="skills" className={styles.section}>
        <h2 className={styles["section-title"]}>Skills</h2>
        <div className={styles["skills-grid"]}>
          <div className={styles["skill-card"]}>
            <h3>Development</h3>
            <p>
              Python, Django, SQL, Git/Github, Next.js, React, HTML/CSS, and
              TypeScript.
              <br />
              Experience with <b>Linux, system design</b>, and basic{" "}
              <b>networking concepts</b>.
            </p>
            <TechIcons />
          </div>
          <div className={styles["skill-card"]}>
            <h3>Photography</h3>
            <p>Experience in street, urban, and portrait photography.</p>
          </div>
          <div className={styles["skill-card"]}>
            <h3>Other</h3>
            <p>Photoshop, Lightroom, DaVinci Resolve, and Adobe Illustrator.</p>
            <div className={styles.skillicons}>
              <div>
                <SiAdobephotoshop size={32} color="#000000" />
              </div>
              <div>
                <SiAdobelightroom size={32} color="#000000" />
              </div>
              <div>
                <SiDavinciresolve size={32} color="#000000" />
              </div>
              <div>
                <TbBrandAdobeIllustrator size={32} color="#000000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className={styles.section}>
        <h2 className={styles["section-title"]}>Projects</h2>
        <div className={styles.grid}>
          {error && (
            <div className={styles.card}>
              <div className={styles["card-content"]}>
                <h3>Unable to load projects</h3>
                <p>{error}</p>
              </div>
            </div>
          )}
          {projects.map((project) => (
            <div className={styles.card} key={project.id}>
              <div className={styles["card-content"]}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={500}
                />
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <p>
                  <strong>Technologies:</strong> {project.technologies}
                </p>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <b>Live Demo</b>
                </a>{" "}
                <br />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <b> GitHub</b>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <section id="photography" className={styles.section}>
        <h2 className={styles["section-title"]}>Photography</h2>*/}
        {/* <p className="">Coming soon...</p> */}
        {/* <div className={styles.grid}>
          <div className={styles.card}>
            <Image
              src="/api/placeholder/400/300"
              width={400}
              height={300}
              alt="Project 1"
            />
            <div className={styles["card-content"]}>
              <h3>Trip 1</h3>
              <p></p>
            </div>
          </div>
          <div className={styles.card}>
            <Image
              src="/api/placeholder/400/300"
              width={400}
              height={300}
              alt="Project 2"
            />
            <div className={styles["card-content"]}>
              <h3>Trip 2</h3>
              <p></p>
            </div>
          </div>
        </div> */}
      {/* </section>*/}

      <footer id="contact" className={styles.footer}>
        <p>Get in touch</p>
        <div className={styles["social-links"]}>
          <a href="https://github.com/N1ghtH0wk/">GitHub</a>
          <a href="https://www.linkedin.com/in/artur-tashbolotov-830874318/">
            LinkedIn
          </a>
          <a href="mailto:artostash@gmail.com">artostash@gmail.com</a>
        </div>
      </footer>
    </div>
  );
}
