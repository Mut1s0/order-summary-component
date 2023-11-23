import Hero from "./images/illustration-hero.svg";
import MusicIcon from "./images/icon-music.svg";
import React from 'react'

function OrderSummary() {

    return(

        <main className='flex justify-center items-center'>

            <div className='max-w-[90%] sm:max-w-[80%] w-[500px] rounded-3xl pb-10'>

                <header>

                    <img src={Hero} alt="Hero" className="w-[100%] h-[250px] rounded-t-3xl" />

                </header>

                <div className="content px-4 sm:px-[60px]">

                    <div className="text-center py-10 flex flex-col gap-5">

                        <h1 className="text-[21px] sm:text-[30px]">Order Summary</h1>

                        <p className="text-[14px] sm:text-[18px]">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>

                    </div>

                    <div className="flex justify-between items-center pb-10">

                        <div className="text-center flex items-center gap-2 sm:gap-8">

                            <img src={MusicIcon} alt="Music Icon" className="sm:w-[65px]" />

                            <div>

                                <h2 className="text-[14px] sm:text-[20px]">Annual Plan</h2>

                                <p className="text-[14px] sm:text-[20px]">$59.99/year</p>

                            </div>

                        </div>

                        <p className="underline cursor-pointer text-[14px] sm:text-[20px]">Change</p>

                    </div>

                    <footer>

                        <button className="block w-full py-4 cursor-pointer rounded-xl mb-5 sm:text-[20px]">Proceed to Payment</button>

                        <button className="block w-full py-4 cursor-pointer rounded-xl sm:text-[20px]">Cancel Order</button>

                    </footer>

                </div>

            </div>

        </main>

    )
}

export default OrderSummary
