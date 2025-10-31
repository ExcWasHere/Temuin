import { useState, useEffect } from 'react';

const sponsors = [
  { id: 1, name: "Indosat", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Indosat_Ooredoo_Hutchison_logo.svg/320px-Indosat_Ooredoo_Hutchison_logo.svg.png" },
  { id: 2, name: "LINE", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/LINE_New_App_Icon_%282020-12%29.png/240px-LINE_New_App_Icon_%282020-12%29.png" },
  { id: 3, name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Lenovo_logo_2015.svg/320px-Lenovo_logo_2015.svg.png" },
  { id: 4, name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/320px-Intel_logo_%282006-2020%29.svg.png" },
  { id: 5, name: "XL Axiata", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/XL_Axiata_logo_%282018%29.svg/320px-XL_Axiata_logo_%282018%29.svg.png" },
];

export default function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerView = 3;
  const maxSlide = Math.max(0, sponsors.length - slidesPerView);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [maxSlide]);



  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-black">Tentang</span>
              <span className="text-sky-500"> TemuIn</span>
            </h1>
            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
              Platform digital yang menghubungkan kamu dengan UMKM lokal terbaik di sekitarmu
            </p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 w-[90vw]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-sky-200 rounded-xl transform -rotate-3"></div>
                <img
                  src="visi.jpg"
                  alt="Visi TemuIn"
                  className="relative rounded-xl shadow-xl w-full h-[400px] object-cover transform transition-transform duration-300 hover:rotate-1 hover:scale-[1.02]"
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-6">
                Visi <span className="text-sky-500">TemuIn</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed text-justify">
                Menjadi jembatan digital utama yang menghubungkan UMKM lokal dengan masyarakat, sehingga setiap usaha kecil di Indonesia bisa dikenal, berkembang, dan tumbuh bareng komunitasnya.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 w-[90vw]">
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-sky-200 rounded-xl transform -rotate-3"></div>
                <img
                  src="misi.jpg"
                  alt="Misi TemuIn"
                  className="relative rounded-xl shadow-xl w-full h-[400px] object-cover transform transition-transform duration-300 hover:rotate-1 hover:scale-[1.02]"
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-6">
                Misi <span className="text-sky-500">TemuIn</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center min-w-8 w-8 h-8 rounded-full bg-sky-100 text-sky-600 font-semibold mt-1">
                    1
                  </span>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Mempermudah akses informasi UMKM lewat platform direktori digital yang interaktif dan mudah dijelajahi.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center min-w-8 w-8 h-8 rounded-full bg-sky-100 text-sky-600 font-semibold mt-1">
                    2
                  </span>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Meningkatkan visibilitas bisnis lokal agar lebih mudah ditemukan oleh pelanggan di sekitar.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center min-w-8 w-8 h-8 rounded-full bg-sky-100 text-sky-600 font-semibold mt-1">
                    3
                  </span>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Mendorong semangat cinta produk lokal dengan menghadirkan cerita dan identitas unik dari tiap UMKM.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center min-w-8 w-8 h-8 rounded-full bg-sky-100 text-sky-600 font-semibold mt-1">
                    4
                  </span>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Membantu digitalisasi UMKM, agar mereka bisa lebih siap bersaing di era teknologi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Purpose Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 w-[90vw]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 tracking-tight mb-6">
              Mengapa TemuIn <span className="text-sky-500">Dibentuk?</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Kami memahami tantangan yang dihadapi UMKM dan kebutuhan masyarakat untuk menemukan 
              produk lokal berkualitas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-justify">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Solusi Digital</h3>
              <p className="text-gray-600 leading-relaxed">
                Masih banyak UMKM keren yang belum punya tempat buat nunjukin usahanya secara online. TemuIn hadir biar mereka punya ruang digital yang simpel, gratis, dan bisa bantu produk mereka dikenal lebih luas.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Kemudahan Akses</h3>
              <p className="text-gray-600 leading-relaxed">
                Kadang kita pengen dukung bisnis lokal, tapi gak tau harus mulai dari mana? Lewat TemuIn, kamu bisa nemuin UMKM di sekitar dengan cepat, lengkap sama info lokasi, dan cerita uniknya.
              </p>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Pemberdayaan Lokal</h3>
              <p className="text-gray-600 leading-relaxed">
                Dengan nemuin langsung antara pelaku usaha dan konsumen, TemuIn bantu roda ekonomi lokal tetap berputar.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 w-[90vw]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-4">
              Telah dipercaya oleh
            </h2>
            <div className="w-20 h-1 bg-sky-500 mx-auto"></div>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ 
                  transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` 
                }}
              >
                {sponsors.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="flex-shrink-0 px-4"
                    style={{ width: `${100 / slidesPerView}%` }}
                  >
                    <div className="bg-white rounded-xl shadow-lg p-8 flex items-center justify-center h-32 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'w-8 bg-sky-500' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}