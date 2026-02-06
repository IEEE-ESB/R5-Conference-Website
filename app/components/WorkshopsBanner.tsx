export default function WorkshopsBanner() {
    return (
      <div className="relative w-full overflow-hidden" style={{ margin: "-5rem 0 0 0", padding: "5rem 0" }}>
        {/* Yellow slanted background - only at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            backgroundColor: "#ffc72c",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            height: "150px",
            zIndex: 1,
          }}
        />
        
        {/* Image layer with clip-path */}
        <div 
          className="relative"
          style={{
            clipPath: "polygon(0 0, 100% 5%, 100% 95%, 0 100%)",
            backgroundImage: `url(/hero.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(2px)",
            minHeight: "500px",
            zIndex: 2,
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />
    
          {/* Title */}
          <div className="relative z-10 flex items-center justify-center" style={{ minHeight: "500px", padding: "5rem 5%" }}>
            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-center"
              style={{
                WebkitTextStroke: "4px #ffc72c",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.15em",
                textShadow: "0 0 20px rgba(255, 199, 44, 0.3)",
              }}
            >
              WORKSHOPS
            </h1>
          </div>
        </div>
      </div>
    );
  }