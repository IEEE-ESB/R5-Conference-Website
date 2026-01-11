import AngledRectangle from "@/app/components/AngledRectangle/AngledRectangle";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div>
			<div className={styles.container}>
				<img src="hero.jpg" className={styles.container_img} />
				<div className={`${styles.centered_link} ${styles.container}`}>
					<a target="_blank" href="https://ieee.org">
						<img src="/ieee_mb_white.png" />
					</a>
				</div>
			</div>
			<AngledRectangle>
				<h1 className={styles.title}>About Us</h1>
				<p className={styles.text}>
					The Institute of Electrical and Electronics Engineers - Edinburg
					Student Branch (IEEE ESB) is a dynamic, student-run organization
					dedicated to fostering innovation, leadership, and hands-on experience
					in engineering and technology.
				</p>
				<div className={styles.container}>
					<a href="/about" className={styles.button}>
						Learn More
					</a>
				</div>
			</AngledRectangle>
			<AngledRectangle flipped={true} color="white" textColor="blue">
				<h1>Upcoming Events</h1>
			</AngledRectangle>
			<AngledRectangle>
				<h1>Become A Member</h1>
			</AngledRectangle>
			<AngledRectangle flipped={true} color="yellow" textColor="blue">
				<h1>Want To Collaborate?</h1>
			</AngledRectangle>
			<AngledRectangle>
				<h1>Meet Our Team</h1>
			</AngledRectangle>
			<AngledRectangle flipped={true} color="white" textColor="blue">
				<h1>Our Location</h1>
			</AngledRectangle>
		</div>
	);
}
