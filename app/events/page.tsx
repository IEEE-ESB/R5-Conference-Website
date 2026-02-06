import PocketBase from "pocketbase";
import FeaturedEventCard from "@/app/components/FeaturedEventCard";
import EventCard from "@/app/components/EventCard";
import WorkshopsBanner from "@/app/components/WorkshopsBanner";
import AngledRectangle from "@/app/components/AngledRectangle/AngledRectangle";
import Button from "@/app/components/Button/Button";
import { EventWithDate } from "@/app/components/EventCard";

interface Event {
  id: string;
  title: string;
  description?: string;
  when?: string;
  where?: string;
  who: string[];
  image?: string;
  vlink?: string;
}

export default async function Events() {
  let future: EventWithDate[] = [];
  let past: EventWithDate[] = [];
  let pocketbaseUrl = "https://db.ieee-esb.org"; // Default fallback

  try {
    // Get PocketBase URL from environment variable
    pocketbaseUrl = process.env.POCKETBASE_URL || "https://db.ieee-esb.org";
    
    if (!process.env.POCKETBASE_URL) {
      console.warn("POCKETBASE_URL environment variable is not set, using default");
    }

    const pb = new PocketBase(pocketbaseUrl);

    // Get all events
    let events = await pb.collection("events").getList<Event>();

    // Get names from users table
    let leaders = new Set<string>();
    events.items.forEach((event) => {
      event.who.forEach((person) => {
        leaders.add(`id='${person}'`);
      });
    });

    const leaderFilters = Array.from(leaders);
    const users = await pb.collection("users").getFullList({
      filter: leaderFilters.join(" || "),
    });

    // Map events to correct users
    const names = new Map(users.map((person) => [person.id, person.name]));
    
    const eventsWithDates: EventWithDate[] = events.items.map((event) => {
      return {
        ...event,
        who: event.who.map((id) => names.get(id) || id),
        when: event.when ? new Date(event.when) : null,
      };
    });

    // Separate events and sort them
    const now = Date.now();
    past = eventsWithDates.filter(
      (item) => item.when && item.when.getTime() < now
    );
    future = eventsWithDates.filter(
      (item) => !item.when || item.when.getTime() >= now
    );

    past.sort((a, b) => {
      if (!a.when) return 1;
      if (!b.when) return -1;
      return a.when.getTime() - b.when.getTime();
    });
    
    future.sort((a, b) => {
      if (!a.when) return 1;
      if (!b.when) return -1;
      return a.when.getTime() - b.when.getTime();
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    return (
      <div className="text-center p-10">
        <p className="text-xl text-red-600">
          Please try again later. Unable to load events.
        </p>
      </div>
    );
  }

  // Categorize events into workshops and competitions based on title
  const categorizeEvent = (event: EventWithDate): "workshop" | "competition" => {
    const title = event.title.toLowerCase();
    // Infer from title keywords
    if (title.includes("competition") || title.includes("contest") || title.includes("challenge") || title.includes("xtreme")) {
      return "competition";
    }
    return "workshop";
  };

  const workshops = future.filter((e) => categorizeEvent(e) === "workshop");
  const competitions = future.filter((e) => categorizeEvent(e) === "competition");

  // Get featured event (first) and remaining events (all remaining) for each category
  const featuredWorkshop = workshops.length > 0 ? workshops[0] : null;
  const remainingWorkshops = workshops.slice(1);
  
  // Debug: Log workshop count
  console.log(`Total workshops: ${workshops.length}, Featured: ${featuredWorkshop ? 1 : 0}, Remaining: ${remainingWorkshops.length}`);

  // For competitions, the first "hero" competition is hard‑coded (not from DB).
  // We still show up to 3 upcoming competitions from PocketBase *after* the static hero.
  const remainingCompetitions = competitions.slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-center flex flex-col gap-10 pt-0 pb-0">
      {/* Workshops Section */}
      <div className="relative -mt-20">
        <WorkshopsBanner />
        
        {/* Position featured event card slightly overlapping the banner */}
        {featuredWorkshop && (
          <div className="relative -mt-32 md:-mt-40 px-8 z-20">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl p-8 md:p-12 shadow-lg overflow-hidden" style={{ backgroundColor: "#002855", minHeight: "300px" }}>
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left side - Text content */}
                  <div className="flex-1">
                    {featuredWorkshop.when && (
                      <p className="text-sm text-white mb-2">
                        {featuredWorkshop.when.toLocaleDateString(undefined, {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }).toUpperCase()}
                      </p>
                    )}
                    <h2 className="text-2xl md:text-3xl font-bold text-yellow mb-3">
                      {featuredWorkshop.title}
                    </h2>
                    {featuredWorkshop.description && (
                      <p className="text-base text-white mb-4">
                        {featuredWorkshop.description}
                      </p>
                    )}
                  </div>
                  
                  {/* Right side - Image */}
                  {featuredWorkshop.image && (
                    <div className="flex-shrink-0 w-full md:w-64">
                      <img
                        src={`${pocketbaseUrl}/api/files/events/${featuredWorkshop.id}/${featuredWorkshop.image}`}
                        alt={featuredWorkshop.title}
                        className="w-full h-48 md:h-full object-cover rounded-lg"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="px-8">
          {featuredWorkshop ? (
            <>
              {remainingWorkshops.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 max-w-6xl mx-auto">
                  {remainingWorkshops.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              )}
            </>
          ) : (
            <p className="text-lg text-gray-600">No upcoming workshops, check again soon!</p>
          )}
        </div>
      </div>
      
      {/* Upcoming Competitions Section */}
      <div>
        <div style={{ clipPath: "polygon(0 15%, 100% 0%, 100% 85%, 0 100%)", overflow: "hidden" }}>
          <div style={{ clipPath: "polygon(0 15%, 100% 0%, 100% 85%, 0 100%)" }}>
            <AngledRectangle color="blue" textColor="yellow" flipped={true}>
          <div className="space-y-1 md:space-y-2" style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.15em] text-center"
              style={{
                WebkitTextStroke: "3px #ffc72c",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                transform: "rotate(-1deg)",
              }}
            >
              UPCOMING COMPETITIONS
            </h1>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.15em] text-center"
              style={{
                WebkitTextStroke: "3px #ffc72c",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                transform: "rotate(-0.5deg)",
              }}
            >
              UPCOMING COMPETITIONS
            </h1>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.15em] text-center"
              style={{
                WebkitTextStroke: "3px #ffc72c",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                transform: "rotate(-1deg)",
              }}
            >
              UPCOMING COMPETITIONS
            </h1>
          </div>
        </AngledRectangle>
          </div>
        </div>

        {/* Static hero competition section – NOT from the database */}
        <section className="mt-16 mb-16 px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start text-left">
          {/* Left: image collage */}
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl shadow-lg overflow-hidden border-4 border-white">
              <img
                src="/hero.jpg"
                alt="IEEE Region 5 Competition team"
                className="w-full h-56 md:h-64 object-cover"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1 rounded-2xl shadow-lg overflow-hidden border-4 border-white rotate-[-3deg]">
                <img
                  src="/hero.jpg"
                  alt="IEEE Region 5 Competition group"
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="flex-1 rounded-2xl shadow-lg overflow-hidden border-4 border-white rotate-[2deg]">
                <img
                  src="/hero.jpg"
                  alt="IEEE Region 5 Competition awards"
                  className="w-full h-40 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: text content */}
          <div className="flex flex-col gap-4">
            {/* IEEE Region 5 Logo */}
            <div className="text-left mb-4" style={{ marginLeft: "20rem" }}>
              <div className="inline-block" style={{ fontFamily: "sans-serif" }}>
                <div className="text-4xl md:text-5xl font-extrabold" style={{ color: "#002855" }}>IEEE</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-extrabold" style={{ color: "#002855" }}>Region</span>
                  <span className="text-4xl md:text-5xl font-extrabold" style={{ color: "#002855" }}>5</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2 text-base md:text-lg" style={{ color: "#ffc72c" }}>
              <p className="font-bold">
                📅 Date: <span className="font-normal">April 4–6, 2025</span>
              </p>
              <p className="font-bold">
                📍 Location: <span className="font-normal">Houston, Texas</span>
              </p>
              <p className="font-bold">
                🌐 Region: <span className="font-normal">IEEE Region 5 — Central U.S.</span>
              </p>
            </div>

            <p className="text-base md:text-lg" style={{ color: "#002855" }}>
              The IEEE Region 5 Student Competitions bring together students from across
              the central U.S. to showcase their skills, creativity, and innovation.
              Participants compete in technical, ethical, and design challenges,
              develop professional skills, and connect with peers and industry
              professionals.
            </p>

            <div className="text-left" style={{ marginLeft: "20rem" }}>
              <h2 className="font-extrabold mb-2 tracking-wide text-base md:text-lg" style={{ color: "#ffc72c" }}>
                COMPETITION:
              </h2>
              <ul className="space-y-1 text-base md:text-lg" style={{ color: "#ffc72c" }}>
                <li>🤖 Robotics Competition</li>
                <li>⚡ Circuits Competition</li>
                <li>💬 Ethics Competition</li>
                <li>⚙️ Cyber Challenge</li>
                <li>🛡️ Ethics Competition</li>
                <li>💻 Website Design</li>
              </ul>
            </div>

            <div className="mt-4">
              <Button
                href="https://r5conferences.org"
                text="LEARN MORE"
                color="yellow"
                textColor="blue"
              />
            </div>
          </div>
        </section>

        {/* Second static upcoming competition: IEEEXtreme */}
        <section style={{ marginTop: "4rem", marginBottom: "-5rem" }}>
          <div
            className="relative w-full"
            style={{
              background: "var(--yellow)",
              clipPath: "polygon(0 0, 100% 5%, 100% 90%, 0 100%)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center" style={{ padding: "6rem 8% 14rem", color: "var(--blue)" }}>
              {/* Left: text content */}
              <div className="text-left space-y-4">
                <div className="space-y-1 text-sm md:text-base">
                  <p className="font-semibold">
                    Date: <span className="font-normal">October 25, 2025</span>
                  </p>
                  <p className="font-semibold">
                    Time:{" "}
                    <span className="font-normal">
                      00:00 UTC (which is 7:00 PM CDT on October 24, 2025, in
                      Edinburg, Texas)
                    </span>
                  </p>
                  <p className="font-semibold">
                    Registration Deadline:{" "}
                    <span className="font-normal">October 21, 2025</span>
                  </p>
                </div>

                <p className="text-sm md:text-base">
                  IEEE Xtreme is a global, 24-hour online programming
                  competition where teams of IEEE Student Members, advised and
                  proctored by IEEE members, solve a series of challenging
                  problems to test their coding and problem‑solving skills.
                </p>

                <div className="mt-10 flex justify-center">
                  <Button
                    href="https://ieeextreme.org"
                    text="LEARN MORE"
                    color="blue"
                    textColor="yellow"
                  />
                </div>
              </div>

              {/* Right: image collage */}
              <div className="flex flex-col gap-4 items-center">
                <div className="w-full max-w-md rounded-2xl shadow-lg overflow-hidden border-4 border-white rotate-[-3deg]">
                  <img
                    src="/hero.jpg"
                    alt="IEEE Xtreme team working together"
                    className="w-full h-48 md:h-56 object-cover"
                  />
                </div>
                <div className="w-full max-w-md rounded-2xl shadow-lg overflow-hidden border-4 border-white rotate-[2deg]">
                  <img
                    src="/hero.jpg"
                    alt="IEEE Xtreme programming session"
                    className="w-full h-48 md:h-56 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Spacer to ensure footer connects */}
        <div style={{ height: 0, margin: 0, padding: 0, lineHeight: 0 }} />

        {/* Remaining upcoming competitions from PocketBase */}
        {remainingCompetitions.length > 0 && (
          <div className="px-8 flex flex-wrap justify-center gap-5 mt-12">
            {remainingCompetitions.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
