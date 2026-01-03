import React from "react";

const FontImport = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap');
      .font-outfit { font-family: 'Outfit', sans-serif; }
    `}
  </style>
);

/* LOCATION CARD (same DNA as SocialCard) */
const LocationCard = ({ image, label, name, colorConfig, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative flex items-center justify-between
        px-6 min-h-[120px]
        rounded-2xl border transition-all duration-300
        bg-gray-600 bg-opacity-0
        backdrop-filter backdrop-blur-sm
        bg-clip-padding
        ${colorConfig.border}
        ${colorConfig.hoverShadow}
        hover:-translate-y-1
      `}
    >
      {/* Gradient tint */}
      <div
        className={`absolute inset-0 rounded-2xl opacity-25 bg-gradient-to-r ${colorConfig.gradient} pointer-events-none`}
      />

      {/* LEFT CONTENT */}
      <div className="flex items-center gap-5 z-10">
        {/* 3D PLANET IMAGE */}
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]"
          />
        </div>

        {/* TEXT */}
        <div className="flex flex-col">
          <span className="text-gray-400 text-s tracking-wide">
            {label}
          </span>
          <span className="text-white text-xl font-semibold">
            {name}
          </span>
        </div>
      </div>

      {/* HOVER ARROW */}
      <div
        className="
          absolute right-6
          w-6 h-[2px]
          bg-white
          opacity-0
          translate-x-[-15px]
          group-hover:opacity-100
          group-hover:translate-x-0
          transition-all duration-500
        "
      >
        <span
          className="
            absolute right-0 top-1/2
            w-2 h-2
            border-t-2 border-r-2 border-white
            rotate-45 -translate-y-1/2
          "
        />
      </div>
    </a>
  );
};

export default function LocationPage() {
  const locations = [
    {
      id: 1,
      name: "Naranpura (Helios)",
      label: "Skillters Center",
      image: "planets/Helios.png",
      href: "https://maps.app.goo.gl/ntJWtdnBEf2VqQ7g7",
      config: {
        border: "border-yellow-400/30",
        hoverShadow: "hover:shadow-[0_0_30px_rgba(253,224,71,0.6)]",
        gradient: "from-yellow-400 to-transparent",
      },
    },
    {
      id: 2,
      name: "Satellite (Jupiter)",
      label: "Skillters Center",
      image: "planets/Jupiter.png",
      href: "https://maps.app.goo.gl/CAUYtmJAyWu4UJaU7",
      config: {
        border: "border-orange-400/30",
        hoverShadow: "hover:shadow-[0_0_30px_rgba(251,146,60,0.6)]",
        gradient: "from-orange-500 to-transparent",
      },
    },
    {
      id: 3,
      name: "Science City (Saturn)",
      label: "Skillters Center",
      image: "planets/Saturn.png",
      href: "https://maps.app.goo.gl/ntJWtdnBEf2VqQ7g7",
      config: {
        border: "border-purple-400/30",
        hoverShadow: "hover:shadow-[0_0_30px_rgba(192,132,252,0.6)]",
        gradient: "from-purple-500 to-transparent",
      },
    },
  ];

  return (
    <div className="min-h-screen w-full relative font-outfit bg-[#0f0f0f] overflow-hidden">
      <FontImport />

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/background.png')" }}
      />
      <div className="absolute inset-0 bg-black/20" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-[620px] mx-auto pt-10 flex flex-col gap-12">

        {/* TOP LOGO CARD */}
        <div className="flex justify-center">
          <div className="relative w-[440px]">
            <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 via-yellow-400 to-red-500 rounded-3xl blur-md opacity-80" />
            <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-10 flex flex-col items-center border border-white/10">
              <img src="/logo.png" alt="Skillters" className="w-20 mb-4" />
              <h1 className="text-3xl font-bold text-white tracking-wide">
                SKILLTERS
              </h1>
            </div>
          </div>
        </div>

        {/* LOCATION CARDS */}
        <div className="grid grid-cols-1 gap-4 px-4">
          {locations.map((loc) => (
            <LocationCard
              key={loc.id}
              image={loc.image}
              label={loc.label}
              name={loc.name}
              colorConfig={loc.config}
              href={loc.href}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
