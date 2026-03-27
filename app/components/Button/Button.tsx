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
	target = ""
}: {
	href?: string;
	text: string;
	color?: "blue" | "white" | "yellow";
	textColor?: "blue" | "white" | "yellow";
	target?: "_blank" | "";
}) {
	return (
		<a
			href={href}
			className={`${styles.button} ${baseColor[color]} ${textColors[textColor]}`}
			target={target}
		>
			{text}
		</a>
	);
}
