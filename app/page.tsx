import AngledRectangle from "@/app/components/AngledRectangle/AngledRectangle";
import Button from "./components/Button/Button";
import styles from "./page.module.css";

function EventCard() {
	return (
		<a href="#" target="_blank" className={styles.eventCard}>
			<div className={styles.eventImage}>
				<img src="/hero.jpg" alt="" style={{ objectFit: "cover" }} />
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
				<img src="/hero.jpg" alt="" style={{ objectFit: "cover" }} />
			</div>
		</a>
	);
}

function LeadershipCard({
	name,
	role,
	imageUrl,
}: {
	name: string;
	role: string;
	imageUrl: string;
}) {
	return (
		<div className={styles.card}>
			<div className={styles.imageContainer}>
				<img
					src={imageUrl}
					alt={`${name} - ${role}`}
					className={styles.profileImage}
				/>
			</div>
			<div className={styles.textContainer}>
				<h3 className={styles.role}>{role}</h3>
				<p className={styles.name}>{name}</p>
			</div>
		</div>
	);
}

export default function Home() {
	return (
		<div>
			<div className={styles.container}>
				<img src="/hero.jpg" className={styles.container_img} />
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
				<Button
					text="Learn More"
					href="/about"
					color="yellow"
					textColor="blue"
				/>
			</AngledRectangle>
			<AngledRectangle flipped={true} color="white" textColor="blue">
				<h1>Upcoming Events</h1>
				<div className={styles.events}>
					<EventCard />
					<EventCard />
					<EventCard />
				</div>
				<Button text="See More" href="/events" />
			</AngledRectangle>
			<AngledRectangle>
				<div className={styles.aboutFlex}>
					<div className={styles.aboutContent}>
						<h1>Become A Member</h1>
						<p>
							Ready to take the next step? Membership gives you more than access
							- it's a chance to connect with peers, build skills, and create
							lasting memories. Join us and grow together!
						</p>
						<Button
							href="membership"
							text="join"
							color="white"
							textColor="blue"
						/>
					</div>
					<img src="/hero.jpg" width="1000rem" />
				</div>
			</AngledRectangle>
			<AngledRectangle flipped={true} color="yellow" textColor="blue">
				<div className={styles.aboutFlex}>
					<img src="/hero.jpg" width="1000rem" />
					<div className={styles.aboutContent}>
						<h1>Want To Collaborate?</h1>
						<p>
							UTRGV IEEE teams up with clubs and businesses to host events,
							share knowledge, and drive innovation. If you're interested in
							collaborating, we'd love to hear from you!
						</p>
						<Button
							href="/collaborate"
							text="learn more"
							color="blue"
							textColor="white"
						/>
					</div>
				</div>
			</AngledRectangle>
			<AngledRectangle>
				<h1>Meet Our Team</h1>
				<div className={styles.aboutFlex}>
					<LeadershipCard
						name="Diego Sauceda"
						role="President"
						imageUrl="/hero.jpg"
					/>
					<LeadershipCard
						name="Koriel Lopez"
						role="Vice President"
						imageUrl="/hero.jpg"
					/>
					<LeadershipCard
						name="Joseph Trevino"
						role="Secretary"
						imageUrl="/hero.jpg"
					/>
				</div>
				<Button
					href="/leadership"
					text="learn more"
					color="yellow"
					textColor="blue"
				/>
			</AngledRectangle>
			{/* <AngledRectangle flipped={true} color="white" textColor="blue"> */}
			{/* <div className={styles.locationSection}>
				<h1>Our Location</h1>
				<p className={styles.locationSubtitle}>
					EENGR BUILDING AT UNIVERSITY OF TEXAS RIO GRANDE VALLEY
				</p>
				<div className={styles.mapContainer}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d894.1579292776966!2d-98.17407678034083!3d26.306036498563397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665a249f543dcd1%3A0x3c15a7793a944b1d!2sUTRGV%20Engineering%20Building!5e0!3m2!1sen!2sus!4v1768677751992!5m2!1sen!2sus&zoom=1"
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen={false}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</div>
			</div> */}
			{/* </AngledRectangle> */}
			<div className={styles.locationSection}>
				<div className={styles.mapContainer}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d894.1579292776966!2d-98.17407678034083!3d26.306036498563397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665a249f543dcd1%3A0x3c15a7793a944b1d!2sUTRGV%20Engineering%20Building!5e0!3m2!1sen!2sus!4v1768677751992!5m2!1sen!2sus&zoom=1"
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
					<div className={styles.locationOverlay}>
						<h1>Our Location</h1>
						<p className={styles.locationSubtitle}>
							EENGR BUILDING AT UNIVERSITY OF TEXAS RIO GRANDE VALLEY
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
