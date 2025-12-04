'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const professions = [
  {
    id: 1,
    title: "Software Engineer",
    salary: "$100K - $120K",
    description: "Merancang, mengembangkan, dan memelihara aplikasi dan sistem perangkat lunak.",
    icon: "💻",
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    competencies: ["Programming", "System Design", "Debugging", "Version Control"],
    demand: "Tinggi"
  },
  {
    id: 2,
    title: "Data Scientist",
    salary: "$90K - $110K",
    description: "Menganalisis data kompleks untuk mendukung pengambilan keputusan berbasis data.",
    icon: "📊",
    color: "bg-gradient-to-r from-green-500 to-emerald-500",
    competencies: ["Statistics", "Machine Learning", "Data Visualization", "Python/R"],
    demand: "Sangat Tinggi"
  },
  {
    id: 3,
    title: "Product Manager",
    salary: "$110K - $130K",
    description: "Mendefinisikan strategi produk dan memimpin tim pengembangan.",
    icon: "🎯",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    competencies: ["Product Strategy", "Market Research", "Agile", "Stakeholder Management"],
    demand: "Tinggi"
  },
  {
    id: 4,
    title: "UX/UI Designer",
    salary: "$80K - $100K",
    description: "Mendesain pengalaman pengguna yang menarik dan mudah digunakan.",
    icon: "🎨",
    color: "bg-gradient-to-r from-pink-500 to-rose-500",
    competencies: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
    demand: "Tinggi"
  },
  {
    id: 5,
    title: "Quality Assurance",
    salary: "$70K - $90K",
    description: "Menguji aplikasi perangkat lunak untuk memastikan kualitas.",
    icon: "🔍",
    color: "bg-gradient-to-r from-amber-500 to-orange-500",
    competencies: ["Test Planning", "Automation", "Bug Tracking", "Performance Testing"],
    demand: "Sedang"
  }
]

