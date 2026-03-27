import AngledRectangle from "../components/AngledRectangle/AngledRectangle";
import styles from "./page.module.css";

export default function About() {
	return (
		<div>
			<div className={styles.container}>
				<img
					src="/members.jpg"
					className={styles.container_img2 + " xl:h-150 md:h-100 h-50"}
				></img>
			</div>
			<AngledRectangle>
				<h1 className={styles.title}>Become A Member</h1>
				<p className="text-3xl">
					We are open to students from all majors, IEEE ESB places a special
					emphasis on those pursuing electrical and computer engineering. We aim
					to build a collaborative environment where students can expand their
					technical knowledge, grow their professional network, and make a real
					impact both on campus and in the wider community.
				</p>
			</AngledRectangle>
			<div className={styles.container + " h-150"}>
				<img src="/question.jpg" className={styles.container_img + " h-full"} />
				<div className={styles.darken}>
					<p className="absolute text-xl top-30 px-5 lg:w-1/2 md:w-2/3">
						Need help with coursework or your senior design project? We've got
						your back. And when it's your turn to give back, you can join us in
						building partnerships and running fundraisers that make a difference
						in our community. Try us for a semester you'll see why many stay for
						life. From your first meeting to your alumni years, the skills,
						connections, and experiences you gain here will follow you
						throughout your career.
					</p>
				</div>
			</div>
			<AngledRectangle flipped={true} color="white">
				<h1 className={`${styles.priceHeader}`}>Memberships</h1>
				<div
					className={`${styles.packageContainer} flex max-md:flex-col max-md:gap-10`}
				>
					<div className={`${styles.packageColumn} `}>
						<h2 className={styles.packageHeader}>Semester</h2>
						<div className={styles.packagePrice}>$10</div>
						<h3 className={styles.packageText}>WORKSHOPS FALL OR SPRING</h3>
					</div>
					<div className={`${styles.packageColumn} `}>
						<h2 className={styles.packageHeader}>YEAR</h2>
						<div className={styles.packagePrice}>$15</div>
						<h3 className={styles.packageText}>WORKSHOPS FALL & SPRING</h3>
					</div>
					<div className={`${styles.packageColumn} `}>
						<h2 className={styles.packageHeader}>YEAR</h2>
						<div className={styles.packagePrice}>$25</div>
						<h3 className={styles.packageText}>
							WORKSHOPS FALL & SPRING
							<br />
							T-Shirt
						</h3>
					</div>
				</div>
			</AngledRectangle>
		</div>
	);
}
