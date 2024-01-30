import HoverLink from "../general/HoverLink";

const Footer: React.FC = () => {
    return (
        <footer className="mt-24 bg-gray-300 rounded-xl shadow m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm  sm:text-center dark:text-gray-400">© 2024
                    Duaa Taman™. All Rights Reserved.
                </span>


                <ul className="flex flex-wrap items-center mt-3 gap-4 text-sm font-medium  dark:text-gray-400 sm:mt-0">
                    <HoverLink>
                        <li className="cursor-pointer">
                            About
                        </li>
                    </HoverLink>

                    <HoverLink>
                        <li className="cursor-pointer">
                            Privacy Policy
                        </li>
                    </HoverLink>

                    <HoverLink>
                        <li className="cursor-pointer">
                            Licensing
                        </li>
                    </HoverLink>

                    <HoverLink>
                        <li className="cursor-pointer">
                            Contact
                        </li>
                    </HoverLink>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;