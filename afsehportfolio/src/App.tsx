import { useState, useEffect } from "react";

// ── Icons (inline SVG components) ──────────────────────────────────────────
const IconShield = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconTerminal = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
  </svg>
);
const IconCode = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const IconBriefcase = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);
const IconGraduationCap = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);
const IconAward = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);
const IconMail = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const IconPhone = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IconGithub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);
const IconLinkedin = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const IconGlobe = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/>
  </svg>
);
const IconLocation = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconChevronRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);
const IconCpu = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M15 20v2M9 2v2M9 20v2M2 15h2M20 15h2M2 9h2M20 9h2"/>
  </svg>
);
const IconSearch = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
  </svg>
);
const IconMenu = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const IconX = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

// ── Data ───────────────────────────────────────────────────────────────────
const cyberSkills = [
  { name: "Penetration Testing", level: 80 },
  { name: "Vulnerability Assessment", level: 78 },
  { name: "Reconnaissance & OSINT", level: 85 },
  { name: "Network Security", level: 75 },
  { name: "Web Security", level: 72 },
  { name: "Social Engineering", level: 70 },
  { name: "Exploitation", level: 68 },
];

const tools = [
  "Kali Linux", "Metasploit", "Wireshark", "Shodan", "Maltego",
  "DNSDumpster", "Wayback Machine", "SSH", "Pika Backup", "Grabify"
];

const programmingSkills = [
  { name: "Python", level: 75 },
  { name: "Bash / Shell", level: 72 },
  { name: "C/C++", level: 65 },
  { name: "JavaScript", level: 68 },
  { name: "PHP", level: 60 },
  { name: "SQL", level: 65 },
];

const systems = [
  "Linux", "Ubuntu", "Windows", "Active Directory",
  "Network Monitoring", "Testing Environments", "OOP", "Data Structures"
];

const experiences = [
  {
    company: "Techbiz",
    role: "Cybersecurity Intern",
    duration: "1.5 Months",
    type: "Current",
    color: "green",
    description:
      "Working with security assessment, reconnaissance, vulnerability identification, technical research, and practical penetration testing methodologies.",
  },
  {
    company: "Chashni – The Sweet House",
    role: "House Keeping Coordinator",
    duration: "August 2026 – Current",
    type: "Full-Time, Onsite",
    color: "blue",
    description:
      "Coordinate daily operations, staff communication, scheduling, documentation, task management, and operational issue resolution.",
  },
  {
    company: "U3C Computer College",
    role: "Manager & Computer Instructor",
    duration: "7 Months",
    type: "Part-Time, Onsite",
    color: "blue",
    description:
      "Managed computer labs, delivered computer instruction, supervised students, coordinated staff, maintained documentation, and provided technical support.",
  },
  {
    company: "Mehzab, Hudebia, Bright Career & Alpha Academy",
    role: "Lecturer & Administrative Coordinator",
    duration: "3 Years",
    type: "Part-Time, Onsite",
    color: "blue",
    description:
      "Delivered computer instruction, managed records and documentation, supported computer operations, internet connectivity, and coordinated with staff, students, and parents.",
  },
  {
    company: "Noor Photoshop",
    role: "Computer Operator",
    duration: "3 Months",
    type: "Part-Time, Onsite",
    color: "blue",
    description:
      "Operated printing and scanning systems, assisted with document preparation and online applications, performed basic troubleshooting, and maintained records.",
  },
];

const training = [
  {
    org: "Hack The Box Academy",
    title: "Cybersecurity Training",
    status: "Completed",
    description:
      "Foundational training in Linux, system setup, command-line environments, networking, network traffic analysis, Active Directory, web applications, and HTTP/web requests.",
    topics: ["Linux", "Networking", "Active Directory", "Web Apps", "Traffic Analysis"],
  },
  {
    org: "Infinity Hacks",
    title: "Cybersecurity Training",
    status: "Completed",
    description:
      "Practical training in Kali Linux, exploitation, Java exploit development, security testing environments, social engineering, environment setup, and network monitoring.",
    topics: ["Kali Linux", "Exploitation", "Social Engineering", "Network Monitoring", "Exploit Dev"],
  },
];

