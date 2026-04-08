"use client";

const skills = [
  {
    name: "Python",
    level: 85,
    description: "Data Analysis, Machine Learning, Automation",
  },
  {
    name: "Java",
    level: 75,
    description: "OOP, Desktop Applications, Android Development",
  },
  {
    name: "JavaScript",
    level: 80,
    description: "React, Node.js, Interactive Web Apps",
  },
  {
    name: "HTML",
    level: 90,
    description: "Semantic HTML, Accessibility, SEO",
  },
  {
    name: "CSS",
    level: 85,
    description: "Responsive Design, Tailwind CSS, Animations",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-mono text-sm tracking-wider mb-2">
            KEAHLIAN
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Bahasa Pemrograman
          </h2>
        </div>

        <div className="space-y-8">
          {skills.map((skill) => (
            <div key={skill.name} className="group">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
                <span className="text-primary font-mono">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
