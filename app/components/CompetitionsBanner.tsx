export default function CompetitionsBanner() {
  return (
    <div className="relative w-screen overflow-hidden" style={{ marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}>
      {/* Dark blue background */}
      <div className="relative bg-blue min-h-[400px] md:min-h-[500px] overflow-hidden">
        {/* Yellow diagonal stripe at top - slimmer and slanty */}
        <div
          className="absolute top-0 left-0 bg-yellow"
          style={{
            width: "100%",
            height: "48px",
            clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)",
          }}
        />

        {/* Text content - "UPCOMING COMPETITIONS" repeated - centered */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[400px] md:min-h-[500px]">
          <div className="space-y-4 md:space-y-6">
            {/* First line */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-center"
              style={{
                WebkitTextStroke: "3px #ffc72c",
                WebkitTextFillColor: "transparent",
                textStroke: "3px #ffc72c",
                color: "transparent",
                transform: "rotate(-2deg)",
                letterSpacing: "0.1em",
              }}
            >
              UPCOMING COMPETITIONS
            </h1>

            {/* Second line */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-center"
              style={{
                WebkitTextStroke: "3px #ffc72c",
                WebkitTextFillColor: "transparent",
                textStroke: "3px #ffc72c",
                color: "transparent",
                transform: "rotate(-1deg)",
                letterSpacing: "0.1em",
              }}
            >
              UPCOMING COMPETITIONS
            </h1>

            {/* Third line */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-center"
              style={{
                WebkitTextStroke: "3px #ffc72c",
                WebkitTextFillColor: "transparent",
                textStroke: "3px #ffc72c",
                color: "transparent",
                transform: "rotate(-1.5deg)",
                letterSpacing: "0.1em",
              }}
            >
              UPCOMING COMPETITIONS
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
