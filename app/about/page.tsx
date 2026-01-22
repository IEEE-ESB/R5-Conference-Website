import AngledRectangle from "../components/AngledRectangle/AngledRectangle";
import styles from "./page.module.css";

export default function About() {
	return (
		<div>
			<AngledRectangle color="yellow" textColor="white">
				<div className={styles.aboutContainer}>
					<div>
						<h1>About Us</h1>
						<p>
							The Institute of Electrical and Electronics Engineers - Edinburg
							Student Branch (IEEE ESB) is a dynamic, student-run organization
							dedicated to fostering innovation, leadership, and hands-on
							experience in engineering and technology
						</p>
						<p>
							We are open to students from all majors, IEEE ESB places a special
							emphasis on those pursuing electrical and computer engineering. We
							aim to build a collaborative environment where students can expand
							their technical knowledge, grow their professional network, and
							make a real impact both on campus and in the wider community.
						</p>
					</div>
					<img />
				</div>
			</AngledRectangle>
			<AngledRectangle color="white" textColor="blue" flipped={true}>
				<h2>Our Mission</h2>
				<p>
					Our mission is to empower students through hands-on learning,
					leadership opportunities, and community outreach in engineering and
					technology cultivating the next generation of innovators and
					changemakers.
				</p>
			</AngledRectangle>
			<AngledRectangle color="yellow">
				<img /> {/* This will be the video */}
			</AngledRectangle>
			<AngledRectangle color="blue" textColor="white" flipped={true}>
				<div className={styles.valuesContainer}>
					<h2>Our Values</h2>
					<ul>
						<li>
							<p>Innovation</p>
							<p>
								We encourage creativity and experimentation in all student-led
								projects.
							</p>
						</li>
						<li>
							<p>Collaboration</p>
							<p>We believe in teamwork across disciplines and backgrounds.</p>
						</li>
						<li>
							<p>Community Engagement</p>
							<p>
								We are committed to serving and inspiring our local community,
								especially the next generation.
							</p>
						</li>
						<li>
							<p>Growth</p>
							<p>
								We provide resources and experiences that help members grow
								technically, professionally, and personally.
							</p>
						</li>
						<li>
							<p>Leadership</p>
							<p>
								We nurture student leaders who drive positive change in their
								field and their community.
							</p>
						</li>
					</ul>
				</div>
			</AngledRectangle>
			<AngledRectangle color="white">
				<img />
			</AngledRectangle>
		</div>
	);
}
