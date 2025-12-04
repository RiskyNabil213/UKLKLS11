'use client'

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const professions = [
  {
    id: 1,
    title: "Software Engineer",
    salary: "$100K - $120K",
    description: "Merancang, mengembangkan, dan memelihara aplikasi dan sistem perangkat lunak.",
    longDescription: "Software Engineer adalah profesional yang bertanggung jawab atas seluruh siklus pengembangan perangkat lunak. Mereka bekerja dengan berbagai teknologi modern untuk menciptakan solusi yang efisien, scalable, dan maintainable.",
    icon: "💻",
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    competencies: ["Programming", "System Design", "Debugging", "Version Control", "Algorithms", "Database"],
    responsibilities: [
      "Mengembangkan aplikasi web dan mobile",
      "Menulis kode yang clean dan efisien",
      "Melakukan code review dan testing",
      "Optimasi performa aplikasi",
      "Kolaborasi dengan tim lintas fungsi"
    ],
    careerPath: ["Junior Developer", "Software Engineer", "Senior Engineer", "Tech Lead"],
    technologies: ["JavaScript/TypeScript", "React/Next.js", "Node.js", "Python", "AWS", "Docker"],
    demand: "Tinggi",
    experience: "2-5 tahun"
  },
  {
    id: 2,
    title: "Data Scientist",
    salary: "$90K - $110K",
    description: "Menganalisis data kompleks untuk mendukung pengambilan keputusan berbasis data.",
    longDescription: "Data Scientist menggunakan statistika, machine learning, dan teknik analisis data untuk mengekstrak insight dari data yang kompleks.",
    icon: "📊",
    color: "bg-gradient-to-r from-green-500 to-emerald-500",
    competencies: ["Statistics", "Machine Learning", "Data Visualization", "Python/R", "SQL", "Big Data"],
    responsibilities: [
      "Analisis data dan pembuatan model prediktif",
      "Visualisasi data untuk stakeholder",
      "Implementasi algoritma machine learning",
      "Pembersihan dan preprocessing data",
      "Penelitian dan eksperimen data"
    ],
    careerPath: ["Data Analyst", "Data Scientist", "Senior Data Scientist", "Lead DS"],
    technologies: ["Python/R", "SQL/NoSQL", "TensorFlow", "Tableau", "Apache Spark", "Cloud"],
    demand: "Sangat Tinggi",
    experience: "3-6 tahun"
  },
  {
    id: 3,
    title: "Product Manager",
    salary: "$110K - $130K",
    description: "Mendefinisikan strategi produk dan memimpin tim pengembangan.",
    longDescription: "Product Manager bertanggung jawab atas kesuksesan produk dari konsep hingga launch dan iterasi.",
    icon: "🎯",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    competencies: ["Product Strategy", "Market Research", "Agile", "Stakeholder Management", "Roadmapping"],
    responsibilities: [
      "Mendefinisikan visi dan roadmap produk",
      "Analisis pasar dan kompetitor",
      "Prioritasi fitur dan requirements",
      "Koordinasi tim engineering dan design",
      "Analisis metrik dan feedback pengguna"
    ],
    careerPath: ["Associate PM", "Product Manager", "Senior PM", "Director of Product"],
    technologies: ["Jira", "Figma", "Analytics Tools", "Roadmapping Software"],
    demand: "Tinggi",
    experience: "4-8 tahun"
  },
  {
    id: 4,
    title: "UX/UI Designer",
    salary: "$80K - $100K",
    description: "Mendesain pengalaman pengguna yang menarik dan mudah digunakan.",
    longDescription: "UX/UI Designer fokus pada desain interface yang intuitif dan memberikan pengalaman pengguna yang optimal.",
    icon: "🎨",
    color: "bg-gradient-to-r from-pink-500 to-rose-500",
    competencies: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing"],
    responsibilities: [
      "Research dan user testing",
      "Pembuatan wireframe dan prototype",
      "Desain visual dan interface",
      "Membangun design system",
      "Kolaborasi dengan developer"
    ],
    careerPath: ["Junior Designer", "UX/UI Designer", "Senior Designer", "Design Lead"],
    technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping Tools", "User Testing Platforms"],
    demand: "Tinggi",
    experience: "2-5 tahun"
  },
  {
    id: 5,
    title: "Quality Assurance",
    salary: "$70K - $90K",
    description: "Menguji aplikasi perangkat lunak untuk memastikan kualitas.",
    longDescription: "QA Engineer memastikan produk software bebas dari bug dan memenuhi standar kualitas sebelum rilis.",
    icon: "🔍",
    color: "bg-gradient-to-r from-amber-500 to-orange-500",
    competencies: ["Test Planning", "Automation", "Bug Tracking", "Performance Testing", "Regression Testing"],
    responsibilities: [
      "Membuat test plan dan test cases",
      "Manual dan automated testing",
      "Bug reporting dan tracking",
      "Performance dan security testing",
      "Kolaborasi dengan development team"
    ],
    careerPath: ["QA Tester", "QA Engineer", "Senior QA", "QA Manager"],
    technologies: ["Selenium", "Jest", "JIRA", "Postman", "Cypress", "Docker"],
    demand: "Sedang",
    experience: "1-4 tahun"
  }
]

