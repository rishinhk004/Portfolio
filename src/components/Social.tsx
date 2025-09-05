import React from "react";

export default function Social() {
    return (
        <footer className="mx-auto py-6 border-t border-gray-800 text-left w-full flex flex-col items-start justify-between ">
            <h1 className="text-xl font-bold font-serif mb-6">Find me here ~</h1>
            <div className="grid grid-cols-2 gap-2 md:gap-10 justify-between -translate-x-[5%] sm:-translate-x-0 w-full scale-[.90] sm:scale-100">
                <div>
                    <p className="mb-2 text-zinc-400 font-semibold text-sm">GitHub</p>
                    <a
                        href="https://github.com/rishinhk004"
                        className="text-white hover:opacity-80 transition-opacity underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @rishinhk004
                    </a>
                </div>
                <div>
                    <p className="mb-2 text-zinc-400 font-semibold text-sm">LeetCode</p>
                    <a
                        href="https://leetcode.com/u/rishirajece135/"
                        className="text-white hover:opacity-80 transition-opacity underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @rishirajece135
                    </a>
                </div>
                <div>
                    <p className="mb-2 text-zinc-400 font-semibold text-sm">LinkedIn</p>
                    <a
                        href="https://www.linkedin.com/in/rishi-raj-saha-696b44257/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:opacity-80 transition-opacity underline"
                    >
                        @rishiraj
                    </a>
                </div>
                <div>
                    <p className="mb-2 text-zinc-400 font-semibold text-sm">Email</p>
                    <a
                        href="mailto:rishirajsaha555@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:opacity-80 transition-opacity underline"
                    >
                        rishirajsaha555@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    );
}
