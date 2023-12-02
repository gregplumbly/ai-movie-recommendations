"use client";

import Image from "next/image";

function MovieSelection() {
    const handleButtonClick = () => {
        // Handle button click event here
    };

    return (
        <form className="bg-slate-900 flex flex-col px-8 py-12 max-md:px-5">
            <button
                className="aspect-[0.92] object-contain object-center w-[99px] overflow-hidden self-center max-w-full"
                onClick={handleButtonClick}
            >
                <Image
                    loading="lazy"
                    src="/icon.png"
                    alt="Movie Poster"
                    width={99}
                    height={99}
                />
            </button>
            <header className="text-white text-5xl self-center whitespace-nowrap mt-3 max-md:text-4xl">
                PopChoice
            </header>
            <div className="text-white text-base self-stretch mt-12 max-md:mt-10">
                What's your favourite movie and why?
            </div>
            <input
                type="text"
                className="text-white text-sm font-light bg-slate-600 self-stretch justify-center items-stretch mt-2.5 px-3.5 py-3.5 rounded-xl"
            ></input>
            <div className="text-white text-base self-stretch mt-10 max-md:mt-10">
                Are you in the mood for something new or a classic?
            </div>
            <input
                type="text"
                className="text-white text-sm font-light bg-slate-600 self-stretch justify-center items-stretch mt-2.5 px-3.5 py-3.5 rounded-xl"
            ></input>{" "}
            <div className="text-white text-base self-stretch mt-10 max-md:mt-10">
                Do you wanna have fun or do you want something serious?
            </div>
            <input
                type="text"
                className="text-white text-sm font-light bg-slate-600 self-stretch justify-center items-stretch mt-2.5 px-3.5 py-3.5 rounded-xl"
            ></input>{" "}
            <button
                className="justify-center text-slate-900 text-center text-3xl font-bold  bg-green-400 self-stretch items-center mt-12 mb-5 px-6 py-3 rounded-xl max-md:mt-10 max-md:px-5"
                type="submit"
                onClick={handleButtonClick}
            >
                Let's Go
            </button>
        </form>
    );
}

export default MovieSelection;
