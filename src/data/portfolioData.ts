export interface Publication {
  id: string;
  venue: string;
  type: "International Conference" | "National Conference" | "National Journal" | "Research Report";
  year: string;
  pdfUrl: string;
  tags: string[];
}

export const PERSONAL_INFO = {
  name: "DANG MINH DUC",
  englishName: "Dang Minh Duc",
  alias: "Leonas Kratos",
  title: "AMR ROBOTICS & EMBEDDED AI ENGINEER",
  affiliation: "Faculty of Electronics and Telecommunications, VNU University of Engineering and Technology (VNU-UET)",
  bio: "Research & Development Engineer specializing in Autonomous Mobile Robots (AMR), real-time embedded control (STM32, FreeRTOS), state estimation algorithms (UWB, EKF/UKF, Neural Network-aided Filters), and SLAM & Nav2 on the ROS 2 platform.",
  location: "Hanoi, Vietnam",
  email: "manzak.work@gmail.com",
  eduEmail: "23021798@vnu.edu.vn",
  github: "https://github.com/leonas-kratos",
  cvUrl: "/images/my_cv.pdf",
  avatar: "/images/DangMinhDuc.png",
  prizeImage: "/images/prize.png",
};

// 1. VEDC Competition section data
export const VEDC_DATA = {
  sectionTitle: "VEDC COMPETITION",
  sectionSubtitle: "Autonomous Electric Vehicle Design Competition (VEDC)",
  car: {
    title: "VEDC Autonomous Competition Vehicle",
    badge: "COMPETITION CAR",
    image: "/images/VEDC_CAR.png",
    description: "High-speed autonomous vehicle equipped with robust lane tracking, road sign recognition, and dynamic obstacle navigation on a structured competition track.",
    tags: ["VEDC CAR", "Embedded Control", "Line Following", "Sensors"],
  },
  teammates: {
    title: "VEDC 2025 Team Members",
    badge: "TEAMMATE",
    image: "/images/VEDC2025_Teamate.png",
    description: "Engineering team members collaborating on mechanical design, custom PCB motor driver development, and physical track benchmark trials.",
    tags: ["VEDC Team", "Teammates", "Hardware R&D"],
  },
  currentResearchCar: {
    title: "Autonomous Mobile Robot (AMR) CAR V2",
    badge: "CURRENT RESEARCH",
    image: "/images/Car_V2.png",
    description: "Next-generation AMR research platform: reinforced chassis, high-power STM32 controller, 2D long-range LiDAR, computer vision camera, and precision UWB indoor positioning.",
    tags: ["AMR Car V2", "ROS 2 Nav2", "STM32", "2D LiDAR", "UWB Positioning"],
  },
};

// 2. Conference Section data
export const CONFERENCE_DATA = {
  title: "REV 2025 CONFERENCE",
  subtitle: "National Conference on Electronics, Communications and Information Technology (REV-ECIT)",
  badge: "NATIONAL CONFERENCE",
  image: "/images/REV2025.png",
  description: "Presented research findings on non-linear state estimation filters (EKF, UKF, PF) for UWB-based indoor mobile robot localization before leading scholars and industry specialists.",
  tags: ["REV 2025", "Conference Presentation", "Keynote", "VNU-UET"],
};

// 3. Research & Presentation Section data
export const RESEARCH_PRESENTATION_DATA = [
  {
    id: "nckh-presentation",
    title: "Student Scientific Research Defense",
    badge: "RESEARCH PRESENTATION",
    image: "/images/NCKH_present.png",
    description: "Defending the scientific research project on autonomous mobile robot systems and GPS-denied indoor positioning before the academic evaluation board.",
    tags: ["Research Defense", "Presentation", "Academic Review"],
  },
  {
    id: "nckh-teamate",
    title: "Scientific Research Team Members",
    badge: "RESEARCH TEAMMATE",
    image: "/images/NCKH_teamate.png",
    description: "Dedicated student research members alongside our faculty advisor throughout the autonomous robotic navigation research program.",
    tags: ["Research Team", "Teammates", "VNU-UET Research"],
  },
];

// 4. Lab Members Section data
export const LAB_DATA = {
  title: "FET RESEARCH LAB & MEMBERS",
  subtitle: "Faculty of Electronics and Telecommunications Laboratory",
  badge: "LAB MEMBERS",
  image: "/images/Lab.png",
  description: "Advanced research workspace dedicated to robotics, embedded IoT architectures, and smart communications systems at VNU-UET.",
  tags: ["Research Lab", "Lab Members", "FET - VNU-UET"],
};

// 5. Publications Section data - Venue & Conference names ONLY
export const PUBLICATIONS: Publication[] = [
  {
    id: "atc-intl-conference",
    venue: "IEEE International Conference on Advanced Technologies for Communications (ATC)",
    type: "International Conference",
    year: "2024 / 2025",
    pdfUrl: "/Research/Paper/ATC_Final_manuscript.pdf",
    tags: ["International Conference", "IEEE ATC", "Peer-Reviewed"],
  },
  {
    id: "icaric-intl-conference",
    venue: "International Conference on Advanced Robotics and Intelligent Control (ICARIC)",
    type: "International Conference",
    year: "2024 / 2025",
    pdfUrl: "/Research/Paper/Neural_Network_Kalman_Filter_Indoor_Positioning.pdf",
    tags: ["International Conference", "ICARIC", "Peer-Reviewed"],
  },
  {
    id: "rev-jec-journal",
    venue: "REV Journal on Electronics and Communications (JEC)",
    type: "National Journal",
    year: "2024",
    pdfUrl: "/Research/Paper/JEC_remake_round_1_no_marking.pdf",
    tags: ["National Journal", "REV JEC", "Peer-Reviewed"],
  },
  {
    id: "rev-ecit-national-conference",
    venue: "National Conference on Electronics, Communications and Information Technology (REV-ECIT)",
    type: "National Conference",
    year: "2024 / 2025",
    pdfUrl: "/Research/Paper/REV_2025_the_last.pdf",
    tags: ["National Conference", "REV-ECIT", "National Forum"],
  },
  {
    id: "nckh-full-report",
    venue: "VNU-UET Student Scientific Research Report (Full Academic Report)",
    type: "Research Report",
    year: "2026",
    pdfUrl: "/Research/NCKH_2026.pdf",
    tags: ["Research Report", "VNU-UET", "Full Monograph"],
  },
];
