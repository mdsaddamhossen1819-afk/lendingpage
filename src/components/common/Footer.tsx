import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t bg-black">
            <div className="mx-auto max-w-[1120px] px-5 py-12 lg:px-0">

                {/* Main Footer */}
                <div className="grid gap-10 md:grid-cols-3">

                    {/* About */}
                    <div>
                        <Link
                            href="/"
                            className="group flex items-center gap-2"
                        >
                            <span className="text-2xl font-bold tracking-tight text-white">
                                S
                            </span>

                            <span className="text-2xl font-bold text-[#ff6959]">
                                W
                            </span>

                            <span className="text-2xl font-bold text-white">
                                E
                            </span>

                            <span className="ml-1 h-6 w-[2px] bg-[#ff6959]" />

                            <span className="text-sm font-medium text-gray-400 transition group-hover:text-white">
                                Frontend Developer
                            </span>
                        </Link>

                        <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
                            A passionate Software Developer focused on building
                            modern, responsive and user-friendly web applications.
                        </p>
                    </div>


                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-3">
                            <Link
                                href="#home"
                                className="w-fit text-sm text-gray-400 transition hover:text-[#ff6959]"
                            >
                                Home
                            </Link>

                            <Link
                                href="#about"
                                className="w-fit text-sm text-gray-400 transition hover:text-[#ff6959]"
                            >
                                About
                            </Link>

                            <Link
                                href="#projects"
                                className="w-fit text-sm text-gray-400 transition hover:text-[#ff6959]"
                            >
                                Projects
                            </Link>

                            <Link
                                href="#contact"
                                className="w-fit text-sm text-gray-400 transition hover:text-[#ff6959]"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>


                    {/* Social */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Follow Me
                        </h3>

                        <p className="mb-5 text-sm text-gray-400">
                            Let&apos;s connect and build something amazing together.
                        </p>

                        <div className="flex gap-3">

                            {/* GitHub */}
                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#344750] text-sm font-semibold text-gray-300 transition hover:border-[#ff6959] hover:bg-[#ff6959] hover:text-white"
                            >
                                GH
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#344750] text-sm font-semibold text-gray-300 transition hover:border-[#ff6959] hover:bg-[#ff6959] hover:text-white"
                            >
                                in
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:your@email.com"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#344750] text-sm font-semibold text-gray-300 transition hover:border-[#ff6959] hover:bg-[#ff6959] hover:text-white"
                            >
                                @
                            </a>

                        </div>
                    </div>

                </div>


                {/* Bottom */}
                <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[#24343e] pt-6 text-center md:flex-row">

                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} Jensen Omega. All rights reserved.
                    </p>

                    <p className="text-xs text-gray-500">
                        Designed & Built with ❤️
                    </p>

                </div>

            </div>
        </footer>
    );
};

export default Footer;