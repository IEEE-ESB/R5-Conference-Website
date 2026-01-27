import styles from "./ImageStack.module.css";

export default function ImageStack() {
	return (
		<div className={styles.container}>
			<img
				src="/kids_class_presentation.jpg"
				alt="IEEE Presentation"
				className={`${styles.image1} ${styles.photo}`}
			/>
			<img
				src="/hero.jpg"
				alt="Workshop Activity"
				className={`${styles.image2} ${styles.photo}`}
			/>
			<img
				src="/2024_group_pic.jpeg"
				alt="Team Photo"
				className={`${styles.image3} ${styles.photo}`}
			/>
		</div>
	);
}
