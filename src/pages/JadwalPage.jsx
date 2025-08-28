export default function JadwalPage() {
  const schedules = [
    { id: 1, court: "Lapangan Padel A", date: "2025-09-01", time: "10:00 - 11:00" },
    { id: 2, court: "Lapangan Padel B", date: "2025-09-02", time: "14:00 - 15:00" },
    { id: 3, court: "Lapangan Padel C", date: "2025-09-03", time: "09:00 - 10:00" },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Jadwal Booking</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Lapangan</th>
            <th className="border p-2">Tanggal</th>
            <th className="border p-2">Waktu</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((item) => (
            <tr key={item.id} className="text-center">
              <td className="border p-2">{item.court}</td>
              <td className="border p-2">{item.date}</td>
              <td className="border p-2">{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
