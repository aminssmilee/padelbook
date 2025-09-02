export default function HistoryPage() {
  const history = [
    {
      id: 1,
      lapangan: "Lapangan Futsal A",
      tanggal: "10 September 2025",
      jam: "19:00 - 20:00",
      status: "Lunas",
    },
    {
      id: 2,
      lapangan: "Lapangan Badminton B",
      tanggal: "12 September 2025",
      jam: "17:00 - 18:00",
      status: "Menunggu Pembayaran",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto py-10 px-6">
      <h1 className="text-2xl font-bold mb-6">Riwayat Booking</h1>
      <ul className="space-y-4">
        {history.map((item) => (
          <li
            key={item.id}
            className="p-4 border rounded-lg shadow-sm bg-white"
          >
            <p className="font-semibold">{item.lapangan}</p>
            <p>{item.tanggal} ({item.jam})</p>
            <p className="text-sm text-gray-600">Status: {item.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
