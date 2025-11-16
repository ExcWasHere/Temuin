import React, { useState, useEffect, type JSX } from "react";
import {
  Search,
  MapPin,
  Heart,
  Star,
  Store,
  Utensils,
  Scissors,
  ShoppingBag,
  Phone,
  Navigation,
  ChevronDown,
  User,
  LogOut,
  Settings,
  X,
} from "lucide-react";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface UMKM {
  id: number;
  name: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  distance: string;
  address: string;
  isOpen: boolean;
  description: string;
  phone: string;
  isFavorite: boolean;
  menu?: { name: string; price?: string }[];
}

interface Category {
  name: string;
  icon: IconComponent;
  colorClasses?: string;
}

const umkmData: UMKM[] = [
  {
    id: 1,
    name: "Warung Kopi Brewok",
    category: "Makanan & Minuman",
    image: "/logoUMKM/logoBrewok.jpg",
    rating: 4.6,
    reviews: 124,
    distance: "0.5 km",
    address: "Jl. Trs.Candi Mendut No.37, Kota Malang, Jawa Timur",
    isOpen: true,
    description: "Kedai kopi ini mengusung konsep The Next Level Warkop tujuannya agar pengunjung dapat menikmati segala fasilitas layaknya di kafe, namun dengan harga warung kopi yang terjangkau.",
    phone: "0852-9111-5758",
    isFavorite: false,
    menu: [
      { name: "Espresso", price: "Rp10.000" },
      { name: "Pancong Keju Coklat", price: "Rp9.000" },
      { name: "Es Kokam Original", price: "Rp13.000" },
    ],
  },
  {
    id: 2,
    name: "Queen Laundry",
    category: "Jasa",
    image: "/logoUMKM/logoQueenLaundry.png",
    rating: 4.6,
    reviews: 89,
    distance: "1.2 km",
    address: "Jl. Pisang Kipas No.41, Kota Malang, Jawa Timur",
    isOpen: true,
    description: "Potong rambut profesional dengan harga terjangkau",
    phone: "0812-3540-1581",
    isFavorite: true,
    menu: [
      { name: "Cuci Setrika", price: "Rp18.000" },
      { name: "Cuci Kering", price: "Rp10.000" },
    ],
  },
  {
    id: 3,
    name: "D'Pizza",
    category: "Makanan & Minuman",
    image: "/logoUMKM/logoDpizza.jpg",
    rating: 4.7,
    reviews: 156,
    distance: "0.8 km",
    address: "Jl.Akordion, Perum De Prima Ruko Kav 7 Tunggulwulung, Kota Malang, Jawa Timur",
    isOpen: false,
    description: "Pizza lezat dengan topping segar dan adonan tipis renyah",
    phone: "0822-2871-0272",
    isFavorite: false,
  },
  {
    id: 4,
    name: "Hamparan Rintik",
    category: "Fashion",
    image: "/logoUMKM/logoHamparanRintik.jpg",
    rating: 4.9,
    reviews: 234,
    distance: "1.5 km",
    address: "Jl. MT. Haryono Gg. VI No.870, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur",
    isOpen: true,
    description: "Pakaian batik modern dengan sentuhan tradisional",
    phone: "0813-5914-1080",
    isFavorite: true,
    menu: [
      { name: "Batik Dress Overal Biru", price: "Rp250.000" },
      { name: "Batik Dress Outer Vest Hijau", price: "Rp300.000" },
    ],
  },
  {
    id: 5,
    name: "Crodery",
    category: "Jasa",
    image: "/logoUMKM/logoCrodery.jpg",
    rating: 4.5,
    reviews: 78,
    distance: "2.1 km",
    address: "Jl. Tugu No. 89, Malang",
    isOpen: true,
    description: "All About Crochet, Every piece is designed to make you feel so cute 👸",
    phone: "0881-6298-800",
    isFavorite: false,
    menu: [
      { name: "Gantungan Kunci Katak lucu", price: "Rp20.000" },
      { name: "Gantungan Kunci Semangka", price: "Rp30.000" },
    ],
  },
  {
    id: 6,
    name: "Coolio Barbershop",
    category: "Jasa",
    image: "/logoUMKM/logoCoolio.jpg",
    rating: 4.4,
    reviews: 92,
    distance: "1.8 km",
    address: "Jl. Kalpataru No.27 kavling 3, Jatimulyo, Kec. Lowokwaru, Kota Malang, Jawa Timur",
    isOpen: true,
    description: "Barbershop dengan konsep modern dan stylish",
    phone: "0815-2096-8898",
    isFavorite: false,
    menu: [
      { name: "Cukur dan cuci wambut", price: "Rp30.000" },
      { name: "Cukur rambut", price: "Rp15.000" },
    ],
  },
];

