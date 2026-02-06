import Image from "next/image";
import { EventWithDate } from "./EventCard";

interface FeaturedEventCardProps {
  event: EventWithDate;
  pocketbaseUrl?: string;
}

export default function FeaturedEventCard({ event, pocketbaseUrl = "https://db.ieee-esb.org" }: FeaturedEventCardProps) {
  const imageUrl = event.image
    ? `${pocketbaseUrl}/api/files/events/${event.id}/${event.image}`
    : "/under_construction.png";

  return (
    <div className="relative mb-16">
      {/* Banner with background image and yellow diagonal stripe */}
      <div className="relative w-screen h-64 md:h-80 overflow-hidden" style={{ marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}>
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Yellow diagonal stripe */}
        <div
          className="absolute bottom-0 left-0 w-full h-24 bg-yellow"
          style={{
            clipPath: "polygon(0 30%, 100% 0, 100% 100%, 0 100%)",
          }}
        />
      </div>

      {/* Featured Event Card - positioned to overlap banner */}
      <div className="relative -mt-24 md:-mt-32 mx-auto w-full max-w-4xl">
        <div className="border-8 border-blue rounded-2xl bg-white p-6 md:p-8 shadow-lg overflow-hidden">
          {/* Event Image at top */}
          {event.image && (
            <div className="mb-5 -mx-6 md:-mx-8 -mt-6 md:-mt-8">
              <Image
                src={imageUrl}
                alt={event.title}
                width={800}
                height={300}
                className="w-full h-48 md:h-64 object-cover"
              />
            </div>
          )}
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left side - Event details */}
            <div className="flex-1">
              {event.when && (
                <p className="text-sm text-gray-600 mb-2">
                  {event.when.toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              )}

              <h2 className="text-2xl md:text-3xl font-bold text-blue mb-3">
                {event.title}
              </h2>

              {event.description && (
                <p className="text-base text-gray-700 mb-4">
                  {event.description}
                </p>
              )}

              {event.where && (
                <p className="text-sm text-blue mb-2">
                  📍 {event.where}
                </p>
              )}

              {event.who.length > 0 && (
                <p className="text-sm text-yellow font-semibold">
                  Mentors: {event.who.join(", ")}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
