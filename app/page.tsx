import AngledRectangle from "@/app/components/AngledRectangle/AngledRectangle";
import Button from "./components/Button/Button";
import styles from "./page.module.css";
import PocketBase from "pocketbase";

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

function EventCard({ event }: { event?: EventData }) {
	return (
		<a href="#" target="_blank" className={`${styles.eventCard}`}>
			<div className={styles.eventImage}>
				<img src={event?.image ?? "/hero.jpg"} alt="" style={{ objectFit: "cover" }} />
			</div>

			<div className={styles.eventInfo}>
				<h2 className={styles.eventTitle}>{event?.title ?? "Event Title"}</h2>
				<p className={styles.eventDescription}>
					{event?.description ?? "Coming soon..."}
				</p>

				<div className={styles.eventDetails}>
					<p>TIME: {event?.when.toLocaleTimeString() ?? "TBD"}</p>
					<p>LOCATION: {event?.where ?? "TBD"}</p>
				</div>
			</div>

			<div className={styles.eventHost}>
				<img src={event?.who[0] ?? "/hero.jpg"} alt="" style={{ objectFit: "cover" }} />
			</div>
		</a>
	);
}

function LeadershipCard({
	name,
	role,
	imageUrl,
}: {
	name: string;
	role: string;
	imageUrl: string;
}) {
	return (
		<div className={styles.card}>
			<div className={styles.imageContainer}>
				<img
					src={imageUrl}
					alt={`${name} - ${role}`}
					className={styles.profileImage}
				/>
			</div>
			<div className={styles.textContainer}>
				<h3 className={styles.role}>{role}</h3>
				<p className={styles.name}>{name}</p>
			</div>
		</div>
	);
}

const pb = new PocketBase("https://db.ieee-esb.org");

export default async function Home() {
	const baseFileURL = "https://db.ieee-esb.org/api/files/events/";

	const DBevents = await pb.collection("events").getList(1, 3, {
		sort: "-when",
	});

	const events = DBevents.items.map((event) => {
		let newevent: EventData = {
			id: event["id"] as string,
			title: event["title"] as string,
			description: event["description"] as string,
			when: new Date(event["when"] as string),
			where: event["where"] as string,
			who: event["who"] ? event["who"] as string[] : ["/kory.png"] as string[],
			image: event["image"]
				? baseFileURL + event["id"] + "/" + event["image"]
				: ("" as string),
			link: event["vlink"],
		};
		if (newevent.description.length > 150)
			newevent.description = newevent.description.slice(0, 150) + "...";
		return newevent;
	});

	return (
		<div>
			<div className={styles.container}>
				<img src="/hero.jpg" className={styles.container_img} />
				<div className={`${styles.centered_link} ${styles.container}`}>
					<a target="_blank" href="https://ieee.org">
						<img src="/ieee_mb_white.png" />
					</a>
				</div>
			</div>
			<AngledRectangle>
				<h1 className={styles.title}>About Us</h1>
				<p className={styles.text}>
					The Institute of Electrical and Electronics Engineers - Edinburg
					Student Branch (IEEE ESB) is a dynamic, student-run organization
					dedicated to fostering innovation, leadership, and hands-on experience
					in engineering and technology.
				</p>
				<Button
					text="Learn More"
					href="/about"
					color="yellow"
					textColor="blue"
				/>
			</AngledRectangle>
			<AngledRectangle flipped={true} color="white" textColor="blue">
				<h1>Upcoming Events</h1>
				<div className="container flex xl:justify-evenly max-xl:flex-col items-center gap-32">
					<EventCard event={events[0]} />
					<EventCard event={events[1]} />
					<EventCard event={events[2]} />
				</div>
				<div className={styles.eventButton}>
					<Button text="See More" href="/events" />
				</div>
			</AngledRectangle>
			<AngledRectangle>
				<div className="container flex lg:justify-center max-lg:flex-col gap-16">
					<div className={styles.aboutContent}>
						<h1>Become A Member</h1>
						<p>
							Ready to take the next step? Membership gives you more than access
							- it's a chance to connect with peers, build skills, and create
							lasting memories. Join us and grow together!
						</p>
						<Button
							href="membership"
							text="join"
							color="white"
							textColor="blue"
						/>
					</div>
					<img
						src="/2024_group_pic.jpeg"
						className={`${styles.contentImg} lg:w-1/2`}
					/>
				</div>
			</AngledRectangle>
			<AngledRectangle flipped={true} color="yellow" textColor="blue">
				<div className="container flex lg:justify-center max-lg:flex-col gap-16">
					<img
						src="/kids_class_presentation.jpg"
						className={`${styles.contentImg} lg:w-1/2`}
					/>
					<div className={styles.aboutContent}>
						<h1>Want To Collaborate?</h1>
						<p>
							UTRGV IEEE teams up with clubs and businesses to host events,
							share knowledge, and drive innovation. If you're interested in
							collaborating, we'd love to hear from you!
						</p>
						<Button
							href="/collaborate"
							text="learn more"
							color="blue"
							textColor="white"
						/>
					</div>
				</div>
			</AngledRectangle>
			<AngledRectangle>
				<h1>Meet Our Team</h1>
				<div className="container flex lg:justify-evenly max-lg:flex-col items-center">
					<LeadershipCard
						name="Diego Sauceda"
						role="President"
						imageUrl="/diego.png"
					/>
					<LeadershipCard
						name="Koriel Lopez"
						role="Vice President"
						imageUrl="/kory.png"
					/>
					<LeadershipCard
						name="Joseph Trevino"
						role="Secretary"
						imageUrl="/joseph.png"
					/>
				</div>
				<Button
					href="/leadership"
					text="learn more"
					color="yellow"
					textColor="blue"
				/>
			</AngledRectangle>
			<div className={styles.locationSection}>
				<div className={styles.mapContainer}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d894.1579292776966!2d-98.17407678034083!3d26.306036498563397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665a249f543dcd1%3A0x3c15a7793a944b1d!2sUTRGV%20Engineering%20Building!5e0!3m2!1sen!2sus!4v1768677751992!5m2!1sen!2sus&zoom=1"
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
					<div className={styles.locationOverlay}>
						<h1 className="text-6xl lg:text-8xl">
							Our <br /> Location
						</h1>
						<p className="text-2xl lg:text-4xl">UTRGV EENGR 2.296</p>
					</div>
				</div>
			</div>
		</div>
	);
}
