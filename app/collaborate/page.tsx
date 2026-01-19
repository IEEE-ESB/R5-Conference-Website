import AngledRectangle from "../components/AngledRectangle/AngledRectangle"
import styles from "./page.module.css"
export default function Collaborate() {
  return <div>
    <div className={styles.container}>
      <img src="/collaborate-hero.jpg" alt="Picture of a Lecture Hall with students" className={styles.container_img} />
      <h1 className={styles.container_header}>WANT TO <br /> COLLABORATE?</h1>
    </div>
    <AngledRectangle>
      <p className={styles.text}>
        While the University of Texas Rio Grande Valley provides laboratory space and facilities for our projects, the majority of IEEE ESB’s funding is generated through our own fundraising efforts. To continue supporting our mission of fostering innovation and professional development, we welcome contributions in the form of monetary donations, donated materials, or services. Contributions are invaluable in helping us cover expenses for workshops, outreach events, student competitions, and other activities that directly benefit our members.
      </p>
    </AngledRectangle>
    <AngledRectangle flipped={true} color="white">
      <h1 className={styles.header}>COLLABORATE OPTIONS</h1>
      <div className={styles.list}>
        <div className={styles.row}>
          <div className={styles.bullet}>1</div>
          <div className={styles.textContainer}>
            <h3 className={styles.rowHeader}>Exclusive Discounts or Revenue Sharing</h3>
            <p className={styles.rowText}>Offer limited-time discounts or share a percentage of profits with our organization. In return, we'll direct our members to explore and support your business</p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.bullet}>2</div>
          <div className={styles.textContainer}>
            <h3 className={styles.rowHeader}>Product Donations</h3>
            <p className={styles.rowText}>Contribute your products to our students or events and receive exposure and recognition across our social media platforms and event promotions.</p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.bullet}>3</div>
          <div className={styles.textContainer}>
            <h3 className={styles.rowHeader}>Collaborative Projects</h3>
            <p className={styles.rowText}>Partner with us on a mutually agreed-upon project, with monetary compensation provided, allowing us to deliver value tailored to your business goals.</p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.bullet}>4</div>
          <div className={styles.textContainer}>
            <h3 className={styles.rowHeader}>Monetary Contributions</h3>
            <p className={styles.rowText}>Provide financial support to our organization in exchange for exposure, social media shoutouts, and the opportunity to feature your logo on our website, event materials, or product.</p>
          </div>
        </div>
      </div>
    </AngledRectangle>
  </div >
}
