import profileImg from '../assets/foto profil.png';
import projectAndroidImg from '../assets/project menejemen android.png';
import projectSchoolImg from '../assets/project menejemen sekolah.png';
import projectWebImg from '../assets/project menejemen web.png';
import tenantMasterHomeImg from '../assets/tenant_master/home tenant master.png';

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
  detailId?: string;
}

export interface Skill {
  name: string;
  icon?: string; // Optional icon class or url
  logo?: string; // URL for the technology logo
  level: number; // 1-100
}

export interface Profile {
  name: string;
  title: string;
  profileImage: string;
  about: string[];
  socials: {
    linkedin: string;
    github?: string;
    email: string;
  };
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
}

export const portfolioData: Profile = {
  name: "Isnanto Budi Nurrahman",
  title: "Full-Stack Developer",
  profileImage: profileImg,
  about: [
    "Full-Stack Developer dengan pengalaman profesional lebih dari 2 tahun dalam pengembangan aplikasi web dan mobile.",
    "Berpengalaman menggunakan Angular dan Flutter untuk membangun sistem berbasis REST API dengan fokus pada maintainability dan kebutuhan bisnis.",
    "Terbiasa bekerja dalam tim dan menangani pengembangan fitur end-to-end."
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/isnanto-budi/",
    email: "isnantobudi0@gmail.com",
    // github: "https://github.com/isnantobudi", // Assuming github from previous context or if available
  },
  experiences: [
    {
      company: "PT. Bakti Tekno Mandiri",
      role: "Full-Stack Developer",
      duration: "Maret 2023 – Sekarang",
      description: [
        "Mengembangkan dan melanjutkan pengembangan aplikasi web dan mobile pada proyek baru maupun yang sedang berjalan sebagai Full-Stack Developer.",
        "Mengembangkan panel admin berbasis Angular untuk mendukung manajemen data dan operasional internal.",
        "Mengembangkan aplikasi Android menggunakan Flutter untuk klien dan admin untuk memantau kemajuan proyek.",
        "Mengintegrasikan REST API pada aplikasi web dan mobile untuk memastikan pertukaran data yang konsisten.",
        "Melakukan pemeliharaan aplikasi, perbaikan bug, dan pengembangan fitur baru guna menjaga stabilitas dan fungsionalitas sistem."
      ]
    }
  ],
  skills: [
    { name: "Angular", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "Flutter", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "JavaScript/TypeScript", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Dart", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    { name: "HTML/CSS", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Go", level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "REST API", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" }, // Using Postman as proxy for API dev
    { name: "SQL", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Git", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Vue.js", level: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "React", level: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  ],
  projects: [
    {
      title: "TenantMaster Cloud",
      description: "Platform manajemen multi-tenant untuk aplikasi SaaS dengan arsitektur microservices B2B.",
      technologies: ["Next.js", "Tailwind CSS", "Go", "PostgreSQL"],
      detailId: 'tenant-master',
      image: tenantMasterHomeImg
    },
    {
      title: "Sistem Manajemen Asuransi (Web)",
      description: "Core system manajemen asuransi untuk administrasi polis, klaim, dan Role-Based Access Control (RBAC).",
      technologies: ["Angular", "REST API", "SQL", "TypeScript"],
      detailId: 'insurance-web',
      image: projectWebImg
    },
    {
      title: "Aplikasi Asuransi (Mobile)",
      description: "Aplikasi mobile khusus klien asuransi untuk akses e-polis digital dan pengajuan klaim secara real-time.",
      technologies: ["Flutter", "Dart", "Android", "REST API"],
      detailId: 'insurance-mobile',
      image: projectAndroidImg
    },
    {
      title: "Manajemen Sekolah",
      description: "Sistem manajemen sekolah yang komprehensif untuk administrasi dan siswa.",
      technologies: ["Web", "Database"],
      link: "#",
      image: projectSchoolImg
    },

  ]
};
