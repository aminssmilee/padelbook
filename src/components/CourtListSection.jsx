"use client";
import React from "react";

const courts = [
  { id: 1, name: "Padel Court A", location: "Jakarta", price: "Rp 250.000/jam" },
  { id: 2, name: "Padel Court B", location: "Surabaya", price: "Rp 200.000/jam" },
  { id: 3, name: "Padel Court C", location: "Bandung", price: "Rp 220.000/jam" },
];

export default function CourtListSection() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-6">Daftar Padel Courts</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courts.map((court) => (
          <div
            key={court.id}
            className="bg-white rounded-2xl shadow p-6 flex flex-col justify-between"
          >
            <h3 className="text-xl font-semibold mb-2">{court.name}</h3>
            <p className="text-gray-600">{court.location}</p>
            <p className="text-gray-800 font-medium mt-2">{court.price}</p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl">
              Booking Sekarang
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
