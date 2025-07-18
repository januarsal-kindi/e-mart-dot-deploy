export async function GET(request: Request) {
  // For example, fetch data from your DB here
  const products = [
    {
      id: "1",
      description:
        "Kipas Angin berkualitas tinggi untuk kenyamanan ruangan Anda.",
      price: 250000,
      basePrice: 300000,
      category: "Elektronik",
      rating: { rate: 4.7, count: 120 },
    },
    {
      id: "2",
      description: "Pigura elegan untuk mempercantik dinding rumah Anda.",
      price: 50000,
      basePrice: 70000,
      category: "Dekorasi",
      rating: { rate: 4.5, count: 80 },
    },
    {
      id: "3",
      description: "Kulkas hemat energi dengan kapasitas besar.",
      price: 2000000,
      basePrice: 2200000,
      category: "Elektronik",
      rating: { rate: 4.8, count: 95 },
    },
    {
      id: "4",
      description: "Mobil keluarga nyaman dan irit bahan bakar.",
      price: 150000000,
      basePrice: 155000000,
      category: "Otomotif",
      rating: { rate: 4.9, count: 30 },
    },
    {
      id: "5",
      description: "Motor sport dengan desain modern dan performa tinggi.",
      price: 18000000,
      basePrice: 20000000,
      category: "Otomotif",
      rating: { rate: 4.6, count: 60 },
    },
    {
      id: "6",
      description: "Monitor LED Full HD untuk pengalaman visual terbaik.",
      price: 1200000,
      basePrice: 1500000,
      category: "Elektronik",
      rating: { rate: 4.7, count: 110 },
    },
    {
      id: "7",
      description: "CPU handal untuk kebutuhan komputasi sehari-hari.",
      price: 2500000,
      basePrice: 2700000,
      category: "Elektronik",
      rating: { rate: 4.5, count: 75 },
    },
    {
      id: "8",
      description: "Kursi ergonomis untuk kenyamanan bekerja.",
      price: 350000,
      basePrice: 400000,
      category: "Furniture",
      rating: { rate: 4.4, count: 50 },
    },
    {
      id: "9",
      description: "Meja minimalis cocok untuk ruang kerja atau belajar.",
      price: 450000,
      basePrice: 500000,
      category: "Furniture",
      rating: { rate: 4.6, count: 65 },
    },
    {
      id: "10",
      description: "Teh premium dengan aroma dan rasa khas.",
      price: 30000,
      basePrice: 35000,
      category: "Minuman",
      rating: { rate: 4.8, count: 200 },
    },
    {
      id: "11",
      description: "Kopi robusta pilihan dengan cita rasa kuat.",
      price: 40000,
      basePrice: 50000,
      category: "Minuman",
      rating: { rate: 4.9, count: 210 },
    },
    {
      id: "12",
      description: "Strawberry segar langsung dari petani lokal.",
      price: 60000,
      basePrice: 70000,
      category: "Buah",
      rating: { rate: 4.7, count: 90 },
    },
    {
      id: "13",
      description: "Keju cheddar impor dengan rasa gurih.",
      price: 80000,
      basePrice: 90000,
      category: "Makanan",
      rating: { rate: 4.6, count: 40 },
    },
    {
      id: "14",
      description: "Oli mesin berkualitas untuk performa kendaraan.",
      price: 70000,
      basePrice: 80000,
      category: "Otomotif",
      rating: { rate: 4.5, count: 55 },
    },
    {
      id: "15",
      description: "Tanah subur untuk kebutuhan pertanian dan taman.",
      price: 20000,
      basePrice: 25000,
      category: "Pertanian",
      rating: { rate: 4.3, count: 20 },
    },
    {
      id: "16",
      description: "Lem serbaguna kuat dan tahan lama.",
      price: 15000,
      basePrice: 20000,
      category: "Alat Tulis",
      rating: { rate: 4.4, count: 35 },
    },
    {
      id: "17",
      description: "Bedak tabur lembut untuk kulit wajah.",
      price: 25000,
      basePrice: 30000,
      category: "Kosmetik",
      rating: { rate: 4.5, count: 60 },
    },
    {
      id: "18",
      description: "Gunting tajam untuk berbagai keperluan.",
      price: 18000,
      basePrice: 22000,
      category: "Alat Tulis",
      rating: { rate: 4.6, count: 45 },
    },
    {
      id: "19",
      description: "Pengharum ruangan dengan aroma menyegarkan.",
      price: 35000,
      basePrice: 40000,
      category: "Rumah Tangga",
      rating: { rate: 4.7, count: 70 },
    },
    {
      id: "20",
      description:
        "Game PS1: Harvest Moon & Naruto Shippuden, nostalgia masa kecil.",
      price: 100000,
      basePrice: 120000,
      category: "Game",
      rating: { rate: 4.9, count: 25 },
    },
    {
      id: "21",
      description: "Produk tidak diketahui.",
      price: 0,
      basePrice: 0,
      category: "Lainnya",
      rating: { rate: 0, count: 0 },
    },
  ];
  return new Response(
    JSON.stringify({
      data: products,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
