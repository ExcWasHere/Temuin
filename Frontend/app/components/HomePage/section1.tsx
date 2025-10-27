const umkmPhotos = [
  { id: 1, image: "umkm1.jpg", name: "UMKM 1" },
  { id: 2, image: "umkm2.jpg", name: "UMKM 2" },
  { id: 3, image: "umkm3.jpg", name: "UMKM 3" },
  { id: 4, image: "umkm4.jpg", name: "UMKM 4" },
  { id: 5, image: "umkm5.jpg", name: "UMKM 5" },
  { id: 6, image: "umkm6.jpg", name: "UMKM 6" },
];

export default function IndexHero() {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* padding-top */}
      <div
        className="relative w-full overflow-hidden pt-32 pb-16"
        style={{
          minHeight: "90vh",
        }}
      >
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-white" />
        </div>

        {/* Main Content Container */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 h-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
            {/* Left Column - Text Content */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-black">Hai Kenalin!</span>
                  <br />
                  <span className="text-black">Aku</span>
                  <span
                    className="inline-block font-bold temuinText"
                    style={{
                      backgroundSize: "200% auto",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    TemuIn
                  </span>
                </h1>
              </div>

              <style>{`
                .temuinText {
                opacity: 0;
                background-image: linear-gradient(to right, white, #7dd3fc, #2563eb, #22d3ee, #0ea5e9);
                background-size: 200% auto;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                animation: fadeIn 1.8s ease-out forwards, gradientFlowContinuous 3s linear 1.8s infinite;
            }

            @keyframes fadeIn {
                0% {
                opacity: 0;
                background-position: 0% center;
                }
                100% {
                opacity: 1;
                background-position: 100% center;
                }
            }

            @keyframes gradientFlowContinuous {
                0% {
                background-position: 0% center;
                }
                100% {
                background-position: 200% center;
                }
            }
            `}</style>

              {/* Subtitle */}
              <p className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-lg text-justify">
                Mau tau lokasi Warkop lokal? Nyari Makanan hidden gem? atau Lagi cari bakso legend, tapi gatau infonya? Coba TemuIn aja,
                TemuIn cocok buat kamu!
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-linear-to-r from-sky-400 to-sky-500 text-white font-semibold rounded-full shadow-lg hover:from-sky-500 hover:to-sky-600 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  Kepoin Yuk!
                </button>
              </div>
            </div>

            {/* Right Column - Grid 3x2 UMKM Photos */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                {/* Grid 3 kolom x 2 baris */}
                <div className="grid grid-cols-3 gap-4">
                  {umkmPhotos.map((umkm, index) => (
                    <div
                      key={umkm.id}
                      className="relative aspect-square overflow-hidden rounded-2xl shadow-lg group"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <img
                        src={umkm.image}
                        alt={umkm.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-2 left-2 right-2">
                          <p className="text-white text-xs font-semibold truncate">
                            {umkm.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}