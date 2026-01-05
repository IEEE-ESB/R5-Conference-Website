import AngledRectangle from "@/app/components/AngledRectangle/AngledRectangle";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div>
      <div className={styles.container}>
        <img src="hero.jpg"/>
        <a target="_blank" href="https://ieee.org" className={`${styles.centered_link} ${styles.container}`}>
          <img src="/ieee_mb_white.png" />
        </a>
      </div>
      <AngledRectangle>
        <h1>About Us</h1>
        <p>
          The Institute of Electrical and Electronics Engineers - Edinburg Student Branch (IEEE ESB) is a dynamic, student-run organization dedicated to fostering innovation, leadership, and hands-on experience in engineering and technology.
        </p>
        <button>Learn More</button>
      </AngledRectangle>
    </div>
	);
}
