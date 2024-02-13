"use client";

import Image from "next/image";
import React from "react";
import SocialMedia from "@/components/general/SocialMedia";
import TypewriterComponent from "typewriter-effect";

const Hero: React.FC = () => {
    return (
        <section className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <div className="flex flex-col gap-5">
                        <h4 className=" text-lg font-normal text-gray-500">WELCOME TO MY WORLD</h4>
                        <h1 className="text-5xl font-bold">
                            Hi, I am <span className="capitalize">Duaa Taman</span>
                        </h1>

                        <div className="flex flex-row items-center gap-2  justify-center text-2xl font-bold md:text-5xl">
                            <span>a</span>

                            <div className="text-transparent bg-clip-text bg-gradient-to-r gradient-primary">
                                <TypewriterComponent
                                    options={{
                                        strings: ["Video Editor.", "Script Writer.", "Video Creator."],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </div>
                        </div>

                        <p className="hidden text-gray-500 md:my-4 md:block text-left">
                            If you are looking for someone who can create & edit videos or someone who knows graphic design & can write scripts
                            for any type of content you have come to the right place. Check out my social media below.
                        </p>
                    </div>

                    <SocialMedia />
                </div>
            </div>

            <Image
                alt="Hero Image For Duaa Taman"
                src="/images/hero 1.jpeg"
                width={300}
                quality={100}
                height={300}
                className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
            />
        </section>
    );
};

export default Hero;