document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    if (header) {
        const height = header.offsetHeight + 20;
        document.documentElement.style.setProperty("--header-offset", height + "px");
    }
});

(function() {
    const header = document.querySelector('header');
    const badge = document.querySelector('.badge');
    const title = document.getElementById('headline');

    function updateHeaderH() {
        const h = header ? header.offsetHeight : 96;
        document.documentElement.style.setProperty('--header-h', h + 'px');
    }

    function centerBadge() {
        if (!header || !badge || !title) return;
        const headerBottom = header.getBoundingClientRect().bottom + window.scrollY;
        const titleTop = title.getBoundingClientRect().top + window.scrollY;
        const gap = Math.max(0, titleTop - headerBottom);
        const badgeH = badge.offsetHeight || 0;

        let mt = Math.max(8, Math.round((gap - badgeH) / 2));
        mt = Math.max(0, mt - 3);
        badge.style.marginTop = mt + 'px';

        // align Core Stack card top with badge (desktop only)
        const core = document.getElementById('coreCard');
        if (core) {
            if (window.matchMedia('(min-width: 981px)').matches) {
                core.style.marginTop = mt + 'px';
            } else {
                core.style.marginTop = ''; // reset on mobile
            }
        }
    }

    const run = () => {
        updateHeaderH();
        centerBadge();
    };
    window.addEventListener('load', run);
    window.addEventListener('resize', run);
    document.fonts && document.fonts.addEventListener('loadingdone', run);
})();

const SITE_DATA = {
    name: "A Saurav",
    role: "Automation Developer",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=AS",
    badge: "Quality and Automation Engineer • 6+ Years",
    headline: "I deliver high-quality and reliable products through proactive quality engineering.",
    subheadline: "Specializing in UI/API automation, performance testing, and CI/CD integration.",
    email: "mailto:srv.work@outlook.com",
    mobile: "+91 9039 226 554",
    linkedin: "https://www.linkedin.com/in/a-saurav/",
    contactSummary: "Open to Automation / Quality Engineering roles.",
    coreStack: ["Java", "Selenium", "REST Assured", "TestNG", "JUnit", "Cucumber", "Postman", "JMeter", "Git", "Jenkins"],
    domains: ["BFSI", "E‑commerce"],
    keyPoints: [
        "🚀 50% faster regression cycles through optimized automation frameworks.",
        "🤝 Proven individual contributor and team collaborator.",
        "📊 Defect free products increasing end-user satisfaction."
    ],
    skills: ["Selenium", "Java", "Cucumber BDD", "Rest API / Rest Assured", "JMeter", "Xray", "Agile (Scrum)", "Jenkins", "Maven / Gradle", "TestNG / Junit", "JIRA", "Git / Bitbucket", "Postman / Insomnia", "Confluence", "GitHub Co-pilot", "Sql", "HashiCorp Terraform"],
    experience: [{
            company: "HSBC",
            role: "Senior Software Engineer",
            period: "June 2024 - Present",
            bullets: ["Automated API testing for Spring Cloud Gateway migration from Netflix Zuul using Rest Assured, achieving 99% defect-free deployment.", "Led performance testing via JMeter for cloud infrastructure, improving system reliability and scalability by 40% and reducing response time by 35% and boosting throughput efficiency under high concurrency.", "Enhanced test automation frameworks using GitHub Co-pilot, cutting regression testing time by 50% and ensuring seamless CI/CD pipeline integration."]
        },
        {
            company: "Barclays",
            role: "Automation Developer",
            period: "April 2023 - May 2024",
            bullets: ["In project 1, worked in a team of 3 and in project 2, worked as an individual automation contributor.", "Authored and managed test cases in Xray, aligning with functional and technical requirements.", "Identified, reported, and tracked defects to resolution through JIRA, ensuring a smooth release process.", "Performed functional API testing using Postman and Insomnia to validate service endpoints"]
        },
        {
            company: "Publicis Sapient",
            role: "Quality Engineer L2",
            period: "Nov 2021 - April 2023",
            bullets: ["Developed Selenium-based UI automation scripts using Java (BDD framework).", "In-charge of integrating, initiating and monitoring regression suite on Jenkins-like environment.", "Created and maintained an automation knowledge base on Confluence to document best practices and improvements."]
        },
        {
            company: "TechSSB",
            role: "Associate Software Engineer",
            period: "July 2019 - Sept 2021",
            bullets: ["Utilized BDD framework with POM design pattern for automation.", "Authored test cases using Selenium and Java.", "Utilized JIRA for bug tracking & project management."]
        }
    ],
    certifications: ["HashiCorp Certified: Terraform Associate (003)"],
    education: [{
            course: "Bachelor of Engineering (Computer Science)",
            college: "Rungta College of Engineering and Technology, Bhilai",
            period: "2013 - 2017"
        },
        {
            course: "Higher Secondary (Mathematics)",
            college: "Kendriya Vidyalaya, Kusmunda",
            period: "2012 - 2013"
        },
    ],
    achievements: ["HSBC Circle of Excellence 2025", "HSBC Circle of Excellence 2024"],
    theme: "light"
};

