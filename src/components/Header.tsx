import React from "react";

export default function Header() {
    return (
        <header className="w-full max-w-3xl mx-auto py-16 ">
            <h1 className="text-2xl font-bold font-serif mb-6">Hello ~</h1>
            <p className="text-md mb-6 text-gray-400 leading-relaxed text-left">
                I’m a fullstack developer who enjoys building structured yet flexible web
                applications. I work extensively with{" "}
                <span className="text-blue-400 font-semibold">TypeScript</span>, and I love
                how it brings safety and clarity into large codebases. Over time, I’ve
                worked with different stacks, but my current favorite is the{" "}
                <span className="text-blue-300 font-semibold">T3 stack</span>, which blends
                modern frameworks with developer productivity.
            </p>

            <p className="text-md mb-6 text-gray-400 leading-relaxed text-left">
                When it comes to architecture,{" "}
                <span className="text-amber-400 font-semibold">System Design</span>{" "}
                fascinates me. The challenge of connecting complex parts and watching them
                fall into place is something I truly enjoy. I often sharpen my
                problem-solving skills by grinding on{" "}
                <span className="text-green-400 font-semibold">LeetCode</span>, where I’ve
                earned the title of{" "}
                <span className="text-purple-400 font-semibold">Knight</span>. Tackling
                algorithms keeps me sharp and fuels my love for optimization.
            </p>

            <p className="text-md mb-10 text-gray-400 leading-relaxed text-left">
                Outside of code, I find balance in simple joys, listening to{" "}
                <span className="text-pink-400 font-semibold">music</span>, diving deep into
                meaningful lyrics, and playing{" "}
                <span className="text-red-400 font-semibold">cricket</span>. These hobbies
                keep me grounded while technology keeps me curious.
            </p>
        </header>
    );
}
