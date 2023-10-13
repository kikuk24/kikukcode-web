
const Education = () => {
  return (
    <div className="w-full bg-slate-300 font-poppins py-8"id="education">
      <div className="text-center px-5 py-6">
        <h1 className="font-bold text-[2rem]">My <span className="text-[#006ba6]">Education</span></h1>
        <p className="text-[12px]">Education Is Not The Learning Of Facts, But The Training Of The Mind To Think</p>
      </div>
      <div className="flex bg-white md:w-[60%] rounded-md m-auto md:flex-row flex-col w-[90%]">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFokgbolinb-B_d1I-SxiQH-i5qfGZ4O9oU4Opsiy6rN9QyGGLefTHouro21U5IOQBjO3Ow46miTu4N3OrNsdm_thrvlpXztl7F0NMgMrzN_lVJE9yBtLnuqrwonMKgdJu6gdPn0vsRobhj_iVrTzkmMgdL9zgLjHg30PDW5VcvZfHbBImcE_0SuB90Q/s1040/52843A32-3D59-454C-8A76-6F78E1F60F92.jpeg" alt="smkn1tuban" className="bg-cover md:w-[200px] md:rounded-l-md rounded-t-md" />
        <div className="font-semibold px-4 flex flex-col gap-3 py-4">
          <h2 className="text-[1.5rem] ">Bussines Contruction and Property </h2>
          <h3 className="font-medium">SMKN 1 TUBAN</h3>
          <p className="text-[1.1rem]">2020-2023 | Completed</p>
        </div>
      </div>
    </div>
  )
}

export default Education