"use client"

import Image from 'next/image'
import { Input } from './ui/input'
import { Button } from './ui/button'

import Logo from '../../public/assets/LogoWhite.svg'
import FaceBook from '../../public/assets/social_fb.svg'
import Twitter from '../../public/assets/social_tw.svg'
import GooglePlus from '../../public/assets/social_gl.svg'
import Linkedin from '../../public/assets/social_in.svg'
import Youtube from '../../public/assets/social_yt.svg'

export const Footer = () => {
      return(
            <footer className='bg-black text-white flex justify-center p-2 mt-10'>
                  <section className='container flex flex-col items-center  p-2 mt-8'>
                        <div className='flex flex-col  w-full md:flex-row md:items-start md:gap-10'>
                              <div className='p-2 mb-6 md:w-2/4'>
                                    <Image src={Logo} alt='logolight'/>
                                    <h2 className='mt-6 text-3xl md:text-6xl'>
                                          Want to recieve our awesome stories?
                                    </h2>

                                    <div className='flex mt-6'>
                                          <Input placeholder="Enter your email" className="w-3/4 text-xl rounded-none h-14 placeholder:text-black outline-none border-none bg-white text-black"  />
                                          <Button className="w-1/2 rounded-none h-14 text-xl hover:border-2">Get Started</Button>
                                    </div>
                              </div>
                              <div className=' flex flex-col items-center p-2 md:flex-row md:items-start gap-8 md:w-2/4'>
                                    <div className=' flex flex-col items-center w-full p2 gap-y-4 mt-8'>
                                          <p className='text-xl'>About Us</p>
                                          <p className='text-xl'>How it works</p>
                                          <p className='text-xl'>Pricing</p>
                                          <p className='text-xl'>FAQs</p> 
                                    </div>
                                    <div className=' flex flex-col items-center w-full p-2 gap-y-4 mt-6'>
                                          <p className='text-xl'>Lead generation</p>
                                          <p className='text-xl'>Customer engagement</p>
                                          <p className='text-xl'>Customer support</p>
                                          <p className='text-xl'>Help Center Articles</p>
                                          <p className='text-xl'>Outbound Messages</p>

                                          <div className=' flex flex-col items-center w-full mt-6 gap-y-4'>
                                                <h2 className='text-xl font-extrabold'>Email</h2>
                                                <p className='text-xl'>info@the18.design</p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className='flex flex-col-reverse md:flex-row md:justify-between md:items-center md-flex w-full mt-6 mb-6 justify-center items-center'>
                              <p className=''>
                                    &copy; The 18 Design, All rights reserved.
                              </p>

                              <div className='flex'>
                                    <Image src={FaceBook} alt='Face Logo'/>
                                    <Image src={Twitter} alt='Twitter Logo'/>
                                    <Image src={GooglePlus} alt='GooglePlus Logo'/>
                                    <Image src={Linkedin} alt='Linkedin Logo'/>
                                    <Image src={Youtube} alt='Youtube Logo'/>
                              </div>
                        </div>
                  </section>
            </footer>
      )
}