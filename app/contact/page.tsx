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
					// action="https://api.web3forms.com/submit"
					action="https://formsubmit.co/silverpeltisthebest@gmail.com"
					method="POST"
					className={styles.contactForm}
				>
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
							placeholder="Tittle"
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
							type="text"
							name="email"
							required
						/>
					</div>
					<textarea
						placeholder="Type here..."
						name="comments"
						id={styles.comments}
						required
					></textarea>
					<FormButton
						text="Submit"
						color="yellow"
						textColor="blue"
					></FormButton>
				</form>
			</div>
			<AngledRectangle color="yellow"></AngledRectangle>
		</div>
	);
}
