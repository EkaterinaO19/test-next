import React from 'react';
// import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

function Newsletter(props) {
    return (
        <section className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <div className="max-w-xl lg:max-w-lg">
                        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Subscribe to our newsletter.</h2>
                        <p className="mt-4 text-lg leading-8 text-gray-800">
                            Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
                            dolore.
                        </p>
                        <div className="mt-6 flex max-w-md gap-x-4">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="min-w-0 border-2 border-gray-400 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="flex-none rounded-md bg-transparent border-black border-2 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-200  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                        <div className="flex flex-col items-start">
                            <dt className="mt-4 font-semibold text-black">Weekly articles</dt>
                            <dd className="mt-2 leading-7 text-gray-600">
                                Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                            </dd>
                        </div>
                        <div className="flex flex-col items-start">
                            <dt className="mt-4 font-semibold text-black">No spam</dt>
                            <dd className="mt-2 leading-7 text-gray-600">
                                Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    );
}

export default Newsletter;