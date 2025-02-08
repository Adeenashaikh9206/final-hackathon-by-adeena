
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Field from '../components/Feild';
import Header from '../components/header';

function Checkout() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        country: '',
        address: '',
        town: '',
        province: '',
        zip: '',
        phone: '',
        email: '',
        additionalInfo: '',
    });

    const [paymentMethod, setPaymentMethod] = useState('bankTransfer');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentMethod(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here, you can handle form submission, API calls, etc.
        console.log('Form submitted:', formData, 'Payment Method:', paymentMethod);
    };

    return (
        <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
            <div className='bg-[#faf4f4]'>
                <Header />
            </div>

            {/* Banner Section */}
            <div className="relative text-black">
                <Image
                    src="/shop.jpeg" // Replace with the correct image file path
                    alt="Shop Banner"
                    height={400}
                    width={1600}
                    className="w-full h-[200px] sm:h-[300px] md:h-auto object-cover"
                />
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl md:text-5xl font-semibold">
                    Checkout
                </h1>
                {/* Breadcrumb Section */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
                    <p className="text-gray-700 text-xs sm:text-sm md:text-xl flex items-center">
                        <Link href="/" className="font-bold hover:underline">Home</Link>
                        <span className="font-bold mx-2">{'>'}</span>
                        <Link href="/shop" className="hover:underline">Checkout</Link>
                    </p>
                </div>
            </div>

            {/* Billing Section */}
            <div className="flex flex-col sm:flex-row mx-4 sm:mx-10 gap-6 mt-8">
                <div className="w-full sm:w-1/2 md:mx-20">
                    <h3 className="font-semibold text-2xl mt-10 mb-8">Billing Details</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block my-4">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className="w-full border border-gray-500 rounded p-3"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block my-4">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="w-full border border-gray-500 rounded p-3"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        {/* Additional fields */}
                        <div className="mt-4">
                            <label htmlFor="companyName" className="block my-4 mt-6">Company Name (Optional)</label>
                            <input
                                type="text"
                                id="companyName"
                                className="w-full border-gray-500 rounded border p-3"
                                value={formData.companyName}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="country" className="block my-4 mt-6">Country / Region</label>
                            <input
                                type="text"
                                id="country"
                                className="w-full border-gray-500 rounded border p-3"
                                value={formData.country}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="address" className="block my-4 mt-6">Street Address</label>
                            <input
                                type="text"
                                id="address"
                                className="w-full border-gray-500 rounded border p-3"
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="gap-4 mt-4 sm:grid sm:grid-cols-2">
                            <div>
                                <label htmlFor="town" className="block my-4 mt-6">Town / City</label>
                                <input
                                    type="text"
                                    id="town"
                                    className="w-full border-gray-500 rounded border p-3"
                                    value={formData.town}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="province" className="block my-4 mt-6">Province</label>
                                <input
                                    type="text"
                                    id="province"
                                    className="w-full border-gray-500 rounded border p-3"
                                    value={formData.province}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label htmlFor="zip" className="block my-4 mt-6">ZIP Code</label>
                            <input
                                type="text"
                                id="zip"
                                className="w-full border-gray-500 rounded border p-3"
                                value={formData.zip}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="phone" className="block my-4 mt-6">Phone</label>
                            <input
                                type="text"
                                id="phone"
                                className="w-full border-gray-500 rounded border p-3"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="email" className="block my-4 mt-6">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border-gray-500 rounded border p-3"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mt-4">
                            <input
                                type="text"
                                id="additionalInfo"
                                placeholder="Additional Information"
                                className="w-full border-gray-500 my-4 mt-6 rounded border p-3"
                                value={formData.additionalInfo}
                                onChange={handleInputChange}
                            />
                        </div>
                    </form>
                </div>

                {/* Order Summary */}
                <div className="w-full sm:w-1/2 md:mx-20 mt-4 lg:mt-0">
                    <div className="mt-4">
                        <table className="w-full table-auto">
                            <thead>
                                <tr>
                                    <th className="py-2 text-left text-xl">Product</th>
                                    <th className="py-2 text-right text-xl">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 text-gray-500">Asgaard Sofa x 1</td>
                                    <td className="py-2 text-right">Rs: 250,000.00</td>
                                </tr>
                                <tr>
                                    <td className="py-2 font-semibold">Subtotal</td>
                                    <td className="py-2 text-right">Rs: 250,000.00</td>
                                </tr>
                                <tr className="border-b font-semibold">
                                    <td className="py-2">Total</td>
                                    <td className="py-2 text-yellow-700 text-right text-xl">Rs: 250,000.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Payment Method */}
                    <div className="flex items-center mt-4">
                        <input
                            type="radio"
                            id="bankTransfer"
                            name="payment"
                            value="bankTransfer"
                            className="mr-2"
                            checked={paymentMethod === 'bankTransfer'}
                            onChange={handlePaymentChange}
                        />
                        <label htmlFor="bankTransfer" className="text-md">Direct Bank Transfer</label>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at arcu at eros malesuada facilisis.</p>

                    <div className="flex items-center mt-4 text-gray-400">
                        <input
                            type="radio"
                            id="cod"
                            name="payment"
                            value="cod"
                            className="mr-2"
                            checked={paymentMethod === 'cod'}
                            onChange={handlePaymentChange}
                        />
                        <label htmlFor="cod" className="text-md">Cash On Delivery</label>
                    </div>
                    <p className="text-sm text-gray-600 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at arcu at eros malesuada facilisis.</p>

                    <button className="mt-6 border border-black py-3 px-14 rounded-xl w-full sm:w-auto" type="submit">Place Order</button>
                </div>
            </div>
            <Field />
        </div>
    );
}

export default Checkout;
