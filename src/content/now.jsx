import NowPertama from "../section/nowpertama"
import SectionEmpat from "../section/sectionempat"
function NowTix() 
{
    return(
    <>
    <div style={{height: 85}}></div>
    <div className="container p-5">
        <div className="row">
        <div className="col">
          <NowPertama 
              showAll={() => {}} 
              data={[
                {
                  title : "Kencangkan Sabuk Pengaman, Tiket Gran Turismo Sudah Bisa Kamu Pesan!",
                  image : "https://asset.tix.id/wp-content/uploads/2023/08/60e7644e-0836-43d4-9719-f8fbeaf50955-650x430.jpeg",
                  date : "August 21, 2023",
                  desc : "Salah satu gim legendaris Gran Turismo akahirnya diangkat ke layar lebar dalam bentuk live-action yang kisahnya diangkat dari sebuah kisah nyata. Dimana kisahnya berfokus pada..."
                },
                {
                  title : "Aku Tahu Kapan Kamu Mati: Desa Bunuh Diri Segera Tayang di September!",
                  image : "https://asset.tix.id/wp-content/uploads/2023/08/4d81d93f-561e-4c9b-bb24-3468d4436c4e-650x430.jpeg",
                  date : "August 19, 2023",
                  desc : "Setelah sukses dengan film pertamanya, kini Unlimited Production kembali dengan film Aku Tahu Kapan Kamu Mati: Desa Bunuh Diri atau ATKKM 2 yang merupakan sekuel..."
                },
                {
                  title : "10 Film Indonesia Dengan Pendapatan Tertinggi Sepanjang Masa!",
                  image : "https://asset.tix.id/wp-content/uploads/2023/08/4099f58e-ae4b-484a-a73f-5e9b404fd1c1-650x430.jpeg",
                  date : "August 17,2023",
                  desc : "Perkembangan film Indonesia memang semakin membanggakan dan melahirkan inovasi-inovasi baru. Dalam rangka 17 Agustus, TIX ID akan membahas tentang 10 film Indonesia dengan penghasilan tertinggi..."
                },
                {
                  title : "Ikutin Misi Penyelamatan di Luar Angkasa Bersama Do Kyung-Soo di The Moon",
                  image : "https://asset.tix.id/wp-content/uploads/2023/08/4ae8e7d3-42f8-4773-ade0-cc919fd26ba0.jpeg",
                  date : "August 14, 2023",
                  desc : "The Moon adalah film terbaru yang menghadirkan petualangan luar angkasa yang menegangkan. Film ini berkisah tentang misi penyelamatan yang dilakukan untuk menyelamatkan Do Kyung-Soo atau..."
                },
                {
                  title : "Cobweb, Hadirkan Kengerian Dari Awal Hingga Akhir!",
                  image : "https://asset.tix.id/wp-content/uploads/2023/08/43f1171e-309a-4101-a6e7-be8ab513c73b.png",
                  date : "August 12, 2023",
                  desc : "Untuk kalian para penikmat horor, tengah tayang film Cobweb yang sayang untuk kalian lewatkan. Bergenre horor dan thriller, Cobweb akan berfokus pada cerita mengenai bocah..."
                },
                {
                    title : "Promo Buy One Get One Free, Khusus Film Primbon!",
                    image : "https://asset.tix.id/wp-content/uploads/2023/08/7e9c877d-a901-43b7-b132-e49ac477ef78-650x430.jpeg",
                    date : "August 10, 2023",
                    desc : "Tepat pada hari ini Kamis, 10 Agustus 2023 film Primbon tengah tayang di bioskop dan akan memberikan promo menarik Buy One Get One Free selagi..."
                },
                {
                    title : "Tembus 1 Miliar Dolar AS, Film Barbie Pecahkan Rekor Baru",
                    image : "https://asset.tix.id/wp-content/uploads/2023/08/8ab47719-5e09-4e52-831e-cc2868cd5b4e-650x430.jpeg",
                    date : "August 8, 2023",
                    desc : "Film Barbie arahan Greta Gerwig akhirnya berhasil menembus rekor baru dengan pencapaian 1 Miliar Dolar AS atau setara dengan sekitar 15 Triliun Rupiah. Karena hal..."
                },
                {
                    title : "Di Ambang Kematian, Kisahkan Akibat Fatal Pesugihan!",
                    image : "https://asset.tix.id/wp-content/uploads/2023/08/b8830ac2-a997-4eda-a62a-baf9f3c905bd-650x430.jpeg",
                    date : "August 7, 2023",
                    desc : "Rumah produksi MVP Pictures akhirnya kembali mengumumkan karya film horor terbaru mereka berjudul Di Ambang Kematian. Film yang disutradarai oleh Azhar Lubis ini berkisah tentang...                    "
                },
                {
                    title : "Suzzanna Malam Jumat Kliwon, Hampir Tembus 200 Ribu Penonton di Hari Pertama",
                    image : "https://asset.tix.id/wp-content/uploads/2023/08/3f3502b8-8f58-46c1-8387-414890d515ed-650x430.jpeg",
                    date : "August 6, 2023",
                    desc : "Tengah tayang di bioskop, dilansir dari Liputan 6, flm Suzzana Malam Jumat Kliwon berhasil mendapatkan hampir 200 ribu penonton, atau tepatnya sekitar 193.623.Hal ini dikabarkan..."
                },
                {
                    title : "Awas Teror Meg 2: The Trench Sedang Tayang!",
                    image : "https://asset.tix.id/wp-content/uploads/2023/08/1f25fbc9-ef88-42b3-8999-dd75c36f0b58-650x430.jpeg",
                    date : "August 4, 2023",
                    desc : "Jadikan weekend lebih seru dengan film laga dan thriller Meg 2: The Trench yang masih akan dibintangi oleh aktor Jason Statham. Disutradarai oleh Ben Wheatley..."
                }
              ]}
              />
        </div>
        <div className="col-4">
          <SectionEmpat
              showAll={() => {}} 
              data={[
                {
                    title : "10 Film Indonesia Dengan Pendapatan Tertinggi Sepanjang Masa!",
                },
                {
                    title : "Ikutin Misi Penyelamatan di Luar Angkasa Bersama Do Kyung-Soo di The Moon",
                },
                {
                    title : "Cobweb, Hadirkan Kengerian Dari Awal Hingga Akhir!",
                },
                {
                    title : "Promo Buy One Get One Free, Khusus Film Primbon!",
                },
                {
                    title : "Tembus 1 Miliar Dolar AS, Film Barbie Pecahkan Rekor Baru",
                },
                {
                    title : "Di Ambang Kematian, Kisahkan Akibat Fatal Pesugihan!",
                },
                {
                    title : "Suzzanna Malam Jumat Kliwon, Hampir Tembus 200 Ribu Penonton di Hari Pertama",
                },
                {
                    title : "Awas Teror Meg 2: The Trench Sedang Tayang!",
                },
                {
                    title : "Segera Tayang, Teenage Mutant Ninja Turtles: Mutant Mayhem Dapat Skor 95% di Rotten Tomatoes!",
                },
                {
                    title : "Jason Statham Kembali Lawan Hiu Megalodon di Meg 2: The Trench!",
                },
                {
                    title : "Refal Hady Harus Membantu Prilly Move On di Film Ketika Berhenti di Sini",
                },
                {
                    title : "Jajan di XXI Café Lebih Mudah Lewat TIX ID!",
                }
                ]}
              />
        </div>
        <div className="d-flex justify-content-center pb-5" >
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">...</a></li>
                    <li class="page-item"><a class="page-link" href="#">25</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </div>
        </div>
      </div>
        
    </>
    )
}
export default NowTix