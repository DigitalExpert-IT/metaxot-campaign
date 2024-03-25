import metaverse from '../assets/images/image1.jpeg';
import hadiah from '../assets/images/image2.jpeg';
import profesi from '../assets/images/image3.jpg';
import keahlian from '../assets/images/image4.jpeg';
import jalani from '../assets/images/image5.jpeg';
import sosial from '../assets/images/image6.jpeg';
import blockchain from '../assets/images/image7.jpg';
import marketplace from '../assets/images/image8.jpg';

export interface ICore {
    name: string;
    image: string;
    description: string;
  }
  
  export const CoreList: Array<ICore> = [
    {
      name: "Metaverse",
      image: metaverse,
      description: "Metaxot mengsimulasikan dunia nyata kedalam suatu platform yang dapat diakses oleh banyak pengguna, bersosial dan bermain lebih terasa nyata di dunia metaxot, kami memberikan pengalaman eksklusif kepada pengguna dengan dukungan perangkat seperti Virtual Reality (VR) , desktop / pc , handheld dan mobile phone. Lakukan semua yang anda inginkan di dunia metaxot."
    },
    {
      name: "Dapatkan Hadia",
      image: hadiah ,
      description: "Jadikan keseruan aktivitasmu di dunia metaxot untuk mendapatkan keuntungan secara nyata, tingkatkan aktivitasmu di metaxot dan peroleh XPC pertamamu yang dapat ditukarkan menjadi uang nyata secara aman dengan mekanisme blokchain."
    },
    {
      name: "Capai Profesimu",
      image: profesi,
      description: "Setiap pengguna bebas berkreasi dan menentukan pekerjaan yang dilakukan didunia metaxot, seperti petani, chef, pemain bola, pemain basket, pembuat konten, dan lain-lain. Tentukan pekerjaan- mu dan tingkatkan level skill untuk mendaptkan berbagai kesempa- tan dan item langka di metaxot. Jadilah maestro dibidangmu."
    },
    {
        name: "Tingkatkan Keahlianmu",
        image: keahlian,
        description: "Setiap pengguna bebas berkreasi dan menentukan pekerjaan yang dilakukan didunia metaxot, seperti petani, chef, pemain bola, pemain basket, pembuat konten, dan lain-lain. Tentukan pekerjaan- mu dan tingkatkan level skill untuk mendaptkan berbagai kesempa- tan dan item langka di metaxot. Jadilah maestro dibidangmu."
    },
    {
        name: "Jalani Hidup Sesuai Keinginanmu",
        image: jalani,
        description: "Hanya ingin hidup bersahaja dan menyenangkan ? metaxot menye- diakan aktivitas yang tidak selalu mengedepankan adrenalin untuk dilakukan, jalani kehidupan yang lebih hidup bersama alam dan jadilah creator dari produk-produk langka di metaxot dengan menjadi petani, penambang, pembuat alat, nelayan dan masih banyak lagi."
    },
    {
        name: "Ayo Bersosial",
        image: sosial,
        description: "Metaxot mempertemukan jutaan orang dari berbagai negara dalam sebuah platform dengan kemudahaan akses dan dukungan sistem yang luas, kehidupan kini tidak lagi terbatas pada jarak, lakukan virtual meeting , virtual exhibition, virtual concert, virtual learning di metaxot."
    },
    {
        name: "Blockchain",
        image: blockchain,
        description: "Keamanan data dan asset pengguna adalah aspek utama metaxot, dengan system yang teruji pada mekanisme blockchain jangan khawatir mengenai keamanan asset-asset anda di metaxot. Dengan dukungan system yang mampu merubah setiap asset dalam game menjadi NFT maka pepindahan asset atau jual beli asset akan lebih mudah dan aman."
    },
    {
        name: "NFT Marketplace",
        image: marketplace,
        description: "Setiap momen yang diraih atau diciptakan oleh pemain sangat berharga dan memiliki nilai tambah tak terbatas. Lukisan, lagu, gambar, video, bangunan, karakter, skill card, robopet, barang langka, koleksi, dan setiap benda selalu memiliki nilai intristik dan dapat diperjual-belikan dengan NFT."
    },
  ];