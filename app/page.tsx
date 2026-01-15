import AngledRectangle from "@/app/components/AngledRectangle/AngledRectangle";
import Button from "./components/Button/Button";
import styles from "./page.module.css";

function EventCard() {
	return (
		<a href="#" target="_blank" className={styles.eventCard}>
			<div className={styles.eventImage}>
				<img src="hero.jpg" alt="" style={{ objectFit: "cover" }} />
			</div>

			<div className={styles.eventInfo}>
				<h2 className={styles.eventTitle}>Event Title</h2>
				<p className={styles.eventDescription}>
					Nulla labore ea eiusmod ea excepteur minim cillum sunt consequat elit
					sint do duis amet.
				</p>

				<div className={styles.eventDetails}>
					<p>TIME: 5pm 04/01/2067</p>
					<p>LOCATION: UTRGV</p>
				</div>
			</div>

			<div className={styles.eventHost}>
				<img src="hero.jpg" alt="" style={{ objectFit: "cover" }} />
			</div>
		</a>
	);
}

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
				<div className={styles.events}>
					<EventCard />
					<EventCard />
					<EventCard />
				</div>
				<Button text="See More" />
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
