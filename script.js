// CONFIG DATA SISWA & PENGURUS
const DATA_KELAS = {
    wali: { name: "Nama Wali Kelas, S.Pd.", file: "walikelas.jpg" },
    pengurus: [
        { role: "Ketua", name: "Nama Ketua", file: "ketua.jpg" },
        { role: "Wakil", name: "Nama Wakil", file: "wakil.jpg" },
        { role: "Sekretaris", name: "Nama Sekretaris", file: "sekretaris.jpg" },
        { role: "Bendahara", name: "Nama Bendahara", file: "bendahara.jpg" }
    ]
};

// FUNGSI RENDER GALERI (34 FOTO)
function renderGallery(page) {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    const start = (page - 1) * 12 + 1;
    const end = Math.min(page * 12, 34);

    for (let i = start; i <= end; i++) {
        const fileName = `moment${i}.jpg`;
        grid.innerHTML += `
            <div class="aspect-square glass rounded-2xl overflow-hidden group cursor-pointer" onclick="openFullImage('${fileName}')">
                <img src="${fileName}" onerror="this.src='https://via.placeholder.com/400?text=Moment+${i}'" 
                class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition duration-500 scale-110 group-hover:scale-100">
            </div>`;
    }

    // Update Tombol Navigasi
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active-page'));
    const btn = document.getElementById('btn-' + page);
    if(btn) btn.classList.add('active-page');
}

// FUNGSI INISIALISASI STRUKTUR & 34 SISWA
function initStruktur() {
    const sGrid = document.getElementById('siswa-list');
    if(sGrid) {
        for (let i = 1; i <= 34; i++) {
            let abs = i < 10 ? '0' + i : i;
            let sFile = `siswa${i}.jpg`;
            sGrid.innerHTML += `
                <div class="group cursor-pointer" onclick="openFullImage('${sFile}')">
                    <div class="aspect-[3/4] rounded-xl glass overflow-hidden mb-2 border border-white/5 group-hover:border-blue-500/50 transition">
                        <img src="${sFile}" onerror="this.src='https://via.placeholder.com/150?text=${abs}'" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition duration-500">
                    </div>
                    <p class="text-[10px] text-slate-500 uppercase">Absen ${abs}</p>
                    <p class="text-[11px] font-bold truncate uppercase px-1">Nama Siswa ${i}</p>
                </div>`;
        }
    }
}

// FUNGSI LIGHTBOX (KLIK FOTO BESAR)
function openFullImage(imgSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imgSrc;
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeFullImage() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// JALANKAN SAAT WEB SIAP
document.addEventListener('DOMContentLoaded', () => {
    renderGallery(1);
    initStruktur();
});
