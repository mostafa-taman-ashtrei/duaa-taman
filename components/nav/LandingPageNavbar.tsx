"use client";

import GradientText from "../general/GradientText";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import NavRoutes from "./NavRoutes";
import ThemeTogglerButton from "./ThemeTogglerButton";
import { cn } from "@/lib/utils";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

const LandingPageNavbar = () => {
    return (
        <nav className="p-4 bg-transparent flex items-baseline justify-between">
            <Link href="/" className="flex items-center">
                <h1 className={cn("text-2xl font-bold", font.className)}>
                    <GradientText text="Duaa Taman" />
                </h1>
            </Link>

            <div className="flex items-center gap-x-4">
                <NavRoutes />
                <ThemeTogglerButton />
            </div>
        </nav>
    );
};

export default LandingPageNavbar;