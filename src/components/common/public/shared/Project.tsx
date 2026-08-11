import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "E-Commerce Website",
        description:
            "A modern and responsive e-commerce website with product browsing, shopping cart, authentication and a clean user interface.",
        image: "/project-1.png",
        technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
        github: "https://github.com/",
        live: "#",
    },

    {
        title: "Online Learning Platform",
        description:
            "An online learning platform where users can explore courses, view course details and manage their learning journey.",
        image: "/project-2.png",
        technologies: ["Next.js", "JavaScript", "Tailwind CSS", "API"],
        github: "https://github.com/",
        live: "#",
    },

    {
        title: "News Portal",
        description:
            "A responsive news application that displays categorized news with dynamic data fetching and detailed news pages.",
        image: "/project-3.png",
        technologies: ["Next.js", "React", "API", "Tailwind CSS"],
        github: "https://github.com/",
        live: "#",
    },

    {
        title: "Portfolio Website",
        description:
            "A professional developer portfolio website designed to showcase my skills, projects, experience and contact information.",
        image: "/project-4.png",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/",
        live: "#",
    },
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="bg-black py-20 lg:py-28"
        >
            <div className="mx-auto max-w-[1120px] px-5 lg:px-0">

                {/* ================= HEADING ================= */}
                <div className="mb-14 text-center">

                    <div className="mb-4 flex items-center justify-center gap-3">
                        <span className="h-[2px] w-12 bg-[#ff6959]" />

                        <span className="text-sm font-medium uppercase tracking-[3px] text-gray-400">
                            My Work
                        </span>

                        <span className="h-[2px] w-12 bg-[#ff6959]" />
                    </div>

                    <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        My Projects
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400">
                        Here are some of the projects I have built while learning
                        and working with modern web technologies.
                    </p>

                </div>


                {/* ================= PROJECT GRID ================= */}
                <div className="grid gap-8 md:grid-cols-2">

                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className="group overflow-hidden rounded-lg border border-[#344154] bg-[#080d15] duration-300 transition-all hover:-translate-y-2  hover:border-[#a855f7]  hover:bg-[#0d1420]  hover:shadow-lg hover:shadow-purple-500/10"
                        >

                            {/* Project Image */}
                            <div className="relative h-[230px] overflow-hidden border-b border-[#263b46]">

                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition duration-500 group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-[#101e27]/0 transition duration-500 group-hover:bg-[#101e27]/40" />

                            </div>


                            {/* Project Content */}
                            <div className="p-6">

                                {/* Project Number */}
                                <p className="mb-2 text-xs font-medium text-[#ff6959]">
                                    0{index + 1} / Project
                                </p>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-white">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-3 text-sm leading-7 text-gray-400">
                                    {project.description}
                                </p>


                                {/* Technologies */}
                                <div className="mt-5 flex flex-wrap gap-2">

                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full bg-[#1b303b] px-3 py-1.5 text-[10px] text-gray-300"
                                        >
                                            {technology}
                                        </span>
                                    ))}

                                </div>


                                {/* Buttons */}
                                <div className="mt-6 flex items-center gap-4">

                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="rounded-sm bg-[#ff6959] px-5 py-2.5 text-xs font-medium text-white transition duration-300 hover:bg-[#ff806f]"
                                    >
                                        GitHub
                                    </Link>

                                    <Link
                                        href={project.live}
                                        target="_blank"
                                        className="border-b border-[#ff6959] pb-1 text-xs text-gray-300 transition hover:text-[#ff6959]"
                                    >
                                        Live Demo ↗
                                    </Link>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>


                {/* ================= MORE PROJECTS ================= */}
                <div className="mt-12 text-center">

                    <Link
                        href="https://github.com/"
                        target="_blank"
                        className="inline-block border rounded-2xl border-[#ff6959] px-7 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#ff6959] "
                    >
                        View More Projects
                    </Link>

                </div>

            </div>
        </section>
    );
};

export default Projects;