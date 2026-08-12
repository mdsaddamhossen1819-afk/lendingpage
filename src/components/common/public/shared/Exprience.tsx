const frontendSkills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Redux",
];

const backendSkills = [
    "Node.js",
    "Express.js",
    "Prisma",
    "MongoDB",
    "PostgreSQL",
];

const authenticationSkills = [
    "Next Auth",
    "JWT",
    "Firebase",
];

const otherSkills = [
    "Git",
    "GitHub",
    "VS Code",
    "REST API",
    "Figma",
];

const SkillCard = ({
    name,
    icon,
}: {
    name: string;
    icon: string;
}) => {
    return (
        <div
            className="
        group
        flex
        h-[125px]
        w-[125px]
        flex-shrink-0
        flex-col
        items-center
        justify-center
        rounded-xl
        border
        border-[#344154]
        bg-[#080d15]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[#a855f7]
        hover:bg-[#0d1420]
        hover:shadow-lg
        hover:shadow-purple-500/10
      "
        >
            {/* Icon */}
            <div className="mb-3 text-3xl transition duration-300 group-hover:scale-110">
                {icon}
            </div>

            {/* Name */}
            <p className="text-center text-sm font-medium text-gray-300">
                {name}
            </p>
        </div>
    );
};

const Experience = () => {
    return (
        <section
            id="experience"
            className="bg-black px-5 py-20 text-white lg:py-28"
        >
            <div className="mx-auto max-w-[1120px]">

                {/* ================= TITLE ================= */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold sm:text-5xl">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            My Expertise
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500">
                        Technologies and tools I use to build modern, scalable and
                        user-friendly applications.
                    </p>
                </div>


                {/* ================= FRONTEND ================= */}
                <div className="mb-20">

                    <div className="mb-9 flex items-center justify-center gap-3">
                        <span className="text-3xl text-yellow-400">
                            &lt;/&gt;
                        </span>

                        <h3 className="text-2xl font-bold sm:text-3xl">
                            <span className="bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
                                Frontend Development
                            </span>
                        </h3>
                    </div>


                    <div className="flex flex-wrap gap-4 overflow-x-auto pb-4 justify-center">

                        {frontendSkills.map((skill, index) => (
                            <SkillCard
                                key={skill}
                                name={skill}
                                icon={
                                    [
                                        "🌐",
                                        "🎨",
                                        "🌊",
                                        "🟨",
                                        "🔷",
                                        "⚛️",
                                        "▲",
                                        "🔄",
                                    ][index]
                                }
                            />
                        ))}

                    </div>
                </div>


                {/* ================= BACKEND ================= */}
                <div className="mb-20">

                    <div className="mb-9 flex items-center justify-center gap-3">
                        <span className="text-3xl text-red-400">
                            ▤
                        </span>

                        <h3 className="text-2xl font-bold sm:text-3xl">
                            <span className="bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                                Backend Development
                            </span>
                        </h3>
                    </div>


                    <div className="flex flex-wrap justify-center gap-4">

                        {backendSkills.map((skill, index) => (
                            <SkillCard
                                key={skill}
                                name={skill}
                                icon={
                                    [
                                        "⬡",
                                        "EX",
                                        "◈",
                                        "🍃",
                                        "🐘",
                                    ][index]
                                }
                            />
                        ))}

                    </div>
                </div>


                {/* ================= AUTHENTICATION ================= */}
                <div className="mb-20">

                    <div className="mb-9 flex items-center justify-center gap-3">
                        <span className="text-3xl text-red-500">
                            ♢
                        </span>

                        <h3 className="text-2xl font-bold sm:text-3xl">
                            <span className="bg-gradient-to-r from-red-500 via-pink-500 to-green-400 bg-clip-text text-transparent">
                                Authentication
                            </span>
                        </h3>
                    </div>


                    <div className="flex flex-wrap justify-center gap-4">

                        {authenticationSkills.map((skill, index) => (
                            <SkillCard
                                key={skill}
                                name={skill}
                                icon={
                                    [
                                        "🔐",
                                        "✦",
                                        "🔥",
                                    ][index]
                                }
                            />
                        ))}

                    </div>
                </div>


                {/* ================= OTHER TOOLS ================= */}
                <div>

                    <div className="mb-9 flex items-center justify-center gap-3">
                        <span className="text-3xl text-cyan-400">
                            ⚒
                        </span>

                        <h3 className="text-2xl font-bold sm:text-3xl">
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                Other Tools
                            </span>
                        </h3>
                    </div>


                    <div className="flex flex-wrap justify-center gap-4">

                        {otherSkills.map((skill, index) => (
                            <SkillCard
                                key={skill}
                                name={skill}
                                icon={
                                    [
                                        "🔀",
                                        "◉",
                                        "💻",
                                        "🔗",
                                        "🎨",
                                    ][index]
                                }
                            />
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;