const categories: Category[] = [
  { name: "Semua", icon: Store, colorClasses: "from-sky-400 to-sky-500" },
  {
    name: "Makanan & Minuman",
    icon: Utensils,
    colorClasses: "from-orange-400 to-orange-500",
  },
  {
    name: "Jasa",
    icon: Scissors,
    colorClasses: "from-purple-400 to-purple-500",
  },
  {
    name: "Fashion",
    icon: ShoppingBag,
    colorClasses: "from-green-400 to-green-500",
  },
];

function getCategoryIcon(categoryName: string): IconComponent {
  const category = categories.find((c) => c.name === categoryName);
  return category ? category.icon : Store;
}

export default function UserDashboard(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [favorites, setFavorites] = useState<number[]>(
    umkmData.filter((u) => u.isFavorite).map((u) => u.id)
  );
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false);
  const [selectedUMKM, setSelectedUMKM] = useState<UMKM | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [detailTab, setDetailTab] = useState<
    "overview" | "jadwal" | "menu" | "ulasan" | "kontak"
  >("overview");

  const filteredUMKM = umkmData.filter((umkm) => {
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      q === "" ||
      umkm.name.toLowerCase().includes(q) ||
      umkm.description.toLowerCase().includes(q);
    const matchesCategory =
      selectedCategory === "Semua" || umkm.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) return;
    fetch("http://localhost:3000/auth/me",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then(async (res) => {
        if (!res.ok) {
          localStorage.removeItem("access_token");
          localStorage.removeItem("role");
          setUsername(null);
          setRole(null);
          return;
        }
        const data = await res.json();
        setUsername(data.username || data.name || data.email);
        setRole(data.role || localStorage.getItem("role"));
      })
      .catch(() => {
        setUsername(null);
        setRole(localStorage.getItem("role"));
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-purple-50">
      {/* Header/Navbar */}
      <nav className="bg-white/80 backdrop-blur-lg border-b border-sky-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <img src="/favicon.ico" alt="TemuIn" style={{ width: 40, height: 40 }} />
              </div>
              <h1 className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Temu
                </span>
                <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  In
                </span>
              </h1>
            </div>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-sky-50 transition-all"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-gray-700 hidden sm:block">
                  {username ?? "Pengguna"}
                </span>

                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-sky-100 py-2">
                  <button className="w-full text-left flex items-center gap-3 px-4 py-2 hover:bg-sky-50 transition-all">
                    <Settings className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">Pengaturan</span>
                  </button>
                  <button className="w-full text-left flex items-center gap-3 px-4 py-2 hover:bg-sky-50 transition-all">
                    <LogOut className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">Keluar</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Hai, Selamat Datang, {username ?? "Pengguna"}! 👋
          </h2>
          <p className="text-gray-600">
            Temukan UMKM favoritmu di sekitar Malang
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari UMKM, makanan, atau jasa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border-2 border-gray-200 focus:border-sky-400 focus:ring-4 focus:ring-sky-100 outline-none transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {categories.map((cat) => {
              const IconCat = cat.icon;
              const isSelected = selectedCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
                    isSelected
                      ? `bg-gradient-to-r ${cat.colorClasses ?? ""} text-white shadow-lg`
                      : "bg-white text-gray-700 hover:bg-sky-50 border-2 border-gray-200"
                  }`}
                >
                  <IconCat className="w-5 h-5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* UMKM Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUMKM.map((umkm) => {
            const CategoryIcon = getCategoryIcon(umkm.category);
            const isFav = favorites.includes(umkm.id);

            return (
              <div
                key={umkm.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer border border-sky-100"
                onClick={() => {
                  setSelectedUMKM(umkm);
                  setDetailTab("overview");
                }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={umkm.image}
                    alt={umkm.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(umkm.id);
                      }}
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-lg"
                    >
                      <Heart
                        className={`w-5 h-5 ${isFav ? "fill-current text-red-500" : "text-gray-600"}`}
                      />
                    </button>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        umkm.isOpen
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {umkm.isOpen ? "Buka" : "Tutup"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-sky-600 transition-colors">
                      {umkm.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1 px-2 py-1 bg-sky-50 rounded-lg">
                      <CategoryIcon className="w-4 h-4 text-sky-600" />
                      <span className="text-xs font-semibold text-sky-600">
                        {umkm.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {umkm.description}
                  </p>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-gray-800">
                        {umkm.rating}
                      </span>
                      <span className="text-sm text-gray-500">
                        ({umkm.reviews})
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-semibold">
                        {umkm.distance}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm line-clamp-1">{umkm.address}</span>
                  </div>

                  <button className="w-full bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                    <Navigation className="w-4 h-4" />
                    <span>Lihat Detail</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredUMKM.length === 0 && (
          <div className="text-center py-16">
            <Store className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">
              Tidak ada UMKM yang ditemukan
            </p>
            <p className="text-gray-400 text-sm">
              Coba ubah kata kunci atau filter pencarian
            </p>
          </div>
        )}
      </div>

      {/* Detail Modal (updated layout) */}
      {selectedUMKM && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center p-6 overflow-auto"
          onClick={() => setSelectedUMKM(null)}
        >
          <div
            className="bg-white rounded-3xl w-full max-w-5xl mt-10 shadow-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button (moved to top-right) */}
            <button
              onClick={() => setSelectedUMKM(null)}
              className="absolute right-4 top-4 bg-white/90 p-2 rounded-full shadow hover:bg-white transition"
              aria-label="Tutup"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            {/* Top Banner */}
            <div className="relative bg-gradient-to-br from-purple-600 to-blue-500 p-6">
              <div className="flex items-center gap-6">
                <div className="w-28 h-28 rounded-2xl bg-white/20 flex items-center justify-center overflow-hidden">
                  <img
                    src={selectedUMKM.image}
                    alt={selectedUMKM.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 text-white">
                  <h1 className="text-3xl font-bold">{selectedUMKM.name}</h1>
                  <p className="text-sm opacity-90 mt-1">
                    {selectedUMKM.category} • {selectedUMKM.address}
                  </p>

                  <div className="flex items-center gap-3 mt-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">
                        {selectedUMKM.rating}
                      </span>
                      <span className="opacity-90">
                        ({selectedUMKM.reviews} ulasan)
                      </span>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${selectedUMKM.isOpen ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                    >
                      {selectedUMKM.isOpen ? "Sedang Buka" : "Tutup"}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => toggleFavorite(selectedUMKM.id)}
                    className="px-4 py-2 bg-white/20 text-white rounded-xl hover:bg-white/30"
                  >
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-white" />
                      <span>Simpan</span>
                    </div>
                  </button>
                  <button className="px-4 py-2 bg-white/30 text-white rounded-xl hover:bg-white/40">
                    Bagikan
                  </button>
                </div>
              </div>
            </div>

            {/* Tabs (Menu now after Jadwal) */}
            <div className="p-6 border-b border-sky-100">
              <div className="flex items-center gap-3 flex-wrap">
                <button
                  onClick={() => setDetailTab("overview")}
                  className={`px-4 py-2 rounded-lg font-semibold ${detailTab === "overview" ? "bg-sky-600 text-white" : "bg-white"}`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setDetailTab("jadwal")}
                  className={`px-4 py-2 rounded-lg font-semibold ${detailTab === "jadwal" ? "bg-sky-600 text-white" : "bg-white"}`}
                >
                  Jadwal
                </button>
                <button
                  onClick={() => setDetailTab("menu")}
                  className={`px-4 py-2 rounded-lg font-semibold ${detailTab === "menu" ? "bg-sky-600 text-white" : "bg-white"}`}
                >
                  Menu
                </button>
                <button
                  onClick={() => setDetailTab("ulasan")}
                  className={`px-4 py-2 rounded-lg font-semibold ${detailTab === "ulasan" ? "bg-sky-600 text-white" : "bg-white"}`}
                >
                  Ulasan
                </button>
                <button
                  onClick={() => setDetailTab("kontak")}
                  className={`px-4 py-2 rounded-lg font-semibold ${detailTab === "kontak" ? "bg-sky-600 text-white" : "bg-white"}`}
                >
                  Kontak
                </button>
              </div>
            </div>

            {/* Tab content */}
            <div className="p-6">
              {detailTab === "overview" && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Tentang {selectedUMKM.name}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {selectedUMKM.description}
                  </p>

                  <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-sky-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Alamat</p>
                      <p className="font-semibold">{selectedUMKM.address}</p>
                      <p className="text-sm text-sky-600 mt-1">
                        {selectedUMKM.distance} dari lokasi Anda
                      </p>
                    </div>
                    <div className="bg-sky-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Telepon</p>
                      <p className="font-semibold">{selectedUMKM.phone}</p>
                    </div>
                  </div>

                  {/* GMaps embed */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Peta Lokasi</h4>
                    <div className="w-full rounded-lg overflow-hidden border">
                      <iframe
                        title="map"
                        width="100%"
                        height="360"
                        loading="lazy"
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedUMKM.address)}&output=embed`}
                        className="block"
                      />
                    </div>
                  </div>
                </div>
              )}

              {detailTab === "jadwal" && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Jadwal</h3>

                  {/* Schedule */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="p-4 bg-white rounded-lg border">
                      <p className="font-semibold">Setiap Hari</p>
                      <p className="text-gray-600">09:00 - 01:00</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border">
                      <p className="font-semibold">Sabtu</p>
                      <p className="text-gray-600">08:00 - 14:00</p>
                    </div>
                  </div>
                </div>
              )}

              {detailTab === "menu" && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    Menu / Pilihan Layanan
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedUMKM.menu && selectedUMKM.menu.length > 0 ? (
                      selectedUMKM.menu.map((m, i) => (
                        <div
                          key={i}
                          className="p-4 bg-white rounded-lg border flex items-center justify-between"
                        >
                          <div>
                            <p className="font-semibold">{m.name}</p>
                            {m.price && (
                              <p className="text-sm text-gray-500">{m.price}</p>
                            )}
                          </div>
                          <button className="px-3 py-2 bg-sky-100 rounded-md text-sky-700">
                            Pesan
                          </button>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 bg-white rounded-lg border text-gray-600">
                        Menu belum tersedia untuk UMKM ini.
                      </div>
                    )}
                  </div>
                </div>
              )}

              {detailTab === "ulasan" && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Ulasan</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                          A
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold">Andi</p>
                            <span className="text-sm text-gray-500">
                              • 5 hari lalu
                            </span>
                            <div className="ml-2 flex items-center">
                              <Star className="w-4 h-4 fill-yellow-400" />
                            </div>
                          </div>
                          <p className="text-gray-700 mt-1">
                            Pelayanan cepat & makanannya enak!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {detailTab === "kontak" && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Kontak</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-lg border">
                      <p className="text-sm text-gray-600">Telepon</p>
                      <p className="font-semibold">{selectedUMKM.phone}</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border">
                      <p className="text-sm text-gray-600">Alamat</p>
                      <p className="font-semibold">{selectedUMKM.address}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-sky-400 to-blue-500 text-white py-3 rounded-xl flex items-center justify-center gap-2">
                      <Navigation className="w-4 h-4" />
                      Navigasi
                    </button>
                    <button className="flex-1 bg-white border-2 border-sky-400 text-sky-600 py-3 rounded-xl flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Hubungi
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
