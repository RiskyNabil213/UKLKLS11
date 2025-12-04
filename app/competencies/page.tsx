'use client';

import React from 'react';

export default function CompetenciesPage() {
  // Data skills
  let skillsData = [
    {
      id: 1,
      name: "Algorithms & Data Structures",
      description: "Pemahaman fundamental algoritma dan struktur data untuk pengembangan software yang efisien dan optimal",
      rating: 9,
      icon: "🤖",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      progressColor: "bg-blue-500",
      technologies: ["Sorting Algorithms", "Search Algorithms", "Graph Theory", "Dynamic Programming", "Complexity Analysis"]
    },
    {
      id: 2,
      name: "Database Management",
      description: "Desain, implementasi, dan optimasi database relasional dan non-relasional untuk aplikasi modern",
      rating: 8,
      icon: "💾",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      progressColor: "bg-green-500",
      technologies: ["SQL", "NoSQL", "Database Design", "Query Optimization", "Transaction Management"]
    },
    {
      id: 3,
      name: "UI/UX Design",
      description: "Perancangan antarmuka pengguna yang intuitif dan pengalaman pengguna yang optimal dengan metodologi modern",
      rating: 7,
      icon: "🎨",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      progressColor: "bg-purple-500",
      technologies: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      id: 4,
      name: "Web Development",
      description: "Pengembangan aplikasi web full-stack dengan framework modern dan best practices",
      rating: 9,
      icon: "🌐",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
      progressColor: "bg-orange-500",
      technologies: ["React.js", "Vue.js", "Node.js", "TypeScript", "REST APIs", "Web Performance"]
    },
    {
      id: 5,
      name: "Mobile Development",
      description: "Pengembangan aplikasi mobile native dan cross-platform untuk Android dan iOS",
      rating: 8,
      icon: "📱",
      bgColor: "bg-pink-50",
      textColor: "text-pink-700",
      progressColor: "bg-pink-500",
      technologies: ["Flutter", "React Native", "Kotlin", "Swift", "Mobile Architecture", "App Store Deployment"]
    },
    {
      id: 6,
      name: "Cloud Computing",
      description: "Deployment, scaling, dan management aplikasi pada platform cloud modern",
      rating: 7,
      icon: "☁️",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-700",
      progressColor: "bg-cyan-500",
      technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Serverless"]
    },
    {
      id: 7,
      name: "Cyber Security",
      description: "Implementasi keamanan aplikasi dan proteksi terhadap ancaman keamanan modern",
      rating: 6,
      icon: "🛡️",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
      progressColor: "bg-red-500",
      technologies: ["OWASP Top 10", "Encryption", "Authentication", "Penetration Testing", "Security Auditing"]
    },
    {
      id: 8,
      name: "DevOps & CI/CD",
      description: "Otomatisasi pipeline development dan deployment dengan tools DevOps modern",
      rating: 7,
      icon: "⚙️",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700",
      progressColor: "bg-indigo-500",
      technologies: ["Jenkins", "GitHub Actions", "GitLab CI", "Terraform", "Monitoring", "Logging"]
    },
    {
      id: 9,
      name: "Software Architecture",
      description: "Desain arsitektur software yang scalable, maintainable, dan mengikuti best practices",
      rating: 8,
      icon: "🏗️",
      bgColor: "bg-teal-50",
      textColor: "text-teal-700",
      progressColor: "bg-teal-500",
      technologies: ["Microservices", "Monolith", "Design Patterns", "System Design", "Scalability"]
    },
    {
      id: 10,
      name: "Programming Fundamentals",
      description: "Penguasaan konsep dasar pemrograman dan berbagai paradigma programming",
      rating: 9,
      icon: "💻",
      bgColor: "bg-amber-50",
      textColor: "text-amber-700",
      progressColor: "bg-amber-500",
      technologies: ["Object-Oriented", "Functional Programming", "Clean Code", "Testing", "Debugging"]
    },
    {
      id: 11,
      name: "Data Analysis",
      description: "Analisis dan visualisasi data untuk pengambilan keputusan berbasis data",
      rating: 6,
      icon: "📊",
      bgColor: "bg-lime-50",
      textColor: "text-lime-700",
      progressColor: "bg-lime-500",
      technologies: ["Python Pandas", "Data Visualization", "SQL Analytics", "Statistical Analysis", "Reporting"]
    },
    {
      id: 12,
      name: "Agile & Project Management",
      description: "Metodologi pengembangan software agile dan manajemen project yang efektif",
      rating: 8,
      icon: "👥",
      bgColor: "bg-violet-50",
      textColor: "text-violet-700",
      progressColor: "bg-violet-500",
      technologies: ["Scrum", "Kanban", "JIRA", "Project Planning", "Team Collaboration", "Sprint Management"]
    }
  ];

  // State untuk skills
  let [skills, setSkills] = React.useState(skillsData);
  let [filter, setFilter] = React.useState('all');

  // Fungsi untuk mengubah rating skill
  function handleRatingChange(skillId, newRating) {
    let updatedSkills = skills.map(skill => {
      if (skill.id === skillId) {
        return {...skill, rating: newRating};
      }
      return skill;
    });
    setSkills(updatedSkills);
  }

  // Fungsi untuk mendapatkan kategori berdasarkan rating
  function getCategoryInfo(ratingValue) {
    if (ratingValue >= 9) {
      return { name: 'Master', bgColor: 'bg-emerald-50', textColor: 'text-emerald-700', borderColor: 'border-emerald-200' };
    }
    if (ratingValue >= 8) {
      return { name: 'Expert', bgColor: 'bg-green-50', textColor: 'text-green-700', borderColor: 'border-green-200' };
    }
    if (ratingValue >= 7) {
      return { name: 'Advanced', bgColor: 'bg-blue-50', textColor: 'text-blue-700', borderColor: 'border-blue-200' };
    }
    if (ratingValue >= 6) {
      return { name: 'Proficient', bgColor: 'bg-purple-50', textColor: 'text-purple-700', borderColor: 'border-purple-200' };
    }
    if (ratingValue >= 4) {
      return { name: 'Intermediate', bgColor: 'bg-amber-50', textColor: 'text-amber-700', borderColor: 'border-amber-200' };
    }
    return { name: 'Beginner', bgColor: 'bg-gray-50', textColor: 'text-gray-700', borderColor: 'border-gray-200' };
  }

  // Filter skills berdasarkan level
  let filteredSkills = skills;
  if (filter === 'expert') {
    filteredSkills = skills.filter(skill => skill.rating >= 8);
  } else if (filter === 'intermediate') {
    filteredSkills = skills.filter(skill => skill.rating >= 6 && skill.rating < 8);
  } else if (filter === 'beginner') {
    filteredSkills = skills.filter(skill => skill.rating < 6);
  }

  // Komponen Skill Card
  function SkillCard({ skill }) {
    let categoryInfo = getCategoryInfo(skill.rating);

    return (
      <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div className={`${skill.bgColor} p-4 rounded-xl`}>
            <div className="text-2xl">
              {skill.icon}
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className={`px-4 py-1 rounded-full text-sm font-bold ${categoryInfo.textColor} ${categoryInfo.bgColor}`}>
              {categoryInfo.name}
            </div>
            <div className="mt-2 text-3xl font-bold text-gray-900">{skill.rating}/10</div>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3">{skill.name}</h3>
        <p className="text-gray-600 mb-6">{skill.description}</p>
        
        {/* Rating Controls */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-semibold text-gray-700">Penilaian Diri:</span>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">{skill.rating}</span>
              <div className="w-5 h-5 text-amber-500">⭐</div>
              <span className="text-sm text-gray-500">/10</span>
            </div>
          </div>
          
          {/* Rating Slider */}
          <div className="mb-4">
            <input
              type="range"
              min="1"
              max="10"
              value={skill.rating}
              onChange={(e) => handleRatingChange(skill.id, parseInt(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-blue"
            />
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Level Kemahiran</span>
            <span>{skill.rating * 10}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${skill.progressColor}`}
              style={{ width: `${skill.rating * 10}%` }}
            ></div>
          </div>
        </div>
        
        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Teknologi Terkait:</h4>
          <div className="flex flex-wrap gap-2">
            {skill.technologies.map((tech, index) => (
              <span 
                key={index} 
                className={`text-xs px-3 py-1 rounded-full ${skill.bgColor} ${skill.textColor}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <button className="w-full py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
          Lihat Detail Kurikulum
        </button>
      </div>
    );
  }

  // Hitung statistik
  let expertSkills = skills.filter(skill => skill.rating >= 8).length;
  let advancedSkills = skills.filter(skill => skill.rating >= 7 && skill.rating < 8).length;
  let intermediateSkills = skills.filter(skill => skill.rating >= 4 && skill.rating < 7).length;
  let beginnerSkills = skills.filter(skill => skill.rating < 4).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <style jsx global>{`
        .slider-blue::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
        
        .slider-blue::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
      `}</style>
      
      {/* Hero Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-2/3">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-sm px-4 py-2 rounded-full mb-6 border border-white/30">
                  <span className="mr-2">⚡</span>
                  <span>Kompetensi Unggulan</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                  Kompetensi RPL
                  <span className="block text-blue-200 mt-2">SMK Telkom Malang</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-blue-100 mb-8 max-w-3xl">
                  Master 12 kompetensi utama dalam pengembangan perangkat lunak yang dirancang untuk 
                  mempersiapkan siswa menjadi developer profesional yang siap kerja di industri teknologi.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <button 
                    onClick={() => setFilter('all')}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${filter === 'all' ? 'bg-white text-blue-900' : 'bg-white/10 hover:bg-white/20'}`}
                  >
                    Semua Kompetensi
                  </button>
                  <button 
                    onClick={() => setFilter('expert')}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${filter === 'expert' ? 'bg-green-500 text-white' : 'bg-white/10 hover:bg-white/20'}`}
                  >
                    Level Expert
                  </button>
                  <button 
                    onClick={() => setFilter('intermediate')}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${filter === 'intermediate' ? 'bg-blue-500 text-white' : 'bg-white/10 hover:bg-white/20'}`}
                  >
                    Level Intermediate
                  </button>
                  <button 
                    onClick={() => setFilter('beginner')}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${filter === 'beginner' ? 'bg-amber-500 text-white' : 'bg-white/10 hover:bg-white/20'}`}
                  >
                    Level Beginner
                  </button>
                </div>
              </div>
              
              <div className="lg:w-1/3">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold mb-4">Statistik Kompetensi</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Expert Level</span>
                        <span className="font-bold">{expertSkills} Skills</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: `${(expertSkills/12)*100}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Advanced Level</span>
                        <span className="font-bold">{advancedSkills} Skills</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{ width: `${(advancedSkills/12)*100}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Intermediate Level</span>
                        <span className="font-bold">{intermediateSkills} Skills</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-amber-400 h-2 rounded-full" style={{ width: `${(intermediateSkills/12)*100}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competencies Grid */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
                12 Kompetensi <span className="text-blue-700">Unggulan</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Setiap kompetensi dirancang dengan kurikulum yang selaras dengan kebutuhan industri 
                dan dilengkapi dengan project-based learning untuk pengalaman praktis.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredSkills.map(skill => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
            
            {/* Legend */}
            <div className="mt-12 lg:mt-16 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kategori Kompetensi</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 mr-3"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Master (9-10)</div>
                    <div className="text-sm text-gray-600">Sangat mahir, dapat menjadi mentor</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 mr-3"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Expert (8-9)</div>
                    <div className="text-sm text-gray-600">Mahir dan dapat bekerja mandiri</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 mr-3"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Advanced (7-8)</div>
                    <div className="text-sm text-gray-600">Lancar dengan sedikit bimbingan</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 mr-3"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Intermediate (4-7)</div>
                    <div className="text-sm text-gray-600">Memahami konsep dasar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-200">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Sistem <span className="text-blue-700">Penilaian Kompetensi</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Penilaian kompetensi menggunakan sistem 360° yang mencakup aspek pengetahuan, 
                  keterampilan praktis, dan project-based assessment.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                 
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Assessment</h3>
                  <p className="text-gray-600">
                    Penilaian berdasarkan pemahaman konsep dan kemampuan memecahkan masalah teknis
                  </p>
                  <div className="mt-4 text-sm text-gray-500">40% dari total nilai</div>
                </div>
                
                <div className="text-center">
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Project Based</h3>
                  <p className="text-gray-600">
                    Evaluasi melalui project riil dengan standar industri dan timeline yang ditentukan
                  </p>
                  <div className="mt-4 text-sm text-gray-500">40% dari total nilai</div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Soft Skills</h3>
                  <p className="text-gray-600">
                    Penilaian kemampuan kolaborasi, komunikasi, dan problem solving dalam tim
                  </p>
                  <div className="mt-4 text-sm text-gray-500">20% dari total nilai</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Siap Kuasai Semua Kompetensi Ini?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Bergabunglah dengan program RPL SMK Telkom Malang dan raih sertifikasi kompetensi 
              yang diakui industri nasional dan internasional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center shadow-lg hover:shadow-xl">
                <span className="mr-3"></span>
                Download Kurikulum Lengkap
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all">
                Konsultasi dengan Mentor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 lg:py-16">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
              <div>
                <div className="flex items-center space-x-3 mb-4 lg:mb-6">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-sm lg:text-lg">ST</span>
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold">SMK Telkom Malang</h3>
                    <p className="text-gray-400 text-xs lg:text-sm">Rekayasa Perangkat Lunak</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4 lg:mb-6">
                  Jl. Danau Ranau, Sawojajar, Kec. Kedungkandang, Kota Malang, Jawa Timur 65139
                </p>
                <div className="flex space-x-3">
                  {['T', 'I', 'F', 'Y'].map((social, index) => (
                    <div key={index} className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                      <span className="text-xs lg:text-sm font-medium">{social}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {[
                {
                  title: "Program Studi",
                  links: ["Rekayasa Perangkat Lunak", "Teknik Komputer Jaringan", "Multimedia", "Bisnis Daring"]
                },
                {
                  title: "Kompetensi",
                  links: ["Web Development", "Mobile Development", "UI/UX Design", "Database Management", "Cloud Computing"]
                },
                {
                  title: "Kontak",
                  links: ["(0341) 1234-5678", "rpl@smktelkom-mlg.sch.id", "www.smktelkom-malang.sch.id", "Pendaftaran Online"]
                }
              ].map((section, index) => (
                <div key={index}>
                  <h4 className="text-base lg:text-lg font-bold mb-4 lg:mb-6">{section.title}</h4>
                  <ul className="space-y-2 lg:space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm lg:text-base">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-800 pt-6 lg:pt-8 text-center text-gray-500 text-sm">
              <p>© 2024 SMK Telkom Malang - Rekayasa Perangkat Lunak. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}