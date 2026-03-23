import { M_PLUS_1 } from "next/font/google";
import AngledRectangle from "../components/AngledRectangle/AngledRectangle";
import Button from "../components/Button/Button";
import ImageStack from "../components/ImageStack/ImageStack";
import styles from "./page.module.css";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://db.ieee-esb.org");

type EventData = {
	id: string;
	title: string;
	description: string;
	when: Date;
	where: string;
	who: string[];
	image: string;
	link: string;
};

async function EventCard({ event }: { event?: EventData }) {
	let pic = await pb
		.collection("leads")
		.getList(1, 1, {
			filter: `userId = "${event?.who?.[0] || "-1"}"`,
			requestKey: null,
		})
		.then((user) => {
			return user?.items?.[0]?.avatar
				? `https://db.ieee-esb.org/api/files/leads/${user.items[0].id}/${user.items[0].avatar}`
				: "/missing.webp";
		});

	return (
		<a
			className={`${styles.eventContainer} lg:w-1/3`}
			href={event?.link}
			target="_blank"
		>
			<div className={styles.eventHead}>
				<img src={pic || "/missing.webp"} className={styles.eventLead} />
				<img
					src={event?.image || "/under_construction.png"}
					className={styles.eventPic}
				/>
			</div>
			<div className={styles.eventBody}>
				<h3>{event?.title ?? "TBD"}</h3>
				<p>{event?.description ?? ""}</p>
				<ul>
					<li>WHEN: {event?.when.toLocaleDateString() ?? "TBD"}</li>
					<li>LOCATION: {event?.where ?? "TBD"}</li>
				</ul>
			</div>
		</a>
	);
}

export default async function Events() {
	const baseFileURL = "https://db.ieee-esb.org/api/files/events/";

	const DBevents = await pb.collection("events").getList(1, 5, {
		sort: "-when",
	});

	const events = DBevents.items.map((event) => {
		let newevent: EventData = {
			id: event["id"] as string,
			title: event["title"] as string,
			description: event["description"] as string,
			when: new Date(event["when"] as string),
			where: event["where"] as string,
			who: event["who"] as string[],
			image: event["image"]
				? baseFileURL + event["id"] + "/" + event["image"]
				: ("" as string),
			link: event["vlink"],
		};
		if (newevent.description.length > 150)
			newevent.description = newevent.description.slice(0, 150) + "...";
		return newevent;
	});

	const mainEvent = events[0];

	return (
		<div>
			<AngledRectangle color="yellow" textColor="white" flipped={true}>
				<h1>WORKSHOPS & COMPETITIONS</h1>
			</AngledRectangle>
			<AngledRectangle color="white" textColor="blue">
				<div className="max-lg:flex-col lg:flex justify-center items-center">
					<a
						href={mainEvent.link}
						target="_blank"
						className={`${styles.mainEventContainer} w-full max-lg:hidden`}
					>
						<div className={`${styles.mainEventBody} lg:flex max-lg:hidden`}>
							<h3>{mainEvent.title}</h3>
							<p>{mainEvent.description}</p>
							<ul>
								<li>WHEN: {mainEvent.when.getDate()}</li>
								<li>LOCATION: {mainEvent.where}</li>
							</ul>
						</div>
						<div className={`${styles.mainEventHead} max-lg:hidden`}>
							<img
								src={await pb
									.collection("leads")
									.getList(1, 1, {
										filter: `userId = "${mainEvent.who?.[0] || "-1"}"`,
										requestKey: null,
									})
									.then((user) => {
										return user?.items?.[0]?.avatar
											? `https://db.ieee-esb.org/api/files/leads/${user.items[0].id}/${user.items[0].avatar}`
											: "/missing.webp";
									})}
								className={styles.mainEventLead}
							/>
							<img
								src={mainEvent.image || "/under_construction.png"}
								className={styles.mainEventPic}
							/>
						</div>
					</a>
					<div className={"lg:hidden"}>
						<EventCard event={events[0]} />
					</div>
				</div>
				<div className="container flex lg:justify-evenly max-lg:flex-col items-center">
					<EventCard event={events[1]} />
					<EventCard event={events[2]} />
				</div>
				<div className="container flex lg:justify-evenly max-lg:flex-col items-center">
					<EventCard event={events[3]} />
					<EventCard event={events[4]} />
				</div>
			</AngledRectangle>
			<div className={styles.compLine} />
			<div className={styles.compContainer}>
				<h2 className="max-md:hidden text-8xl text-center">
					UPCOMING COMPETITIONS
				</h2>
				<h2 className="max-md:text-4xl text-8xl text-center">
					UPCOMING COMPETITIONS
				</h2>
				<h2 className="max-md:hidden text-8xl text-center">
					UPCOMING COMPETITIONS
				</h2>
			</div>
			<ImageStack
				image1="hero.jpg"
				image2="hero.jpg"
				image3="hero.jpg"
				position={[3, 15]}
				flipped={true}
			/>
			<AngledRectangle color="white" textColor="blue" flipped={true}>
				<div className={styles.r5container}>
					<div className={styles.r5body}>
						<img className={styles.r5logo} src="region-5.webp" />
						<ul className={styles.r5date}>
							<li>Date: April 4-6, 2025</li>
							<li>Location: Witchita, Kansas</li>
							<li>Region: IEEE Region 5 - Central U.S.</li>
						</ul>
						<p>
							The IEEE Region 5 student competitions bring together students
							from across the central U.S. to showcase their skills, creativity,
							and innovation. Participants compete in technical, ethical, and
							design challenges. They also develop professional skills while
							connecting with peers and industry professionals.
						</p>
						<div className={styles.r5comps}>
							<img src="/hero.jpg" />
							<div>
								<h3>Competitions:</h3>
								<ul>
									<li>Robotics</li>
									<li>Circuits</li>
									<li>Ethics</li>
									<li>Cyber Security</li>
									<li>3 Minute Thesis</li>
									<li>Branch Website</li>
								</ul>
								<div className={styles.r5button}>
									<Button
										text="LEARN MORE"
										href="https://r5conferences.org"
										target="_blank"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</AngledRectangle>
			<ImageStack
				image1="hero.jpg"
				image2="hero.jpg"
				image3="hero.jpg"
				position={[7, 50]}
			/>
			<AngledRectangle color="yellow" textColor="blue">
				<div className={styles.xtremeContainer}>
					<div className={styles.xtremeBody}>
						<img className={styles.xtremeLogo} src="xtreme_logo.png" />
						<ul className={styles.xtremeDate}>
							<li>Date: October 25, 2025 (October 24, 2025)</li>
							<li>Time: 00:00 UTC (7:00 PM CDT)</li>
							<li>Registration Deadline: October 21, 2025</li>
						</ul>
						<p>
							IEEE Xtreme is a global, 24-hour online programming competition
							where teams of IEEE student members solve a series of challenging
							problems to test their coding and critical thinking skills.
						</p>
					</div>
					<Button
						text="LEARN MORE"
						href="https://ieeextreme.org"
						target="_blank"
					/>
				</div>
			</AngledRectangle>
		</div>
	);
}
