import styles from "./Button.module.css";

export default function Button({
	href = "#",
	text,
	color = "blue",
}: {
	href?: string;
	text: string;
	color?: "blue" | "white" | "yellow";
}) {
	return (
		<a
			href={href}
			className={`${styles.button} 
        ${
					color == "blue"
						? styles.blue
						: color == "white"
						? styles.white
						: styles.yellow
				}`}
		>
			{text}
		</a>
	);
}
