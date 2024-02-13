"use client";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import { FileText, Ghost, ShieldX } from "lucide-react";

import { DocumentType } from "@/types/ui";
import GradientText from "@/components/general/GradientText";
import GridLoader from "react-spinners/GridLoader";
import Link from "next/link";
import { pdfjs } from "react-pdf";
import useSWR from "swr";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const fetcher = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    return response.json();
};

const ScriptsPage: React.FC = () => {
    const { data, error, isLoading } = useSWR("/api/scripts", fetcher);

    if (isLoading) return <div className="flex justify-center h-screen items-center">
        <GridLoader color="#7e22ce" className="justify-center" size={30} />
    </div>;

    if (error) return <div className="mx-auto max-w-screen-xl px-4 py-8 h-screen sm:px-6 sm:py-12 lg:py-9">
        <p className="text-neutral-500 flex flex-col gap-8 items-center justify-center h-4/5 text-xl">
            <ShieldX size={80} />
            We encountered technical issues 😅 ... try again in a minute.
        </p>
    </div>;

    if (data === undefined) return <div className="mx-auto max-w-screen-xl px-4 py-8 h-screen sm:px-6 sm:py-12 lg:py-9">
        <p className="text-neutral-500 flex flex-col gap-3  p-8 h-screen items-center justify-center">
            <Ghost size={50} />
            No projects in this category yet 😅 ... Come back later I always update my work.
        </p>
    </div>;

    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 h-screen">
                <h2 className="text-3xl font-bold tracki text-center sm:text-5xl dark:text-gray-50">
                    <GradientText text="Scripts Projects" />
                    <p className="text-center text-base text-gray-600">
                        Here is a great collection of all the scripts I have written, feel free to send me any feedback or comments on any platform
                    </p>


                    <ul className="mb-2 mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {data.resources.map((file: DocumentType) => (
                            <li
                                className="col-span-1 p-4 divide-y divide-gray-400 rounded-lg hover:scale-105 bg-gray-300 transition dark:divide-black dark:bg-zinc-900"
                                key={file.asset_id}
                            >
                                <Link
                                    href={file.url}
                                    target="_"
                                    className="flex flex-col gap-1"
                                >
                                    <div className="flex w-full items-center justify-between space-x-6 px-6">
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-r gradient-primary text-white">
                                            <FileText />
                                        </div>

                                        <div className="flex-1 truncate">
                                            <div className="flex items-center space-x-3">
                                                <h3 className="truncate text-lg font-medium">
                                                    {file.public_id.split("/")[1]}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                {/* <div className="mt-4 flex flex-row items-center justify-center px-2 py-2  text-xs text-zinc-500">
                                    <div className="flex flex-row items-center justify-center gap-4">
                                        <a href={file.url} target="_">
                                            <Button
                                                variant="ghost"
                                                className="gap-1.5"
                                                size="icon"
                                            >
                                                <ExternalLink className="h-4 w-4 cursor-pointer" />
                                            </Button>
                                        </a>
                                    </div>

                                    <PdfFullScreen fileUrl={file.url} />
                                </div> */}
                            </li>
                        ))}
                    </ul>
                </h2>
            </div>
        </section>
    );
};

export default ScriptsPage;