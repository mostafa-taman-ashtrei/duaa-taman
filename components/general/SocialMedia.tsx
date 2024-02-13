import { FaBehance, FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaWhatsapp } from "react-icons/fa";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";

interface SocialMediaProps {
    text?: string
    className?: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ text }) => {
    return (
        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-center items-center p-3">
            <h2 className="uppercase font-bold">
                {text}
            </h2>

            <div className="flex gap-4">
                <span className="p-2 rounded-full bg-gradient-to-b gradient-primary hover:scale-110">
                    <Link href="https://www.facebook.com/doaa.taman.9" target="_">
                        <FaFacebookF size={25} />
                    </Link>
                </span>

                <span className="p-2 rounded-full bg-gradient-to-b gradient-primary hover:scale-110">
                    <Link href="https://www.instagram.com/duaa.taman/" target="_">
                        <FaInstagram size={25} />
                    </Link>
                </span>

                <span className="p-2 rounded-full bg-gradient-to-b gradient-primary hover:scale-110">
                    <Link href="https://www.linkedin.com/in/doaa-taman-280095238/" target="_">
                        <FaLinkedinIn size={25} />
                    </Link>
                </span>

                <span className="p-2 rounded-full bg-gradient-to-b gradient-primary hover:scale-110">
                    <Link href="https://www.tiktok.com/@duaaaa22" target="_">
                        <FaTiktok size={25} />
                    </Link>
                </span>

                <span className="p-2 rounded-full bg-gradient-to-b gradient-primary hover:scale-110">
                    <Link href="https://www.behance.net/doaataman1" target="_">
                        <FaBehance size={25} />
                    </Link>
                </span>

                <span className="p-2 rounded-full bg-gradient-to-b gradient-primary hover:scale-110">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <FaWhatsapp size={25} className="cursor-pointer" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>01003411165</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </span>
            </div>
        </div>
    );
};

export default SocialMedia;