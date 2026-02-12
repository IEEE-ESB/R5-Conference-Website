import AngledRectangle from "../components/AngledRectangle/AngledRectangle";
import Button from "../components/Button/Button";
import ImageStack from "../components/ImageStack/ImageStack";
import styles from "./page.module.css";

function EventCard() {
	return (
		<a className={styles.eventContainer} href="">
			<div className={styles.eventHead}>
				<img src="/kory.png" className={styles.eventLead} />
				<img src="/hero.jpg" className={styles.eventPic} />
			</div>
			<div className={styles.eventBody}>
				<h3>Sample Workshop</h3>
				<p>
					A workshop with the purpose of being a placeholder for the website to
					see it's design.
				</p>
				<ul>
					<li>WHEN: TBD</li>
					<li>LOCATION: EENGR</li>
				</ul>
			</div>
		</a>
	);
}

export default function About() {
	return (
		<div>
			<AngledRectangle color="yellow" textColor="white">
				<img />
				<h1>WORKSHOPS & COMPETITIONS</h1>
			</AngledRectangle>
			<AngledRectangle color="white" textColor="blue" flipped={true}>
				<a className={styles.mainEventContainer} href="">
					<div className={styles.mainEventBody}>
						<h3>Sample Workshop</h3>
						<p>
							A workshop with the purpose of being a placeholder for the website
							to see it's design.
						</p>
						<ul>
							<li>WHEN: TBD</li>
							<li>LOCATION: EENGR</li>
						</ul>
					</div>
					<div className={styles.mainEventHead}>
						<img src="/kory.png" className={styles.mainEventLead} />
						<img src="/hero.jpg" className={styles.mainEventPic} />
					</div>
				</a>
				<div className={styles.subEvents}>
					<EventCard />
					<EventCard />
				</div>
				<div className={styles.subEvents}>
					<EventCard />
					<EventCard />
				</div>
			</AngledRectangle>
			<div>
				<h2>UPCOMING COMPETITIONS</h2>
				<h2>UPCOMING COMPETITIONS</h2>
				<h2>UPCOMING COMPETITIONS</h2>
			</div>
			<ImageStack
				image1="hero.jpg"
				image2="hero.jpg"
				image3="hero.jpg"
				position={[0, 15]}
				flipped={true}
			/>
			<AngledRectangle color="white" textColor="blue" flipped={true}>
				<div className="r5logo">
					<img src="/hero.jpg" />
				</div>
				<div className={styles.r5container}>
					<div className={styles.r5body}>
						<img className={styles.r5image} />
						<ul className={styles.r5date}>
							<li>Date: April 4-6, 2025</li>
							<li>Location: Witchita, Kansas</li>
							<li>Region: IEEE Region 5 - Central U.S.</li>
						</ul>
						<p>
							The IEEE Region 5 student competitions bring together students
							from across the central U.S. to showcase their skills, creativity,
							and innovation. Participants compete in technical, ethical, and
							design challenges. They also develop professional skills while
							connecting with peers and industry professionals.
						</p>
						<div className={styles.r5comps}>
							<img src="/hero.jpg" />
							<div>
								<h3>Competitions:</h3>
								<ul>
									<li>Robotics</li>
									<li>Circuits</li>
									<li>Ethics</li>
									<li>Cyber Security</li>
									<li>3 Minute Thesis</li>
									<li>Branch Website</li>
								</ul>
								<div className={styles.r5button}>
									<Button text="LEARN MORE" href="https://r5conferences.org" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</AngledRectangle>
			<ImageStack
				image1="hero.jpg"
				image2="hero.jpg"
				image3="hero.jpg"
				position={[0, 0]}
			/>
			<AngledRectangle color="yellow" textColor="blue">
				<div>
					<ul>
						<li>Date: October 25, 2025 (October 24, 2025)</li>
						<li>Time: 00:00 UTC (7:00 PM CDT)</li>
						<li>Registration Deadline: October 21, 2025</li>
					</ul>
					<p>
						IEEE Xtreme is a global, 24-hour online programming competition
						where teams of IEEE student members solve a series of challenging
						problems to test their coding and critical thinking skills.
					</p>
					<Button text="LEARN MORE" href="https://ieeextreme.org" />
				</div>
			</AngledRectangle>
		</div>
	);
}
