import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import Link from "next/link";

const SocialMedia: React.FC = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-center items-center p-3">
            <h2 className="uppercase font-bold">
                Connect With Me On
            </h2>

            <div className="flex gap-4">
                <span className="p-2 rounded-full bg-gradient-to-b gradient-primary">
                    <Link href="https://facebook.com">
                        <FaFacebookF size={25} />
                    </Link>
                </span>

                <span className="p-2 rounded-full bg-gradient-to-b gradient-primary">
                    <Link href="https://twitter.com">
                        <FaTwitter size={25} />
                    </Link>
                </span>

                <span className="p-2 rounded-full bg-gradient-to-b gradient-primary">
                    <Link href="https://linkedin.com">
                        <FaLinkedinIn size={25} />
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default SocialMedia;