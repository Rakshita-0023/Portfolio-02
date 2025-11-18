// Portfolio Data - Your personal information database
export const personalInfo = {
  name: "Polana Rakshita",
  title: "AI/ML Enthusiast & Web Developer",
  email: "polana.rakshita2024@nstrishihood.edu.in",
  phone: "+91 (XXX) XXX-XXXX",
  location: "India",
  bio: "Passionate Computer Science student specializing in AI/ML and web development. Currently pursuing Bachelor's in Computer Science and gaining hands-on experience through internships in artificial intelligence and machine learning.",
  avatar: "/polana-photo.jpg",
  resume: "/Polana_Rakshita_CV.pdf"
};

export const socialLinks = {
  github: "https://github.com/Rakshita-0023",
  linkedin: "https://www.linkedin.com/in/rakshita-polana/",
  twitter: "https://twitter.com/polanarakshita",
  portfolio: "https://polanarakshita.com"
};

export const typingStrings = [
  "AI/ML Enthusiast",
  "Computer Science Student", 
  "Web Developer",
  "Problem Solver",
  "Tech Innovator"
];

export const skills = {
  frontend: [
    { name: "React.js", level: 75 },
    { name: "JavaScript", level: 80 },
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "Next.js", level: 65 }
  ],
  backend: [
    { name: "Python", level: 90 },
    { name: "MySQL", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 65 },
    { name: "REST APIs", level: 65 }
  ],
  tools: [
    { name: "Git", level: 80 },
    { name: "VS Code", level: 95 },
    { name: "Jupyter Notebook", level: 80 },
    { name: "Pandas", level: 80 },
    { name: "Prisma", level: 50 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Currency Converter",
    description: "the currency converter project is a simple tool that allows a user to convert an amount between several major currencies, including USD, EUR, GBP, JPY, INR, AUD, and MYR. The user can input a value, select the (From) and (To) currencies, and then click a (Convert) button to initiate the conversion.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveDemo: "https://rakshita-0023.github.io/CURRENCY-CONVERTER/",
    github: "https://github.com/Rakshita-0023/CURRENCY-CONVERTER",
    image: "/currency.jpg",
    challenges: "The biggest challenges are getting real-time exchange rates from an API and handling network errors to ensure the converter works smoothly."
  },
  {
    id: 3,
    title: "Dictionary",
    description: "A simple Dictionary Web App built with HTML, CSS, and JavaScript that allows users to search for word meanings, pronunciations, and examples using the Free Dictionary API.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveDemo: "https://rakshita-0023.github.io/Dictionary/",
    github: "https://github.com/Rakshita-0023/Dictionary",
    image: "/dict.jpg",
    challenges: "Designed a secure database schema and implemented role-based authentication for different user types."
  },
  {
    id: 4,
    title: "FBI Time Series Forecasting ",
    description: "The FBI Time Series Forecasting project is an initiative that uses data analytics and machine learning to predict crime patterns and improve public safety. The project focuses on developing a predictive model that estimates the number of crime incidents on a monthly basis. The data used for this includes crime type, location details, and timestamps. The project follows a process that includes exploratory data analysis (EDA), data cleaning, feature engineering, and pre-processing before building and evaluating a model.",
    technologies: ["Pandas", "NumPy", "Statsmodels","XGBoost","Geopandas","Matplotlib","Seaborn","Scikit-Learn"],
    liveDemo: "https://drive.google.com/file/d/1pG_tcgwZOsna1tutXnhMqxbe_jls5vOS/view?usp=sharing",
    image: "/fbi.jpg",
    challenges: "The biggest challenges in building this project are handling missing data and outliers, managing class imbalance, and selecting the right model and evaluation criteria."
  },
  {
    id: 5,
    title: "Glassdoor-salary-analysis-and-prediction-project",
    description: "The project analyzes job posting data from Glassdoor.com to predict salary trends for tech roles. It aims to help job seekers, employers, and recruiters by providing insights into compensation and salary benchmarks. The main libraries used are Pandas, Matplotlib, Seaborn, and NumPy.",
    technologies: ["Pandas", "NumPy","Matplotlib","Seaborn"],
    liveDemo: "https://drive.google.com/file/d/1fxP-KF8RDBYXm-HUg_-5wA8GripBmAgN/view?usp=sharing",
    image: "/salary.jpg",
    challenges: "The main challenges of the Glassdoor project are data quality issues, such as missing and inconsistent values, the need to extract meaningful features from job descriptions, and selecting the most suitable machine learning model to accurately predict salaries."
  },
  {
    id: 6,
    title: "The PhonePe Transaction Insights project",
    description: "The PhonePe project analyzes transaction data to provide insights for business decisions like customer segmentation and fraud detection. It uses Python and SQL to extract, analyze, and visualize data in a Streamlit dashboard.",
    technologies: ["Python", "SQL","Streamlit"],
    liveDemo: "https://drive.google.com/file/d/1J3ph0OsrW5kM58c9DKAZTj_E-LYuB2Hg/view?usp=sharing",
    image: "/phonepe.jpg",
    challenges: "The challenges for the PhonePe project are related to data extraction, database management, effective visualization, and generating actionable insights from the analysis."
  },
  {
    id: 7,
    title: "CodeSenseAI",
    description: "A fully web-based AI code reviewer platform that runs entirely in the browser with no installation required, offering built-in AI coding assistance with smart suggestions and auto-completion. It features a clean, modern, and responsive interface with syntax highlighting, supports real-time code execution with instant output, and allows multi-language and multi-file project management for versatile development.",
    technologies: [
      "Vite",
      "CSS Modules",
      "React Router DOM",
      "Axios",
      "Node.js",
      "Express.js",
      "PostgreSQL (Neon)",
      "Sequelize",
      "JWT",
      "bcryptjs",
      "Nodemailer",
      "Express Rate Limit",
      "Helmet.js",
      "CORS",
      "Google Gemini API",
      "npm",
      "Nodemon",
      "RESTful API"
    ]
    ,
    liveDemo: "https://aicodesense.netlify.app/",
    github: "https://github.com/Rakshita-0023/AI_CODE_REVIEW",
    image: "/logo_ai.png",
    challenges: "I faced several challenges including handling multiple programming languages with different syntax rules and ensuring the feedback generated was accurate and genuinely helpful. Integrating AI/LLM APIs brought issues like token limits, prompt formatting, and response consistency. Designing a smooth and responsive code editor UI with proper syntax highlighting was also challenging, especially when processing large code blocks. I also had to deal with errors from incomplete or poorly formatted user input, performance slowdowns, and security concerns such as sanitising code before processing. Additionally, deployment required careful handling of API keys, CORS issues, and maintaining overall stability."
  }
];

export const experience = [
  {
    id: 1,
    year: "2024 - Present",
    role: "AI/ML Intern",
    company: "Labmentix",
    description: "Working on artificial intelligence and machine learning projects, developing ML models, and implementing AI solutions for real-world problems.",
    achievements: [
      "Developed machine learning models for data analysis",
      "Implemented AI algorithms for automation",
      "Gained hands-on experience with Python and ML libraries",
      "Completed internship certification program"
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Computer Science (Currently Pursuing - 2nd Year)",
    institution: "Newton School Of Technology",
    year: "2023 - 2027",
    gpa: "In Progress",
    relevant: ["Data Structures", "Algorithms", "Web Development", "AI/ML", "Database Systems", "Programming Languages"]
  },
  {
    id: 2,
    degree: "Higher Secondary Education (12th)",
    institution: "St Xaviers",
    year: "2023",
    gpa: "Completed",
    relevant: ["Mathematics", "Physics", "Computer Science"]
  },
  {
    id: 3,
    degree: "Secondary Education (10th)",
    institution: "St Xaviers",
    year: "2021",
    gpa: "Completed",
    relevant: ["Mathematics", "Science", "Computer Applications"]
  }
];

export const certifications = [
  "AI/ML Internship Certificate - Labmentix"
];