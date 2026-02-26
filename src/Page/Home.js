import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <>
            <header id="header" className="header light-background d-flex flex-column">
                <i className="header-toggle d-xl-none bi bi-list"></i>

                <div className="profile-img d-flex align-items-center justify-content-center mt-4">
                    <div
                        style={{
                            width: "120px",
                            height: "120px",
                            borderRadius: "50%",
                            backgroundColor: "#149ddd",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "48px",
                            fontWeight: "bold"
                        }}
                    >
                        A
                    </div>
                </div>

                <a href="#hero" className="logo d-flex align-items-center justify-content-center">
                    <h1 className="sitename">Aarti Saini</h1>
                </a>

                <div className="social-links text-center">
                    <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><a href="#hero" className="active"><i className="bi bi-house navicon"></i>Home</a></li>
                        <li><a href="#about"><i className="bi bi-person navicon"></i> About</a></li>
                        <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
                        <li><a href="#portfolio"><i className="bi bi-images navicon"></i> Portfolio</a></li>
                        <li><a href="#services"><i className="bi bi-hdd-stack navicon"></i> Services</a></li>
                        <li className="dropdown"><a href="#"><i className="bi bi-menu-button navicon"></i> <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                            <ul>
                                <li><a href="#">Dropdown 1</a></li>
                                <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                    <ul>
                                        <li><a href="#">Deep Dropdown 1</a></li>
                                        <li><a href="#">Deep Dropdown 2</a></li>
                                        <li><a href="#">Deep Dropdown 3</a></li>
                                        <li><a href="#">Deep Dropdown 4</a></li>
                                        <li><a href="#">Deep Dropdown 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Dropdown 2</a></li>
                                <li><a href="#">Dropdown 3</a></li>
                                <li><a href="#">Dropdown 4</a></li>
                            </ul>
                        </li>
                        <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li>
                    </ul>
                </nav>

            </header>


            <main className="main">


                <section
                    id="hero"
                    style={{
                        minHeight: "50vh",
                        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                    }}
                >
                    <div className="container">
                        <div className="row align-items-center">

                            {/* Left Content */}
                            <div className="col-lg-7">
                                <h1 style={{ fontSize: "48px", fontWeight: "700", color: 'white' }}>
                                    Hi, I'm <span style={{ color: "#00d4ff" }}>Aarti Saini</span>
                                </h1>

                                <h3 style={{ marginTop: "15px", fontWeight: "400", color: 'white' }}>
                                    React JS & React Native Developer
                                </h3>

                                <p style={{ marginTop: "20px", maxWidth: "500px" }}>
                                    I build responsive web and mobile applications with modern UI,
                                    performance optimization, and scalable backend integration.
                                </p>

                                <div style={{ marginTop: "30px" }}>
                                    <a
                                        href="#contact"
                                        className="btn btn-info me-3"
                                    >
                                        Hire Me
                                    </a>

                                    <a
                                        href="#portfolio"
                                        className="btn btn-outline-light"
                                    >
                                        View Projects
                                    </a>
                                </div>
                            </div>

                            {/* Right Side Design Circle */}
                            <div className="col-lg-5 text-center">
                                <div
                                    style={{
                                        width: "250px",
                                        height: "250px",
                                        borderRadius: "50%",
                                        overflow: "hidden",
                                        margin: "auto",
                                        border: "5px solid rgba(255,255,255,0.2)",
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
                                    }}
                                >
                                    <img
                                        src="/assets/img/hero.jpg"
                                        alt="Aarti Saini"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover"
                                        }}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section id="about" className="about section">

                    <div className="container section-title" data-aos="fade-up">
                        <h2>About</h2>
                        <p>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                        </p>
                    </div>

                    <div className="container" data-aos="fade-up" data-aos-delay="100">

                        <div className="row gy-4 justify-content-center align-items-center">

                            {/* Profile Image */}
                            <div className="col-lg-4 text-center">
                                <div
                                    style={{
                                        width: "350px",
                                        height: "350px",
                                        // borderRadius: "50%",
                                        overflow: "hidden",
                                        margin: "auto",
                                        border: "5px solid #0d6efd",
                                        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                                    }}
                                >
                                    <img
                                        src="/assets/img/hero.jpg"
                                        alt="Aarti Saini"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover"
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="col-lg-8 content">
                                <h2>Frontend Developer & UI/UX Designer</h2>

                                <p className="fst-italic py-3">
                                    Passionate frontend developer with 1 year of experience in building responsive and user-friendly web applications using React and Bootstrap.
                                </p>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li>
                                                <i className="bi bi-chevron-right"></i>
                                                <strong>Birthday:</strong> <span>1 july 2005</span>
                                            </li>
                                            <li>
                                                <i className="bi bi-chevron-right"></i>
                                                <strong>City:</strong> <span>Rajasthan, India</span>
                                            </li>
                                            <li>
                                                <i className="bi bi-chevron-right"></i>
                                                <strong>Experience:</strong> <span>1 Year</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <p className="py-3">
                                    I love creating clean UI designs and interactive web experiences. My goal is to continuously improve my skills and build impactful digital products.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>



                <section id="stats" className="stats section py-5 bg-light">

                    <div className="container">

                        <div className="row gy-4 text-center">

                            {/* Clients */}
                            <div className="col-lg-3 col-md-6">
                                <div className="p-4 shadow-sm rounded bg-white h-100">
                                    <i className="bi bi-emoji-smile fs-1 text-primary"></i>
                                    <h2 className="mt-3 fw-bold">20+</h2>
                                    <p className="mb-0">Happy Clients</p>
                                </div>
                            </div>

                            {/* Projects */}
                            <div className="col-lg-3 col-md-6">
                                <div className="p-4 shadow-sm rounded bg-white h-100">
                                    <i className="bi bi-journal-richtext fs-1 text-success"></i>
                                    <h2 className="mt-3 fw-bold">35+</h2>
                                    <p className="mb-0">Projects Completed</p>
                                </div>
                            </div>

                            {/* Experience */}
                            <div className="col-lg-3 col-md-6">
                                <div className="p-4 shadow-sm rounded bg-white h-100">
                                    <i className="bi bi-code-slash fs-1 text-danger"></i>
                                    <h2 className="mt-3 fw-bold">1+</h2>
                                    <p className="mb-0">Years Experience</p>
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="col-lg-3 col-md-6">
                                <div className="p-4 shadow-sm rounded bg-white h-100">
                                    <i className="bi bi-people fs-1 text-warning"></i>
                                    <h2 className="mt-3 fw-bold">10+</h2>
                                    <p className="mb-0">Technologies Known</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>


                <section id="skills" className="skills section py-5 bg-light">

                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="fw-bold">My Skills</h2>
                            <p className="text-muted">
                                Technologies and tools I work with to build modern web applications.
                            </p>
                        </div>

                        <div className="row">

                            {/* Left Column */}
                            <div className="col-lg-6">

                                {[
                                    { name: "HTML", value: 95 },
                                    { name: "CSS", value: 90 },
                                    { name: "JavaScript", value: 80 },
                                    { name: "MongoDB", value: 60 }
                                ].map((skill, index) => (
                                    <div className="mb-4" key={index}>
                                        <div className="d-flex justify-content-between">
                                            <span className="fw-semibold">{skill.name}</span>
                                            <span>{skill.value}%</span>
                                        </div>
                                        <div className="progress" style={{ height: "8px" }}>
                                            <div
                                                className="progress-bar bg-primary"
                                                role="progressbar"
                                                style={{ width: `${skill.value}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}

                            </div>

                            {/* Right Column */}
                            <div className="col-lg-6">

                                {[
                                    { name: "Bootstrap", value: 85 },
                                    { name: "React JS", value: 90 },
                                    { name: "React Native", value: 85 },
                                    { name: "Node JS", value: 70 }
                                ].map((skill, index) => (
                                    <div className="mb-4" key={index}>
                                        <div className="d-flex justify-content-between">
                                            <span className="fw-semibold">{skill.name}</span>
                                            <span>{skill.value}%</span>
                                        </div>
                                        <div className="progress" style={{ height: "8px" }}>
                                            <div
                                                className="progress-bar bg-success"
                                                role="progressbar"
                                                style={{ width: `${skill.value}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}

                            </div>

                        </div>
                    </div>

                </section>


                <section id="resume" className="resume section">

                    <div className="container section-title">
                        <h2>Resume</h2>
                        <p>
                            Passionate React JS & React Native Developer with 1 year of experience
                            building responsive web and mobile applications.
                        </p>
                    </div>

                    <div className="container">
                        <div className="row">

                            {/* Left Column */}
                            <div className="col-lg-6">

                                <h3 className="resume-title">Career Objective</h3>
                                <div className="resume-item pb-0">
                                    <p>
                                        Passionate Web Designer and Frontend Developer with 1 year of experience
                                        at ARJ Technology. Skilled in HTML, CSS, JavaScript, React.js, and React Native.
                                        Focused on building responsive, user-friendly interfaces and continuously
                                        learning modern web technologies.
                                    </p>
                                </div>

                                <h3 className="resume-title">Education</h3>

                                <div className="resume-item">
                                    <h4>M.C.A.</h4>
                                    <h5>2026</h5>
                                    <p><em>Suresh Gyan Vihar University, Jaipur</em></p>
                                </div>

                                <div className="resume-item">
                                    <h4>B.Sc.</h4>
                                    <h5>2025</h5>
                                    <p><em>Shekhawati University, Sikar</em></p>
                                </div>

                                <div className="resume-item">
                                    <h4>12th RBSE</h4>
                                    <h5>2022</h5>
                                    <p><em>Government Senior Secondary School, Ajitgarh</em></p>
                                </div>

                                <div className="resume-item">
                                    <h4>10th RBSE</h4>
                                    <h5>2020</h5>
                                    <p><em>Government Senior Secondary School, Mangrah</em></p>
                                </div>

                            </div>

                            {/* Right Column */}
                            <div className="col-lg-6">

                                <h3 className="resume-title">Work Experience</h3>

                                <div className="resume-item">
                                    <h4>React JS & React Native Developer</h4>
                                    <h5>Jan 2025 - Present</h5>
                                    <p><em>ARJ Technology</em></p>
                                    <ul>
                                        <li>Developing responsive web applications using React.js.</li>
                                        <li>Building cross-platform mobile apps using React Native.</li>
                                        <li>Implementing modern UI with Tailwind CSS and Bootstrap.</li>
                                        <li>Working with REST APIs, JWT authentication, and MongoDB.</li>
                                    </ul>
                                </div>

                                <h3 className="resume-title">Technical Skills</h3>
                                <div className="resume-item">
                                    <ul>
                                        <li><strong>Frontend:</strong> React.js, HTML, CSS, Tailwind CSS, Bootstrap, React Native</li>
                                        <li><strong>Backend:</strong> Basic Node.js, Express.js, REST API, JWT</li>
                                        <li><strong>Database:</strong> MongoDB, MongoDB Atlas, MongoDB Compass</li>
                                        <li><strong>Programming:</strong> JavaScript</li>
                                        <li><strong>Tools:</strong> Git, VS Code</li>
                                        <li><strong>OS:</strong> Windows, macOS, Linux</li>
                                    </ul>
                                </div>

                                <h3 className="resume-title">Projects</h3>
                                <div className="resume-item">
                                    <ul>
                                        <li>School Management Application</li>
                                        <li>Sales Management Application</li>
                                        <li>Billing Application</li>
                                        <li>Advisor Management Application</li>
                                    </ul>
                                </div>

                                <h3 className="resume-title">Personal Attributes</h3>
                                <div className="resume-item">
                                    <ul>
                                        <li>Hardworking with positive attitude</li>
                                        <li>Strong interpersonal and leadership skills</li>
                                        <li>Quick learner with growth mindset</li>
                                        <li>Good communication (English & Hindi)</li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                    </div>

                </section>



                <section id="services" className="services section">

                    <div className="container section-title">
                        <h2>Services</h2>
                        <p>
                            I provide modern web and mobile application development services
                            focused on performance, scalability, and user experience.
                        </p>
                    </div>

                    <div className="container">
                        <div className="row gy-4">


                            <div className="col-lg-4 col-md-6 service-item d-flex">
                                <div className="icon flex-shrink-0">
                                    <i className="bi bi-code-slash"></i>
                                </div>
                                <div>
                                    <h4 className="title">Frontend Development</h4>
                                    <p className="description">
                                        Building responsive and modern websites using React.js, HTML, CSS, Tailwind CSS, and Bootstrap.
                                    </p>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6 service-item d-flex">
                                <div className="icon flex-shrink-0">
                                    <i className="bi bi-phone"></i>
                                </div>
                                <div>
                                    <h4 className="title">Mobile App Development</h4>
                                    <p className="description">
                                        Developing cross-platform mobile applications using React Native with smooth UI and performance.
                                    </p>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6 service-item d-flex">
                                <div className="icon flex-shrink-0">
                                    <i className="bi bi-server"></i>
                                </div>
                                <div>
                                    <h4 className="title">Backend Integration</h4>
                                    <p className="description">
                                        REST API integration using Node.js, Express, JWT authentication and MongoDB database.
                                    </p>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6 service-item d-flex">
                                <div className="icon flex-shrink-0">
                                    <i className="bi bi-database"></i>
                                </div>
                                <div>
                                    <h4 className="title">Database Management</h4>
                                    <p className="description">
                                        Designing and managing databases using MongoDB, MongoDB Atlas and Compass.
                                    </p>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6 service-item d-flex">
                                <div className="icon flex-shrink-0">
                                    <i className="bi bi-palette"></i>
                                </div>
                                <div>
                                    <h4 className="title">UI/UX Implementation</h4>
                                    <p className="description">
                                        Creating clean, user-friendly and responsive interfaces focused on best user experience.
                                    </p>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6 service-item d-flex">
                                <div className="icon flex-shrink-0">
                                    <i className="bi bi-git"></i>
                                </div>
                                <div>
                                    <h4 className="title">Version Control & Deployment</h4>
                                    <p className="description">
                                        Managing projects using Git and deploying applications efficiently.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>


                <section id="contact" className="contact section">


                    <div className="container section-title" data-aos="fade-up">
                        <h2>Contact</h2>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>

                    <div className="container" data-aos="fade-up" data-aos-delay="100">

                        <div className="row gy-4">

                            <div className="col-lg-5">

                                <div className="info-wrap">
                                    <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                                        <i className="bi bi-geo-alt flex-shrink-0"></i>
                                        <div>
                                            <h3>Address</h3>
                                            <p>Ajitgarh Nimkathana Sikar Rajasthan 332701</p>
                                        </div>
                                    </div>

                                    <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                                        <i className="bi bi-telephone flex-shrink-0"></i>
                                        <div>
                                            <h3>Call Us</h3>
                                            <p>+91 8949895079</p>
                                        </div>
                                    </div>

                                    <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                                        <i className="bi bi-envelope flex-shrink-0"></i>
                                        <div>
                                            <h3>Email Us</h3>
                                            <p>sainiaarti743@gmail.com</p>
                                        </div>
                                    </div>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14166.60600904393!2d75.81799496542365!3d27.41779977159335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d1b711f002ea9%3A0x827f6cf21ed660c0!2sAjeetgarh%2C%20Rajasthan%20332701!5e0!3m2!1sen!2sin!4v1772097715493!5m2!1sen!2sin" style={{ border: '0', width: '100%', height: '270px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                                </div>
                            </div>

                            <div className="col-lg-7">
                                <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                                    <div className="row gy-4">

                                        <div className="col-md-6">
                                            <label for="name-field" className="pb-2">Your Name</label>
                                            <input type="text" name="name" id="name-field" className="form-control" required="" />
                                        </div>

                                        <div className="col-md-6">
                                            <label for="email-field" className="pb-2">Your Email</label>
                                            <input type="email" className="form-control" name="email" id="email-field" required="" />
                                        </div>

                                        <div className="col-md-12">
                                            <label for="subject-field" className="pb-2">Subject</label>
                                            <input type="text" className="form-control" name="subject" id="subject-field" required="" />
                                        </div>

                                        <div className="col-md-12">
                                            <label for="message-field" className="pb-2">Message</label>
                                            <textarea className="form-control" name="message" rows="10" id="message-field" required=""></textarea>
                                        </div>

                                        <div className="col-md-12 text-center">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>

                                            <button type="submit">Send Message</button>
                                        </div>

                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>

                </section>







            </main>


            <footer id="footer" className="footer position-relative bg-dark text-white py-4">

                <div className="container text-center">

                    {/* Name */}
                    <h4 className="fw-bold text-white">Aarti Saini</h4>
                    <p className="mb-3">Frontend Developer | React Developer</p>

                    {/* Social Links */}
                    <div className="mb-3">
                        <a href="#" className="text-white mx-2 fs-4">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="#" className="text-white mx-2 fs-4">
                            <i className="bi bi-github"></i>
                        </a>
                        <a href="#" className="text-white mx-2 fs-4">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="mailto:yourmail@gmail.com" className="text-white mx-2 fs-4">
                            <i className="bi bi-envelope"></i>
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="small">
                        © {new Date().getFullYear()} Aarti Saini. All Rights Reserved.
                    </div>

                </div>

            </footer>
            {/* <!-- Scroll Top --> */}
            <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

            {/* <!-- Preloader --> */}
            {/* <div id="preloader"></div> */}


        </>

    )
}