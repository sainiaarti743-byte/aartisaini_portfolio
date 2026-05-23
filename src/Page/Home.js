import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

export default function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const formRef = useRef();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Apne EmailJS dashboard se in teen id's ko replace karein
        const serviceID = "service_tms53du";
        const templateID = "template_dfqed3m";
        const publicKey = "e5Dmi0rq7nmDzRoEf";

        emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
            .then((result) => {
                alert("Thank you! Your message has been sent successfully. 👍");
                formRef.current.reset(); // Form clear karne ke liye
            }, (error) => {
                console.error("EmailJS Error:", error);
                alert("Oops! Something went wrong. Please try again. 👎");
            });
    };

    return (
        <div style={{ overflowX: "hidden", width: "100%", position: "relative" }}>

            {/* Mobile Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="btn btn-info d-xl-none position-fixed"
                style={{ top: "15px", right: "15px", zIndex: "1100", borderRadius: "50%", width: "45px", height: "45px", color: "white" }}
            >
                <i className={`bi ${isSidebarOpen ? 'bi-x-lg' : 'bi-list'} fs-5`}></i>
            </button>

            {/* Header / Sidebar Component */}
            <header
                id="header"
                className="header d-flex flex-column"
                style={{
                    background: "linear-gradient(180deg, #0f2027, #203a43, #2c5364)",
                    height: "100vh",
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "300px",
                    zIndex: "1000",
                    transition: "all 0.3s ease",
                    transform: "translateX(0)"
                }}
            >
                <div className="profile-img d-flex align-items-center justify-content-center mt-4">
                    <div
                        style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            color: "#00d4ff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "36px",
                            fontWeight: "bold",
                            border: "2px solid #00d4ff",
                            boxShadow: "0px 0px 15px rgba(0, 212, 255, 0.3)"
                        }}
                    >
                        A
                    </div>
                </div>

                <a href="#hero" className="logo d-flex align-items-center justify-content-center text-decoration-none mt-2">
                    <h1 className="sitename text-white m-0" style={{ fontSize: "24px", fontWeight: "600" }}>Aarti Saini</h1>
                </a>

                <div className="social-links text-center my-3">
                    <a
                        href="https://t.me/your_username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="telegram mx-1 text-white opacity-75"
                    >
                        <i className="bi bi-telegram"></i>
                    </a>
                    <a href="/" className="facebook mx-1 text-white opacity-75"><i className="bi bi-facebook"></i></a>
                    <a href="/" className="instagram mx-1 text-white opacity-75"><i className="bi bi-instagram"></i></a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="linkedin mx-1 text-white opacity-75"><i className="bi bi-linkedin"></i></a>
                </div>

                <nav id="navmenu" className="navmenu w-100 px-3 overflow-y-auto">
                    <ul className="list-unstyled">
                        <li className="mb-2"><a href="#hero" className="nav-link text-white active py-2 d-flex align-items-center" onClick={() => setIsSidebarOpen(false)}><i className="bi bi-house navicon me-2 text-info"></i> Home</a></li>
                        <li className="mb-2"><a href="#about" className="nav-link text-white opacity-75 py-2 d-flex align-items-center" onClick={() => setIsSidebarOpen(false)}><i className="bi bi-person navicon me-2"></i> About</a></li>
                        <li className="mb-2"><a href="#skills" className="nav-link text-white opacity-75 py-2 d-flex align-items-center" onClick={() => setIsSidebarOpen(false)}><i className="bi bi-code-slash navicon me-2"></i> Skills</a></li>
                        <li className="mb-2"><a href="#resume" className="nav-link text-white opacity-75 py-2 d-flex align-items-center" onClick={() => setIsSidebarOpen(false)}><i className="bi bi-file-earmark-text navicon me-2"></i> Resume</a></li>
                        <li className="mb-2"><a href="#services" className="nav-link text-white opacity-75 py-2 d-flex align-items-center" onClick={() => setIsSidebarOpen(false)}><i className="bi bi-hdd-stack navicon me-2"></i> Services</a></li>
                        <li className="mb-2"><a href="#contact" className="nav-link text-white opacity-75 py-2 d-flex align-items-center" onClick={() => setIsSidebarOpen(false)}><i className="bi bi-envelope navicon me-2"></i> Contact</a></li>
                    </ul>
                </nav>
            </header>

            {/* Style hacks to strictly ensure zero-scroll and clean padding rules */}
            <style>{`
                * {
                    box-sizing: border-box !important;
                }
                .main-content-panel {
                    margin-left: 300px; 
                    width: calc(100% - 300px);
                    transition: all 0.3s ease;
                    overflow-x: hidden;
                }
                .section-wrapper {
                    padding: 60px 15px;
                    width: 100%;
                    overflow-x: hidden;
                }
                .row {
                    margin-right: 0 !important;
                    margin-left: 0 !important;
                }
                @media (max-width: 1199px) {
                    #header {
                        transform: ${isSidebarOpen ? "translateX(0)" : "translateX(-100%)"} !important;
                    }
                    .main-content-panel {
                        margin-left: 0px !important;
                        width: 100% !important;
                    }
                }
                .img-hero-circle {
                    width: 280px;
                    height: 280px;
                }
                @media (max-width: 576px) {
                    .img-hero-circle {
                        width: 210px;
                        height: 210px;
                    }
                }
            `}</style>

            {/* Main Content Layout Container */}
            <main className="main main-content-panel">

                {/* Hero Section */}
                <section
                    id="hero"
                    style={{
                        minHeight: "75vh", // Height ko 90vh se 75vh kiya taaki un-necessary extra space khatam ho
                        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                        padding: "40px 15px" // Top padding ko 80px se ghatakar 40px kiya taaki content upar move ho sake
                    }}
                >
                    <div className="container-fluid p-0">
                        <div className="row align-items-center gy-4 m-0"> {/* gy-5 ko gy-4 kiya taaki internal spacing compact ho */}
                            <div className="col-lg-7 p-0" data-aos="fade-right">

                                {/* Available for New Projects badge */}
                                <div className="d-inline-flex align-items-center mb-3 px-3 py-1 rounded-pill" style={{ background: "rgba(0, 212, 255, 0.1)", border: "1px solid rgba(0, 212, 255, 0.3)" }}>
                                    <span className="p-1 bg-success rounded-circle me-2" style={{ width: "8px", height: "8px", display: "inline-block" }}></span>
                                    <small style={{ color: "#00d4ff", fontWeight: "500", letterSpacing: "0.5px" }}>Available for New Projects</small>
                                </div>

                                <h1 className="fw-bold" style={{ fontSize: "calc(1.8rem + 2vw)", color: 'white', lineHeight: "1.2" }}>
                                    Hi, I'm <span style={{ color: "#00d4ff" }}>Aarti Saini</span>
                                </h1>

                                <h3 className="fw-normal mt-2" style={{ color: '#a0aec0', fontSize: "calc(1.1rem + 0.5vw)" }}>
                                    Building Seamless Web & Mobile Experiences
                                </h3>

                                <p className="mt-3" style={{ maxWidth: "550px", color: "#e2e8f0", lineHeight: "1.7", fontSize: "15px" }}>
                                    I specialize in engineering high-performance interfaces, reproducing complex pixel-perfect modular architectures, and crafting standard cross-platform components.
                                </p>

                                {/* Main Stack Badges */}
                                <div className="mt-4 d-flex flex-wrap gap-2 align-items-center">
                                    <span className="text-white-50 small fw-semibold me-2">Main Stack:</span>
                                    {["React.js", "React Native", "JavaScript", "Tailwind CSS", "Bootstrap"].map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="badge px-3 py-2 text-white"
                                            style={{
                                                backgroundColor: "rgba(255,255,255,0.06)",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                borderRadius: "6px",
                                                fontSize: "12px",
                                                fontWeight: "500"
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="mt-4 d-flex flex-wrap gap-3">
                                    <a href="#contact" className="btn btn-info text-white px-4 py-2.5 fw-semibold shadow-sm rounded-3">
                                        <i className="bi bi-envelope-fill me-2"></i>Hire Me
                                    </a>
                                    <a href="/assets/aartisainiresume.pdf" download className="btn btn-outline-light px-4 py-2.5 fw-semibold rounded-3">
                                        <i className="bi bi-download me-2"></i>Download CV
                                    </a>
                                </div>
                            </div>

                            {/* Right Side Metric Cards Grid */}
                            <div className="col-lg-5 p-0" data-aos="fade-left">
                                <div className="row g-3 m-0 justify-content-center">
                                    {[
                                        { number: "35+", label: "ERP & UI Modules Built", color: "#00d4ff", icon: "bi-layers" },
                                        { number: "100%", label: "Responsive Fluid Grid", color: "#50fa7b", icon: "bi-phone-vibrate" },
                                        { number: "10+", label: "Integrated Custom APIs", color: "#ffb86c", icon: "bi-cpu" },
                                        { number: "0", label: "Horizontal Layout Scroll", color: "#ff5555", icon: "bi-check-circle" }
                                    ].map((item, idx) => (
                                        <div className="col-sm-6 p-2" key={idx}>
                                            <div
                                                className="p-4 h-100 text-start"
                                                style={{
                                                    background: "rgba(255, 255, 255, 0.03)",
                                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                                    borderRadius: "12px",
                                                    boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                                                }}
                                            >
                                                <div className="fs-3 mb-2" style={{ color: item.color }}><i className={`bi ${item.icon}`}></i></div>
                                                <h3 className="fw-bold text-white mb-1">{item.number}</h3>
                                                <p className="text-white-50 m-0 small" style={{ lineHeight: "1.4" }}>{item.label}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="about section-wrapper bg-white">
                    <div className="container-fluid p-0" data-aos="fade-up">
                        <div className="border-start border-4 border-info ps-3 mb-4">
                            <h2 className="fw-bold m-0">About Me</h2>
                        </div>
                        <div className="row gy-4 align-items-center mt-2 m-0">
                            <div className="col-lg-4 text-center p-0" data-aos="fade-right" data-aos-delay="100">
                                <div style={{ maxWidth: "300px", margin: "auto", borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                                    <img src="/assets/img/hero.jpg" alt="Aarti Saini" className="img-fluid w-100" style={{ objectFit: "cover" }} />
                                </div>
                            </div>

                            <div className="col-lg-8 content p-0 ps-lg-4" data-aos="fade-left" data-aos-delay="100">
                                <h3 className="text-secondary fw-semibold">Frontend Developer & UI/UX Specialist</h3>
                                <p className="fst-italic text-muted py-2">
                                    Passionate engineer focused on transforming complex design blueprints into pixel-perfect, clean, and interactive dashboards.
                                </p>
                                <div className="row mt-3 gy-2 m-0">
                                    <div className="col-sm-6 p-0">
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-2"><i className="bi bi-chevron-right text-info me-2"></i><strong>Location:</strong> <span>Jaipur, Rajasthan, India</span></li>
                                            <li className="mb-2"><i className="bi bi-chevron-right text-info me-2"></i><strong>Experience:</strong> <span>1+ Year Professional</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6 p-0">
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-2"><i className="bi bi-chevron-right text-info me-2"></i><strong>Degree:</strong> <span>MCA (Pursuing)</span></li>
                                            <li className="mb-2"><i className="bi bi-chevron-right text-info me-2"></i><strong>Email:</strong> <span className="text-break">sainiaarti743@gmail.com</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="mt-3 mb-0">
                                    I specialize in building customized enterprise systems like School Management tools, ERP interfaces, and billing solutions. My core emphasis is on lightweight layout responsiveness and standardized modular architecture.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section id="stats" className="stats section-wrapper bg-light">
                    <div className="container-fluid p-0">
                        <div className="row gy-4 text-center m-0">
                            {[
                                { icon: "bi-emoji-smile text-primary", count: "20+", title: "Happy Clients" },
                                { icon: "bi-journal-richtext text-success", count: "35+", title: "Projects Completed" },
                                { icon: "bi-code-slash text-danger", count: "1+ Year", title: "Experience" },
                                { icon: "bi-layers text-warning", count: "10+", title: "Tech Frameworks" }
                            ].map((stat, idx) => (
                                <div className="col-sm-6 col-lg-3 px-2" key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
                                    <div className="p-4 shadow-sm rounded border-0 bg-white h-100">
                                        <i className={`bi ${stat.icon} fs-1`}></i>
                                        <h3 className="mt-2 fw-bold text-dark mb-1">{stat.count}</h3>
                                        <p className="mb-0 text-muted small text-uppercase fw-semibold">{stat.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="skills section-wrapper bg-white">
                    <div className="container-fluid p-0" data-aos="fade-up">
                        <div className="border-start border-4 border-success ps-3 mb-5">
                            <h2 className="fw-bold m-0">Technical Expertise</h2>
                        </div>
                        <div className="row gy-4 m-0">
                            <div className="col-md-6 px-2 pe-md-4">
                                {[
                                    { name: "React.js", value: 90, color: "bg-primary" },
                                    { name: "React Native (CLI)", value: 85, color: "bg-info" },
                                    { name: "JavaScript (ES6+)", value: 80, color: "bg-warning" },
                                    { name: "Tailwind CSS / Bootstrap", value: 90, color: "bg-dark" }
                                ].map((skill, index) => (
                                    <div className="mb-4" key={index}>
                                        <div className="d-flex justify-content-between mb-1">
                                            <span className="fw-semibold text-secondary">{skill.name}</span>
                                            <span className="text-muted small">{skill.value}%</span>
                                        </div>
                                        <div className="progress" style={{ height: "6px", borderRadius: "10px" }}>
                                            <div className={`progress-bar ${skill.color}`} role="progressbar" style={{ width: `${skill.value}%`, borderRadius: "10px" }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="col-md-6 px-2 ps-md-4">
                                {[
                                    { name: "HTML5 / CSS3", value: 95, color: "bg-success" },
                                    { name: "REST API Integration", value: 85, color: "bg-secondary" },
                                    { name: "MongoDB Database", value: 70, color: "bg-info" },
                                    { name: "Version Control (Git)", value: 85, color: "bg-danger" }
                                ].map((skill, index) => (
                                    <div className="mb-4" key={index}>
                                        <div className="d-flex justify-content-between mb-1">
                                            <span className="fw-semibold text-secondary">{skill.name}</span>
                                            <span className="text-muted small">{skill.value}%</span>
                                        </div>
                                        <div className="progress" style={{ height: "6px", borderRadius: "10px" }}>
                                            <div className={`progress-bar ${skill.color}`} role="progressbar" style={{ width: `${skill.value}%`, borderRadius: "10px" }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Resume Section */}
                <section id="resume" className="resume section-wrapper bg-light">
                    <div className="container-fluid p-0" data-aos="fade-up">
                        <div className="border-start border-4 border-primary ps-3 mb-5">
                            <h2 className="fw-bold m-0">Professional Resume</h2>
                        </div>
                        <div className="row gy-4 m-0">
                            <div className="col-lg-6 px-2 pe-lg-4">
                                <h4 className="text-primary fw-bold mb-4"><i className="bi bi-mortarboard-fill me-2"></i> Education</h4>
                                <div className="ps-3 border-start border-2 border-primary position-relative mb-4">
                                    <h5 className="fw-bold mb-1 text-dark">Master of Computer Applications (MCA)</h5>
                                    <span className="badge bg-primary mb-2">2025 - 2026</span>
                                    <p className="text-muted small mb-0"><em>Suresh Gyan Vihar University, Jaipur</em></p>
                                </div>
                                <div className="ps-3 border-start border-2 border-primary position-relative mb-4">
                                    <h5 className="fw-bold mb-1 text-dark">Bachelor of Science (B.Sc.)</h5>
                                    <span className="badge bg-primary mb-2">2023 - 2025</span>
                                    <p className="text-muted small mb-0"><em>Shekhawati University, Sikar</em></p>
                                </div>
                            </div>

                            <div className="col-lg-6 px-2 ps-lg-4">
                                <h4 className="text-success fw-bold mb-4"><i className="bi bi-briefcase-fill me-2"></i> Experience & Projects</h4>
                                <div className="ps-3 border-start border-2 border-success position-relative mb-4">
                                    <h5 className="fw-bold mb-1 text-dark">React JS & React Native Developer</h5>
                                    <span className="badge bg-success mb-2">Jan 2025 - Present</span>
                                    <p className="text-muted small mb-1"><em>ARJ Technology, Jaipur</em></p>
                                    <ul className="small text-muted ps-3 mb-0">
                                        <li>Developing management dashboards (Visitor Lists, Exam Groups, Billings).</li>
                                        <li>Building layout architectures using optimized React Functional Hooks.</li>
                                        <li>Integrated customized workflows with REST APIs & Secure Token flows.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="services section-wrapper bg-white">
                    <div className="container-fluid p-0" data-aos="fade-up">
                        <div className="border-start border-4 border-info ps-3 mb-5">
                            <h2 className="fw-bold m-0">Services</h2>
                        </div>
                        <div className="row gy-4 m-0">
                            {[
                                { icon: "bi-code-slash text-primary", title: "Frontend Web Apps", desc: "Building modular, robust, and clean ERP systems using React.js and modern UI frameworks." },
                                { icon: "bi-phone text-info", title: "Cross-Platform Apps", desc: "Developing production-grade standard mobile interfaces using React Native CLI workflows." },
                                { icon: "bi-server text-success", title: "Backend API Sync", desc: "Connecting lightweight custom asynchronous endpoints securely with client systems." },
                                { icon: "bi-palette text-warning", title: "Screen to Code UI", desc: "Transforming design snapshots and blueprints into absolute pixel-perfect structures." }
                            ].map((srv, idx) => (
                                <div className="col-sm-6 col-lg-3 px-2" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                                    <div className="p-4 rounded border h-100 shadow-sm bg-white text-center">
                                        <div className="mb-3"><i className={`bi ${srv.icon} fs-2`}></i></div>
                                        <h5 className="fw-bold mb-2 text-dark" style={{ fontSize: "16px" }}>{srv.title}</h5>
                                        <p className="text-muted small mb-0">{srv.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="contact section-wrapper bg-light">
                    <div className="container-fluid p-0" data-aos="fade-up">
                        <div className="border-start border-4 border-danger ps-3 mb-5">
                            <h2 className="fw-bold m-0">Contact</h2>
                        </div>
                        <div className="row gy-4 m-0">
                            <div className="col-lg-5 px-2">
                                <div className="p-4 bg-white rounded shadow-sm h-100">
                                    <div className="d-flex align-items-start mb-4">
                                        <i className="bi bi-geo-alt text-danger fs-4 me-3"></i>
                                        <div>
                                            <h5 className="fw-bold mb-1">Location</h5>
                                            <p className="text-muted small mb-0">Jaipur, Rajasthan, India</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <i className="bi bi-envelope text-danger fs-4 me-3"></i>
                                        <div>
                                            <h5 className="fw-bold mb-1">Email</h5>
                                            <p className="text-muted small mb-0 text-break">sainiaarti743@gmail.com</p>
                                        </div>
                                    </div>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14166.60600904393!2d75.81799496542365!3d27.41779977159335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d1b711f002ea9%3A0x827f6cf21ed660c0!2sAjeetgarh%2C%20Rajasthan%20332701!5e0!3m2!1sen!2sin!4v1772097715493!5m2!1sen!2sin"
                                        style={{ border: '0', width: '100%', height: '200px', borderRadius: '8px' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Google Map"
                                    ></iframe>
                                </div>
                            </div>
                            <div className="col-lg-7 px-2">
                                <div className="p-4 bg-white rounded shadow-sm h-100">
                                    {/* Form me ref aur names add kiye hain */}
                                    <form ref={formRef} onSubmit={sendEmail} className="row g-3 m-0">
                                        <div className="col-md-6 p-1">
                                            <label htmlFor="name-field" className="form-label small fw-semibold text-secondary">Your Name</label>
                                            <input type="text" name="from_name" id="name-field" className="form-control" required />
                                        </div>
                                        <div className="col-md-6 p-1">
                                            <label htmlFor="email-field" className="form-label small fw-semibold text-secondary">Your Email</label>
                                            <input type="email" name="from_email" id="email-field" className="form-control" required />
                                        </div>
                                        <div className="col-12 p-1">
                                            <label htmlFor="subject-field" className="form-label small fw-semibold text-secondary">Subject</label>
                                            <input type="text" name="subject" id="subject-field" className="form-control" required />
                                        </div>
                                        <div className="col-12 p-1">
                                            <label htmlFor="message-field" className="form-label small fw-semibold text-secondary">Message</label>
                                            <textarea name="message" id="message-field" className="form-control" rows="4" required></textarea>
                                        </div>
                                        <div className="col-12 p-1 text-center mt-3">
                                            <button type="submit" className="btn btn-danger w-100 py-2 fw-semibold shadow-sm">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}