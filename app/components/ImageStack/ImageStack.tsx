import styles from "./ImageStack.module.css";

export default function ImageStack({
	image1,
	image2,
	image3,
	position,
	flipped = false,
}: {
	image1: string;
	image2: string;
	image3: string;
	position: [number, number];
	flipped?: boolean;
}) {
	return (
		<div
			className={styles.container}
			style={
				{
					"--top-position": `${position[0]}rem`,
					"--left-position": `${position[1]}%`,
				} as React.CSSProperties
			}
		>
			<img
				src={image1}
				className={`${styles.image1} ${styles.photo} ${flipped && styles.flipped}`}
			/>
			<img
				src={image2}
				className={`${styles.image2} ${styles.photo} ${flipped && styles.flipped}`}
			/>
			<img
				src={image3}
				className={`${styles.image3} ${styles.photo} ${flipped && styles.flipped}`}
			/>
		</div>
	);
}
