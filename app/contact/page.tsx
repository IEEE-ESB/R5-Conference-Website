import AngledRectangle from "../components/AngledRectangle/AngledRectangle";
import styles from "./page.module.css";

var baseColor = {
	blue: styles.blue,
	white: styles.white,
	yellow: styles.yellow,
};

var textColors = {
	blue: styles.blueText,
	white: styles.whiteText,
	yellow: styles.yellowText,
};

function FormButton({
	text,
	color = "blue",
	textColor = "white",
}: {
	text: string;
	color?: "blue" | "white" | "yellow";
	textColor?: "blue" | "white" | "yellow";
}) {
	return (
		<button
			type="submit"
			className={`${styles.button} ${baseColor[color]} ${textColors[textColor]}`}
		>
			{text}
		</button>
	);
}

export default function About() {
	return (
		<div>
			<div className={styles.container}>
				<img src="/contact-hero.jpeg" className={styles.container_img} />
				<form
					action="https://api.web3forms.com/submit"
					method="POST"
					className={styles.contactForm}
				>
					<input
						type="hidden"
						name="access_key"
						value="b4592f75-b6cd-443d-bbaa-c0e67695c04e"
					/>
					<h1 className={styles.contactTitle}>Contact Us</h1>

					<div className={styles.inputGroup}>
						<label htmlFor="name">Full Name</label>
						<input
							className={styles.input}
							placeholder="Your name..."
							type="text"
							name="name"
							required
						/>
					</div>
					<div className={styles.inputGroup}>
						<label htmlFor="subject">Subject</label>
						<input
							className={styles.input}
							placeholder="Title"
							type="text"
							name="_subject"
							required
						/>
					</div>
					<div className={styles.inputGroup}>
						<label htmlFor="Subject">Email</label>
						<input
							className={styles.input}
							placeholder="Example@yourmail.com"
							type="email"
							name="email"
							required
						/>
					</div>
					<textarea
						placeholder="Type here..."
						name="message"
						id={styles.comments}
						required
					/>
					<FormButton
						text="Submit"
						color="yellow"
						textColor="blue"
					></FormButton>
				</form>
			</div>
			<AngledRectangle color="yellow">
				<div className={styles.spacing}></div>
			</AngledRectangle>
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
						<h1>
							Our <br /> Location
						</h1>
						<p className={styles.locationSubtitle}>UTRGV EENGR 2.296</p>
					</div>
				</div>
			</div>
		</div>
	);
}
