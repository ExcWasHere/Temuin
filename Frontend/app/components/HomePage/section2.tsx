export default function IndexFeatures() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16 w-[90vw]">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
          <p className="max-w-2xl text-xl md:text-2xl text-gray-600 leading-relaxed font-light italic text-justify">
            TemuIn adalah platform digital yang memudahkan kamu menemukan, mengenal, dan mendukung berbagai UMKM lokal di sekitarmu.
            Kami hadir untuk membantu UMKM memperluas jangkauan dan meningkatkan visibilitas produk mereka di era digital.
            Dengan TemuIn, menjelajahi keberagaman UMKM Indonesia jadi lebih mudah dan menyenangkan!
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight max-w-xl tracking-tight">
            Cari UMKM lokal
            <span className="text-sky-500"> Dengan TemuIn </span>
          </h1>
        </div>

        {/* Why Choose Temuin Section */}
        <div className="mb-20 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-sky-200 rounded-xl transform -rotate-3"></div>
              <img
                src="/bannerUMKM/banner1.png"
                alt="TemuIn Banner"
                className="relative rounded-xl shadow-xl w-full h-[400px] hover:rotate-1 hover:scale-[1.02] object-cover transform transition-transform duration-300"
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-6">
              Mengapa harus pilih
              <span className="text-sky-500"> TemuIn </span>?
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-600 font-semibold">
                  1
                </span>
                <p className="text-lg text-gray-600">
                  Kemudahan Menemukan UMKM Lokal
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-600 font-semibold">
                  2
                </span>
                <p className="text-lg text-gray-600">
                  Mendukung Perekonomian Lokal
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-600 font-semibold">
                  3
                </span>
                <p className="text-lg text-gray-600">
                  Peningkatan Aksesibilitas UMKM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}