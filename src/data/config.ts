const config = {
  title: "Harsh Verma | Web Developer",
  description: {
    long: "Explore the portfolio of Harsh, a Computer Science Engineer .",
    short:
      "Discover the portfolio of Harsh.",
  },
  keywords: [
    "Harsh",
    "Harsh Kumar Verma",
    "harshverma",
    "harshvermapc5@gmail.com",
    "Harsh Verma Portfolio",
    "portfolio",
    "Mern Stack",
    "Devlopment",
    "Database",
    "Python",
     "React",
     "JavaaScript",
  ],
  author: "Harsh Verma",
  email: "harshvermapc5@gmail.com",
  site: "",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/harsh-verma-3561a1324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/harsh_kverma?igsh=aWRncnhjM3JlYzhr",
    facebook: "",
    github: "",
  },
};
export { config };
