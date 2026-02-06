import Image from "next/image";
import styles from "@/app/styles.module.css";

export interface EventWithDate {
  id: string;
  title: string;
  description?: string;
  when: Date | null;
  where?: string;
  who: string[];
  image?: string;
  vlink?: string;
}

interface EventCardProps {
  event: EventWithDate;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="border-8 border-blue p-5 rounded-3xl max-w-sm mx-auto" style={{ minHeight: "500px" }}>
      <Image
        src={
          event.image
            ? `https://db.ieee-esb.org/api/files/events/${event.id}/${event.image}`
            : "/under_construction.png"
        }
        alt={event.title}
        width={400}
        height={192}
        className={`w-full h-56 mb-5 ${styles.event_image}`}
      />
      <a
        href={
          event.vlink
            ? event.vlink
            : "https://utrgv.campuslabs.com/engage/organization/ieee"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="text-xl font-bold text-blue hover:text-yellow">
          {event.title}
        </p>
      </a>
      <p className="italic text-blue">
        {event.when
          ? `${event.when.toDateString()} ${event.when.toLocaleTimeString(
              [],
              {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              }
            )}`
          : "Date TBD"}{" "}
        | {event.where ? event.where : "Location TBD"}
      </p>
      <p className="text-yellow">
        Mentors: {event.who.length > 0 ? event.who.join(", ") : "TBD"}
      </p>
      <p className="text-left mt-3">
        {event.description
          ? event.description
          : "We'll announce more details soon!"}
      </p>
    </div>
  );
}
