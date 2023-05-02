'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react';
import Image from 'next/image';


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div style={{ 
      height: '90vh',
      color: 'white',
      backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url("https://1e64.net/lw-hpm-48dbc2/uploads/photo-site-photoshop-HgYw.jpg")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
     }} 
     className="h-screen
    text-white bg-gradient-to-t 
      from-transparent to-black 
      bg-no-repeat bg-cover bg-center"
    >
      
      <header className="absolute inset-x-0 top-0 z-50"> {/* asuuh */}
        
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          {/* Logo*/}
          <div className="flex lg:flex-1">  
            {/* <span className='text-[40px] font-helveticacustom font-bold tracking-widest'>Merit Project</span> */}
            <Image alt="Logo" className="cursor-pointer hidden md:block" height="150" width="200" src="/images/logo.svg" /> 
          </div> 
          {/* Logo */}

          {/* 3 line bar that shows when the screen is below 1024px */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/* 3 line bar that shows when the screen is below 1024px */}

          {/* this maps out all the middle links and is hidden below 1024px */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          {/* this maps out all the middle links and is hidden below 1024px */}
          {/* top right link that is hidden inside the three bar when below 1024px */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
          {/* top right link that is hidden inside the three bar when below 1024px */}

        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          {/* <div className="fixed inset-0 z-50" /> */}
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            {/* mobile menu logo and close button */}
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                {/* <span className="sr-only">Your Company</span> */}
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {/* <span className="sr-only">Close menu</span> */}
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            {/* mobile menu logo and close button */}

            <div className="mt-6 flow-root"> {/* asuuh */}
              <div className="-my-6 divide-y divide-gray-500/10"> {/* asuuh */}
                {/* using map fucntion to render 4 different elements */}
                <div className="space-y-2 py-6"> {/* asuuh */}
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                {/* using map fucntion to render 4 different elements */}

                {/* log in button */}
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
                {/* log in button */}
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        fontSize: '1.4em',
        letterSpacing: '9px'}} 
        className="hero-text"
        >
          <h1 className="header-text">HORIZON</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
       </div>
    </div>
  )
}
