'use client'

import React from 'react'
import {
  ShieldCheck,
  ArrowRight,
  Shield,
  Car,
  FileText,
  QrCode,
  User,
} from 'lucide-react'
import Link from 'next/link'

export default function Hero() {

  return (
    <section id='hero' className='relative overflow-hidden pt-4 pb-8 md:pt-6 md:pb-14 text-[#0e1e38] bg-transparent'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center'>
          
          {/* LEFT COLUMN */}
          <div className='lg:col-span-7 space-y-6 text-left'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-[#0e1e38] tracking-tight leading-[1.08]'>
              Your Driving Documents.{' '}
              <span className='block text-[#2354a8] font-black mt-1 tracking-tight'>Instant. Dynamic. Secure.</span>
            </h1>

            <p className='text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal'>
              A unified digital credential platform for Rwandan drivers and traffic officers. Access your licence, logbook, and insurance with zero paper clutter.
            </p>

            <div className='flex flex-col sm:flex-row items-center gap-3.5 pt-1'>
              <Link
                href='/login'
                className='w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0e1e38] text-white font-bold text-sm shadow-xl hover:bg-[#182e52] hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group'
              >
                <span>Access Driver Portal</span>
                <ArrowRight className='w-4 h-4 text-slate-300 group-hover:text-white group-hover:translate-x-1 transition-transform' />
              </Link>
              <Link
                href='/signup'
                className='w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-[#0e1e38] font-bold text-sm border-2 border-[#0e1e38] shadow-sm hover:bg-slate-50 transition-all transform hover:-translate-y-0.5 flex items-center justify-center'
              >
                <span>Create Free Account</span>
              </Link>
            </div>

            <div className='pt-4 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-lg'>
              <div>
                <div className='text-2xl sm:text-3xl font-black text-[#0e1e38]'>100%</div>
                <div className='text-xs text-slate-500 font-semibold mt-0.5'>NIDA Verified</div>
              </div>
              <div>
                <div className='text-2xl sm:text-3xl font-black text-[#0e1e38]'>60,000+</div>
                <div className='text-xs text-slate-500 font-semibold mt-0.5'>Linked Vehicles</div>
              </div>
              <div>
                <div className='text-2xl sm:text-3xl font-black text-[#0e1e38]'>&lt; 2s</div>
                <div className='text-xs text-slate-500 font-semibold mt-0.5'>Police Scan Time</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Realistic Static Smartphone Mockup */}
          <div className='lg:col-span-5 flex justify-center lg:justify-end lg:pr-2 translate-y-[10px]'>
            <div className='relative select-none pointer-events-none'>
              {/* Phone Hardware Buttons */}
              <div className='absolute -left-[5px] top-24 w-[4px] h-8 bg-slate-300 rounded-l-md border-l border-slate-400' />
              <div className='absolute -left-[5px] top-36 w-[4px] h-8 bg-slate-300 rounded-l-md border-l border-slate-400' />
              <div className='absolute -right-[5px] top-28 w-[4px] h-10 bg-slate-300 rounded-r-md border-r border-slate-400' />

              {/* Phone Outer Chassis */}
              <div className='w-[295px] sm:w-[315px] h-[610px] sm:h-[630px] bg-slate-900 rounded-[48px] p-2.5 shadow-[0_25px_60px_-15px_rgba(14,30,56,0.35)] border-[3px] border-slate-700 relative flex flex-col overflow-hidden ring-1 ring-black/20'>
                <div className='w-full h-full bg-slate-50 rounded-[38px] overflow-hidden flex flex-col justify-between relative shadow-inner text-[#0e1e38]'>
                  
                  {/* Clean Static Status Bar */}
                  <div className='pt-2.5 px-4 pb-1.5 flex items-center justify-between text-[11px] font-bold text-slate-800 shrink-0 z-30 bg-slate-50'>
                    <span className='font-semibold tracking-tight'>09:41</span>
                    {/* Dynamic Island */}
                    <div className='w-22 h-4 bg-black rounded-full flex items-center justify-between px-2.5 shadow-xs'>
                      <div className='w-1.5 h-1.5 rounded-full bg-slate-900' />
                      <div className='w-1.5 h-1.5 rounded-full bg-slate-900' />
                    </div>
                    <div className='flex items-center gap-1 text-[10px]'>
                      <span className='font-semibold'>5G</span>
                      <div className='w-3.5 h-2 rounded-xs border border-slate-700 p-0.5 flex items-center'>
                        <div className='h-full w-full bg-slate-800 rounded-2xs' />
                      </div>
                    </div>
                  </div>

                  {/* App Screen Content */}
                  <div className='flex-1 overflow-hidden px-3.5 py-1.5 space-y-2.5 text-xs bg-slate-50'>
                    
                    {/* App Header */}
                    <div className='bg-[#0e1e38] text-white rounded-2xl px-3 py-2.5 flex items-center justify-between shadow-xs'>
                      <div className='flex items-center gap-2'>
                        <div className='w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center text-white'>
                          <Shield className='w-3.5 h-3.5 text-white' />
                        </div>
                        <div>
                          <div className='font-extrabold text-[11px] leading-tight text-white'>Rwanda Drive</div>
                          <div className='text-[8px] text-slate-300 font-medium'>National Driver Portal</div>
                        </div>
                      </div>
                      <span className='text-[8px] font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1'>
                        <span className='w-1.5 h-1.5 rounded-full bg-emerald-400' />
                        Verified
                      </span>
                    </div>

                    {/* Driver Greeting */}
                    <div className='text-left px-0.5'>
                      <div className='text-[9px] font-medium text-slate-500'>Welcome back,</div>
                      <div className='text-sm font-black text-[#0e1e38] tracking-tight'>Jean Paul Nshimiyimana</div>
                    </div>

                    {/* Primary Official Driving Licence Card */}
                    <div className='bg-gradient-to-br from-[#0e1e38] to-[#182e52] text-white rounded-2xl p-3 shadow-md space-y-2.5 text-left border border-[#2354a8]/30 relative overflow-hidden'>
                      {/* Subtle decorative background circle */}
                      <div className='absolute -right-3 -bottom-3 w-20 h-20 bg-white/5 rounded-full pointer-events-none' />

                      {/* Card Header */}
                      <div className='flex justify-between items-start'>
                        <div>
                          <div className='text-[7px] font-bold uppercase tracking-widest text-slate-300'>Republic of Rwanda</div>
                          <div className='text-[9px] font-black tracking-wide text-white'>DIGITAL DRIVING LICENCE</div>
                        </div>
                        <span className='text-[7px] font-extrabold px-1.5 py-0.5 rounded-md bg-emerald-400 text-[#0e1e38]'>
                          CAT B &bull; VALID
                        </span>
                      </div>

                      {/* Driver Info + Photo */}
                      <div className='flex gap-2.5 items-center bg-white/10 p-2 rounded-xl backdrop-blur-xs border border-white/10'>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
                          alt='Jean Paul N.'
                          className='w-10 h-10 rounded-lg object-cover border border-white/20 shrink-0'
                        />
                        <div className='flex-1 min-w-0 space-y-0.5'>
                          <div className='text-[9px] font-bold text-white truncate'>Jean Paul Nshimiyimana</div>
                          <div className='text-[8px] font-mono text-slate-200'>DL-RWA-2024-98745</div>
                          <div className='text-[7px] text-slate-300'>NID: 1 1994 8 0023456 1 45</div>
                        </div>
                        {/* Static Security QR Code stamp */}
                        <div className='w-9 h-9 bg-white rounded-lg p-1 shrink-0 flex items-center justify-center shadow-xs'>
                          <QrCode className='w-full h-full text-[#0e1e38]' />
                        </div>
                      </div>

                      {/* Card Footer Details */}
                      <div className='flex justify-between items-center text-[8px] pt-0.5 text-slate-300 border-t border-white/10'>
                        <span>Issued: 14 Feb 2024</span>
                        <span className='font-semibold text-emerald-300'>Expires: 12 Jan 2026</span>
                      </div>
                    </div>

                    {/* Linked Vehicles & Verification Status */}
                    <div className='space-y-1.5 text-left'>
                      <div className='flex justify-between items-center px-0.5'>
                        <span className='text-[9px] font-bold uppercase tracking-wider text-slate-500'>Connected Documents</span>
                        <span className='text-[8px] font-bold text-[#2354a8]'>3 Active</span>
                      </div>

                      {/* Carte Jaune Row */}
                      <div className='p-2 bg-white rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <div className='w-6 h-6 rounded-lg bg-blue-50 text-[#2354a8] flex items-center justify-center'>
                            <Car className='w-3.5 h-3.5' />
                          </div>
                          <div>
                            <div className='text-[9px] font-bold text-[#0e1e38]'>Carte Jaune (Logbook)</div>
                            <div className='text-[8px] text-slate-500 font-mono'>RAB 123A &bull; Toyota RAV4</div>
                          </div>
                        </div>
                        <span className='text-[7px] font-bold px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded-md'>Active</span>
                      </div>

                      {/* Contrôle Technique Inspection Row */}
                      <div className='p-2 bg-white rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <div className='w-6 h-6 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center'>
                            <ShieldCheck className='w-3.5 h-3.5' />
                          </div>
                          <div>
                            <div className='text-[9px] font-bold text-[#0e1e38]'>Contrôle Technique</div>
                            <div className='text-[8px] text-slate-500'>Inspection Passed &bull; Remera</div>
                          </div>
                        </div>
                        <span className='text-[7px] font-bold px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded-md'>Valid</span>
                      </div>

                      {/* Insurance Row */}
                      <div className='p-2 bg-white rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <div className='w-6 h-6 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center'>
                            <FileText className='w-3.5 h-3.5' />
                          </div>
                          <div>
                            <div className='text-[9px] font-bold text-[#0e1e38]'>Radiant Insurance</div>
                            <div className='text-[8px] text-slate-500'>Comprehensive &bull; #RAD-8842</div>
                          </div>
                        </div>
                        <span className='text-[7px] font-bold px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded-md'>Active</span>
                      </div>
                    </div>

                  </div>

                  {/* App Bottom Navigation Bar */}
                  <div className='bg-white border-t border-slate-200 px-5 py-2 flex items-center justify-between text-slate-400 shrink-0 z-20'>
                    <div className='flex flex-col items-center gap-0.5 text-[#0e1e38]'>
                      <Shield className='w-3.5 h-3.5' />
                      <span className='text-[7px] font-bold'>Licence</span>
                    </div>
                    <div className='flex flex-col items-center gap-0.5 hover:text-[#0e1e38]'>
                      <Car className='w-3.5 h-3.5' />
                      <span className='text-[7px] font-medium'>Vehicles</span>
                    </div>
                    <div className='flex flex-col items-center gap-0.5 hover:text-[#0e1e38]'>
                      <QrCode className='w-3.5 h-3.5' />
                      <span className='text-[7px] font-medium'>QR Check</span>
                    </div>
                    <div className='flex flex-col items-center gap-0.5 hover:text-[#0e1e38]'>
                      <User className='w-3.5 h-3.5' />
                      <span className='text-[7px] font-medium'>Profile</span>
                    </div>
                  </div>

                  {/* iOS Home Indicator Bar */}
                  <div className='bg-white pb-1.5 flex flex-col items-center z-20'>
                    <div className='w-24 h-1 bg-slate-300 rounded-full' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
