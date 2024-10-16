"use client"

import { Card } from "./layouts/Card"
import { Section } from "./layouts/Section"
import { Button } from "./ui/button"

import Square from "../../public/assets/square.svg"
import Box from "../../public/assets/box.svg"
import Fluxo from "../../public/assets/fluxo.svg"
import Rocket from "../../public/assets/rocket.svg"
import Image from "next/image"
import Ilustration from '../../public/assets/Illustration_3.svg'

export const WorkSection = () => {
      return (
            <Section className="p-2 flex justify-center">
                  <div className="p-2 flex flex-col items-start justify-between container md:flex-row">

                        <div className="p-2 mb-8 md:w-3/5">
                              <Button
                                    className="bg-white text-black font-semibold w-28 rounded-none border-2 border-black mt-8 mb-8 hover:text-white"
                              >
                                    How it Works
                              </Button>

                              <h2 className="text-5xl md:mb-10">Building the best space for collaboration.</h2>

                              <Card  className="">
                                    <Image src={Square} alt="Square" />
                                    <div className="flex flex-col gap-y-4">
                                          <h2 className="text-3xl font-medium">Shared Cloud Libraries</h2>
                                          <p>
                                                Navigate tot the Your work panel in the left sidebar. Select the library you want to share. Select the Share icon in the upper right to share the library.
                                          </p>
                                    </div>

                              </Card>
                              <Card>
                                    <Image src={Fluxo} alt="Fluxo" />
                                    <div className="flex flex-col gap-y-4">
                                          <h2 className="text-3xl font-medium">Free developer handoff, right inside</h2>
                                          <p>
                                                Cloud inspector makes it easy for developers to get the information they need to turn pixels into code - all in browser and, most importantly, for free.
                                          </p>
                                    </div>

                              </Card>
                              <Card>
                                    <Image src={Rocket} alt="Rocket" />
                                    <div className="flex flex-col gap-y-4">
                                          <h2 className="text-3xl font-medium">Real-Time collaborative editing</h2>
                                          <p>
                                                Room Service helps you build real-time collaborative features. Add real-time data sync! Let users edit the same data at the same time.
                                          </p>
                                    </div>
                              </Card>
                              <Card>
                                    <Image src={Box} alt="Box" />
                                    <div className="flex flex-col gap-y-4">
                                          <h2 className="text-3xl font-medium">Integrations with the Cloud API</h2>
                                          <p>
                                                Unlocking that value requires an iPaaS that delivers the tranformative power of APIs and integration.
                                          </p>
                                    </div>
                              </Card>

                        </div>
                        <div className="hidden md:flex  md:w-2/5">
                              <Image src={Ilustration} alt="Ilustration" />
                        </div>
                  </div>
            </Section>
      )
}