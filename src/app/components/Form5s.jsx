'use client'

import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Listbox, Transition } from '@headlessui/react'



export default function Form5s() {
  return (
    <div className='px-6 py-8 sm:py-12 lg:px-8'>

    <div className="container mx-auto w-full text-center">

    <p className="m-5 text-sm text-gray-600 tracking-wide">
BOOKING FORM    
</p>
    <h2 className="text-6xl font-semibold leading-7 text-slate-700">5 SEATERS</h2>
    <p className="mt-5 text-lg font-semibold text-slate-500">UP TO 5 LUGGAGES</p>
  </div> 
  
    <form className='flex mx-auto max-w-4xl p-8 mt-10'>       
    <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-12">
        
{/* field name */}
            <div className="lg:col-span-6 col-span-12">
              <label htmlFor="name" className="block text-md font-medium leading-6 text-gray-700">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                />
              </div>
            </div>
{/* field email */}
            <div className="lg:col-span-6 col-span-12">
            <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-700">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                />
              </div>
            </div>
{/* field arrival date */}
            <div className="lg:col-span-6 col-span-8">
              <label htmlFor="arrivaldate" className="block text-md font-medium leading-6 text-gray-700">
                Arrival Date
              </label>
              <div className="mt-2">
                <input
                  id="arrivaldate"
                  name="arrivaldate"
                  type="date"
                  autoComplete="date"
                  className="block w-full h-fit rounded-md border-0 py-[10px] px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                />
              </div>
            </div>
{/* pick time */}
            <div className="lg:col-span-6 col-span-4">
            <label htmlFor="phone-number" className="block text-md font-medium leading-6 text-gray-700">
              Pick Up Time
            </label>
            <div className="relative mt-2">
              <div className="flex">
                <label htmlFor="pickuptime" className="sr-only">
                  Time
                </label>
        
              <input
                type="text"
                name="pickuptime"
                id="pickuptime"
                placeholder="0:00"
                className="block w-full rounded-md border-0 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-8"
              /></div>
              <select
                  id="pickuptime"
                  name="pickuptime"
                  className="absolute top-0  right-0 h-full rounded-md border-0 bg-transparent py-0 pl-4 pr-8 text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg"
                >
                  <option>AM</option>
                  <option>PM</option>
                </select>              
            </div>
          </div>
{/* Flight No. */}
          <div className="lg:col-span-4 col-span-7">
              <label htmlFor="city" className="block text-md font-medium leading-6 text-gray-700">
                Flight No.
              </label>
              <div className="mt-2">
                <input
                  type="flightno"
                  name="flightno"
                  id="flight"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                />
              </div>
            </div>
{/* pax */}
<div className="lg:col-span-4 col-span-3">
              <label htmlFor="noofpax" className="block text-md font-medium leading-6 text-gray-700">
                No. of Pax
              </label>
              <div className="mt-2">
                <select
                  id="noofpax"
                  name="noofpax"
                  className="block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-lg sm:leading-7"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
{/* luggage  */}
<div className="lg:col-span-4 col-span-2">
              <label htmlFor="noofpax" className="block text-md font-medium leading-6 text-gray-700">
                No. of Luggage
              </label>
              <div className="mt-2">
                <select
                  id="noofpax"
                  name="noofpax"
                  className="block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-lg sm:leading-7"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
{/* Pick up from */}
            <div className="col-span-12">
              <label htmlFor="street-address" className="block text-md font-medium leading-6 text-gray-700">
                Pick Up Location
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                />
              </div>
            </div>
{/* Drop off */}
            <div className="col-span-12">
              <label htmlFor="street-address" className="block text-md font-medium leading-6 text-gray-700">
                Drop Off Location
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                />
              </div>
            </div>

          </div>

      {/* <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div> */}
    </form>
    </div>
  )
}
