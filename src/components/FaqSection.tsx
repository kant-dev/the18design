"use client"

import Image from "next/image"
import { Section } from "./layouts/Section"
import { Button } from "./ui/button"
import {
      Accordion,
      AccordionContent,
      AccordionItem,
      AccordionTrigger,
} from "@/components/ui/accordion"

import Ilustration from '../../public/assets/Illustration_5.svg'

export const FaqSection = () => {
      return (
            <Section className="flex justify-center p-2 mt-10">
                  <div className="container p-2 flex flex-col items-center">
                        <div className="flex">
                              <div className="md:w-3/5">
                                    <Button
                                          className="bg-white text-black font-semibold w-28 rounded-none border-2 border-black mt-8 mb-8 hover:text-white"
                                    >
                                          FAQs
                                    </Button>

                                    <h2 className="text-5xl mb-8 md:text-7xl">Common Questions</h2>

                                    <p className="text-xl md:text-4xl md:font-extralight">The online form also provides links to a set frequently asked questions, other information materials related to the financial disclosure programme.</p>
                              </div>

                              <div className="hidden md:block md:w-2/5">
                                    <Image src={Ilustration} alt="Ilustration" width={600}/>
                              </div>
                        </div>

                        <div className=" w-3/4 flex justify-center p-2 mt-10">
                              <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                          <AccordionTrigger className="text-xl font-extrabold text-start p-2 md:text-3xl">How much does a Teams subscription cost?</AccordionTrigger>
                                          <AccordionContent className="text-lg p-2 md:text-xl">
                                                Contributors are members of your team who need access to use the Mac app to create and edit Sketch documents. These prices don't include sales tax, which may still apply. Head over to out pricing page to get full details.
                                          </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                          <AccordionTrigger className="text-xl font-extrabold text-start p-2 md:text-3xl">Do I still need to purchase licenses fot the Mac app</AccordionTrigger>
                                          <AccordionContent className="text-lg p-2 md:text-xl">
                                                No, when you subscribe to the Teams plan, members of your team who are added as "Contributors" get full access to the Mac app without needing separate licenses. The subscription covers the use of the tool for all registered contributors.
                                          </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                          <AccordionTrigger className="text-xl font-extrabold text-start p-2 md:text-3xl">What are the differences between Contributors and Viewers? </AccordionTrigger>
                                          <AccordionContent className="text-lg p-2 md:text-xl">
                                                "Contributors" can create, edit, and collaborate directly on documents, while "Viewers" have access only to view files without making changes. The Teams plan provides flexibility, allowing you to assign permissions based on each person’s role in the team.
                                          </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-4">
                                          <AccordionTrigger className="text-xl font-extrabold text-start p-2 md:text-3xl">How long does the free Teams subscription trial last?</AccordionTrigger>
                                          <AccordionContent className="text-lg p-2 md:text-xl">
                                                The free Teams subscription trial lasts for 30 days. During this period, you have full access to all features to evaluate if the plan meets your team's needs.
                                          </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-5">
                                          <AccordionTrigger className="text-xl font-extrabold text-start p-2 md:text-3xl">Will program for Teams replace volume licensing? </AccordionTrigger>
                                          <AccordionContent className="text-lg p-2 md:text-xl">
                                                The Teams program offers a different approach than volume licensing. It's more suitable for teams that need real-time collaborative access, whereas volume licenses are typically for organizations that want to distribute software licenses individually.
                                          </AccordionContent>
                                    </AccordionItem>
                              </Accordion>
                        </div>
                  </div>
            </Section>
      )
}