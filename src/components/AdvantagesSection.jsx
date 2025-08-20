"use client";

const advantages = [
  {
    icon: (
      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l7 4v6c0 5.25-3.75 10-7 10s-7-4.75-7-10V6l7-4z" />
      </svg>
    ),
    title: "Lapangan Standar Internasional",
    description: "Semua lapangan menggunakan standar FIP (International Padel Federation)",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Booking Online 24/7",
    description: "Sistem booking online yang tersedia 24 jam setiap hari",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-4.418 0-8 1.79-8 4v4h16v-4c0-2.21-3.582-4-8-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8V6a2 2 0 114 0v2" />
      </svg>
    ),
    title: "Harga Terjangkau",
    description: "Harga kompetitif dengan berbagai paket hemat untuk semua kalangan",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 21a8.38 8.38 0 001.5-4.5C21 12.358 16.642 8 12 8S3 12.358 3 16.5A8.38 8.38 0 004.5 21h15z" />
      </svg>
    ),
    title: "Lokasi Strategis",
    description: "Berlokasi di pusat kota dengan akses mudah dan parkir luas",
  },
];

export default function AdvantagesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Fasilitas & Keunggulan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nikmati pengalaman bermain padel terbaik dengan fasilitas lengkap dan pelayanan prima
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {advantage.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
