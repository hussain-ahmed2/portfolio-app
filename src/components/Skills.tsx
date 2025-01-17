type Skill = {
  category: string,
  items: string[]
}

const Skills = () => {

  const skills: Skill[] = [
    {
      category: "Languages",
      items: ["Python", "Java", "C++", "PHP", "TypeScript"],
    },
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    },
    { category: "Backend", items: ["Node.js", "Express", "MySQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Figma"] },
  ];

  return (
    <section
      id="skills"
      className="rounded-xl min-h-screen max-xl:mx-2 p-2 pt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skills.map((skillSet, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-md rounded-lg p-6 border-t-4 border-teal-500"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {skillSet.category}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {skillSet.items.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills 