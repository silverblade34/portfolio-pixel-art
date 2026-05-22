'use client';

const inventoryCategories = [
  {
    title: "Arsenal Backend",
    colorClass: "text-blue-400",
    items: [
      { name: "Node.js", type: "Scroll of Server", icon: "📜" },
      { name: "NestJS", type: "Architecture Wand", icon: "🪄" },
      { name: "Java", type: "Heavy Armor", icon: "🛡️" },
      { name: "Spring Boot", type: "Divine Shield", icon: "💠" },
      { name: "Python", type: "Scripting Potion", icon: "🧪" }
    ]
  },
  {
    title: "Magia Frontend",
    colorClass: "text-pink-400",
    items: [
      { name: "Next.js", type: "Crystal Ball", icon: "🔮" },
      { name: "React", type: "Amulet of State", icon: "🧿" },
      { name: "Tailwind CSS", type: "Cloak of Styling", icon: "🧥" },
      { name: "Flutter", type: "Boots of Swiftness", icon: "👢" },
    ]
  },
  {
    title: "Artefactos Cloud",
    colorClass: "text-green-400",
    items: [
      { name: "AWS", type: "Cloud Summoning", icon: "☁️" },
      { name: "Docker", type: "Container Magic", icon: "📦" },
      { name: "CI/CD", type: "Time Ring", icon: "⏳" },
    ]
  },
  {
    title: "Reliquias de Datos",
    colorClass: "text-yellow-400",
    items: [
      { name: "PostgreSQL", type: "Tome of Relational", icon: "📘" },
      { name: "MySQL", type: "Codex of Tables", icon: "📕" },
      { name: "Microservicios", type: "Scepter of Division", icon: "🔱" },
      { name: "WebSockets", type: "Orb of Realtime", icon: "⚡" }
    ]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-8 relative bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-6 tracking-widest uppercase">
            Inventario
          </h2>
          <div className="h-1 w-24 bg-white mx-auto mb-2" />
          <div className="h-1 w-16 bg-white mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {inventoryCategories.map((category, index) => (
            <div key={index} className="pixel-box-black p-6 relative">
              <h3 className={`text-xl font-display uppercase tracking-widest mb-8 ${category.colorClass}`}>
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center p-4 border-2 border-white/20 hover:border-white bg-[#111] cursor-crosshair group relative"
                  >
                    <span className="text-4xl mb-2 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] group-hover:scale-125 transition-transform origin-bottom">
                      {item.icon}
                    </span>
                    <span className="text-white font-pixel text-center uppercase tracking-widest text-sm">
                      {item.name}
                    </span>
                    
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black border-4 border-black font-pixel uppercase tracking-widest text-xs px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 shadow-[2px_2px_0_0_rgba(0,0,0,0.5)]">
                      {item.type}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
