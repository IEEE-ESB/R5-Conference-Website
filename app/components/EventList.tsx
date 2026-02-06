import { EventWithDate } from "./EventCard";
import EventCard from "./EventCard";

interface EventListProps {
  data: EventWithDate[];
}

export default function EventList({ data }: EventListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {data.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
