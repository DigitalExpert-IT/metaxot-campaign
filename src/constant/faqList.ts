export interface IFaq {
    question: string;
    answer: string;
    /* eslint-disable @typescript-eslint/no-explicit-any */
    attributes?: any;
  }
  
  export const FAQ: Array<IFaq> = [
    {
      question: "Apa perbedaan Prototype, Alpha dan Beta ?",
      answer: "Prototype adalah versi pertama atau versi awal dari Metaxot sehingga pada fase tersebut orientasi yang diberikan adalah pengenalan dunia Metaxot kepada user, sedangkan Alpha adalah fase yang lebih kaya akan feature dan merupakan representasi dari pengembangan inti Metaxot dan fitur-fitur yang akan hadir di masa depan. Sedangkan Beta adalah fase penyempurnaan, pengayaan fitur-fitur serta sebagai fase yang merepresentasi Metaxot secara keseluruhan sebelum official release.",
    },
    {
        question: "Kapan Alpha akan tersedia ?",
        answer: "Tim kami senantiasa mengupayakan ketersedian setiap fase game sesuai dengan garis waktu yang telah kami ukur sebelumnya, untuk jangka waktu rilis setiap fase game adalah 3 bulanan / kuartalan, kami secara profesional akan berupaya menghadirkan versi terbaik Metaxot secara konsisten kepada anda untuk bisa dinikmati mulai dari fase prototype hingga official release."
    },
    {
        question: "Apa yang menbedakan Metaxot dengan Life Simulator lain ?",
        answer: "Metaxot adalah platform yang menggabungkan imersivitas metaverse dan keseruan life simulator serta didukung dengan teknologi dan fitur terbaru, mengusung dunia virtual futuristik, gameplay menarik, quest/mission dan keamanan sistem blockchain menjadi nilai tambah tersendiri bagi Metaxot." 
    },
    {
        question: "Apakah Metaxot berbayar ?",
        answer: "Metaxot adalah platform yang tidak berbayar untuk memainkannya , setiap player dapat bermain secara gratis."
    },
    {
        question: "Bagaimana dengan mac OS / Ios ?",
        answer: "Pada saat ini metaxot hanya tersedia untuk platform windows, baik versi desktop maupun handheld, namun sejak target kami untuk membangun metaxot secara lintas platform tercapai maka tim kami akan sesegera mungkin untuk beralih dan mempersiapkan berbagai macam versi metaxot agar setiap player mampu memainkannya."
    },
    {
        question: "Apakah Metaxot bisa menggunakan headset Virtual Reality ?",
        answer: "Metaxot adalah metaverse yang dipersiapkan untuk segala hal immersive, setiap player pada akhirnya akan dapat menggunakan berbagai device mereka untuk bermain di dunia Metaxot, salah satunya adalah headset Virtual Reality, setelah fase pembangunan fitur headset VR selesai, maka player dapat menggunakannya."
    },
    {
        question: "Apakah Metaxot merupakan Blockchain ?",
        answer: "Metaxot adalah platform yang menggunakan blockchain sebagai salah satu fiturnya, namun bukan merupakan blockchain itu sendiri."
    },
    {
        question: "Apakah Metaxot aman untuk bertransaksi ?",
        answer: "Ya, Metaxot aman untuk bertransaksi, dengan mengadopsi sistem blockchain metaxot dapat memberikan rasa aman bagi setiap player."
    },
    {
        question: "Apakah Metaxot bisa cross-platform ?",
        answer: "Sementara saat ini kami membangun Metaxot dengan basis OS windows, seiring dengan pengembangan dab tercapainya pendanaan pada fase console development, kami akan melanjutkan untuk membangun Metaxot agar bisa di jalankan di berbagai platform."
    },
  ];