function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

function setHref(id, href) {
    const el = document.getElementById(id);
    if (el) el.href = href;
}

function renderChips(id, items) {
    document.getElementById(id).innerHTML = items.map(i => `<span class="chip">${i}</span>`).join('');
}

function renderTimeline(list) {
    document.getElementById('expTimeline').innerHTML = list.map(e =>
        `<div class="tl-item">
            <h3>${e.company} | ${e.role}</h3>
            <div class="when">${e.period}</div>
            <ul>${e.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
        </div>`).join('');
}

function renderEducationTimeline(list) {
    document.getElementById('educationTimeline').innerHTML = list.map(e =>
        `<div class="tl-item">
            <h3>${e.course}</h3>
            <div class="h4">${e.college}</div>
            <div class="when">${e.period}</div>
        </div>`).join('');
}

function renderList(id, items) {
    document.getElementById(id).innerHTML = items.map(i => `<li>${i}</li>`).join('');
}

(function init() {
    setText('brandName', SITE_DATA.name);
    document.getElementById('avatar').src = SITE_DATA.avatar;
    const badgeEl = document.getElementById('badge');
    const [role, exp] = SITE_DATA.badge.split('•').map(s => s.trim());
    badgeEl.innerHTML = `<span class="badge-text" data-role="${role}" data-exp="${exp}"></span>`;
    setText('headline', SITE_DATA.headline);
    setText('subheadline', SITE_DATA.subheadline);
    setHref('primaryCTA', SITE_DATA.github);
    setHref('secondaryCTA', SITE_DATA.linkedin);
    setHref('cvBtn', SITE_DATA.CVPdf || '#');
    setText('contactSummary', SITE_DATA.contactSummary);

    document.getElementById('kp1').textContent = SITE_DATA.keyPoints[0];
    document.getElementById('kp2').textContent = SITE_DATA.keyPoints[1];
    document.getElementById('kp3').textContent = SITE_DATA.keyPoints[2];

    renderChips('coreStack', SITE_DATA.coreStack);
    renderChips('domains', SITE_DATA.domains);
    renderChips('skillsChips', SITE_DATA.skills);
    renderTimeline(SITE_DATA.experience);
    renderEducationTimeline(SITE_DATA.education);
    renderList('certList', SITE_DATA.certifications);
    renderList('achList', SITE_DATA.achievements);

    setText('footerName', SITE_DATA.name);
    document.getElementById('year').textContent = new Date().getFullYear();
    document.body.className = `theme--${SITE_DATA.theme}`;

    const emailBtn = document.getElementById('emailBtn');
    emailBtn.href = SITE_DATA.email;
    document.getElementById('emailText').textContent = SITE_DATA.email.replace('mailto:', '');

    const mobileBtn = document.getElementById('mobileBtn');
    mobileBtn.href = `tel:${SITE_DATA.mobile}`;
    document.getElementById('mobileText').textContent = SITE_DATA.mobile;

    const linkedinBtn = document.getElementById('linkedinBtn');
    linkedinBtn.href = SITE_DATA.linkedin;
})();

function toggleTheme() {
    const themes = ["ocean", "plum", "light"];
    let current = themes.indexOf(SITE_DATA.theme);
    SITE_DATA.theme = themes[(current + 1) % themes.length];
    document.body.className = `theme--${SITE_DATA.theme}`;
}

function isMobileDevice() {
    return /Mobi|android|ipad|imobile|ipod|windows phone/i.test(navigator.userAgent);
}

// Display menu button only on mobile
const menuToggle = document.getElementById('menuToggle');
if (isMobileDevice()) {
    menuToggle.style.display = 'block';
}

// Toggle mobile menu
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling while the menu is active
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close menu when any section link is clicked
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
});

function downloadCV(event) {
    event.preventDefault();
    const link = document.createElement('a');
    link.href = 'files/ASaurav_Automation_6.pdf';
    if (isMobileDevice()) {
        // Trigger the download on mobile
        link.download = 'ASaurav_Automation_6.pdf'; // Optional: specify the filename
    } else {
        // Open the cv in a new tab for desktop
        link.target = '_blank';
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.querySelectorAll('a[data-target]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = this.getAttribute('data-target');
    const menu = document.querySelector('.menu');

    // Close mobile menu if open
    if (menu && menu.classList.contains('active')) {
      menu.classList.remove('active');
    }

    // Scroll behavior
    setTimeout(() => {
      if (target === 'top') {
        // Scroll to the very top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(target);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // adjust for fixed header
            behavior: 'smooth'
          });
        }
      }
    }, 200);
  });
});