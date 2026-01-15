import styles from "./Button.module.css";

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

export default function Button({
	href = "#",
	text,
	color = "blue",
	textColor = "white",
}: {
	href?: string;
	text: string;
	color?: "blue" | "yellow";
	textColor?: "blue" | "white" | "yellow";
}) {
	return (
		<a
			href={href}
			className={`${styles.button} ${baseColor[color]} ${textColors[textColor]}`}
		>
			{text}
		</a>
	);
}
