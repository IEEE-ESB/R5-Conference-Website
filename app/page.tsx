import AngledRectangle from "@/app/components/AngledRectangle/AngledRectangle";
import styles from "./page.module.css";

function Event() {
	return (
		<a href="#" className={styles.event}>
			<div>
				<img src="##" />
				<div>
					<h3>Title</h3>
					<p>Description</p>
					<h3>Time:</h3>
					<h3>Location:</h3>
					<h3>Leads:</h3>
				</div>
			</div>
			<img src="#" />
		</a>
	);
}

function EventCard() {
	return (
		<div className={styles.eventCard}>
			<div className={styles.eventImage}>
				<img src="#" alt="" style={{ objectFit: "cover" }} />
			</div>

			<div className={styles.eventInfo}>
				<h2 className={styles.eventTitle}>Test</h2>
				<p className={styles.eventDescription}>Test</p>

				<div className={styles.eventDetails}>
					<p>
						<strong>TIME:</strong>test
					</p>
					<p>
						<strong>LOCATION:</strong> test
					</p>
				</div>
			</div>

			<div className={styles.eventHost}>
				<img src="#" alt="" style={{ objectFit: "cover" }} />
			</div>
		</div>
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
