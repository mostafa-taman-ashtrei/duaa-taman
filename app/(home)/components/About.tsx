import GradientText from "@/components/general/GradientText";
import Image from "next/image";

const About: React.FC = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-5 sm:px-6 lg:px-8" id="about">
                <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full">
                            <Image
                                alt="Hero Image For Duaa Taman"
                                src="/images/about.jpeg"
                                width={300}
                                quality={100}
                                height={300}
                                className="absolute inset-0 h-full w-full object-cover rounded-lg"
                            />
                        </div>
                    </div>

                    <div className="relative flex items-center bg-gray-300  dark:bg-gray-800 rounded-r-lg">
                        <span
                            className="hidden rounded-l-lg lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-300 dark:lg:bg-gray-800"
                        />

                        <div className="p-8 sm:p-16 lg:p-24">
                            <h2 className="text-2xl text-center font-bold sm:text-3xl">
                                <GradientText text="Who Is Duaa Taman?" />
                            </h2>

                            <p className="mt-4 text-gray-600">
                                I graduated from Cairo universty where I  majored in radio & tv with a GPA 3.8. However that is not all there is to
                                the story, I am a relentless passionate hard worker who is always growing & learning.

                                I have already managed to land a few freelance clients, where I created, edited and published all kinds of video content
                                by myself, talk about a one woman army. All that besides my other graphic design projects of course.


                                <br />
                                <br />

                                My biggest strength? hmm If I had to pick one it would my ability to work on multiple projects
                                simultaneously while providing the highest level of quality and innovation.

                                I am a great team player thanks to my people skills. I aspire to work with like minded skilled individuals from all over the world
                                so I can continue to grow and make a few friends along the way.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;