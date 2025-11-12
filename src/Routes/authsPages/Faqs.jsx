import { IoAdd } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";


function Faqs() {
    const [toggle, setToggle] = useState({
        queOne: false,
        queTwo: false,
        queThree: false,
        queFour: false,
        queFive: false,
        queSix: false,
    });

    const handleToggle = (clicked) => {
        setToggle((prevClicked) => {
            return {
                ...prevClicked,
                [clicked]: !prevClicked[clicked]
            }
        })
    }

    const style = ' h-auto p-5'

    return (
        <div className='px-[10em] max-xl:px-[5em] max-lg:px-[2em] max-md:px-[.8em] my-[3em] max-xl:my-[1.5em] max-md:my-[.9em]'>
            <h1 className='text-2xl max-lg:text-[1.1em] mb-[12px] '>Frequently Asked Questions</h1>

            <section className="flex flex-col gap-2">
                <article>
                    <h1
                        onClick={() => handleToggle('queOne')}
                        className="flex items-center justify-between text-2xl max-lg:text-[18px] p-5 bg-[#2d2d2d] border-b-1 border-[#000] border-solid cursor-pointer"
                    >
                        What is Goflix?
                        <span className="text-3xl max-lg:text-2xl font-light">{toggle.queOne ? <RxCross1 /> : <IoAdd />}</span>
                    </h1>
                    <p className={`bg-[#2d2d2d] transition-all ease-in-out duration-[1s] h-0 overflow-hidden ${toggle.queOne && style}`}>Goflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

                        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                </article>

                <article>
                    <h1
                        className="flex items-center justify-between text-2xl max-lg:text-[18px] p-5 bg-[#2d2d2d] border-b-1 border-[#000] border-solid cursor-pointer"
                        onClick={() => handleToggle('queTwo')}
                    >How much does Goflix cost?
                        <span className="text-3xl max-lg:text-2xl font-light">{toggle.queTwo ? <RxCross1 /> : <IoAdd />}</span>
                    </h1>
                    <p className={`bg-[#2d2d2d] transition-all ease-in-out duration-[1s] h-0 overflow-hidden ${toggle.queTwo && style}`}>Watch Goflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦2,500 to ₦8,500 a month. No extra costs, no contracts.</p>
                </article>

                <article >
                    <h1
                        className="flex items-center justify-between text-2xl max-lg:text-[18px] p-5 bg-[#2d2d2d] border-b-1 border-[#000] border-solid cursor-pointer"
                        onClick={() => handleToggle('queThree')}>Where can I watch
                        <span className="text-3xl max-lg:text-2xl font-light">{toggle.queThree ? <RxCross1 /> : <IoAdd />}</span>
                    </h1>
                    <p className={`bg-[#2d2d2d] transition-all ease-in-out duration-[1s] h-0 overflow-hidden ${toggle.queThree && style}`}>Watch anywhere, anytime. Sign in with your Goflix account to watch instantly on the web at Goflix.com from your personal computer or on any internet-connected device that offers the Goflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                        You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Goflix with you anywhere.</p>
                </article>

                <article>
                    <h1
                        className="flex items-center justify-between text-2xl max-lg:text-[18px] p-5 bg-[#2d2d2d] border-b-1 border-[#000] border-solid cursor-pointer"
                        onClick={() => handleToggle('queFour')}>How do I cancel
                        <span className="text-3xl max-lg:text-2xl font-light">{toggle.queFour ? <RxCross1 /> : <IoAdd />}</span>
                    </h1>
                    <p className={`bg-[#2d2d2d] transition-all ease-in-out duration-[1s] h-0 overflow-hidden ${toggle.queFour && style}`}>
                        Goflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                    </p>
                </article>

                <article>
                    <h1
                        className="flex items-center justify-between text-2xl max-lg:text-[18px] p-5 bg-[#2d2d2d] border-b-1 border-[#000] border-solid cursor-pointer"
                        onClick={() => handleToggle('queFive')}>What can I watch on Neflix
                        <span className="text-3xl max-lg:text-2xl font-light">{toggle.queFive ? <RxCross1 /> : <IoAdd />}</span>
                    </h1>
                    <p className={`bg-[#2d2d2d] transition-all ease-in-out duration-[1s] h-0 overflow-hidden ${toggle.queFive && style}`}> 
                        Goflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Goflix originals, and more. Watch as much as you want, anytime you want.
                    </p>
                </article>

                <article>
                    <h1
                        className="flex items-center justify-between text-2xl max-lg:text-[18px] p-5 bg-[#2d2d2d] border-b-1 border-[#000] border-solid cursor-pointer"
                        onClick={() => handleToggle('queSix')}>Is Goflix good for kids
                        <span className="text-3xl max-lg:text-2xl font-light">{toggle.queSix ? <RxCross1 /> : <IoAdd />}</span>
                    </h1>
                    <p className={`bg-[#2d2d2d] transition-all ease-in-out duration-[1s] h-0 overflow-hidden ${toggle.queSix && style}`}>
                        The Goflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

                        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.                    </p>
                </article>
            </section>
        </div>
    )
}

export default Faqs
