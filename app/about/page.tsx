import AngledRectangle from "../components/AngledRectangle/AngledRectangle";
import ImageStack from "../components/ImageStack/ImageStack";
import styles from "./page.module.css";

export default function About() {
	return (
		<div>
			<AngledRectangle color="yellow" textColor="blue">
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
				</div>
			</AngledRectangle>
			<ImageStack
				image1="/kids_class_presentation.jpg"
				image2="/kids_class_presentation.jpg"
				image3="/kids_class_presentation.jpg"
				position={[-45, 50]}
			/>
			<AngledRectangle color="white" textColor="blue" flipped={true}>
				<h2 className={styles.missionTitle}>Our Mission</h2>
				<p className={styles.missionContent}>
					Our mission is to empower students through hands-on learning,
					leadership opportunities, and community outreach in engineering and
					technology cultivating the next generation of innovators and
					changemakers.
				</p>
			</AngledRectangle>
			<img src="/hero.jpg" className={styles.video} />
			{/* This will be the video */}
			<AngledRectangle color="blue" textColor="white" flipped={true}>
				<div className={styles.valuesContainer}>
					<div>
						<h2>Our</h2>
						<h2>Values</h2>
					</div>
					<ul>
						<li>
							<h3>Innovation</h3>
							<p>
								We encourage creativity and experimentation in all student-led
								projects.
							</p>
						</li>
						<li>
							<h3>Collaboration</h3>
							<p>We believe in teamwork across disciplines and backgrounds.</p>
						</li>
						<li>
							<h3>Community Engagement</h3>
							<p>
								We are committed to serving and inspiring our local community,
								especially the next generation.
							</p>
						</li>
						<li>
							<h3>Growth</h3>
							<p>
								We provide resources and experiences that help members grow
								technically, professionally, and personally.
							</p>
						</li>
						<li>
							<h3>Leadership</h3>
							<p>
								We nurture student leaders who drive positive change in their
								field and their community.
							</p>
						</li>
					</ul>
				</div>
			</AngledRectangle>
			<img src="/hero.jpg" className={styles.collage} />
		</div>
	);
}
