import { Brush, Camera, Pencil, Video } from "lucide-react";

import GradientText from "@/components/general/GradientText";
import Link from "next/link";

const projectCategories = [
    {
        name: "Video Editing",
        icon: <Video className="text-pink-600" size={40} />,
        url: "/editing",
        desc: "Video editing is my bread & butter. I am fluent in all the major software including but not limited to Davinci Resolve, Adobe primere, Adobe After Effects and more."
    },
    {
        name: "Video Creation",
        icon: <Camera className="text-pink-600" size={40} />,
        url: "/videos",
        desc: "I am not afraid to get in front of the camera when I need to. Thanks to my skills I can create, edit and publish a video all by myself."
    },
    {
        name: "Script Writing",
        icon: <Pencil className="text-pink-600" size={40} />,
        url: "/scripts",
        desc: "\"A great video starts with a great script\" That is why I work hard to polish my script writing skills. I can write scripts in both Arabic & English"
    },
    {
        name: "Graphic Design",
        icon: <Brush className="text-pink-600" size={40} />,
        url: "https://www.behance.net/doaataman1",
        desc: "In this day and age thanks to social media graphic design is an essential tool for anyone in any field ... take a look at what I can do."
    },
];

const Projects: React.FC = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-32" id="projects">
                <h2 className="text-3xl font-bold tracki text-center sm:text-5xl dark:text-gray-50">
                    <GradientText text="Projects" />
                </h2>
                <p className="text-center text-gray-600">
                    Explore some of my projects. Choose a category and let the magic beign
                </p>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                    {
                        projectCategories.map((projectCategory) => <Link key={projectCategory.name} href={projectCategory.url}>
                            <div
                                key={projectCategory.name}
                                className="block rounded-xl border bg-gray-300 dark:bg-gray-800 cursor-pointer border-gray-800 p-8 shadow-lg transition hover:border-pink-500/10 hover:shadow-pink-500"
                            >
                                {projectCategory.icon}
                                <h2 className="mt-4 text-xl font-bold">{projectCategory.name}</h2>

                                <p className="mt-1 text-sm dark:text-gray-300">
                                    {projectCategory.desc}
                                </p>
                            </div>
                        </Link>
                        )
                    }
                </div>


            </div>
        </section>
    );
};

export default Projects;