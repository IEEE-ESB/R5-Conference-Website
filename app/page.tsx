import AngledRectangle from "@/app/components/AngledRectangle/AngledRectangle";

export default function Home() {
	return (
		<div>
			<AngledRectangle color="blue">
				<h1>ABOUT US</h1>
				<p>
					The Institute of Electrical and Electronics Engineers - Edinburg
					Student Branch (IEEE ESB) is a dynamic, student-run organization
					dedicated to fostering innovation, leadership, and hands-on experience
					in engineering and technology.
				</p>
				<button>LEARN MORE</button>
			</AngledRectangle>
			<AngledRectangle flipped={true} color="white">
				<h1>ABOUT US</h1>
				<p>
					The Institute of Electrical and Electronics Engineers - Edinburg
					Student Branch (IEEE ESB) is a dynamic, student-run organization
					dedicated to fostering innovation, leadership, and hands-on experience
					in engineering and technology.
				</p>
				<button>LEARN MORE</button>
			</AngledRectangle>
			<AngledRectangle color="yellow">
				<h1>ABOUT US</h1>
				<p>
					The Institute of Electrical and Electronics Engineers - Edinburg
					Student Branch (IEEE ESB) is a dynamic, student-run organization
					dedicated to fostering innovation, leadership, and hands-on experience
					in engineering and technology.
				</p>
				<button>LEARN MORE</button>
			</AngledRectangle>
		</div>
	);
}
