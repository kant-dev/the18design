"use client"

import Image from "next/image"
import { Section } from "./layouts/Section"
import { Button } from "./ui/button"

import Ilustration from '../../public/assets/Illustration_2.svg'

export const AboutSection = () => {
      return(
            <Section className="p-2 flex justify-center">
                  <div className="p-2 container flex flex-col md:flex-row-reverse">
                        <div className="mb-10 md:w-1/2">
                              <Button 
                                    className="bg-white text-black font-semibold w-28 rounded-none border-2 border-black mt-8 mb-8 hover:text-white"
                              >
                                    About Us
                              </Button>

                              <h2 className="text-5xl mb-6">
                                    Faster, friendlier feedback loops make life easier.
                              </h2>

                              <p className="text-xl">
                                    Add a Viewer to your team so they can see everything you share, or invite people to individual documents. It's up to you. StackHolders can check out designs in their web browser, test prototypes and leave feedbacks free.
                              </p>

                              <ul className="list-decimal p-5 mt-4 flex flex-col gap-y-4">
                                    <li>
                                          Share Cloud Libraries, for a single source of truth
                                    </li>
                                    <li>Prototype previews for user testing and research</li>
                                    <li>Easy organization with projects</li>
                                    <li>Free Developer handoff, right inside the browser</li>
                                    <li>Two-factor authentication and SS0</li>
                              </ul>

                        </div>

                        <div className="mt-10 mb-10 md:w-1/2 w-screen">
                              <Image src={Ilustration} alt="Ilustration" width={580}/>
                        </div>
                  </div>
            </Section>
      )
}