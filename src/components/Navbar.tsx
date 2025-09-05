"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

const links = [
    { name: "About", href: "/" },
    { name: "Projects", href: "/Projects" },
    { name: "Contact", href: "/Contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.fromTo(
            ".nav-link",
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power3.out" }
        );
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShow(false);
            } else {
                setShow(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        if (menuOpen) {
            gsap.to(mobileMenuRef.current, {
                x: 0,
                duration: 0.4,
                ease: "power3.out",
            });
        } else {
            gsap.to(mobileMenuRef.current, {
                x: "100%",
                duration: 0.4,
                ease: "power3.in",
            });
        }
    }, [menuOpen]);

    return (
        <>
            <nav
                className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] 
        bg-neutral-900/70 backdrop-blur-md px-6 py-3 rounded-xl 
        flex items-center justify-between shadow-lg z-50 
        transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-32"
                    }`}
            >
                <div
                    className={`flex items-center gap-4 ${menuOpen ? "hidden sm:flex" : ""
                        }`}
                >
                    <img
                        src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1757095790/WhatsApp_Image_2025-09-02_at_19.08.56_0217cc11_kxefdo.jpg"
                        alt="Profile Picture"
                        className="rounded-full w-12 h-12 object-cover"
                    />
                    <div className="text-left ">
                        <h1 className="text-lg font-bold leading-tight">Rishiraj Saha</h1>
                        <p className="text-gray-400 text-xs mt-1.5">Student · Dev · Programming</p>
                    </div>
                </div>
                <div className="hidden sm:flex space-x-6 ">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`nav-link no-underline text-gray-300 hover:text-white transition-colors ${pathname === link.href
                                ? "bg-neutral-800 px-3 py-1 rounded-lg text-white"
                                : ""
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <button
                    className="sm:hidden text-gray-300 hover:text-white transition"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>
            <div
                ref={mobileMenuRef}
                className="fixed top-0 right-0 h-full w-full bg-neutral-900 z-[60] flex flex-col items-center p-6 space-y-8 sm:hidden translate-x-full"
            >
                <button
                    onClick={() => setMenuOpen(false)}
                    className="absolute top-6 right-6 text-gray-300 hover:text-white"
                >
                    <X size={32} />
                </button>
                <div className="flex flex-col items-center gap-3 mt-20">
                    <img
                        src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1757095790/WhatsApp_Image_2025-09-02_at_19.08.56_0217cc11_kxefdo.jpg"
                        alt="Profile Picture"
                        className="rounded-full w-24 h-24 object-cover"
                    />
                    <div className="text-center">
                        <h1 className="text-xl font-bold leading-tight">Rishiraj Saha</h1>
                        <p className="text-gray-400 text-sm mt-1.5">Student · Dev · Programming</p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-6 mt-10">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className={`text-lg no-underline text-gray-300 hover:text-white transition-colors ${pathname === link.href
                                ? "bg-neutral-800 px-4 py-2 rounded-lg text-white"
                                : ""
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
