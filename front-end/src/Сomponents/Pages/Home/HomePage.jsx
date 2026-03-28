import React, { useState } from 'react';

import { useDevice } from '../../../hooks/useDevice.js';

const INITIAL_TRIPS = [
    {
        id: 1,
        destination: "Исландия, Рейкьявик",
        dates: "12 мая — 20 мая",
        guests: [
            { id: 1, avatar: "https://i.pravatar.cc/150?u=1" },
            { id: 2, avatar: "https://i.pravatar.cc/150?u=2" },
            { id: 3, avatar: "https://i.pravatar.cc/150?u=3" }
        ],
        isFavorite: true,
        image: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=400&q=80"
    },
    {
        id: 2,
        destination: "Токио, Япония",
        dates: "5 сент — 15 сент",
        guests: [
            { id: 1, avatar: "https://i.pravatar.cc/150?u=1" },
            { id: 4, avatar: "https://i.pravatar.cc/150?u=4" }
        ],
        isFavorite: false,
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80"
    }
];

export default function HomePage() {
    const { isMobile } = useDevice();
    const [trips, setTrips] = useState(INITIAL_TRIPS);

    const toggleFavorite = (id) => {
        setTrips(trips.map(trip =>
            trip.id === id ? { ...trip, isFavorite: !trip.isFavorite } : trip
        ));
    };

    const sortedTrips = [...trips].sort((a, b) => b.isFavorite - a.isFavorite);

    return (
        <div className={`mx-auto ${isMobile ? 'px-4 py-6' : 'max-w-5xl px-6 py-10'}`}>

            {/* Header Section */}
            <div className={`flex items-center justify-between ${isMobile ? 'mb-6' : 'mb-10'}`}>
                <div className="flex-grow pr-4">
                    <h1 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-black text-slate-950 tracking-tighter leading-none`}>
                        Мои поездки
                    </h1>
                    <p className={`text-slate-500 font-medium ${isMobile ? 'text-xs mt-1' : 'mt-2'}`}>
                        {isMobile ? 'Куда летим?' : 'Куда отправимся в следующий раз?'}
                    </p>
                </div>

                <button className={`${isMobile ? 'w-12 h-12 rounded-xl' : 'w-14 h-14 rounded-2xl'} bg-blue-600 text-white shadow-lg shadow-blue-200 active:scale-90 transition-all flex items-center justify-center shrink-0`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={isMobile ? "w-6 h-6" : "w-8 h-8"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </button>
            </div>

            {/* Trips List */}
            <div className={`grid ${isMobile ? 'gap-4' : 'gap-6'}`}>
                {sortedTrips.map((trip) => (
                    <div
                        key={trip.id}
                        className={`group bg-white border border-slate-100 flex items-center transition-all duration-300
                            ${isMobile ? 'p-3 rounded-2xl gap-4' : 'p-4 rounded-[32px] gap-6 shadow-sm hover:shadow-xl hover:border-blue-100'}`}
                    >
                        {/* Trip Image */}
                        <div className={`shrink-0 overflow-hidden rounded-2xl ${isMobile ? 'w-16 h-16' : 'w-32 h-32'}`}>
                            <img
                                src={trip.image}
                                alt={trip.destination}
                                className="w-full h-full object-cover group-active:scale-110 transition-transform duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-grow min-w-0">
                            <div className="flex items-start justify-between">
                                <div className="min-w-0">
                                    <h3 className={`${isMobile ? 'text-base' : 'text-xl'} font-bold text-slate-900 truncate tracking-tight`}>
                                        {trip.destination}
                                    </h3>
                                    <p className={`${isMobile ? 'text-[10px]' : 'text-sm'} font-bold text-blue-600 uppercase tracking-wider`}>
                                        {trip.dates}
                                    </p>
                                </div>

                                <button
                                    onClick={() => toggleFavorite(trip.id)}
                                    className={`p-2 rounded-full transition-colors shrink-0 ${trip.isFavorite ? 'text-orange-400 bg-orange-50' : 'text-slate-300'}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className={isMobile ? "w-5 h-5" : "w-6 h-6"} fill={trip.isFavorite ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.482-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                </button>
                            </div>

                            {/* Guests & Stats */}
                            <div className={`flex items-center ${isMobile ? 'mt-2 gap-2' : 'mt-4 gap-4'}`}>
                                <div className={`flex ${isMobile ? '-space-x-2' : '-space-x-3'} overflow-hidden`}>
                                    {trip.guests.map((guest, idx) => (
                                        <img
                                            key={idx}
                                            className={`${isMobile ? 'h-6 w-6' : 'h-8 w-8'} rounded-full ring-2 ring-white object-cover`}
                                            src={guest.avatar}
                                            alt="guest"
                                        />
                                    ))}
                                </div>
                                {!isMobile && (
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                        {trip.guests.length} участников
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}