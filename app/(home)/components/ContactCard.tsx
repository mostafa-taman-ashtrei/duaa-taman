import { Headphones } from "lucide-react";
import SocialMedia from "@/components/general/SocialMedia";

const ContactCard = () => {
    return (
        <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                <div className="bg-gray-300 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                    <div className="bg-blue-100 text-blue-800 text-sm font-medium inline-flex items-center  gap-2 p-1 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                        <Headphones size={20} />
                        Reach Me
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-2">How to quickly reach me?</h1>
                    <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                        I always make sure that I am accessable by everyone regardles of where they are or what tools they use. So feel free to
                        reach out to me using the platform of your choice & I will respond right away.
                    </p>

                    <SocialMedia />
                </div>
            </div>
        </section>
    );
};

export default ContactCard;