"use client"

import { Section } from "./layouts/Section"
import { Button } from "./ui/button"

import Ilustration from '../../public/assets/Illustration_4.svg'
import Image from "next/image"
import { CardPrice } from "./layouts/CardPrice"

export const PriceSection = () => {
      return(
            <Section className="flex justify-center">
                  <div className="p-2 container flex flex-col items-center">
                        <div className="p-2 md:flex md:flex-row-reverse md:gap-10 mb-10">
                              <div className="flex flex-col md:items-end">
                                    <Button
                                          className="bg-white text-black font-semibold w-28 rounded-none border-2 border-black mt-8 mb-8 hover:text-white"
                                    >
                                          Price
                                    </Button>

                                    <h2 className="text-5xl mb-5 md:text-end">Select a membership level the right price for you.</h2>

                                    <p className="text-lg">Prices listen in USD. Taxes may apply.</p>
                                    <p className="text-lg">By using program you agree to our terms and policies.</p>
                              </div>
                              <div className="mt-10 mb-10 md:w-3/5">
                                    <Image src={Ilustration} alt="Ilustration" />
                              </div>
                        </div>
                        <div className="ml-3 flex flex-col items-center gap-y-6 md:flex-row md:gap-x-8">
                              <CardPrice className="">
                                    <div className="flex justify-center ">
                                          <p className="font-extrabold mt-2 text-4xl">$</p>
                                          <h2 className="text-8xl font-extrabold">49</h2>
                                          <p className="font-semibold text-2xl mt-20">per/mo</p>
                                    </div>
                                    <p className="text-2xl p-4 text-justify">A pay-once license, just for you</p>
                                    <div className="p-4">
                                          <ul className="list-decimal pl-6">
                                                <li className="text-xl">The Mac app - yours to keep</li>
                                                <li className="text-xl">Beautiful White_Level</li>
                                                <li className="text-xl">One year of saving</li>
                                          </ul>
                                    </div>
                                    
                                    <div className="flex justify-center mt-14">      
                                          <Button
                                                className="mt-24 w-64 h-14 rounded-none text-2xl hover:bg-white hover:text-black hover:border-2 hover:border-black"
                                          >
                                                Join
                                          </Button>
                                    </div>
                              </CardPrice>

                              <CardPrice className="bg-[#000] text-white">
                                    <div className="flex justify-center ">
                                          <p className="font-extrabold mt-2 text-4xl">$</p>
                                          <h2 className="text-8xl font-extrabold">99</h2>
                                          <p className="font-semibold text-2xl mt-20">per/mo</p>
                                    </div>
                                    <p className="text-2xl p-4 text-justify">A pay-once license, just for you</p>
                                    <div className="p-4">
                                          <ul className="list-decimal pl-6">
                                                <li className="text-xl">The Mac app </li>
                                                <li className="text-xl">One year of Mac app</li>
                                                <li className="text-xl">One year saving</li>
                                                <li className="text-xl">A personal Cloud</li>
                                                <li className="text-xl">All tools, just for you</li>
                                          </ul>
                                    </div>
                                    
                                    <div className="flex justify-center">      
                                          <Button
                                                className="mt-24 w-64 h-14 rounded-none text-2xl bg-white text-black hover:bg-black hover:text-white hover:border-2 hover:border-white"
                                          >
                                                Join
                                          </Button>
                                    </div>
                              </CardPrice>

                              <CardPrice className="">
                                    <div className="flex justify-center ">
                                          <p className="font-extrabold mt-2 text-4xl">$</p>
                                          <h2 className="text-8xl font-extrabold">299</h2>
                                          <p className="font-semibold text-xl mt-20">per/mo</p>
                                    </div>
                                    <p className="text-2xl p-4 text-justify">A subscription for the whole team</p>
                                    <div className="p-4">
                                          <ul className="list-decimal pl-6">
                                                <li className="text-xl">Access to the Mac app</li>
                                                <li className="text-xl">Cloud workspace</li>
                                                <li className="text-xl">Free Cloud Access</li>
                                                <li className="text-xl">Easy team management</li>
                                                <li className="text-xl">No license key required</li>
                                          </ul>
                                    </div>
                                    
                                    <div className="flex justify-center">      
                                          <Button
                                                className="mt-24 w-64 h-14 rounded-none text-2xl hover:bg-white hover:text-black hover:border-2 hover:border-black"
                                          >
                                                Join
                                          </Button>
                                    </div>
                              </CardPrice>
                        </div>
                  </div>
            </Section>
      )
}