const projects = [
  {
    name: "AI-PECO",
    subtitle: "Final Year Project",
    tags: ["IoT", "Machine Learning", "Cloud Storage", "Web Dashboard"],
    description:
      "AI-powered energy management system integrating IoT, machine learning, cloud storage, and a web dashboard to monitor consumption, predict usage, estimate costs, and recommend energy-saving strategies.",
    featured: true,
    color: "green",
  },
  {
    name: "Round-Robin Scheduling",
    subtitle: "OS Algorithm",
    tags: ["Shell", "Operating Systems"],
    description:
      "Implemented a Round-Robin CPU scheduling algorithm using Shell scripting with time-quantum-based process scheduling.",
    featured: false,
    color: "blue",
  },
  {
    name: "Simple Cipher",
    subtitle: "Cryptography",
    tags: ["Python", "Cryptography"],
    description:
      "Python-based cipher implementing encryption and decryption operations for textual data.",
    featured: false,
    color: "blue",
  },
];

const additionalProjects = [
  "E-Challan Maker", "Face Lock System", "Photo Gallery",
  "TuckShop Management System", "Password Cracker",
  "Weather Web App", "Login Page", "Library Management System",
];

const certifications = [
  { title: "Codex 2024 Namal Poster Design Contest", year: "2024" },
  { title: "First Frontier International Conference", year: "2025" },
  { title: "Punjab Police Youth Internship Programme", year: "2023" },
  { title: "NextGen CodeQuest — Coding & Graphics Designing", year: "2024" },
];

const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "training", label: "Training" },
  { id: "certs", label: "Certs" },
  { id: "contact", label: "Contact" },
];

// ── Helpers ────────────────────────────────────────────────────────────────
function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// ── Sub-components ─────────────────────────────────────────────────────────
function SkillRow({ name, level, color }: { name: string; level: number; color: "blue" | "green" }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span style={{ fontSize: "0.8rem", color: "var(--text-primary)" }}>{name}</span>
        <span style={{ fontSize: "0.75rem", color: color === "blue" ? "var(--electric-blue)" : "var(--hacker-green)" }}>
          {level}%
        </span>
      </div>
      <div className="skill-bar-bg">
        <div
          className={color === "blue" ? "skill-bar-fill-blue" : "skill-bar-fill-green"}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function ExpCard({ exp }: { exp: typeof experiences[0] }) {
  return (
    <div className="card p-5 mb-4">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <div>
          <h3 style={{ color: exp.color === "green" ? "var(--hacker-green)" : "var(--electric-blue)", fontSize: "0.95rem", fontWeight: 700 }}>
            {exp.role}
          </h3>
          <p style={{ color: "var(--text-primary)", fontSize: "0.85rem", marginTop: "2px" }}>{exp.company}</p>
        </div>
        <div className="text-right">
          <span className={`tag ${exp.color === "green" ? "tag-green" : "tag-blue"}`}>{exp.duration}</span>
          <p style={{ color: "var(--text-muted)", fontSize: "0.72rem", marginTop: "4px" }}>{exp.type}</p>
        </div>
      </div>
      <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", lineHeight: "1.6" }}>{exp.description}</p>
    </div>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className={`card p-5 h-full ${project.featured ? "glow-green" : ""}`}
      style={project.featured ? { borderColor: "#00ff8833" } : {}}>
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 style={{
            color: project.color === "green" ? "var(--hacker-green)" : "var(--electric-blue)",
            fontSize: "1rem",
            fontWeight: 700
          }}>
            {project.name}
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginTop: "2px" }}>{project.subtitle}</p>
        </div>
        {project.featured && (
          <span className="tag tag-green" style={{ fontSize: "0.65rem" }}>Featured</span>
        )}
      </div>
      <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", lineHeight: "1.6", marginBottom: "14px" }}>
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className={`tag ${project.color === "green" ? "tag-green" : "tag-blue"}`}>{t}</span>
        ))}
      </div>
    </div>
  );
}

