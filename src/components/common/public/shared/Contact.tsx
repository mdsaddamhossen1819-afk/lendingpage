import Link from "next/link";

const Contact = () => {
    return (
        <section
            id="contact"
            className="bg-black py-20 lg:py-28"
        >
            <div className="mx-auto max-w-[1120px] px-5 lg:px-0">

                {/* ================= HEADING ================= */}
                <div className="mb-14">

                    <div className="mb-4 flex items-center gap-3">
                        <span className="h-[2px] w-16 bg-[#ff6959]" />

                        <span className="text-sm font-medium uppercase tracking-[3px] text-gray-400">
                            Contact
                        </span>
                    </div>

                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                        Have a project?
                        <br />
                        <span className="text-[#ff6959]">
                            Let’s talk!
                        </span>
                    </h2>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400">
                        Have an idea or a project in mind? Feel free to reach out.
                        I would love to hear about your project and discuss how
                        we can build something amazing together.
                    </p>

                </div>


                {/* ================= CONTACT GRID ================= */}
                <div className="grid gap-12 lg:grid-cols-2">


                    {/* ================= LEFT SIDE ================= */}
                    <div>

                        <h3 className="mb-6 text-xl font-semibold text-white">
                            Let&apos;s work together
                        </h3>

                        <p className="mb-8 max-w-md text-sm leading-7 text-gray-400">
                            I&apos;m always open to discussing new projects, creative ideas,
                            or opportunities to be part of your vision.
                        </p>


                        {/* Email */}
                        <div className="mb-6 flex items-center gap-4">

                            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#14252f] text-lg text-[#ff6959]">
                                @
                            </div>

                            <div>
                                <p className="text-xs text-gray-500">
                                    Email
                                </p>

                                <a
                                    href="mailto:your@email.com"
                                    className="text-sm text-gray-300 transition hover:text-[#ff6959]"
                                >
                                    your@email.com
                                </a>
                            </div>

                        </div>


                        {/* Location */}
                        <div className="mb-6 flex items-center gap-4">

                            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#14252f] text-lg text-[#ff6959]">
                                📍
                            </div>

                            <div>
                                <p className="text-xs text-gray-500">
                                    Location
                                </p>

                                <p className="text-sm text-gray-300">
                                    Bangladesh
                                </p>
                            </div>

                        </div>


                        {/* GitHub */}
                        <div className="flex items-center gap-4">

                            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#14252f] text-sm font-semibold text-[#ff6959]">
                                GH
                            </div>

                            <div>
                                <p className="text-xs text-gray-500">
                                    GitHub
                                </p>

                                <a
                                    href="https://github.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-300 transition hover:text-[#ff6959]"
                                >
                                    github.com/yourusername
                                </a>
                            </div>

                        </div>

                    </div>


                    {/* ================= FORM ================= */}
                    <div className="rounded-lg border border-[#344154] bg-[#080d15]  sm:p-8 p-6">

                        <form className="space-y-6">

                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-xs font-medium text-gray-300"
                                >
                                    Name
                                </label>

                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full border-b border-[#42535d] bg-transparent px-0 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#ff6959]"
                                />
                            </div>


                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-xs font-medium text-gray-300"
                                >
                                    Email
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full border-b border-[#42535d] bg-transparent px-0 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#ff6959]"
                                />
                            </div>


                            {/* Subject */}
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="mb-2 block text-xs font-medium text-gray-300"
                                >
                                    Subject
                                </label>

                                <input
                                    id="subject"
                                    type="text"
                                    placeholder="Project subject"
                                    className="w-full border-b border-[#42535d] bg-transparent px-0 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#ff6959]"
                                />
                            </div>


                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-xs font-medium text-gray-300"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                    className="w-full resize-none border-b border-[#42535d] bg-transparent px-0 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#ff6959]"
                                />
                            </div>


                            {/* Submit */}
                            <button
                                type="submit"
                                className="bg-[#ff6959] px-7 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#ff806f] hover:shadow-lg hover:shadow-[#ff6959]/20"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;