import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative overflow-hidden bg-black pt-[75px]"
        >
            <div className="mx-auto grid min-h-[650px] max-w-[1120px] items-center gap-10 px-5 lg:grid-cols-2 lg:px-0">

                {/* ================= LEFT SIDE ================= */}
                <div className="z-20">

                    {/* Hello */}
                    <div className="mb-5 flex items-center gap-5">
                        <span className="h-[2px] w-14 bg-[#ff6959]" />

                        <h2 className="text-2xl font-medium text-white">
                            Hello<span className="text-[#ff6959]">.</span>
                        </h2>
                    </div>


                    {/* Name */}
                    <h1 className="text-4xl font-medium leading-tight text-white sm:text-5xl">
                        I’m{" "}
                        <span className="text-[#ff6959]">
                            Saddam
                        </span>
                    </h1>


                    {/* Title */}
                    <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
                        Frontend Developer
                    </h2>


                    {/* Description */}
                    <p className="mt-6 max-w-xl text-sm leading-8 text-gray-400 sm:text-base">
                        I am a passionate Frontend Development who loves building
                        modern, responsive and user-friendly web applications.
                        I turn ideas into clean and functional digital experiences.
                    </p>


                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">

                        <a
                            href="#projects"
                            className="rounded-sm bg-[#ff6959] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff7b6c] hover:shadow-lg hover:shadow-[#ff6959]/20"
                        >
                            View Projects
                        </a>

                        <a
                            href="/resume.pdf"
                            download
                            className="rounded-sm border border-[#ff6959] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff6959]"
                        >
                            My Resume
                        </a>

                    </div>


                    {/* Social */}
                    <div className="mt-10 flex items-center gap-4">

                        <span className="text-xs text-gray-500">
                            Follow me
                        </span>

                        <span className="h-px w-8 bg-gray-700" />

                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-gray-400 transition hover:text-[#ff6959]"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-gray-400 transition hover:text-[#ff6959]"
                        >
                            LinkedIn
                        </a>

                    </div>

                </div>


                {/* ================= RIGHT SIDE ================= */}
                <div className="relative flex h-[500px] items-center justify-center">

                    {/* Main Circle Container */}
                    <div className="relative h-[430px] w-[430px]">

                        {/* Orange Circle */}
                        <div
                            className="
                absolute
                left-1/2
                top-1/2
                h-[330px]
                w-[330px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border-[14px]
                border-[#ff6959]
              "
                        />

                        {/* Left Symbol */}
                        <span
                            className="
                absolute
                left-0
                top-[65px]
                z-20
                text-6xl
                font-light
                text-[#ff6959]/70
              "
                        >
                            &lt;
                        </span>

                        {/* Right Symbol */}
                        <span
                            className="
                absolute
                bottom-[50px]
                right-0
                z-20
                text-6xl
                font-light
                text-[#ff6959]/70
              "
                        >
                            &gt;
                        </span>

                        {/* Profile Image */}
                        <div
                            className="
                absolute
                bottom-0
                left-1/2
                z-10
                h-[420px]
                w-[300px]
                -translate-x-1/2
              "
                        >
                            <Image
                                src="/profile.png"
                                alt="Saddam - Software Engineer"
                                fill
                                priority
                                sizes="300px"
                                className="object-contain object-bottom"
                            />
                        </div>

                    </div>

                </div>

            </div>


            {/* ================= TECH STACK ================= */}
            <div className="border-t border-[#344154] bg-[#080d15]">

                <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-8 overflow-x-auto px-5 py-5 lg:px-0">

                    <span className="whitespace-nowrap text-sm text-gray-600">
                        HTML5
                    </span>

                    <span className="whitespace-nowrap text-sm text-gray-600">
                        CSS
                    </span>

                    <span className="whitespace-nowrap text-sm text-gray-600">
                        JavaScript
                    </span>

                    <span className="whitespace-nowrap text-sm text-gray-600">
                        React
                    </span>

                    <span className="whitespace-nowrap text-sm text-gray-600">
                        Next.js
                    </span>

                    <span className="whitespace-nowrap text-sm text-gray-600">
                        Node.js
                    </span>

                    <span className="whitespace-nowrap text-sm text-gray-600">
                        MongoDB
                    </span>

                    <span className="whitespace-nowrap text-sm text-gray-600">
                        Git
                    </span>

                    <span className="whitespace-nowrap text-sm text-gray-600">
                        GitHub
                    </span>

                </div>

            </div>

        </section>
    );
};

export default Hero;