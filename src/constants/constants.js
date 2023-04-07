const profile_constants = {
  photoUrl: "",
  firstname: "Sivakumar",
  lastname: "Panda",
  designation: "Frontend Developer",
  tech_stack: "React JS | Redux | Javascript",
  linkedin_url: "",
  github_url: "",
  email_id: "shivakumarpandars169@gmail.com",
  mobile: "6301321425",
};

const about_constants = {
  photoUrl: "",
  summary: "I am a Frontend Developer",
  birth_day: "15/02/2000",
  birth_place: "Berhampur, Odisha",
  high_school: {
    name: "St. Francis De Sales",
    place: "Palasa-Kasibugga",
    specialization: "High School",
    grade: "9.5",
  },
  intermediate: {
    name: "Narayana Junior College",
    place: "Palasa-Kasibugga",
    specialization: "Maths, Physics and Chemistry",
    grade: "9.8",
  },
  graduation: {
    name: "Aditya Institute of Technology and Management",
    place: "Tekkali",
    specialization: "Information Technology",
    grade: "8.4",
  },
  postgraduation: {},
  career_start_date: "23rd August 2021",
};

const experience_constants = {
  organisations: [
    {
      name: "Wipro",
      role: "Full Stack Developer",
      tech_stack: "",
      from_date: new Date("2021-08-23"),
      to_date: false,
      skills: ["React JS", "Django", "Python", "Javascript"],
      summary_points: ["Did this", "Did that", "Did everything"],
    },
    {
      name: "Wipro",
      role: "Full Stack Developer",
      tech_stack: "",
      from_date: new Date("2021-08-23"),
      to_date: false,
      skills: ["React JS", "Django", "Python", "Javascript"],
      summary_points: ["Did this", "Did that", "Did everything"],
    },
  ],
};

const skills_constants = {
  skills: [
    {
      skill: "React JS",
      rating: 50, // Out of 100, type number
    },
    {
      skill: "Redux",
      rating: 50, // Out of 100, type number
    },
  ],
};

export {
  profile_constants,
  about_constants,
  skills_constants,
  experience_constants,
};
