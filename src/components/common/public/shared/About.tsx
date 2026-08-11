const About = () => {
    return (
        <section
            id="about"
            className="bg-black py-20 lg:py-28"
        >
            <div className="mx-auto max-w-[1120px] px-5 lg:px-0">

                {/* Section Heading */}
                <div className="mb-14 text-center">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[4px] text-[#ff6959]">
                        About Me
                    </p>

                    <h2 className="text-3xl font-bold text-white md:text-4xl">
                        Get to Know Me
                    </h2>

                    <div className="mx-auto mt-5 h-[2px] w-16 bg-[#ff6959]" />
                </div>


                {/* About Content */}
                <div className="grid items-center gap-12 lg:grid-cols-2">

                    {/* Left Side */}
                    <div>

                        <div className="mb-6 flex items-center gap-4">
                            <div className="h-[2px] w-14 bg-[#ff6959]" />

                            <span className="text-lg text-gray-300">
                                Hello, I&apos;m
                            </span>
                        </div>

                        <h3 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                            A Passionate{" "}
                            <span className="text-[#ff6959]">
                                Software Engineer
                            </span>
                        </h3>

                        <p className="mt-6 text-sm leading-8 text-gray-400">
                            I&apos;m a passionate Software Engineer who enjoys creating
                            modern, responsive and user-friendly web applications.
                            I love turning ideas into real-world digital experiences
                            using clean and efficient code.
                        </p>

                        <p className="mt-4 text-sm leading-8 text-gray-400">
                            My main focus is on frontend and full-stack web development.
                            I continuously learn new technologies and improve my
                            problem-solving skills to build better software.
                        </p>


                        {/* Buttons */}
                        <div className="mt-8 flex flex-wrap gap-4">

                            <a
                                href="#projects"
                                className="rounded-sm bg-[#ff6959] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#ff806f]"
                            >
                                View My Projects
                            </a>

                            <a
                                href="#contact"
                                className="rounded-sm border border-[#ff6959] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#ff6959]"
                            >
                                Contact Me
                            </a>

                        </div>

                    </div>


                    {/* Right Side */}
                    <div className="grid gap-5 sm:grid-cols-2">

                        {/* Card 1 */}
                        <div className="group rounded-lg p-6 border border-[#344154] bg-[#080d15] duration-300 transition-all hover:-translate-y-2  hover:border-[#a855f7]  hover:bg-[#0d1420]  hover:shadow-lg hover:shadow-purple-500/10">

                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-[#ff6959]/10 text-xl text-[#ff6959]">
                                &lt;/&gt;
                            </div>

                            <h4 className="text-lg font-semibold text-white">
                                Clean Code
                            </h4>

                            <p className="mt-3 text-sm leading-6 text-gray-400">
                                I focus on writing clean, maintainable and reusable
                                code following modern development practices.
                            </p>

                        </div>


                        {/* Card 2 */}
                        <div className="group rounded-lg p-6 border border-[#344154] bg-[#080d15] duration-300 transition-all hover:-translate-y-2  hover:border-[#a855f7]  hover:bg-[#0d1420]  hover:shadow-lg hover:shadow-purple-500/10">

                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-[#ff6959]/10 text-xl text-[#ff6959]">
                                ⚡
                            </div>

                            <h4 className="text-lg font-semibold text-white">
                                Fast Learner
                            </h4>

                            <p className="mt-3 text-sm leading-6 text-gray-400">
                                I enjoy learning new technologies and adapting to
                                modern development tools and frameworks.
                            </p>

                        </div>


                        {/* Card 3 */}
                        <div className="group rounded-lg p-6 border border-[#344154] bg-[#080d15] duration-300 transition-all hover:-translate-y-2  hover:border-[#a855f7]  hover:bg-[#0d1420]  hover:shadow-lg hover:shadow-purple-500/10">

                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-[#ff6959]/10 text-xl text-[#ff6959]">
                                💡
                            </div>

                            <h4 className="text-lg font-semibold text-white">
                                Problem Solver
                            </h4>

                            <p className="mt-3 text-sm leading-6 text-gray-400">
                                I enjoy solving complex problems and finding simple
                                and effective solutions.
                            </p>

                        </div>


                        {/* Card 4 */}
                        <div className="group rounded-lg p-6 border border-[#344154] bg-[#080d15] duration-300 transition-all hover:-translate-y-2  hover:border-[#a855f7]  hover:bg-[#0d1420]  hover:shadow-lg hover:shadow-purple-500/10">

                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-[#ff6959]/10 text-xl text-[#ff6959]">
                                🚀
                            </div>

                            <h4 className="text-lg font-semibold text-white">
                                Goal Oriented
                            </h4>

                            <p className="mt-3 text-sm leading-6 text-gray-400">
                                I always try to deliver quality work and continuously
                                improve my skills as a developer.
                            </p>

                        </div>

                    </div>

                </div>


                {/* Stats */}
                <div className="mt-20 grid grid-cols-2 gap-6 border-t border-[#263b46] pt-12 md:grid-cols-4">

                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-white">
                            20<span className="text-[#ff6959]">+</span>
                        </h3>

                        <p className="mt-2 text-xs text-gray-500">
                            Projects
                        </p>
                    </div>


                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-white">
                            10<span className="text-[#ff6959]">+</span>
                        </h3>

                        <p className="mt-2 text-xs text-gray-500">
                            Technologies
                        </p>
                    </div>


                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-white">
                            1<span className="text-[#ff6959]">+</span>
                        </h3>

                        <p className="mt-2 text-xs text-gray-500">
                            Years Learning
                        </p>
                    </div>


                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-white">
                            100<span className="text-[#ff6959]">%</span>
                        </h3>

                        <p className="mt-2 text-xs text-gray-500">
                            Passion
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;