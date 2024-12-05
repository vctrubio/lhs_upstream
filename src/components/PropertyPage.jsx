"use client";

import {
    Bed,
    Bath,
    Square,
    MapPin,
    Heart,
    Share2,
    Wind,
    Flame,
    Building2,
    Home,
    User,
    Package,
    Car,
    Phone,
} from "lucide-react";
import { useState } from "react";

export default function PropiedadPage({ property }) {
    console.log('property check from Page', property);

    const [activeImage, setActiveImage] = useState(0);
    const images = [
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ];

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Image Gallery Section */}
            <div className="mb-12">
                {/* Main Image */}
                <div className="relative rounded-t-lg">
                    <div className="aspect-[16/9] relative">
                        <img
                            src={images[activeImage]}
                            alt="Luxury Property Main View"
                            className="absolute inset-0 w-full h-full object-contain bg-gray-100"
                        />
                    </div>

                    {/* <div className="absolute top-6 right-6 flex gap-4">
                        <button className=" p-3 rounded-full shadow-lg hover:bg-white transition-colors">
                            <Heart className="w-6 h-6 text-[#14213D]" />
                        </button>
                        <button className=" p-3 rounded-full shadow-lg hover:bg-white transition-colors">
                            <Share2 className="w-6 h-6 text-[#14213D]" />
                        </button>
                    </div> */}

                </div>

                {/* Thumbnails */}
                <div className="rounded-b-lg p-4">
                    <div className="grid grid-cols-4 gap-2">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer overflow-hidden rounded-lg aspect-video ${activeImage === index
                                    ? "ring-2 ring-[#B8860B] ring-offset-2"
                                    : "opacity-70 hover:opacity-100"
                                    }`}
                                onClick={() => setActiveImage(index)}
                            >
                                <img
                                    src={image}
                                    alt={`Property view ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Property Details */}
            <div className="grid lg:grid-cols-3 gap-12">
                {/* Left Column */}
                <div className="lg:col-span-2">
                    <h1 className="font-serif text-4xl md:text-5xl text-[#14213D] mb-4">
                        Villa Serenity Estate
                    </h1>

                    <div className="flex items-center text-gray-600 mb-8">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>Beverly Hills, Los Angeles, California</span>
                    </div>

                    {/* Property Stats */}
                    <div className="grid grid-cols-3 gap-8 mb-12">
                        <div className="flex items-center">
                            <Bed className="w-6 h-6 text-[#B8860B] mr-3" />
                            <div>
                                <p className="text-sm text-gray-500">Bedrooms</p>
                                <p className="text-lg font-semibold text-[#14213D]">6</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Bath className="w-6 h-6 text-[#B8860B] mr-3" />
                            <div>
                                <p className="text-sm text-gray-500">Bathrooms</p>
                                <p className="text-lg font-semibold text-[#14213D]">8</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Square className="w-6 h-6 text-[#B8860B] mr-3" />
                            <div>
                                <p className="text-sm text-gray-500">Square Feet</p>
                                <p className="text-lg font-semibold text-[#14213D]">12,500</p>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-12">
                        <h2 className="font-serif text-2xl text-[#14213D] mb-4">
                            Property Description
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Nestled in the prestigious Beverly Hills, Villa Serenity Estate
                            represents the pinnacle of luxury living. This architectural
                            masterpiece seamlessly blends contemporary design with timeless
                            elegance, offering an unparalleled living experience.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            The estate features soaring 14-foot ceilings, floor-to-ceiling
                            windows that flood the space with natural light, and meticulously
                            curated designer finishes throughout. The grand chef's kitchen boasts
                            Calacatta marble countertops, professional-grade appliances, and a
                            temperature-controlled wine room.
                        </p>
                    </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-1">
                    <div className="sticky top-8 bg-white rounded-xl shadow-xl p-8">
                        {/* Price Section */}
                        <div className="mb-8">
                            <span className="text-sm text-gray-500">Price</span>
                            <div className="text-4xl font-serif text-[#14213D] mb-3">
                                €12,500,000
                            </div>
                            <div className="space-y-2 border-t border-gray-100 pt-3">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">+ IBI</span>
                                    <span className="text-gray-600 font-medium">€8,500/year</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">+ Monthly Maintenance</span>
                                    <span className="text-gray-600 font-medium">€950/month</span>
                                </div>
                            </div>
                        </div>

                        {/* Amenities Section */}
                        <div className="border-t pt-8">
                            <h3 className="font-serif text-xl text-[#14213D] mb-6">
                                Amenities
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-2">
                                    <Wind className="w-5 h-5 text-[#B8860B]" />
                                    <span className="text-gray-600">AC</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Flame className="w-5 h-5 text-[#B8860B]" />
                                    <span className="text-gray-600">Heating</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Building2 className="w-5 h-5 text-[#B8860B]" />
                                    <span className="text-gray-600">Rooftop</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Home className="w-5 h-5 text-[#B8860B]" />
                                    <span className="text-gray-600">Furnished</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User className="w-5 h-5 text-[#B8860B]" />
                                    <span className="text-gray-600">Portero</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Package className="w-5 h-5 text-[#B8860B]" />
                                    <span className="text-gray-600">Trastero</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 text-[#B8860B]" />
                                    <span className="text-gray-600">Elevator</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Car className="w-5 h-5 text-[#B8860B]" />
                                    <span className="text-gray-600">Parking</span>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-8 space-y-3">
                            <button className="w-full bg-[#14213D] text-white py-4 rounded-lg hover:bg-[#1a2b4d] transition-colors flex items-center justify-center gap-2">
                                <Phone className="w-5 h-5" />
                                <span>Call Now</span>
                            </button>
                            <button className="w-full border-2 border-[#14213D] text-[#14213D] py-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                <Share2 className="w-5 h-5" />
                                <span>Share Property</span>
                            </button>
                            <button className="w-full bg-[#B8860B] text-white py-4 rounded-lg hover:bg-[#9a7209] transition-colors">
                                Find Similar Properties
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

