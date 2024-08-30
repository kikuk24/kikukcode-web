import iconGit from "../assets/sosial-icons/icons8-github.svg"
import iconIg from "../assets/sosial-icons/icons8-instagram.svg"
import iconLink from "../assets/sosial-icons/icons8-linkedin.svg"
import iconWeb from "../../src/img/data.png"
import coding from "../../src/img/coding.png"
import camera from "../../src/img/photo-camera.png"
import klenteng from "../../src/img/klenteng.jpg"
import mieayam from "../../src/img/mie-ayam.jpg"
import potografer from "../../src/img/fotografer.jpg"
import porto from "../../src/img/porto.png"
import ecom from "../../src/img/e-com.png"
import kcd from "../../src/img/kikukcodeWebsite.png"
import msb from "../../src/img/muscb.png"
import quiz from "../../src/img/quizz.png"

export const sosials = [
  {
    name: "Instagram",
    path: "https://instagram.com/kikuk_afandi/",
    icon: iconIg
  },
  {
    name: "Github",
    path: "https://github.com/kikuk24/",
    icon: iconGit
  },
  {
    name: "Linkedin",
    path: "https://www.linkedin.com/in/tirta-afandi/",
    icon: iconLink
  }
]

export const reviews = [
  {
    id: 1,
    icon: "🎄",
    count: 5,
    review: "Project Complete"
  },
  {
    id: 2,
    icon: "🎄",
    count: 5,
    review: "Project Complete"
  },
  {
    id: 3,
    icon: "🎄",
    count: 5,
    review: "Project Complete"
  }
]

export const services = [
  {
    name: "Web Development",
    desc: "Kembangkan web yang menakjubkan dengan tim ahli kami. Pengalaman kustom, performa tinggi, dan inovasi tak terbatas. dan cepat",
    bg: "bg-custom-red",
    Image: iconWeb
  },
  {
    name: "Photography",
    desc: "Ciptakan kenangan yang abadi dengan lensa kami. Foto berkelas, momen berharga, dan keindahan tak terlupakan dalam setiap jepretan.",
    bg: "bg-custom-blue text-white",
    Image: camera
  },
  {
    name: "Desain Grafis",
    desc: "Ciptakan kenangan yang abadi dengan lensa kami. Foto berkelas, momen berharga, dan keindahan tak terlupakan dalam setiap jepretan.",
    bg: "bg-custom-yellow",
    Image: coding
  }
]

export const blogsPots = [
  {
    id: 1,
    title: "Mie ayam menjadi menu favorit keluarga",
    desc: "mie ayam telah menjadi makanan favorit untuk keluarga di indonesia selama bertahun-tahun, seihingga menjadi populer dan terkenal di seluruh dunia",
    image: mieayam
  },
  {
    id: 2,
    title: "Klenteng Kwan Sing Bio mejadi klenteng terbesar se asia tenggara",
    desc: "klenteng kwan sing bio telah menjadi klenteng terbesar se asia tenggara selama bertahun-tahun",
    image: klenteng
  },
  {
    id: 3,
    title: "Photografer banting stir menjadi seorang programer",
    desc: "Programmer hebat ini dulunya adalah seorang photografer",
    image: potografer
  }
]

export const projects = [
  {
    id: 1,
    name: 'Simple E-commerce',
    desc: 'Simple project e-commerce using Codeigniter, with bootstrap',
    tech: ['Codeigniter ', 'CSS ', 'Bootstrap'],
    image: ecom,
    link: 'https://kikukshop.000webhostapp.com/',
  },
  {
    id: 2,
    name: 'Modern Portofolio',
    desc: 'My modern Portofolio with a clean and modern design',
    image: porto,
    tech: ['React', 'CSS', 'Tailwind'],
    link: 'https://www.kikukafandi.my.id/',
  }, {
    id: 3,
    name: 'Kikucode Official Website',
    desc: 'Project fullstack website blogging and e-comerce, using laravel focus to SEO for website and integrated with payment gateway (Midtrans)',
    image: kcd,
    tech: ['laravel', 'Tailwind', 'Vite'],
    link: 'https://www.kikukcode.com/',
  },
  {
    id: 4,
    name: 'Web App Evoting Online',
    desc: 'Project E-voting for organization reorganization, Codeigniter 3 and bootstrap',
    image: msb,
    tech: ['laravel', 'bootstrap', 'mysql', 'php'],
    link: '#',
  },
  {
    id: 5,
    name: 'Quiz App',
    desc: 'Project Chalengge using react js',
    image: quiz,
    tech: ['React JS'],
    link: 'https://github.com/kikuk24/challenge-frontend-react.js-quizz-app',
  }

]