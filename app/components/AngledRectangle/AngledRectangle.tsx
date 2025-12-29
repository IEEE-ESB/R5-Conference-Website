import styles from "./AngledRectangle.module.css";

export default function AngledRectangle({
	children,
	flipped = false,
	color = "blue",
}: {
	children: React.ReactNode;
	flipped?: boolean;
	color?: "yellow" | "white" | "blue";
}) {
	return (
		<div
			className={`${styles.angled_rectangle} 
						${flipped ? styles.left : styles.right} 
						${color == "yellow" && styles.yellow} 
						${color == "white" && styles.white} 
						${color == "blue" && styles.blue}
			`}
		>
			<div className={styles.angled_content}>{children}</div>
		</div>
	);
}
