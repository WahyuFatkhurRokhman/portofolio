// src/sections/Projects.jsx
import { useState, useEffect } from 'react'
import { Sparkles, Github, ExternalLink } from 'lucide-react'

export default function Projects({ activeMember }) {
  const [repos, setRepos] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let ignore = false;
  
    async function fetchGitHubRepos() {
    
      // reset repo lama
      setRepos([]);
    
      // cek github tersedia
      if (!activeMember?.github) {
        return;
      }
    
      setIsLoading(true);
    
      try {
      
        // ambil username github
        const githubUrl = activeMember.github
          .trim()
          .replace(/\/$/, '');
      
        const username = githubUrl.split('/').pop();
      
        console.log(
          'FETCH REPO MEMBER:',
          activeMember.name,
          username
        );
      
        // fetch repo github member aktif
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        );
      
        if (!response.ok) {
          throw new Error('GitHub API Error');
        }
      
        const data = await response.json();
      
        // hanya update state jika masih active
        if (!ignore) {
          setRepos(data);
        }
      
      } catch (error) {
      
        console.error(error);
      
        // fallback project lokal
        if (!ignore) {
          setRepos(activeMember.projects || []);
        }
      
      } finally {
      
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }
  
    fetchGitHubRepos();
  
    return () => {
      ignore = true;
    };
  
  }, [activeMember]); // Efek ini akan berjalan ulang setiap kali activeMember berganti (kartu digeser)

  return (
    <section id="projects" className="mx-auto min-h-screen w-full max-w-4xl px-6 py-20 flex flex-col justify-center">
      <div className="mb-12 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
          Live Projects
        </p>
        <h2 className="mt-4 text-4xl font-black tracking-tight">
          GitHub Repositories
        </h2>
      </div>

      {isLoading ? (
        // Tampilan saat data sedang ditarik dari GitHub
        <div className="flex h-40 w-full items-center justify-center">
          <div className="flex animate-pulse items-center gap-3 text-slate-500 dark:text-slate-400">
            <Github className="size-6 animate-bounce" />
            <span className="font-bold">Menarik data dari GitHub {activeMember.name}...</span>
          </div>
        </div>
      ) : repos.length > 0 ? (
        // Tampilan saat data berhasil ditarik
        <div className="grid gap-6 lg:grid-cols-3">
          {repos.map((repo, index) => (
            <article
              key={repo.id || index} // repo.id dari GitHub, fallback index jika pakai data statis
              className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
            >
              <div className="mb-5 inline-flex w-fit rounded-2xl bg-indigo-100 p-3 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                <Github className="size-6" />
              </div>
              
              {/* Judul Repo */}
              <h3 className="text-xl font-black capitalize line-clamp-1">
                {repo.name ? repo.name.replace(/-/g, ' ') : repo.title}
              </h3>
              
              {/* Deskripsi Repo */}
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300 line-clamp-3">
                {repo.description || repo.desc || 'Tidak ada deskripsi pada repositori ini.'}
              </p>
              
              {/* Bagian Bawah: Bahasa & Link Buka */}
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-white/10">
                <div className="flex flex-wrap gap-2">
                  {/* Tampilkan bahasa pemrograman utama (jika ada) */}
                  {(repo.language || (repo.tags && repo.tags[0])) && (
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold dark:border-white/10 dark:bg-white/5">
                      {repo.language || repo.tags[0]}
                    </span>
                  )}
                </div>
                
                {/* Tombol Buka GitHub (Hanya muncul jika repo.html_url dari API ada) */}
                {repo.html_url && (
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-bold text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400"
                  >
                    View <ExternalLink className="size-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        // Tampilan jika tidak ada repo sama sekali
        <div className="text-center text-slate-500">
          Belum ada repositori publik yang bisa ditampilkan.
        </div>
      )}
    </section>
  )
}