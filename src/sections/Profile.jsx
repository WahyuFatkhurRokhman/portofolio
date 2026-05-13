// src/components/Profile.jsx
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

export default function Profile({ member }) {
  return (
    <div className="w-full shrink-0 snap-center p-0.7 lg:p-2">
      <div className="flex h-full flex-col items-center rounded-[2rem] bg-[#0a0c14] p-6 text-white shadow-inner border border-white/5">
        
        {/* Traffic Light Dots */}
        <div className="mb-8 flex w-full items-center gap-2">
          <span className="size-3 rounded-full bg-[#ff5f56]" />
          <span className="size-3 rounded-full bg-[#ffbd2e]" />
          <span className="size-3 rounded-full bg-[#27c93f]" />
        </div>

        {/* Profile Image */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl"></div>
          <img
            src={`${import.meta.env.BASE_URL}${member.img}`}
            alt={member.name}
            className="relative size-36 rounded-full border-4 border-[#1a1d2e] object-cover shadow-2xl"
            onError={(e) => e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=random`}
          />
        </div>

        <h2 className="mt-6 text-3xl font-black tracking-tight">{member.name}</h2>
        <p className="mt-2 text-sm text-slate-400 font-medium">{member.role}</p>

        {/* Experience & Speciality Boxes */}
        <div className="mt-8 grid w-full gap-3 text-left">
          <div className="rounded-2xl bg-white/5 p-4 border border-white/5">
            <p className="text-[10px] uppercase tracking-widest text-slate-500">Experience</p>
            <p className="mt-1 text-sm font-bold text-slate-200">{member.exp}</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-4 border border-white/5">
            <p className="text-[10px] uppercase tracking-widest text-slate-500">Speciality</p>
            <p className="mt-1 text-sm font-bold text-slate-200">{member.speciality}</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex w-full items-center justify-center gap-4 border-t border-white/10 pt-6">
          {member.email && (
            <a href={`mailto:${member.email}`} className="grid size-11 place-items-center rounded-full bg-indigo-600 transition-transform hover:scale-110">
              <Mail size={18} />
            </a>
          )}
          {member.github && (
            <a href={member.github} target="_blank" rel="noreferrer" className="grid size-11 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/10">
              <Github size={18} />
            </a>
          )}
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noreferrer" className="grid size-11 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/10">
              <Linkedin size={18} />
            </a>
          )}
          {member.instagram && (
            <a href={member.instagram} target="_blank" rel="noreferrer" className="grid size-11 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/10">
              <Instagram size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}