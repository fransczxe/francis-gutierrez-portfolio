// Strictly verified achievements extracted directly from the provided resume
const PORTFOLIO_DATA = {
  records: [
    {
      id: "internship-rhu",
      category: "internship",
      badge: "Clinical & Community Health",
      badgeColor: "emerald",
      title: "Student Intern",
      organization: "San Enrique Rural Health Unit",
      date: "Jan 13, 2025 - May 19, 2025",
      shortDesc: "Assisted in minor surgical procedures, maternal and newborn care, clinical laboratory testing, urological interventions, and pharmacy operations while adhering to established clinical protocols.",
      fullDetails: "Assisted in minor surgical procedures, maternal and newborn care, clinical laboratory testing, urological interventions, and pharmacy operations while adhering to established clinical protocols and infection control standards. Conducted patient assessments, health interviews, and screenings, demonstrating strong communication, clinical reasoning, and patient-centered care. Collaborated effectively with a multidisciplinary healthcare team in delivering community-based health services. Earned a perfect internship grade of 100 and received a 'Very Good' evaluation from the RHU Head Nurse for exemplary competence, professionalism, punctuality, and interpersonal skills.",
      metric: "Grade: 100 / Very Good Evaluation",
      location: "San Enrique"
    },
    {
      id: "award-artian",
      category: "awards",
      badge: "Science & Innovation",
      badgeColor: "cyan",
      title: "Most Outstanding Artian in Science & Innovation",
      organization: "Mykonexus (Research Team Leader)",
      date: "2026",
      shortDesc: "Awarded by the College of Arts and Sciences (CAS) Mutien Marie Awards for leadership and excellence in biological research innovation.",
      fullDetails: "Recognized as Research Team Leader for Mykonexus during the College of Arts and Sciences (CAS) Mutien Marie Awards 2026 for exceptional research leadership and innovation in biological sciences.",
      metric: "Mutien Marie Awards 2026",
      location: "USLS Bacolod"
    },
    {
      id: "edu-usls",
      category: "education",
      badge: "Higher Education",
      badgeColor: "indigo",
      title: "Bachelor of Science in Biology",
      organization: "University of St. La Salle - Bacolod",
      date: "Class of 2026",
      shortDesc: "Dean's Lister (Second Honors) and CHED Tertiary Education Subsidy (TES) Scholar with clinical internship and biological research background.",
      fullDetails: "Completed BS Biology degree requirements as a Dean's Lister (Second Honors) and CHED Tertiary Education Subsidy (TES) Scholar. Built specialized competencies in laboratory protocols, field research, biosafety, and scientific communication.",
      metric: "Dean's Lister / TES Scholar",
      location: "Bacolod City"
    },
    {
      id: "cert-clsu",
      category: "education",
      badge: "Biotechnology Certification",
      badgeColor: "emerald",
      title: "Intensive Training on Mushroom Pharming",
      organization: "Center for Mushroom Research & Development - CLSU",
      date: "Certified",
      shortDesc: "Research and biotechnology-centered training program facilitated by Rich Milton Dulay, PhD, DPAM.",
      fullDetails: "Completed intensive research- and biotechnology-centered training on mushroom pharming at Central Luzon State University, Science City of Muñoz, Nueva Ecija under Dr. Rich Milton Dulay.",
      metric: "CLSU Science City",
      location: "Nueva Ecija"
    },
    {
      id: "award-biota",
      category: "awards",
      badge: "Research Presentation",
      badgeColor: "cyan",
      title: "Presenter, BIOTA Tertiary Research Fair",
      organization: "Biology Teachers Association - Western Visayas Chapter",
      date: "2026",
      shortDesc: "Selected research presenter at the regional tertiary research fair hosted at West Visayas State University.",
      fullDetails: "Presented biological research at the Biology Teachers Association of the Philippines (BIOTA) Western Visayas Chapter Research Fair held at West Visayas State University, La Paz, Iloilo City.",
      metric: "BIOTA Research Fair",
      location: "Iloilo City"
    },
    {
      id: "lead-council",
      category: "leadership",
      badge: "Executive Leadership",
      badgeColor: "indigo",
      title: "Director for Multimedia Arts",
      organization: "4th Year Batch Council - University of St. La Salle",
      date: "2025 - 2026",
      shortDesc: "Led multimedia development, visual branding, and communication materials for batch-wide programs and initiatives.",
      fullDetails: "Spearheaded visual communications, digital branding, and multimedia assets for 4th Year Batch Council events and student affairs program implementations at USLS.",
      metric: "Student Council",
      location: "USLS Bacolod"
    },
    {
      id: "lead-biobeat",
      category: "leadership",
      badge: "Publication Editorial",
      badgeColor: "indigo",
      title: "Layout, Graphics & Photography Editor",
      organization: "USLS The BioBeat",
      date: "2023 - 2026",
      shortDesc: "Oversaw publication layout design, photography, and visual storytelling while maintaining brand standards.",
      fullDetails: "Served as Layout, Graphics, and Photography Editor (2024-2025) and Layout/Graphics Artist/Photojournalist (2023-2024, 2025-2026) for USLS The BioBeat academic publication.",
      metric: "Publication Editorial",
      location: "USLS Bacolod"
    },
    {
      id: "award-press",
      category: "awards",
      badge: "Journalism Honors",
      badgeColor: "cyan",
      title: "First Runner-Up, On-the-Spot Page Layout",
      organization: "Lasallian Collegiate Press Conference",
      date: "2025",
      shortDesc: "Awarded by USG-DPR and The Spectrum for excellence in live collegiate page design and publication layout.",
      fullDetails: "Secured First Runner-Up honors in On-the-Spot Page Layout and Design at the Lasallian Collegiate Press Conference organized by USG-DPR and The Spectrum.",
      metric: "The Spectrum Award",
      location: "USLS Bacolod"
    }
  ],
  skills: [
    "Laboratory Procedures & Protocols",
    "Field Research & Biological Sampling",
    "Biosafety & Standard Compliance",
    "Clinical Laboratory Testing",
    "Minor Surgical Procedure Assisting",
    "Scientific & Medical Communication",
    "Analytical Problem Solving",
    "Maternal & Newborn Care Support",
    "Multidisciplinary Healthcare Collaboration",
    "Publication Layout & Visual Design"
  ],
  seminars: [
    {
      title: "Philippine Society for Microbiology National Scientific Convention",
      speaker: "Microbiology in the Digital Era | Speaker: Jomar Rabajante, PhD (Dean, Graduate School, UP Los Baños)"
    },
    {
      title: "BioSpeaks: Irrawaddy Dolphin Protection and Conservation",
      speaker: "University of St. La Salle | Speaker: Jozette Hisuan, MSc (Animal Biology Division, UP Los Baños)"
    },
    {
      title: "BioSpeaks Webinar: Genetic Variants Evaluation via CRISPR-Based Transactivation",
      speaker: "Virtual (Zoom) | Speaker: Emmylou Cortez Nicolas, MSc (Neurogenetics Program, Univ. of Adelaide)"
    },
    {
      title: "BioSpeaks Webinar: Beyond the Clinic - Public Health Research Policy",
      speaker: "Virtual (Zoom) | Speaker: Ralph Nico T. Selibio, MD, MPM-HSD (Public Health Physician, Canada)"
    }
  ]
};