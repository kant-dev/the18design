"use client"

import { Section } from "./layouts/Section"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

import Visa  from '../../public/assets/VISA.svg'
import MasterCard  from '../../public/assets/MASTERCARD.svg'
import PayPal  from '../../public/assets/PAYPALL.svg'
import Image from "next/image"
import Ilustration from '../../public/assets/Illustrations_1.svg'


export const InitSection = () => {
      return (
            <Section className="flex justify-center mt-10 mb-10">
                  <div className="container flex items-center justify-between ">
                        <div className="p-2 md:w-6/12">
                              <h2 className="text-6xl p-1">
                                    Always Track & Analyze Your Business Statics To Succeed.
                              </h2>
                              <p className="text-xl p-2">
                                    A better way to manage you sales, team, clients & marketing - on a single platform. Powerfull affordable & easy
                              </p>

                              <div className="flex justify-center p-5 mt-4 mb-8">
                                    <Input placeholder="Enter your email" className="w-3/4 text-xl rounded-none h-14 placeholder:text-black outline-none border-none bg-white"  />
                                    <Button className="w-1/2 rounded-none h-14 text-xl">Get Started</Button>
                              </div>

                              <div className="flex justify-center gap-8">
                                    <Image src={Visa} alt="Logo da Visa"/>
                                    <Image src={MasterCard} alt="Logo do Mastercard"/>
                                    <Image src={PayPal} alt="Logo do PayPal"/>
                              </div>
                        </div>
                        <div className="hidden md:block w-full md:w-5/12">
                              <Image src={Ilustration} alt="Ilustration " />
                        </div>
                  </div>

            </Section>
      )
}