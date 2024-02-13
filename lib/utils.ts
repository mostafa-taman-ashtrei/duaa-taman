import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type ConstructMetadataParams = {
    title?: string;
    description?: string;
    image?: string;
    icons?: string;
    noIndex?: boolean;
};

export const constructMetadata = ({
    title = "Duaa Taman",
    description = "A professional video editor, graph designer and content creator with a major in  radio & tv from Cairo university.",
    image = "/images/hero 1.jpg",
    icons = "/favicon.ico",
    noIndex = false,
}: ConstructMetadataParams = {}): Metadata => {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: image,
                },
            ],
        },
        icons,
        metadataBase: new URL("https://duaataman.vercel.app/"),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
};