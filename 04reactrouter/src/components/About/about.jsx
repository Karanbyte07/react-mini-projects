import React from 'react';

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:w-5/12 lg:w-5/12">
                        <img
                            src="img4.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:w-7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Our Story – Passion for Pizza, Love for People
                        </h2>
                        <p className="mt-6 text-gray-600">
                            At Your Brand Name, pizza is more than food – it’s a way of bringing people together. What started as a small kitchen idea has grown into a neighborhood favorite for quality, flavor, and freshness.
                        </p>
                        <p className="mt-4 text-gray-600">
                            We believe in:
                            Freshly made dough every day.
                            Locally sourced ingredients whenever possible.
                            Fast, friendly, and reliable delivery.
                            Join our journey and taste the difference in every bite.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
