import { useState, useEffect } from "react";
import {
  Store,
  Users,
  Star,
  Edit,
  MapPin,
  Phone,
  Clock,
  Plus,
  Eye,
  ChevronDown,
  LogOut,
  Settings,
  BarChart3,
} from "lucide-react";

export default function UMKMOwnerDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const businessData = {
    name: "Warung Kopi Sederhana",
    category: "Makanan & Minuman",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
    rating: 4.8,
    totalReviews: 124,
    totalViews: 1543,
    address: "Jl. Veteran No. 12, Malang",
    phone: "0812-3456-7890",
    description:
      "Kopi lokal dengan cita rasa autentik. Kami menggunakan biji kopi pilihan dari petani lokal Malang.",
    isOpen: true,
    openingHours: "08:00 - 22:00",
    photos: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400",
    ],
  };

  const stats = [
    {
      label: "Total Pengunjung",
      value: "1,543",
      icon: Users,
      color: "sky",
      change: "+12%",
    },
    {
      label: "Rating",
      value: "4.8",
      icon: Star,
      color: "yellow",
      change: "+0.2",
    },
    {
      label: "Total Ulasan",
      value: "124",
      icon: Star,
      color: "purple",
      change: "+8",
    },
    {
      label: "Views Minggu Ini",
      value: "342",
      icon: Eye,
      color: "green",
      change: "+23%",
    },
  ];

  const recentReviews = [
    {
      id: 1,
      name: "Budi Santoso",
      rating: 5,
      comment: "Kopinya enak banget! Tempatnya juga nyaman",
      date: "2 hari yang lalu",
    },
    {
      id: 2,
      name: "Siti Aminah",
      rating: 4,
      comment: "Pelayanan ramah, harga terjangkau",
      date: "5 hari yang lalu",
    },
    {
      id: 3,
      name: "Ahmad Rizki",
      rating: 5,
      comment: "Recommended! Kopi lokal terbaik di Malang",
      date: "1 minggu yang lalu",
    },
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
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
                <Store className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Temu
                  </span>
                  <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                    In
                  </span>
                </h1>
                <p className="text-xs text-gray-500 font-semibold">
                  Dashboard Pengusaha
                </p>
              </div>
            </div>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-sky-50 transition-all"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <Store className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-gray-700 hidden sm:block">
                  {username ?? "Pemilik UMKM"}
                </span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-sky-100 py-2">
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-sky-50 transition-all"
                  >
                    <Settings className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">Pengaturan</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-sky-50 transition-all"
                  >
                    <LogOut className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">Keluar</span>
                  </a>
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
            Selamat Datang Kembali! 🎉
          </h2>
          <p className="text-gray-600">Kelola bisnis UMKM kamu dengan mudah</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-sky-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br from-${stat.color}-400 to-${stat.color}-500 rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-green-600 text-sm font-bold bg-green-50 px-2 py-1 rounded-lg">
                    {stat.change}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex gap-2 border-b border-gray-200">
            {[
              { id: "overview", label: "Ringkasan", icon: BarChart3 },
              { id: "profile", label: "Profil Bisnis", icon: Store },
              { id: "reviews", label: "Ulasan", icon: Star },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 font-semibold transition-all ${
                    activeTab === tab.id
                      ? "text-sky-600 border-b-2 border-sky-600"
                      : "text-gray-600 hover:text-sky-600"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-sky-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Aksi Cepat
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="flex items-center gap-3 p-4 bg-gradient-to-r from-sky-400 to-blue-500 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all">
                  <Edit className="w-5 h-5" />
                  <span className="font-semibold">Edit Profil</span>
                </button>
                <button className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all">
                  <Plus className="w-5 h-5" />
                  <span className="font-semibold">Tambah Foto</span>
                </button>
                <button className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all">
                  <Eye className="w-5 h-5" />
                  <span className="font-semibold">Lihat Halaman</span>
                </button>
              </div>
            </div>

            {/* Chart Placeholder */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-sky-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Statistik Pengunjung
              </h3>
              <div className="h-64 bg-gradient-to-br from-sky-50 to-purple-50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-sky-400 mx-auto mb-2" />
                  <p className="text-gray-600">
                    Grafik pengunjung akan ditampilkan di sini
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="bg-white rounded-2xl shadow-lg border border-sky-100 overflow-hidden">
            {/* Cover Image */}
            <div className="relative h-48 bg-gradient-to-r from-sky-400 to-blue-500">
              <img
                src={businessData.image}
                alt={businessData.name}
                className="w-full h-full object-cover opacity-60"
              />
              <button className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl font-semibold hover:bg-white transition-all shadow-lg flex items-center gap-2">
                <Edit className="w-4 h-4" />
                <span>Edit</span>
              </button>
            </div>

            <div className="p-6">
              {/* Business Info */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                      {businessData.name}
                    </h2>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-lg text-sm font-semibold">
                        {businessData.category}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                          businessData.isOpen
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {businessData.isOpen ? "Buka" : "Tutup"}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    <span className="text-2xl font-bold text-gray-800">
                      {businessData.rating}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{businessData.description}</p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-sky-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Alamat</p>
                      <p className="text-gray-600">{businessData.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-sky-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Telepon</p>
                      <p className="text-gray-600">{businessData.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-sky-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Jam Buka</p>
                      <p className="text-gray-600">
                        {businessData.openingHours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Photo Gallery */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    Galeri Foto
                  </h3>
                  <button className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-xl hover:bg-sky-600 transition-all font-semibold">
                    <Plus className="w-4 h-4" />
                    <span>Tambah</span>
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {businessData.photos.map((photo, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                    >
                      <img
                        src={photo}
                        alt={`Photo ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Edit className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === "reviews" && (
          <div className="space-y-6">
            {/* Rating Summary */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-sky-100">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-gray-800 mb-2">
                    {businessData.rating}
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {renderStars(5)}
                  </div>
                  <p className="text-gray-600">
                    {businessData.totalReviews} ulasan
                  </p>
                </div>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <div key={star} className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-gray-700 w-8">
                        {star} ⭐
                      </span>
                      <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-yellow-400 to-orange-500"
                          style={{ width: `${(star / 5) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 w-12">
                        {Math.floor((star / 5) * 100)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Reviews */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-sky-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Ulasan Terbaru
              </h3>
              <div className="space-y-6">
                {recentReviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b border-gray-200 pb-6 last:border-0"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-gray-800">
                          {review.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex gap-1">
                            {renderStars(review.rating)}
                          </div>
                          <span className="text-sm text-gray-500">
                            {review.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
