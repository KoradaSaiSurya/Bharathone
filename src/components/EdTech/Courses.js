import React, { useState, useContext } from "react";
import { StudentContext } from "../../context/StudentContext";
import { useNavigate } from "react-router-dom";

const COURSES = [
 {
  id: "python-stack",
  title: "Python Stack Development",
  duration: "Self-paced",
  level: "Beginner → Advanced",
  rating: 4.8,
  about: "Python, Django, HTML/CSS, JavaScript, SQL. Hands-on projects for web apps.",
  docs: [
    { title: "1️⃣ Python Official Docs", link: "https://docs.python.org/3/" },
    { title: "2️⃣ Python Basics", link: "https://www.w3schools.com/python/python_intro.asp" },
    { title: "3️⃣ Data Types & Variables", link: "https://www.w3schools.com/python/python_datatypes.asp" },
    { title: "4️⃣ Operators & Expressions", link: "https://www.programiz.com/python/operators" },
    { title: "5️⃣ Conditional Statements", link: "https://www.geeksforgeeks.org/python-if-else/" },
    { title: "6️⃣ Loops (for, while)", link: "https://www.w3schools.com/python/python_for_loops.asp" },
    { title: "7️⃣ Functions", link: "https://realpython.com/defining-your-own-python-function/" },
    { title: "8️⃣ Lists & Tuples", link: "https://www.w3schools.com/python/python_lists.asp" },
    { title: "9️⃣ Dictionaries & Sets", link: "https://www.w3schools.com/python/python_dictionaries.asp" },
    { title: "🔟 File Handling", link: "https://www.w3schools.com/python/python_file_handling.asp" },
    { title: "11️⃣ Exception Handling", link: "https://www.programiz.com/python/exception-handling" },
    { title: "12️⃣ Object-Oriented Programming", link: "https://realpython.com/python3-object-oriented-programming/" },
    { title: "13️⃣ Modules & Packages", link: "https://docs.python.org/3/tutorial/modules.html" },
    { title: "14️⃣ Virtual Environments", link: "https://realpython.com/python-virtual-environments-a-primer/" },
    { title: "15️⃣ Django Basics", link: "https://docs.djangoproject.com/en/stable/intro/tutorial01/" },
    { title: "16️⃣ Django Models & Views", link: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Models" },
    { title: "17️⃣ Django Templates", link: "https://docs.djangoproject.com/en/stable/ref/templates/language/" },
    { title: "18️⃣ Django Forms & Authentication", link: "https://docs.djangoproject.com/en/stable/topics/auth/default/" },
    { title: "19️⃣ REST API with Django REST Framework", link: "https://www.django-rest-framework.org/tutorial/quickstart/" },
    { title: "20️⃣ Deployment (PythonAnywhere / Render)", link: "https://docs.pythonanywhere.com/pages/DeployExistingDjangoProject/" }
  ],
  videos: [
    // 🧠 English Tutorials
    { title: "Python Full Course (English)", yt: "https://www.youtube.com/watch?v=rfscVS0vtbw" },
    { title: "Django Full Course (English)", yt: "https://www.youtube.com/watch?v=F5mRW0jo-U4" },
    { title: "Django REST Framework API (English)", yt: "https://www.youtube.com/watch?v=c708Nf0cHrs" },

    // 🇮🇳 Telugu Tutorials
    { title: "Python Basics (Telugu)", yt: "https://www.youtube.com/watch?v=SlxLmBUZfKk" },
    { title: "Python Advanced (Telugu)", yt: "https://www.youtube.com/watch?v=_dH9V7vGxxE" },
    { title: "Django Crash Course (Telugu)", yt: "https://www.youtube.com/watch?v=g8Jt6jbE-kI" },
    { title: "Django REST API (Telugu)", yt: "https://www.youtube.com/watch?v=yyP-BZo1rUQ" }
  ],
  assignments: [
    { title: "Python Practice Problems", link: "https://www.w3resource.com/python-exercises/" },
    { title: "Django Mini Projects", link: "https://www.geeksforgeeks.org/django-project-ideas/" },
    { title: "REST API Assignments", link: "https://www.w3schools.com/django/django_api_intro.php" }
  ]
},
  {
  id: "java-fullstack",
  title: "Java Full Stack Developer",
  duration: "Self-paced",
  level: "Beginner → Advanced",
  rating: 4.7,
  about: "Java, Spring Boot, Hibernate, MySQL, HTML/CSS, JavaScript. Build real projects.",
  docs: [
    { title: "1️⃣ Java Official Docs", link: "https://docs.oracle.com/javase/tutorial/" },
    { title: "2️⃣ Java Basics & Syntax", link: "https://www.w3schools.com/java/java_syntax.asp" },
    { title: "3️⃣ OOP Concepts (Class, Object, Inheritance)", link: "https://www.programiz.com/java-programming/oops-concepts" },
    { title: "4️⃣ Exception Handling", link: "https://www.javatpoint.com/exception-handling-in-java" },
    { title: "5️⃣ Collections Framework", link: "https://docs.oracle.com/javase/tutorial/collections/" },
    { title: "6️⃣ JDBC & Database Connectivity", link: "https://www.javatpoint.com/example-to-connect-to-the-mysql-database" },
    { title: "7️⃣ MySQL Basics", link: "https://www.w3schools.com/mysql/default.asp" },
    { title: "8️⃣ HTML/CSS Refresher", link: "https://www.w3schools.com/html/html_intro.asp" },
    { title: "9️⃣ JavaScript Basics", link: "https://www.w3schools.com/js/js_intro.asp" },
    { title: "🔟 Spring Boot Fundamentals", link: "https://spring.io/guides/gs/spring-boot/" },
    { title: "11️⃣ Spring Boot REST API", link: "https://spring.io/guides/gs/rest-service/" },
    { title: "12️⃣ Hibernate ORM", link: "https://www.javatpoint.com/hibernate-tutorial" },
    { title: "13️⃣ JPA & CRUD", link: "https://www.baeldung.com/the-persistence-layer-with-spring-data-jpa" },
    { title: "14️⃣ Frontend Integration (React/Angular)", link: "https://www.geeksforgeeks.org/integrating-react-js-with-spring-boot/" },
    { title: "15️⃣ Deployment (Heroku / AWS)", link: "https://www.baeldung.com/deploy-spring-boot-to-heroku" }
  ],
  videos: [
    // 🧠 English
    { title: "Java Full Course (English)", yt: "https://www.youtube.com/watch?v=grEKMHGYyns" },
    { title: "Spring Boot Crash Course (English)", yt: "https://www.youtube.com/watch?v=vtPkZShrvXQ" },
    { title: "Hibernate + JPA (English)", yt: "https://www.youtube.com/watch?v=MaI0_XdpdP8" },
    // 🇮🇳 Telugu
    { title: "Java Full Course (Telugu)", yt: "https://www.youtube.com/watch?v=Cu4jIoW7KQk" },
    { title: "Spring Boot (Telugu)", yt: "https://www.youtube.com/watch?v=GujWfY1Fz34" },
    { title: "Hibernate (Telugu)", yt: "https://www.youtube.com/watch?v=2M4wzGybzW8" }
  ],
  assignments: [
    { title: "Java Practice Questions", link: "https://www.w3resource.com/java-exercises/" },
    { title: "Spring Boot Mini Projects", link: "https://www.geeksforgeeks.org/spring-boot-projects/" },
    { title: "Hibernate CRUD Practice", link: "https://www.javatpoint.com/hibernate-example" }
  ]
}
,
  {
  id: "sql-database",
  title: "SQL & Database Management",
  duration: "Self-paced",
  level: "Beginner → Advanced",
  rating: 4.7,
  about: "Learn SQL, relational databases, queries, joins, normalization, and database projects.",
  docs: [
    { title: "SQL Tutorial", link: "https://www.w3schools.com/sql/" },
    { title: "MySQL Documentation", link: "https://dev.mysql.com/doc/" },
    { title: "PostgreSQL Documentation", link: "https://www.postgresql.org/docs/" },
    { title: "Database Design & Normalization", link: "https://www.geeksforgeeks.org/database-normalization/" }
  ],
  videos: [
    { title: "SQL Full Course (English)", yt: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
    { title: "SQL Crash Course (Telugu)", yt: "https://www.youtube.com/watch?v=Q0sRg6YpuL0" },
    { title: "MySQL Tutorial (English)", yt: "https://www.youtube.com/watch?v=7S_tz1z_5bA" }
  ],
  assignments: [
    { title: "SQL Queries Practice", link: "https://www.w3resource.com/sql-exercises/" },
    { title: "MySQL Mini Projects", link: "https://www.geeksforgeeks.org/mysql-projects-for-beginners/" },
    { title: "Database Design Exercises", link: "https://www.tutorialspoint.com/sql/sql-projects.htm" }
  ]
}
,

  {
  id: "cloud-computing",
  title: "Cloud Computing Fundamentals",
  duration: "Self-paced",
  level: "Beginner → Advanced",
  rating: 4.7,
  about: "Learn cloud platforms like AWS, Azure, Google Cloud. Hands-on deployment and services.",
  docs: [
    { title: "Cloud Computing Concepts", link: "https://www.coursera.org/learn/cloud-computing-foundations" },
    { title: "AWS Documentation", link: "https://docs.aws.amazon.com/" },
    { title: "Azure Documentation", link: "https://learn.microsoft.com/en-us/azure/?product=popular" },
    { title: "Google Cloud Docs", link: "https://cloud.google.com/docs" },
    { title: "Cloud Deployment Models & Services", link: "https://www.ibm.com/cloud/learn/cloud-computing" }
  ],
  videos: [
    // 🧠 English
    { title: "Cloud Computing Full Course (English)", yt: "https://www.youtube.com/watch?v=3hLmDS179YE" },
    { title: "AWS Full Course (English)", yt: "https://www.youtube.com/watch?v=ulprqHHWlng" },
    { title: "Azure Full Course (English)", yt: "https://www.youtube.com/watch?v=7yu1dUQ6xTg" },
    // 🇮🇳 Telugu
    { title: "Cloud Computing Full Course (Telugu)", yt: "https://www.youtube.com/watch?v=0V2kTAbI9vY" },
    { title: "AWS Crash Course (Telugu)", yt: "https://www.youtube.com/watch?v=V9A5kDRVL6c" }
  ],
  assignments: [
    { title: "AWS Labs & Practice", link: "https://aws.amazon.com/training/learn-about/cloud-practitioner/" },
    { title: "Azure Hands-on Exercises", link: "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/" },
    { title: "Google Cloud Practice", link: "https://cloud.google.com/training" }
  ]
}
,
  {
  id: "cybersecurity",
  title: "Cybersecurity Essentials",
  duration: "Self-paced",
  level: "Beginner → Advanced",
  rating: 4.7,
  about: "Learn fundamentals of cybersecurity, ethical hacking, network security, and protection strategies.",
  docs: [
    { title: "Cybersecurity Basics", link: "https://www.coursera.org/learn/intro-cyber-security" },
    { title: "OWASP Top 10 Documentation", link: "https://owasp.org/www-project-top-ten/" },
    { title: "Network Security Guide", link: "https://www.cisco.com/c/en/us/products/security/what-is-network-security.html" },
    { title: "Ethical Hacking Basics", link: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/" }
  ],
  videos: [
    { title: "Cybersecurity Full Course (English)", yt: "https://www.youtube.com/watch?v=inWWhr5tnEA" },
    { title: "Ethical Hacking Full Course (English)", yt: "https://www.youtube.com/watch?v=3QnD2c4Xovk" },
    { title: "Cybersecurity Full Course (Telugu)", yt: "https://www.youtube.com/watch?v=nsMJl_rR_r0" }
  ],
  assignments: [
    { title: "OWASP Practice Labs", link: "https://owasp.org/www-project-web-security-testing-guide/" },
    { title: "Ethical Hacking Exercises", link: "https://www.hackthebox.eu/" },
    { title: "Network Security Exercises", link: "https://www.cybrary.it/course/network-security/" }
  ]
}
,
  {
  id: "ai-ml",
  title: "AI & Machine Learning",
  duration: "Self-paced",
  level: "Beginner → Advanced",
  rating: 4.8,
  about: "Learn AI/ML concepts, Python for ML, scikit-learn, TensorFlow, and real projects.",
  docs: [
    { title: "Python for AI/ML", link: "https://scikit-learn.org/stable/tutorial/index.html" },
    { title: "AI & ML Concepts", link: "https://developers.google.com/machine-learning/crash-course" },
    { title: "TensorFlow Documentation", link: "https://www.tensorflow.org/tutorials" },
    { title: "Deep Learning Guide", link: "https://www.deeplearning.ai/" }
  ],
  videos: [
    { title: "AI & ML Full Course (English)", yt: "https://www.youtube.com/watch?v=ukzFI9rgwfU" },
    { title: "Machine Learning with Python (English)", yt: "https://www.youtube.com/watch?v=7eh4d6sabA0" },
    { title: "AI/ML Full Course (Telugu)", yt: "https://www.youtube.com/watch?v=xNzyjsH0qQk" }
  ],
  assignments: [
    { title: "ML Practice Problems", link: "https://www.kaggle.com/learn/overview" },
    { title: "AI Mini Projects", link: "https://www.analyticsvidhya.com/blog/2018/03/start-hands-on-machine-learning-projects/" }
  ]
}
,{
    id: "mern-stack",
    title: "MERN Stack Fundamentals",
    duration: "Self-paced",
    level: "Beginner → Advanced",
    rating: 4.8,
    about: "MongoDB, Express.js, React, Node.js. Full-stack JavaScript projects.",
    docs: [
      { title: "1️⃣ MERN Stack Syllabus", link: "https://www.mygreatlearning.com/academy/learn-for-free/courses/mern-stack-fundamentals" },
      { title: "2️⃣ React Official Docs", link: "https://reactjs.org/docs/getting-started.html" },
      { title: "3️⃣ Node.js Official Docs", link: "https://nodejs.org/en/docs/" },
      { title: "4️⃣ Express.js Docs", link: "https://expressjs.com/en/starter/installing.html" },
      { title: "5️⃣ MongoDB Docs", link: "https://docs.mongodb.com/" },
      { title: "6️⃣ Redux / Context API Docs", link: "https://redux.js.org/introduction/getting-started" },
      { title: "7️⃣ Git & GitHub Guide", link: "https://docs.github.com/en/get-started/quickstart" },
      { title: "8️⃣ Postman Guide (API Testing)", link: "https://learning.postman.com/docs/getting-started/introduction/" },
      { title: "9️⃣ Mini-Projects & CRUD Examples", link: "https://www.geeksforgeeks.org/mern-stack-projects/" }
    ],
    videos: [
      // 🧠 English
      { title: "MERN Crash Course (English)", yt: "https://www.youtube.com/watch?v=7CqJlxBYj-M" },
      { title: "React JS Full Course (English)", yt: "https://www.youtube.com/watch?v=Ke90Tje7VS0" },
      { title: "Node.js + Express + MongoDB (English)", yt: "https://www.youtube.com/watch?v=fgTGADljAeg" },
      // 🇮🇳 Telugu
      { title: "MERN Stack Full Course (Telugu)", yt: "https://www.youtube.com/watch?v=ApXoWvfEYVU" },
      { title: "React JS Telugu Crash Course", yt: "https://www.youtube.com/watch?v=8R1GQfR7fR4" }
    ],
    assignments: [
      { title: "MERN CRUD Mini-Projects", link: "https://www.geeksforgeeks.org/mern-stack-projects/" },
      { title: "React State Management Practice", link: "https://reactjs.org/docs/hooks-intro.html" },
      { title: "Postman API Testing Exercises", link: "https://learning.postman.com/docs/sending-requests/requests/" }
    ]
  },

{
  id: "generative-ai",
  title: "Generative AI",
  duration: "Self-paced",
  level: "Beginner → Advanced",
  rating: 4.8,
  about: "Learn about ChatGPT, DALL·E, Stable Diffusion, and building generative AI applications.",
  docs: [
    { title: "Generative AI Overview", link: "https://openai.com/research" },
    { title: "Deep Learning for Generative AI", link: "https://www.deeplearning.ai/" },
    { title: "GPT Models Docs", link: "https://platform.openai.com/docs/models" }
  ],
  videos: [
    { title: "Generative AI Full Course (English)", yt: "https://www.youtube.com/watch?v=Ukgii5WZsRI" },
    { title: "Generative AI Telugu Introduction", yt: "https://www.youtube.com/watch?v=Z_hHh6G99kE" }
  ],
  assignments: [
    { title: "OpenAI Playground Projects", link: "https://platform.openai.com/playground" },
    { title: "Build AI Image Models", link: "https://www.tensorflow.org/tutorials/generative" }
  ]
}
,
{
  id: "data-science",
  title: "Data Science & Analytics",
  duration: "Self-paced",
  level: "Beginner → Advanced",
  rating: 4.8,
  about: "Learn Python, Pandas, NumPy, Matplotlib, SQL, and real-time data projects.",
  docs: [
    { title: "Data Science Guide", link: "https://www.coursera.org/specializations/jhu-data-science" },
    { title: "Pandas Documentation", link: "https://pandas.pydata.org/docs/" },
    { title: "NumPy Documentation", link: "https://numpy.org/doc/stable/" },
    { title: "Matplotlib Docs", link: "https://matplotlib.org/stable/tutorials/index.html" }
  ],
  videos: [
    { title: "Data Science Full Course (English)", yt: "https://www.youtube.com/watch?v=ua-CiDNNj30" },
    { title: "Python for Data Science (English)", yt: "https://www.youtube.com/watch?v=LHBE6Q9XlzI" },
    { title: "Data Science Full Course (Telugu)", yt: "https://www.youtube.com/watch?v=k5k1Wj_4Dg8" }
  ],
  assignments: [
    { title: "Data Science Exercises", link: "https://www.kaggle.com/learn/overview" },
    { title: "Python Data Analysis Projects", link: "https://www.analyticsvidhya.com/blog/2021/05/top-python-project-ideas-for-beginners/" }
  ]
}
,
{
  id: "dbms",
  title: "DBMS (Database Management System)",
  duration: "Self-paced",
  level: "Beginner → Advanced",
  rating: 4.7,
  about: "Learn DBMS concepts, SQL, ER diagrams, normalization, indexing, transactions, and practical database projects.",
  docs: [
    { title: "DBMS Concepts Overview", link: "https://www.geeksforgeeks.org/dbms-tutorial/" },
    { title: "ER Diagrams & Relational Model", link: "https://www.tutorialspoint.com/dbms/dbms_er_model.htm" },
    { title: "SQL Queries & Joins", link: "https://www.w3schools.com/sql/" },
    { title: "Normalization Techniques", link: "https://www.geeksforgeeks.org/database-normalization/" },
    { title: "Transactions & Concurrency Control", link: "https://www.javatpoint.com/dbms-transaction" },
    { title: "Indexing & Keys", link: "https://www.geeksforgeeks.org/indexing-in-dbms/" }
  ],
  videos: [
    // 🧠 English
    { title: "DBMS Full Course (English)", yt: "https://www.youtube.com/watch?v=HxwJXoC4Z7E" },
    { title: "DBMS Concepts Explained (English)", yt: "https://www.youtube.com/watch?v=Ot6OkAR2s3Y" },
    // 🇮🇳 Telugu
    { title: "DBMS Full Course (Telugu)", yt: "https://www.youtube.com/watch?v=Z6Zk9XQwVoY" },
    { title: "SQL & Normalization (Telugu)", yt: "https://www.youtube.com/watch?v=XK4_0w2E1T8" }
  ],
  assignments: [
    { title: "DBMS Practice Exercises", link: "https://www.w3resource.com/sql-exercises/" },
    { title: "ER Diagram Mini Projects", link: "https://www.geeksforgeeks.org/dbms-project-ideas/" },
    { title: "Normalization & SQL Assignments", link: "https://www.tutorialspoint.com/sql/sql-mini-projects.htm" }
  ]
}
, 
{
  id: "devops",
  title: "DevOps Engineer",
  duration: "Self-paced",
  level: "Beginner → Advanced",
  rating: 4.8,
  about: "Learn CI/CD, Docker, Kubernetes, Jenkins, Git, monitoring, cloud deployment, and real DevOps projects.",
  docs: [
    { title: "DevOps Overview", link: "https://www.edx.org/course/introduction-to-devops" },
    { title: "CI/CD Concepts", link: "https://www.redhat.com/en/topics/devops/what-is-ci-cd" },
    { title: "Docker Documentation", link: "https://docs.docker.com/get-started/" },
    { title: "Kubernetes Documentation", link: "https://kubernetes.io/docs/home/" },
    { title: "Jenkins User Guide", link: "https://www.jenkins.io/doc/" },
    { title: "Monitoring & Logging", link: "https://prometheus.io/docs/introduction/overview/" }
  ],
  videos: [
    // 🧠 English
    { title: "DevOps Full Course (English)", yt: "https://www.youtube.com/watch?v=0yWAtQ6wYNM" },
    { title: "Docker + Kubernetes (English)", yt: "https://www.youtube.com/watch?v=fqMOX6JJhGo" },
    { title: "Jenkins Full Course (English)", yt: "https://www.youtube.com/watch?v=FX322RVNGj4" },
    // 🇮🇳 Telugu
    { title: "DevOps Full Course (Telugu)", yt: "https://www.youtube.com/watch?v=VGBLtEIlIH8" },
    { title: "Docker & Kubernetes (Telugu)", yt: "https://www.youtube.com/watch?v=ZgDldP9M5Tg" }
  ],
  assignments: [
    { title: "Docker Hands-on Labs", link: "https://www.docker.com/101-tutorial" },
    { title: "Kubernetes Practice Projects", link: "https://kubernetes.io/docs/tutorials/" },
    { title: "CI/CD Pipeline Exercises", link: "https://www.jenkins.io/doc/tutorials/build-a-java-app-with-maven/" }
  ]
}


];

export default function Courses() {
  const { saveStudent, student } = useContext(StudentContext);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  function openEnroll(course) {
    setSelectedCourse(course);
    setForm({ name: student.name || "", email: student.email || "" });
    setModalOpen(true);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert("Please enter name and email 😊");
      return;
    }

    // Save student in context
    saveStudent({ 
      name: form.name, 
      email: form.email, 
      enrolledCourse: selectedCourse.id 
    });

    setModalOpen(false);

    // Navigate to courseDetails page with state
    navigate("/courseDetails", { state: { course: selectedCourse } });
  }

  function scrollToCourses() {
    document.getElementById("course-grid").scrollIntoView({
      behavior: "smooth"
    });
  }

  return (
    <div className="edtech-wrap">
      <header className="edtech-hero">
        <div className="hero-left">
          <h1>Learn. Build. Get Hired.</h1>
          <p className="subtitle">
            Choose a course, enter your name & email — start learning instantly.
          </p>
          <div className="hero-cta">
            <button className="cta-btn" onClick={scrollToCourses}>
              Explore Courses
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label" style={{color:"white"}}>Students</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label" style={{color:"white"}}>Job Success</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.8★</span>
              <span className="stat-label" style={{color:"white"}}>Rating</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-visual">
            <div className="floating-card card-1">
              <h4>💻 Code</h4>
              <p>Build real projects</p>
            </div>
            <div className="floating-card card-2">
              <h4>🚀 Deploy</h4>
              <p>Launch your apps</p>
            </div>
            <div className="floating-card card-3">
              <h4>💼 Hired</h4>
              <p>Land your dream job</p>
            </div>
          </div>
        </div>
      </header>

      <section className="courses-section">
        <div className="section-header">
          <h2 className="section-title">Choose Your Path</h2>
          <p className="section-subtitle">
            Industry-focused courses designed to get you job-ready with hands-on projects and real-world experience.
          </p>
        </div>

        <div id="course-grid" className="course-grid">
          {COURSES.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-header">
                <h3 className="course-title">{course.title}</h3>
                <div className="course-meta">
                  <div className="meta-item">
                    <span>⏱️</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="meta-item">
                    <span>📈</span>
                    <span>{course.level}</span>
                  </div>
                  <div className="rating">
                    <span>⭐</span>
                    <span>{course.rating}</span>
                  </div>
                </div>
              </div>

              <p className="course-about">{course.about}</p>

              <div className="course-resources">
               
                  <h4 className="resource-title">📚 Documents</h4>
 
                  <h4 className="resource-title">🎥 Videos</h4>
                  <h4 className="resource-title">📝Assignments</h4>

              </div>

              <button className="enroll-btn" onClick={() => openEnroll(course)}>
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {modalOpen && selectedCourse && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Enroll in Course</h3>
              <p className="modal-subtitle">{selectedCourse.title}</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="modal-actions">
                <button 
                  type="button" 
                  className="btn-secondary" 
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Start Learning 🚀
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
