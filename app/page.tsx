'use client';
import React from 'react';

export default function HomePageRPL() {
  return (
    <div className="bg-white">
      <section className="relative flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className=" opacity-5"></div>
        <div className="w-full px-8 py-16 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center bg-white text-blue-700 text-sm px-4 py-2 rounded-full mb-8 shadow-sm border border-blue-100">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Terakreditasi A • Sekolah Unggulan Nasional
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  Rekayasa Perangkat Lunak
                  <span className="block text-blue-700 mt-2">SMK Telkom Malang</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-10 max-w-2xl">
                  Cetak generasi pengembang software profesional dengan kompetensi industri 4.0. 
                  Bergabunglah dengan program studi RPL terbaik di Jawa Timur.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-14">
                  <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Daftar Sekarang
                    <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-xl font-semibold text-lg transition-all">
                    Lihat Virtual Tour
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-700">1.200+</div>
                    <div className="text-sm text-gray-600 font-medium">Siswa Aktif</div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="text-3xl font-bold text-blue-700">98%</div>
                    <div className="text-sm text-gray-600 font-medium">Penyerapan Kerja</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-700">50+</div>
                    <div className="text-sm text-gray-600 font-medium">Industri Mitra</div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="relative bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
                    <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="ml-4 text-sm text-gray-300 font-medium">app.js</div>
                        </div>
                        <div className="text-xs text-gray-500 font-mono">RPL SMK Telkom Malang</div>
                      </div>
                    </div>
                    
                    {/* Code Content */}
                    <div className="p-6 font-mono">
                      <div className="space-y-1">
                        {/* Line 1 */}
                        <div className="flex items-start group hover:bg-gray-800/50 px-2 py-1 rounded">
                          <div className="text-gray-500 text-sm w-8 text-right pr-3 select-none">1</div>
                          <div className="text-blue-400 text-sm">// SMK Telkom Malang - RPL</div>
                        </div>
                        
                        {/* Line 2 */}
                        <div className="flex items-start group hover:bg-gray-800/50 px-2 py-1 rounded">
                          <div className="text-gray-500 text-sm w-8 text-right pr-3 select-none">2</div>
                          <div className="text-purple-400 text-sm">function </div>
                          <div className="text-yellow-300 text-sm ml-1">createDeveloper</div>
                          <div className="text-white text-sm">() {"{"}</div>
                        </div>
                        
                        {/* Line 3 */}
                        <div className="flex items-start group hover:bg-gray-800/50 px-2 py-1 rounded">
                          <div className="text-gray-500 text-sm w-8 text-right pr-3 select-none">3</div>
                          <div className="text-gray-300 text-sm ml-4">const </div>
                          <div className="text-yellow-300 text-sm ml-1">skills</div>
                          <div className="text-white text-sm ml-1"> = [</div>
                        </div>
                        
                        {/* Skills Array */}
                        <div className="ml-12 space-y-1">
                          <div className="flex items-start group hover:bg-gray-800/50 px-2 py-1 rounded">
                            <div className="text-gray-500 text-sm w-8 text-right pr-3 select-none">4</div>
                            <div className="text-green-400 text-sm">"Web Development"</div>
                            <div className="text-white text-sm">,</div>
                          </div>
                          <div className="flex items-start group hover:bg-gray-800/50 px-2 py-1 rounded">
                            <div className="text-gray-500 text-sm w-8 text-right pr-3 select-none">5</div>
                            <div className="text-green-400 text-sm">"Mobile App Development"</div>
                            <div className="text-white text-sm">,</div>
                          </div>
                          <div className="flex items-start group hover:bg-gray-800/50 px-2 py-1 rounded">
                            <div className="text-gray-500 text-sm w-8 text-right pr-3 select-none">6</div>
                            <div className="text-green-400 text-sm">"UI/UX Design"</div>
                            <div className="text-white text-sm">,</div>
                          </div>
                          <div className="flex items-start group hover:bg-gray-800/50 px-2 py-1 rounded">
                            <div className="text-gray-500 text-sm w-8 text-right pr-3 select-none">7</div>
                            <div className="text-green-400 text-sm">"Database Management"</div>
                            <div className="text-white text-sm">,</div>
                          </div>
                          <div className="flex items-start group hover:bg-gray-800/50 px-2 py-1 rounded">
                            <div className="text-gray-500 text-sm w-8 text-right pr-3 select-none">8</div>
                            <div className="text-green-400 text-sm">"Cloud Computing"</div>
                            <div className="text-white text-sm">,</div>
                          </div>
                          <div className="flex items-start group hover:bg-gray-800/50 px-2 py-1 rounded">
                            <div className="text-gray-500 text-sm w-8 text-right pr-3 select-none">9</div>
                            <div className="text-green-400 text-sm">"Cyber Security"</div>
                          </div>
                        </div>
                        
                        {/* Line 10 */}
                        <div className="flex items-start group hover:bg-gray-800/50 px-2 py-1 rounded">
                          <div className="text-gray-500 text-sm w-8 text-right pr-3 select-none">10</div>
                          <div className="text-white text-sm ml-4">];</div>
                        </div>
                        
                        {/* Line 11 - Empty */}
                        <div className="flex items-start">
                          <div className="text-gray-500 text-sm w-8 text-right pr-3 select-none">11</div>
                          <div className="text-white text-sm"></div>
                        </div>
                        
                        {/* Line 12 */}
                        <div className="flex items-start group hover:bg-gray-800/50 px-2 py-1 rounded">
                          <div className="text-gray-500 text-sm w-8 text-right pr-3 select-none">12</div>
                          <div className="text-gray-300 text-sm ml-4">return {"{"}</div>
                        </div>
                        
                        {/* Return Object */}
                        <div className="ml-12 space-y-1">
                          <div className="flex items-start group hover:bg-gray-800/50 px-2 py-1 rounded">
                            <div className="text-gray-500 text-sm w-8 text-right pr-3 select-none">13</div>
                            <div className="text-yellow-300 text-sm">name</div>
                            <div className="text-gray-300 text-sm">: </div>
                            <div className="text-green-400 text-sm ml-1">"Lulusan RPL"</div>
                            <div className="text-white text-sm">,</div>
                          </div>
                          <div className="flex items-start group hover:bg-gray-800/50 px-2 py-1 rounded">
                            <div className="text-gray-500 text-sm w-8 text-right pr-3 select-none">14</div>
                            <div className="text-yellow-300 text-sm">competency</div>
                            <div className="text-gray-300 text-sm">: </div>
                            <div className="text-green-400 text-sm ml-1">"Industry 4.0 Ready"</div>
                            <div className="text-white text-sm">,</div>
                          </div>
                          <div className="flex items-start group hover:bg-gray-800/50 px-2 py-1 rounded">
                            <div className="text-gray-500 text-sm w-8 text-right pr-3 select-none">15</div>
                            <div className="text-yellow-300 text-sm">certification</div>
                            <div className="text-gray-300 text-sm">: </div>
                            <div className="text-green-400 text-sm ml-1">"BNSP & Internasional"</div>
                            <div className="text-white text-sm">,</div>
                          </div>
                          <div className="flex items-start group hover:bg-gray-800/50 px-2 py-1 rounded">
                            <div className="text-gray-500 text-sm w-8 text-right pr-3 select-none">16</div>
                            <div className="text-yellow-300 text-sm">skills</div>
                            <div className="text-gray-300 text-sm">: </div>
                            <div className="text-white text-sm ml-1">skills</div>
                          </div>
                        </div>
                        
                        {/* Line 17 */}
                        <div className="flex items-start group hover:bg-gray-800/50 px-2 py-1 rounded">
                          <div className="text-gray-500 text-sm w-8 text-right pr-3 select-none">17</div>
                          <div className="text-white text-sm ml-4">{"}"}</div>
                        </div>
                        
                        {/* Line 18 */}
                        <div className="flex items-start group hover:bg-gray-800/50 px-2 py-1 rounded">
                          <div className="text-gray-500 text-sm w-8 text-right pr-3 select-none">18</div>
                          <div className="text-white text-sm">{"}"}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Footer */}
                    <div className="bg-gray-800 px-6 py-4 border-t border-gray-700">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-400">
                          <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Developer siap kerja dengan 6 kompetensi utama
                        </div>
                        <div className="text-xs text-gray-500">JavaScript ES6+</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="w-full px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Mengapa <span className="text-blue-700">RPL SMK Telkom Malang?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Program studi unggulan yang dirancang khusus untuk mencetak developer profesional siap kerja
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ),
                  title: "Industri-Ready Curriculum",
                  description: "Kurikulum berbasis kebutuhan industri dengan pembaruan berkala sesuai perkembangan teknologi",
                  color: "bg-blue-100 text-blue-600"
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Sertifikasi Internasional",
                  description: "Sertifikasi kompetensi dari Microsoft, Google, AWS, dan lembaga sertifikasi nasional",
                  color: "bg-green-100 text-green-600"
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Project Based Learning",
                  description: "Pembelajaran melalui project riil dari mitra industri dengan bimbingan mentor profesional",
                  color: "bg-purple-100 text-purple-600"
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: "Komunitas Developer",
                  description: "Bergabung dengan komunitas developer aktif untuk networking dan kolaborasi",
                  color: "bg-orange-100 text-orange-600"
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  ),
                  title: "Fasilitas Lengkap",
                  description: "Lab komputer canggih, akses software premium, dan learning management system modern",
                  color: "bg-red-100 text-red-600"
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Teaching Factory",
                  description: "Simulasi perusahaan software untuk pengalaman kerja nyata sebelum magang industri",
                  color: "bg-indigo-100 text-indigo-600"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                  <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Timeline */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="w-full px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Alur Pembelajaran <span className="text-blue-700">3 Tahun</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Kurikulum terstruktur dari dasar hingga profesional dengan teknologi terkini
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-blue-600"></div>
              
              <div className="space-y-24">
                {[
                  {
                    year: "Kelas X",
                    title: "Foundation Phase",
                    description: "Membangun dasar pemrograman yang kuat dengan konsep fundamental",
                    skills: ["Algoritma & Logika", "HTML/CSS/JavaScript", "Database SQL", "Python Fundamentals"],
                    side: "left",
                    color: "from-blue-500 to-blue-600"
                  },
                  {
                    year: "Kelas XI",
                    title: "Specialization Phase",
                    description: "Pengembangan aplikasi web dan mobile dengan framework modern",
                    skills: ["React.js & Node.js", "Mobile Development", "UI/UX Design", "RESTful APIs"],
                    side: "right",
                    color: "from-blue-600 to-blue-700"
                  },
                  {
                    year: "Kelas XII",
                    title: "Professional Phase",
                    description: "Project industri, magang, dan persiapan karir sebagai developer profesional",
                    skills: ["Project Management", "DevOps & Cloud", "Security", "Industry Project"],
                    side: "left",
                    color: "from-blue-700 to-blue-800"
                  }
                ].map((phase, index) => (
                  <div key={index} className={`flex flex-col lg:flex-row items-center ${phase.side === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className="lg:w-5/12 mb-8 lg:mb-0">
                      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                        <div className="inline-flex items-center bg-gradient-to-r ${phase.color} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                          {phase.year}
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                        <p className="text-gray-600 text-lg mb-6">{phase.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {phase.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:w-2/12 flex justify-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                        {index + 1}
                      </div>
                    </div>
                    
                    <div className="lg:w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="w-full px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Siap Memulai Karir sebagai Developer?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Bergabunglah dengan ratusan alumni sukses yang telah berkarir di perusahaan teknologi ternama
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="bg-white text-blue-900 hover:bg-blue-50 px-10 py-5 rounded-xl font-bold text-lg transition-all flex items-center justify-center shadow-2xl transform hover:-translate-y-1">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Jadwalkan Konsultasi Gratis
              </button>
              <button className="bg-transparent border-3 border-white hover:bg-white/10 px-10 py-5 rounded-xl font-bold text-lg transition-all">
                Download Brosur Lengkap
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <div className="text-4xl font-bold mb-2">2025/2026</div>
                <div className="text-blue-200">Pendaftaran Dibuka</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <div className="text-4xl font-bold mb-2">120</div>
                <div className="text-blue-200">Kuota Siswa Baru</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <div className="text-4xl font-bold mb-2">Maret 2025</div>
                <div className="text-blue-200">Gelombang I Ditutup</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="w-full px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">ST</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">SMK Telkom Malang</h3>
                    <p className="text-gray-400 text-sm">Rekayasa Perangkat Lunak</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-6">
                  Jl. Danau Ranau, Sawojajar, Kec. Kedungkandang, Kota Malang, Jawa Timur 65139
                </p>
                <div className="flex space-x-4">
                  {['twitter', 'instagram', 'facebook', 'youtube'].map((social) => (
                    <div key={social} className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                      <span className="text-sm font-medium">{social.charAt(0).toUpperCase()}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-6">Program Studi</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Rekayasa Perangkat Lunak</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Teknik Komputer Jaringan</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Multimedia</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bisnis Daring</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-6">Informasi</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Penerimaan Siswa Baru</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Beasiswa</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fasilitas</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Prestasi</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-6">Kontak Kami</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <div className="text-gray-400 text-sm">Telepon</div>
                      <div className="font-medium">(0341) 1234-5678</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <div className="text-gray-400 text-sm">Email</div>
                      <div className="font-medium">rpl@smktelkom-mlg.sch.id</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <div>
                      <div className="text-gray-400 text-sm">Website</div>
                      <div className="font-medium">www.smktelkom-malang.sch.id</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
              <p>© 2024 SMK Telkom Malang - Rekayasa Perangkat Lunak. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
}