// ── Main App ────────────────────────────────────────────────────────────────
export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -60% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh", fontFamily: "'Courier New', monospace" }}>

      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: "rgba(5,10,15,0.95)",
        borderBottom: "1px solid var(--border-dim)",
        backdropFilter: "blur(10px)"
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "58px" }}>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{
                width: "30px", height: "30px",
                border: "1px solid var(--hacker-green)",
                borderRadius: "4px",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--hacker-green)"
              }}>
                <IconShield />
              </div>
              <span style={{ color: "var(--text-primary)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.05em" }}>
                <span style={{ color: "var(--electric-blue)" }}>AM</span>
                <span style={{ color: "var(--text-muted)", margin: "0 4px" }}>/</span>
                <span style={{ color: "var(--hacker-green)", fontSize: "0.72rem" }}>pentest</span>
              </span>
            </div>

            {/* Desktop Links */}
            <div style={{ display: "flex", gap: "28px" }} className="hidden-mobile">
              {navLinks.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`nav-link ${activeSection === id ? "active" : ""}`}
                  style={{
                    background: "none", border: "none", cursor: "pointer", padding: "0",
                    fontFamily: "'Courier New', monospace"
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="show-mobile"
              style={{ background: "none", border: "none", color: "var(--electric-blue)", cursor: "pointer" }}
            >
              {menuOpen ? <IconX /> : <IconMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{
            background: "var(--bg-secondary)",
            borderTop: "1px solid var(--border-dim)",
            padding: "16px 24px"
          }} className="show-mobile">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => { scrollTo(id); setMenuOpen(false); }}
                style={{
                  display: "block", width: "100%", textAlign: "left",
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: "'Courier New', monospace",
                  color: activeSection === id ? "var(--hacker-green)" : "var(--text-muted)",
                  fontSize: "0.82rem", letterSpacing: "0.08em",
                  padding: "10px 0",
                  borderBottom: "1px solid var(--border-dim)"
                }}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── CONTENT ─────────────────────────────────────────── */}
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

        {/* ── HERO / ABOUT ──────────────────────────────────── */}
        <section id="about" style={{ paddingTop: "100px", paddingBottom: "80px" }}>
          {/* Status Bar */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "5px 14px",
            background: "#00ff8812",
            border: "1px solid #00ff8833",
            borderRadius: "4px",
            marginBottom: "28px"
          }}>
            <span style={{
              width: "7px", height: "7px", borderRadius: "50%",
              background: "var(--hacker-green)",
              display: "inline-block"
            }} />
            <span style={{ color: "var(--hacker-green)", fontSize: "0.72rem", letterSpacing: "0.15em" }}>
              AVAILABLE — Cybersecurity Intern @ Techbiz
            </span>
          </div>

          {/* Name */}
          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 3.4rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "12px",
            letterSpacing: "-0.01em"
          }}>
            <span style={{ color: "var(--text-primary)" }}>M Afseh</span>{" "}
            <span style={{ color: "var(--electric-blue)" }}>Muneer</span>
          </h1>

          {/* Role */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <span style={{ color: "var(--hacker-green)", fontSize: "0.75rem" }}>
              <IconTerminal />
            </span>
            <span style={{ color: "var(--hacker-green)", fontSize: "0.85rem", letterSpacing: "0.12em" }}>
              CYBERSECURITY · PENETRATION TESTER
            </span>
          </div>

          {/* Bio */}
          <p style={{
            color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.8",
            maxWidth: "680px", marginBottom: "32px"
          }}>
            Software Engineering graduate with practical exposure to{" "}
            <span style={{ color: "var(--electric-blue)" }}>penetration testing</span>,{" "}
            <span style={{ color: "var(--electric-blue)" }}>vulnerability assessment</span>,{" "}
            reconnaissance, OSINT, Linux, network analysis, exploitation, and web security.
            Completed cybersecurity training through{" "}
            <span style={{ color: "var(--hacker-green)" }}>Hack The Box Academy</span> and{" "}
            <span style={{ color: "var(--hacker-green)" }}>Infinity Hacks</span>.
          </p>

          {/* Contact Info Row */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginBottom: "32px" }}>
            {[
              { icon: <IconPhone />, text: "+92 315 6783693", href: "tel:+923156783693" },
              { icon: <IconMail />, text: "Mcki.the.pentester@gmail.com", href: "mailto:Mcki.the.pentester@gmail.com" },
              { icon: <IconLocation />, text: "Canal Park, Gulberg, Lahore", href: null },
            ].map(({ icon, text, href }) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <span style={{ color: "var(--text-muted)" }}>{icon}</span>
                {href ? (
                  <a href={href} style={{
                    color: "var(--text-muted)", textDecoration: "none", fontSize: "0.8rem",
                    transition: "color 0.2s"
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--electric-blue)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
                  >{text}</a>
                ) : (
                  <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>{text}</span>
                )}
              </div>
            ))}
          </div>

          {/* Buttons Row */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <a href="https://github.com/AFSEH0-0" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <IconGithub /> @AFSEH0-0
            </a>
            <a href="https://linkedin.com/in/afsehmuneer" target="_blank" rel="noopener noreferrer" className="btn-primary btn-green">
              <IconLinkedin /> LinkedIn
            </a>
            <a href="https://mckisportfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <IconGlobe /> Portfolio
            </a>
          </div>

          {/* Quick Stats */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "1px",
            marginTop: "56px",
            background: "var(--border-dim)",
            border: "1px solid var(--border-dim)",
            borderRadius: "6px",
            overflow: "hidden"
          }}>
            {[
              { label: "Cybersecurity Intern", value: "@ Techbiz" },
              { label: "HTB Academy", value: "Certified" },
              { label: "Infinity Hacks", value: "Trained" },
              { label: "BS Software Eng.", value: "2026" },
            ].map(({ label, value }) => (
              <div key={label} style={{
                background: "var(--bg-card)",
                padding: "18px 20px",
                textAlign: "center"
              }}>
                <div style={{ color: "var(--hacker-green)", fontSize: "0.95rem", fontWeight: 700, marginBottom: "4px" }}>
                  {value}
                </div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.7rem", letterSpacing: "0.05em" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="divider" />

        {/* ── SKILLS ────────────────────────────────────────── */}
        <section id="skills" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
          <div className="section-title">
            <IconCpu />
            Technical Skills
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>

            {/* Cyber Skills */}
            <div className="card p-5">
              <h3 style={{ color: "var(--hacker-green)", fontSize: "0.78rem", letterSpacing: "0.15em", marginBottom: "20px" }}>
                ▸ CYBERSECURITY
              </h3>
              {cyberSkills.map((s) => (
                <SkillRow key={s.name} name={s.name} level={s.level} color="green" />
              ))}
            </div>

            {/* Programming */}
            <div className="card p-5">
              <h3 style={{ color: "var(--electric-blue)", fontSize: "0.78rem", letterSpacing: "0.15em", marginBottom: "20px" }}>
                ▸ PROGRAMMING
              </h3>
              {programmingSkills.map((s) => (
                <SkillRow key={s.name} name={s.name} level={s.level} color="blue" />
              ))}
            </div>

            {/* Tools */}
            <div className="card p-5">
              <h3 style={{ color: "var(--hacker-green)", fontSize: "0.78rem", letterSpacing: "0.15em", marginBottom: "16px" }}>
                ▸ TOOLS & PLATFORMS
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                {tools.map((t) => (
                  <span key={t} className="tag tag-green">{t}</span>
                ))}
              </div>
              <h3 style={{ color: "var(--electric-blue)", fontSize: "0.78rem", letterSpacing: "0.15em", marginBottom: "16px" }}>
                ▸ SYSTEMS & CORE
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {systems.map((s) => (
                  <span key={s} className="tag tag-blue">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ── EXPERIENCE ────────────────────────────────────── */}
        <section id="experience" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
          <div className="section-title">
            <IconBriefcase />
            Professional Experience
          </div>
          {experiences.map((exp) => (
            <ExpCard key={exp.company} exp={exp} />
          ))}
        </section>

        <hr className="divider" />

        {/* ── PROJECTS ──────────────────────────────────────── */}
        <section id="projects" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
          <div className="section-title">
            <IconCode />
            Projects
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginBottom: "28px" }}>
            {projects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>

          {/* Additional Projects */}
          <div className="card p-5">
            <h3 style={{ color: "var(--text-muted)", fontSize: "0.75rem", letterSpacing: "0.15em", marginBottom: "14px" }}>
              ▸ ADDITIONAL PROJECTS
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {additionalProjects.map((p) => (
                <div key={p} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <span style={{ color: "var(--electric-blue)" }}><IconChevronRight /></span>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ── TRAINING ──────────────────────────────────────── */}
        <section id="training" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
          <div className="section-title">
            <IconSearch />
            Cybersecurity Training
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {training.map((t) => (
              <div key={t.org} className="card p-5" style={{ borderColor: "#00ff8822" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <div>
                    <h3 style={{ color: "var(--hacker-green)", fontSize: "0.95rem", fontWeight: 700 }}>{t.org}</h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.78rem", marginTop: "2px" }}>{t.title}</p>
                  </div>
                  <span className="tag tag-green" style={{ fontSize: "0.65rem" }}>✓ {t.status}</span>
                </div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", lineHeight: "1.6", marginBottom: "14px" }}>
                  {t.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {t.topics.map((topic) => (
                    <span key={topic} className="tag tag-blue" style={{ fontSize: "0.68rem" }}>{topic}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="divider" />

        {/* ── EDUCATION ─────────────────────────────────────── */}
        <section style={{ paddingTop: "20px", paddingBottom: "60px" }}>
          <div className="section-title">
            <IconGraduationCap />
            Education
          </div>
          <div className="card p-5" style={{ borderColor: "#00b4ff22", maxWidth: "520px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <h3 style={{ color: "var(--electric-blue)", fontSize: "0.95rem", fontWeight: 700 }}>
                  BS Software Engineering
                </h3>
                <p style={{ color: "var(--text-primary)", fontSize: "0.85rem", marginTop: "4px" }}>
                  University of Mianwali
                </p>
              </div>
              <span className="tag tag-blue">2026</span>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ── CERTIFICATIONS ────────────────────────────────── */}
        <section id="certs" style={{ paddingTop: "20px", paddingBottom: "60px" }}>
          <div className="section-title">
            <IconAward />
            Certifications & Achievements
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px" }}>
            {certifications.map((c) => (
              <div key={c.title} className="card p-4" style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <span style={{ color: "var(--hacker-green)", flexShrink: 0 }}>
                  <IconAward />
                </span>
                <div>
                  <p style={{ color: "var(--text-primary)", fontSize: "0.83rem", lineHeight: "1.4" }}>{c.title}</p>
                  <p style={{ color: "var(--electric-blue)", fontSize: "0.72rem", marginTop: "3px" }}>{c.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="divider" />

        {/* ── CONTACT ───────────────────────────────────────── */}
        <section id="contact" style={{ paddingTop: "20px", paddingBottom: "80px" }}>
          <div className="section-title">
            <IconMail />
            Get In Touch
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {/* Contact Cards */}
            {[
              { icon: <IconMail />, label: "Email", value: "Mcki.the.pentester@gmail.com", href: "mailto:Mcki.the.pentester@gmail.com", color: "blue" },
              { icon: <IconPhone />, label: "Phone", value: "+92 315 6783693", href: "tel:+923156783693", color: "blue" },
              { icon: <IconGithub />, label: "GitHub", value: "@AFSEH0-0", href: "https://github.com/AFSEH0-0", color: "green" },
              { icon: <IconLinkedin />, label: "LinkedIn", value: "@afsehmuneer", href: "https://linkedin.com/in/afsehmuneer", color: "green" },
              { icon: <IconGlobe />, label: "Portfolio", value: "mckisportfolio.vercel.app", href: "https://mckisportfolio.vercel.app", color: "blue" },
              { icon: <IconLocation />, label: "Location", value: "Canal Park, Gulberg, Lahore", href: null, color: "blue" },
            ].map(({ icon, label, value, href, color }) => (
              <div
                key={label}
                className="card p-4"
                style={{ display: "flex", alignItems: "center", gap: "14px" }}
              >
                <div style={{
                  width: "36px", height: "36px",
                  border: `1px solid ${color === "green" ? "#00ff8833" : "#00b4ff33"}`,
                  borderRadius: "4px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: color === "green" ? "var(--hacker-green)" : "var(--electric-blue)",
                  flexShrink: 0
                }}>
                  {icon}
                </div>
                <div>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.7rem", letterSpacing: "0.1em", marginBottom: "2px" }}>
                    {label.toUpperCase()}
                  </p>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" style={{
                      color: "var(--text-primary)", textDecoration: "none", fontSize: "0.82rem",
                      transition: "color 0.2s"
                    }}
                      onMouseEnter={e => (e.currentTarget.style.color = color === "green" ? "var(--hacker-green)" : "var(--electric-blue)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--text-primary)")}
                    >
                      {value}
                    </a>
                  ) : (
                    <span style={{ color: "var(--text-primary)", fontSize: "0.82rem" }}>{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer style={{
        borderTop: "1px solid var(--border-dim)",
        padding: "24px",
        textAlign: "center"
      }}>
        <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", letterSpacing: "0.08em" }}>
          <span style={{ color: "var(--hacker-green)" }}>M Afseh Muneer</span>
          {" "}·{" "}
          <span style={{ color: "var(--electric-blue)" }}>Cybersecurity · Penetration Tester</span>
          {" "}·{" "}
          Lahore, Pakistan
        </p>
      </footer>

    </div>
  );
}
