import styles from "./AngledRectangle.module.css";

export default function AngledRectangle({
	children,
	flipped = false,
	color = "blue",
	textColor = "white",
}: {
	children: React.ReactNode;
	flipped?: boolean;
	color?: "yellow" | "white" | "blue";
	textColor?: "yellow" | "white" | "blue";
}) {
	return (
		<div
			className={`${styles.angled_rectangle} 
						${flipped ? styles.left : styles.right} 
						${color == "yellow" && styles.yellow} 
						${color == "white" && styles.white} 
						${color == "blue" && styles.blue}
            ${textColor == "yellow" && styles.text_yellow} 
						${textColor == "white" && styles.text_white} 
						${textColor == "blue" && styles.text_blue}

			`}
		>
			<div className={styles.angled_content}>{children}</div>
		</div>
	);
}
