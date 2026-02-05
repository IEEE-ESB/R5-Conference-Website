import styles from "./page.module.css";
import AngledRectangle from "../components/AngledRectangle/AngledRectangle";

function Profile({
  imgUrl,
  position,
  name,
}: {
  imgUrl: string;
  position: string;
  name: string;
}) {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileImgContainer}>
        <img src={imgUrl} className={styles.profileImg} />
      </div>
      <p className={styles.profilePosition}>{position}</p>
      <p className={styles.profileName}>{name}</p>
    </div>
  );
}

export default function About() {
  return (
    <div>
      <AngledRectangle color="white" textColor="blue">
        <div className={styles.sectionTitle}>
          <h2>Executive Commitee</h2>
        </div>
        <div className={styles.sectionContainer}>
          <Profile imgUrl="/diego.png" position="President" name="Diego S." />
          <Profile
            imgUrl="/kory.png"
            position="Vice President"
            name="Kory L."
          />
          <Profile imgUrl="/kory.png" position="Treasurer" name="Trinity R." />
        </div>
        <div className={styles.sectionContainer2}>
          <Profile imgUrl="/kory.png" position="Secretary" name="Joseph T." />
          <Profile
            imgUrl="/kory.png"
            position="Master At Arms"
            name="Jose A."
          />
        </div>
      </AngledRectangle>

      <AngledRectangle flipped textColor="yellow">
        <div className={styles.sectionTitle}>
          <h2>Officer Board</h2>
        </div>
        <div className={styles.sectionContainer}>
          <Profile
            imgUrl="/kory.png"
            position="Program Director"
            name="Danny D."
          />
          <Profile
            imgUrl="/joseph.png"
            position="Social Media Manager"
            name="Joey R."
          />
          <Profile
            imgUrl="/kory.png"
            position="Fundraising"
            name="Sebastain G."
          />
          <Profile
            imgUrl="/joseph.png"
            position="Creative Director"
            name="Gyselle G."
          />
          <Profile
            imgUrl="/kory.png"
            position="Project Director"
            name="Lauro C."
          />
          <Profile imgUrl="/joseph.png" position="Webmaster" name="Bukola A." />
        </div>
      </AngledRectangle>

      <AngledRectangle color="yellow" textColor="blue">
        <div className={styles.sectionTitle}>
          <h2>Faculty</h2>
        </div>
        <div className={styles.sectionContainer2}>
          <Profile
            imgUrl="/diego.png"
            position="Advisor"
            name="Carlos Rodriguez Betancourth"
          />
          <Profile
            imgUrl="/diego.png"
            position="Advisor"
            name="Luis Castanuela"
          />
        </div>
      </AngledRectangle>
    </div>
  );
}