export default function ProfessionDetailPage() {
  const params = useParams()
  const [liked, setLiked] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  
  const id = Number(params.id)
  const profession = professions.find(p => p.id === id)

  useEffect(() => {
    const saved = localStorage.getItem('likedProfessions')
    if (saved) {
      const likedItems = JSON.parse(saved)
      setLiked(likedItems.includes(id))
    }
  }, [id])

  if (!profession) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Profesi Tidak Ditemukan</h1>
          <p className="text-gray-600 mb-6">Profesi dengan ID {id} tidak tersedia</p>
          <Link href="/" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg">
            ← Kembali ke Daftar Profesi
          </Link>
        </div>
      </div>
    )
  }

  const handleLike = () => {
    const saved = localStorage.getItem('likedProfessions')
    let likedItems = saved ? JSON.parse(saved) : []
    
    if (liked) {
      likedItems = likedItems.filter((item: number) => item !== id)
    } else {
      likedItems.push(id)
    }
    
    localStorage.setItem('likedProfessions', JSON.stringify(likedItems))
    setLiked(!liked)
  }

  const getNextProfession = () => {
    const nextId = id === professions.length ? 1 : id + 1
    return professions.find(p => p.id === nextId)
  }

  const getPrevProfession = () => {
    const prevId = id === 1 ? professions.length : id - 1
    return professions.find(p => p.id === prevId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Floating Navigation */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-bold"
            >
              <span className="text-xl">←</span>
              <span>Kembali ke Daftar</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
                <span className="text-blue-700 font-bold">ID:</span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-bold">
                  {profession.id}
                </span>
              </div>
              <button
                onClick={handleLike}
                className={`flex items-center space-x-2 px-5 py-2 rounded-xl font-bold transition-all transform hover:scale-105 ${
                  liked
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-red-400 hover:text-red-500'
                }`}
              >
                <span className="text-lg">{liked ? '❤️' : '🤍'}</span>
                <span>{liked ? 'Disukai' : 'Sukai'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className={`${profession.color} rounded-3xl p-8 text-white relative overflow-hidden`}>
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <div className="text-6xl">{profession.icon}</div>
                  <div>
                    <div className="text-sm font-medium text-white/90">PROFESI #{profession.id}</div>
                    <h1 className="text-3xl md:text-4xl font-bold">{profession.title}</h1>
                  </div>
                </div>
                
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                  <div className="text-3xl font-bold">{profession.salary}</div>
                  <div className="text-white/80">Gaji per tahun</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="font-bold">URL: /profession/{profession.id}</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="font-bold">Demand: {profession.demand}</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="font-bold">Experience: {profession.experience}</span>
                </div>
              </div>
              
              <p className="text-xl text-white/90 max-w-3xl">
                {profession.description}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            <div className="flex overflow-x-auto">
              {['overview', 'responsibilities', 'skills', 'career', 'url'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-6 py-3 rounded-xl font-bold whitespace-nowrap transition-all ${
                    activeTab === tab 
                      ? `${profession.color.replace('bg-gradient-to-r', 'bg-gradient-to-r')} text-white`
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {tab === 'overview' && '📋 Overview'}
                  {tab === 'responsibilities' && '📝 Tanggung Jawab'}
                  {tab === 'skills' && '🔧 Skill & Tools'}
                  {tab === 'career' && '📈 Jalur Karir'}
                  {tab === 'url' && '🔗 URL Info'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                    Deskripsi Lengkap
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8">
                    {profession.longDescription}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
                      <div className="text-sm text-blue-600 font-bold mb-2">LEVEL PENGALAMAN</div>
                      <div className="text-2xl font-bold text-gray-800">{profession.experience}</div>
                      <div className="text-gray-600 mt-2">Pengalaman yang direkomendasikan</div>
                    </div>
                    <div className={`bg-gradient-to-br ${
                      profession.demand === 'Sangat Tinggi' ? 'from-red-50 to-pink-50' :
                      profession.demand === 'Tinggi' ? 'from-orange-50 to-amber-50' :
                      'from-green-50 to-emerald-50'
                    } p-6 rounded-2xl`}>
                      <div className="text-sm text-gray-600 font-bold mb-2">PERMINTAAN PASAR</div>
                      <div className="text-2xl font-bold text-gray-800">{profession.demand}</div>
                      <div className="text-gray-600 mt-2">Tren permintaan pekerjaan</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 Poin Penting</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Gaji kompetitif di atas rata-rata</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Prospek karir yang cerah</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Banyak peluang kerja remote</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Skill yang selalu dicari</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">💡 Tips Karir</h3>
                  <p className="text-gray-700 mb-3">
                    Mulailah dengan mempelajari fundamental, bangun portfolio project, dan terus update dengan teknologi terbaru.
                  </p>
                  <div className="text-sm text-gray-600">
                    Update terakhir: Desember 2023
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'responsibilities' && (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                Tanggung Jawab Utama
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {profession.responsibilities.map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <div className="flex-grow">
                      <p className="text-gray-800 text-lg font-medium group-hover:text-gray-900">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-3 h-3 bg-amber-500 rounded-full mr-3"></span>
                  Skill yang Dibutuhkan
                </h2>
                <div className="space-y-4">
                  {profession.competencies.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl hover:shadow-md transition-shadow">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                          <span className="text-amber-600 font-bold">✓</span>
                        </div>
                        <span className="font-bold text-gray-800">{skill}</span>
                      </div>
                      <span className="text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full">
                        Wajib
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                  Teknologi & Tools
                </h2>
                <div className="flex flex-wrap gap-3">
                  {profession.technologies.map((tech, index) => (
                    <span key={index} className="px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-lg font-medium border border-purple-200 hover:border-purple-300 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'career' && (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                <span className="w-3 h-3 bg-pink-500 rounded-full mr-3"></span>
                Jalur Karir & Progresi
              </h2>
              <div className="relative">
                <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 md:block hidden"></div>
                <div className="space-y-8">
                  {profession.careerPath.map((level, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-24 h-24 rounded-2xl flex items-center justify-center mr-8 relative z-10 ${
                        index === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                        index === profession.careerPath.length - 1 ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                        'bg-gradient-to-r from-blue-400 to-purple-400'
                      }`}>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white mb-1">{index + 1}</div>
                          <div className="text-xs text-white/90">Level</div>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="text-2xl font-bold text-gray-800 mb-2">{level}</div>
                        <div className="text-gray-600">
                          {index === 0 && 'Posisi entry-level untuk fresh graduate'}
                          {index === 1 && 'Posisi mid-level dengan pengalaman 2-3 tahun'}
                          {index === 2 && 'Posisi senior dengan pengalaman 4+ tahun'}
                          {index === 3 && 'Posisi leadership dan management'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'url' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  Informasi URL & ID
                </h2>
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-gray-600 mb-2">URL Saat Ini</div>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-xl font-mono text-sm overflow-x-auto">
                      /profession/{profession.id}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-2">Parameter ID</div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-xl">
                        {profession.id}
                      </div>
                      <div className="text-gray-700">
                        ID digunakan sebagai parameter dinamis dalam routing
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl">
                    <div className="text-sm text-blue-600 font-bold mb-1">📌 Cara Kerja:</div>
                    <p className="text-gray-700">
                      URL <code className="bg-blue-100 px-2 py-1 rounded">/profession/[id]</code> menggunakan dynamic routing di Next.js
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">🔗 Quick Navigation</h3>
                <div className="space-y-4">
                  <Link
                    href={`/profession/${getPrevProfession()?.id}`}
                    className="block p-4 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-white/80 mb-1">Profesi Sebelumnya</div>
                        <div className="font-bold">{getPrevProfession()?.title}</div>
                        <div className="text-sm text-white/60">ID: {getPrevProfession()?.id}</div>
                      </div>
                      <span className="text-2xl">←</span>
                    </div>
                  </Link>
                  
                  <Link
                    href={`/profession/${getNextProfession()?.id}`}
                    className="block p-4 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-white/80 mb-1">Profesi Selanjutnya</div>
                        <div className="font-bold">{getNextProfession()?.title}</div>
                        <div className="text-sm text-white/60">ID: {getNextProfession()?.id}</div>
                      </div>
                      <span className="text-2xl">→</span>
                    </div>
                  </Link>
                  
                  <Link
                    href="/"
                    className="block p-4 bg-white text-blue-600 rounded-xl font-bold text-center hover:bg-gray-100 transition-colors mt-6"
                  >
                    Kembali ke Daftar Semua Profesi
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Siap Memulai Karir?</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Jelajahi semua profesi software engineering untuk menemukan yang paling cocok dengan minat dan kemampuanmu
            </p>
            <Link
              href="/"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors text-lg"
            >
              🚀 Lihat Semua Profesi
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold gradient-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
              VERSIJA PENDIDIKAN TEKNOLOGI
            </h3>
            <p className="text-xl text-gray-700 mb-2">SMK Telkom Malang</p>
            <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full font-bold mt-2 mb-6">
              <span className="w-3 h-3 bg-white rounded-full mr-2 animate-pulse"></span>
              TERAKREDITASI A
            </div>
            <div className="text-sm text-gray-600">
              Profesi ID: <span className="font-bold text-blue-600">{profession.id}</span> • 
              URL Parameter: <code className="bg-gray-100 px-2 py-1 rounded mx-1">[id]</code> • 
              Update: Desember 2023
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}