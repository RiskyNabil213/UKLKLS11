'use client'

import Link from 'next/link'
import { useState } from 'react'
import { 
  Home, 
  User, 
  GraduationCap,
  ChevronLeft,
  Menu,
  X,
  LogOut
} from 'lucide-react'

export default function Sidebar() {
  const [menuMobileTerbuka, setMenuMobileTerbuka] = useState(false)
  const [sidebarTerbuka, setSidebarTerbuka] = useState(false)

  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024

  return (
    <>
      {isDesktop ? (
        <>
          {/* Desktop View - Sticky Navbar */}
          <div className="sticky top-0 z-50 backdrop-blur-sm">
            <header className="h-16 bg-red-500 text-white shadow-lg flex items-center justify-between px-6">
              <button
                onClick={() => setSidebarTerbuka(!sidebarTerbuka)}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white"
              >
                {sidebarTerbuka ? <ChevronLeft size={20} /> : <Menu size={20} />}
              </button>
              
              <div className="flex items-center space-x-4 my-10">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    RN
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-white text-left">Risky Nabil</p>
                  <p className="text-xs text-white/80">Software Developer</p>
                </div>
              </div>
            </header>
          </div>

          {sidebarTerbuka && (
            <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setSidebarTerbuka(false)} />
          )}

          <div className={`
            fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 border-r border-gray-200
            ${sidebarTerbuka ? 'translate-x-0' : '-translate-x-full'}
          `}>
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white font-semibold">
                      RN
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-3 border-white rounded-full"></div>
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900">Risky Nabil</h2>
                    <p className="text-sm text-gray-500">Software Engineering</p>
                  </div>
                </div>
                <button
                  onClick={() => setSidebarTerbuka(false)}
                  className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-lg"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <nav className="p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase mb-4 px-2">
                Navigation
              </p>
              
              <Link
                href="/"
                className="flex items-center space-x-3 px-4 py-3.5 rounded-xl mb-2 text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-all"
              >
                <Home size={20} className="text-gray-400" />
                <span className="font-medium">Home</span>
              </Link>
              
              <Link
                href="/competencies"
                className="flex items-center space-x-3 px-4 py-3.5 rounded-xl mb-2 text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-all"
              >
                <User size={20} className="text-gray-400" />
                <span className="font-medium">Competencies</span>
              </Link>
              
              <Link
                href="/profession"
                className="flex items-center justify-between px-4 py-3.5 rounded-xl mb-2 text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-all"
              >
                <div className="flex items-center space-x-3">
                  <GraduationCap size={20} className="text-gray-400" />
                  <span className="font-medium">Profession</span>
                </div>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-teal-100 text-teal-700">
                  2
                </span>
              </Link>
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100">
            
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600 font-medium">
                  © 2025 Risky Nabil
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Software Engineering Student
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Mobile View - Sticky Navbar */}
          <div className="sticky top-0 z-50">
            <header className="bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg">
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setMenuMobileTerbuka(!menuMobileTerbuka)}
                    className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg text-white"
                  >
                    {menuMobileTerbuka ? <X size={20} /> : <Menu size={20} />}
                  </button>
                  
                  <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center text-white font-semibold">
                    RN
                  </div>
                </div>
                
                <div className="text-right">
                  <h1 className="text-lg font-semibold text-white">
                    Risky Nabil
                  </h1>
                  <p className="text-xs text-white/80 mt-0.5">
                    {new Date().toLocaleDateString('id-ID')}
                  </p>
                </div>
              </div>

              <div className={`
                bg-white shadow-xl border-t border-gray-100
                ${menuMobileTerbuka ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
              `}>
                <nav className="p-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
                  <div className="mb-6 p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-semibold">
                          RN
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                      </div>
                      <div>
                        <h2 className="font-bold text-gray-900">Risky Nabil</h2>
                        <p className="text-sm text-gray-600">Software Engineering Program</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/"
                    onClick={() => setMenuMobileTerbuka(false)}
                    className="flex items-center space-x-3 px-4 py-3.5 rounded-lg mb-2 text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-all"
                  >
                    <Home size={20} className="text-gray-400" />
                    <span className="font-medium">Home</span>
                  </Link>
                  
                  <Link
                    href="/competencies"
                    onClick={() => setMenuMobileTerbuka(false)}
                    className="flex items-center space-x-3 px-4 py-3.5 rounded-lg mb-2 text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-all"
                  >
                    <User size={20} className="text-gray-400" />
                    <span className="font-medium">Competencies</span>
                  </Link>
                  
                  <Link
                    href="/profession"
                    onClick={() => setMenuMobileTerbuka(false)}
                    className="flex items-center justify-between px-4 py-3.5 rounded-lg mb-2 text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-all"
                  >
                    <div className="flex items-center space-x-3">
                      <GraduationCap size={20} className="text-gray-400" />
                      <span className="font-medium">Profession</span>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-teal-100 text-teal-700">
                      2
                    </span>
                  </Link>
                  
                  <div className="mt-6">
                    <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-700 font-medium transition-all">
                      <LogOut size={18} />
                      <span>Log Out</span>
                    </button>
                  </div>

                  <div className="mt-8 pt-4 border-t border-gray-100 text-center">
                    <p className="text-sm text-gray-600 font-medium">
                      © 2025 Risky Nabil
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Software Engineering Student
                    </p>
                  </div>
                </nav>
              </div>
            </header>
          </div>
          
          {menuMobileTerbuka && (
            <div
              className="fixed inset-0 bg-black/30 z-40"
              onClick={() => setMenuMobileTerbuka(false)}
            />
          )}
        </>
      )}
    </>
  )
}