export default function ProfessionPage() {
  const [likedItems, setLikedItems] = useState<number[]>([])
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    const saved = localStorage.getItem('likedProfessions')
    if (saved) setLikedItems(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem('likedProfessions', JSON.stringify(likedItems))
  }, [likedItems])

  const handleLike = (id: number) => {
    if (likedItems.includes(id)) {
      setLikedItems(likedItems.filter(item => item !== id))
    } else {
      setLikedItems([...likedItems, id])
    }
  }

  const filteredProfessions = activeFilter === 'all' 
    ? professions 
    : professions.filter(p => 
        activeFilter === 'liked' ? likedItems.includes(p.id) : p.demand.toLowerCase().includes(activeFilter)
      )

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Jelajahi <span className="text-yellow-300">Karir</span> di Bidang
              <div className="gradient-text">
                Software Engineering
              </div>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Temukan 5 profesi menarik dengan informasi gaji, skill yang dibutuhkan, dan prospek karir
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <div className="text-2xl font-bold text-white">{professions.length}</div>
                <div className="text-white/80 text-sm">Profesi</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <div className="text-2xl font-bold text-white">$70K-$130K</div>
                <div className="text-white/80 text-sm">Rentang Gaji</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <div className="text-2xl font-bold text-white">{likedItems.length}</div>
                <div className="text-white/80 text-sm">Disukai</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z" 
                  fill="#ffffff" fillOpacity="0.1"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 -mt-8">
        {/* Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Cari Profesi Impianmu</h2>
              <p className="text-gray-600">Filter berdasarkan kategori atau yang sudah disukai</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2 rounded-full font-medium transition-all ${activeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Semua
            </button>
            <button 
              onClick={() => setActiveFilter('liked')}
              className={`px-5 py-2 rounded-full font-medium transition-all ${activeFilter === 'liked' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              💖 Disukai ({likedItems.length})
            </button>
            <button 
              onClick={() => setActiveFilter('tinggi')}
              className={`px-5 py-2 rounded-full font-medium transition-all ${activeFilter === 'tinggi' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              📈 Permintaan Tinggi
            </button>
          </div>
        </div>

        {/* Profession Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProfessions.map((prof, index) => (
            <div 
              key={prof.id} 
              className="card-hover float-animation"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col">
                {/* Card Header */}
                <div className={`${prof.color} p-6 relative`}>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full font-bold">
                      ID: {prof.id}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-5xl">{prof.icon}</div>
                    <div>
                      <div className="text-white text-sm font-medium opacity-90">Profesi #{prof.id}</div>
                      <div className="text-xl font-bold text-white">{prof.title}</div>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <Link href={`/profession/${prof.id}`} className="group">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {prof.title}
                      </h3>
                    </Link>
                    
                    <button
                      onClick={() => handleLike(prof.id)}
                      className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all transform hover:scale-110 ${
                        likedItems.includes(prof.id)
                          ? 'bg-red-100 text-red-500 border-2 border-red-200 shadow-lg'
                          : 'bg-gray-100 text-gray-500 border-2 border-gray-200 hover:border-red-300 hover:text-red-400'
                      }`}
                      title={likedItems.includes(prof.id) ? 'Hapus dari favorit' : 'Tambahkan ke favorit'}
                    >
                      <span className="text-lg">{likedItems.includes(prof.id) ? '' : ''}</span>
                    </button>
                  </div>

                  {/* Salary & Demand */}
                  <div className="mb-5">
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      {prof.salary}
                      <span className="text-sm text-gray-500 font-normal"> /year</span>
                    </div>
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        prof.demand === 'Sangat Tinggi' ? 'bg-red-100 text-red-700' :
                        prof.demand === 'Tinggi' ? 'bg-orange-100 text-orange-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {prof.demand}
                      </span>
                      <span className="text-sm text-gray-500 ml-2">Permintaan Pasar</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{prof.description}</p>

                  {/* Skills */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Skill yang Dibutuhkan:</h4>
                    <div className="flex flex-wrap gap-2">
                      {prof.competencies.slice(0, 3).map((skill, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 text-sm font-medium rounded-lg border border-blue-200">
                          {skill}
                        </span>
                      ))}
                      {prof.competencies.length > 3 && (
                        <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-lg">
                          +{prof.competencies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-0">
                  <Link
                    href={`/profession/${prof.id}`}
                    className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    👉 Lihat Detail Lengkap
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProfessions.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl shadow">
            <div className="text-6xl mb-4">😕</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Belum ada profesi yang disukai</h3>
            <p className="text-gray-600 mb-6">Klik tombol hati untuk menambahkan profesi ke favorit</p>
            <button
              onClick={() => setActiveFilter('all')}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg"
            >
              Lihat Semua Profesi
            </button>
          </div>
        )}

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Statistik Karir</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{professions.length}</div>
              <div className="text-blue-100">Total Profesi</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">${Math.round((70+130)/2)}K</div>
              <div className="text-blue-100">Rata-rata Gaji</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{likedItems.length}</div>
              <div className="text-blue-100">Disukai</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-blue-100">Skill</div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="text-4xl">💡</div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Tips Memilih Karir</h3>
              <p className="text-gray-600 mb-4">
                Pilih profesi yang sesuai dengan minat dan kemampuanmu. Perhatikan tren pasar, 
                gaji yang ditawarkan, dan skill yang dibutuhkan. Jangan ragu untuk mengeksplorasi 
                berbagai opsi sebelum memutuskan.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Update terakhir: Desember 2023
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3 gradient-text">
              VERSIJA PENDIDIKAN TEKNOLOGI
            </h3>
            <p className="text-xl text-gray-300 mb-2">SMK Telkom Malang</p>
            <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full font-bold mt-2 mb-6">
              <span className="w-3 h-3 bg-white rounded-full mr-2 animate-pulse"></span>
              TERAKREDITASI A
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Career Explorer - Platform eksplorasi karir software engineering
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}