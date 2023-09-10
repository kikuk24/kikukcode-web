import avatar from "../../../img/paskuning.jpg"
const Hero = () => {
  return (
    <div className="font-poppins bg-[#141E46] text-white md:p-10">
      <div className="md:mt-[70px] mt-[60px] flex md:flex-row flex-col py-10 px-9 mx-10">
        <div className="mr-6 px-9">
          <img src={avatar} alt="" className="w-[800px] rounded-full mb-9"/>
        </div>
        <div className="">
          <p className="">Hello My name is</p>
          <h1 className="uppercase font-bold text-3xl py-2">Tirta Afandi</h1>
          <p className="">Progammer | Photografer | Designer</p>
          <p className="mt-4">Lulusan SMK Bisnis Kontruksi dan Properti dan memiliki ketertarikan dalam bidang IT, Aktif dalam organisasi OSIS (Organisasi Siswa Intra Sekolah) sebagai Koordinator Seksi Pembinaan Teknologi Informasi dan Komunikasi. Memiliki keterampilan Desain Grafis, Fotografi, dan Pemograman. Menguasai beberapa software Office seperti Microsoft Word, Microsoft Excel. Memiliki minat berkarir menjadi Programmer Fullstack Web Developer</p>
        </div>
      </div>
    </div>
  )
}

export default Hero