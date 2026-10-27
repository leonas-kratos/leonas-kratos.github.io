export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  type: "International Conference" | "National Conference" | "National Journal" | "Research Report";
  year: string;
  pdfUrl: string;
  tags: string[];
}

export const PERSONAL_INFO = {
  name: "Đặng Minh Đức",
  englishName: "Dang Minh Duc",
  alias: "Leonas Kratos",
  title: "UWB Indoor Positioning & State Estimation Researcher",
  department: "Department of Telecommunication Systems",
  faculty: "Faculty of Electronics and Telecommunications (FET)",
  university: "VNU University of Engineering and Technology (VNU-UET)",
  affiliation: "Department of Telecommunication Systems, Faculty of Electronics and Telecommunications (FET), VNU University of Engineering and Technology (VNU-UET)",
  bio: "Final-year student at the Department of Telecommunication Systems, VNU-UET. Research focused on GPS-denied indoor localization using Ultra-Wideband (UWB) technology and non-linear state estimation algorithms (EKF, UKF, PF) applied to Autonomous Mobile Robots.",
  location: "Hanoi, Vietnam",
  email: "manzak.work@gmail.com",
  eduEmail: "23021798@vnu.edu.vn",
  github: "https://github.com/leonas-kratos",
  cvUrl: "/images/my_cv.pdf",
  avatar: "/images/DangMinhDuc.png",
  prizeImage: "/images/prize.png",
  hardwareSkills: ["STM32", "FreeRTOS", "DWM1001 UWB Modules", "PCB Design", "Embedded C/C++"],
  navigationSkills: ["ROS 2", "Nav2", "2D LiDAR", "SLAM", "EKF / UKF / PF Sensor Fusion"],
};

export const STATS_DATA = [
  { label: "Publications", value: 5, suffix: "" },
  { label: "Intl Conferences", value: 2, suffix: "" },
  { label: "VEDC Competition Award", value: 1, suffix: "" },
  { label: "NCKH Research Award", value: 1, suffix: "" },
];

// 1. VEDC Competition section data
export const VEDC_DATA = {
  sectionTitle: "VEDC COMPETITION",
  sectionSubtitle: "Autonomous Electric Vehicle Design Competition — embedded control, lane tracking, obstacle avoidance on STM32 platform",
  car: {
    title: "VEDC Autonomous Competition Vehicle",
    badge: "COMPETITION CAR",
    image: "/images/VEDC_CAR.png",
    description: "Autonomous electric racing vehicle featuring real-time lane tracking, obstacle avoidance algorithms, and low-latency motor driving engineered on an STM32 microcontroller with FreeRTOS.",
    tags: ["STM32", "FreeRTOS", "Lane Tracking", "Embedded C++", "Sensors"],
  },
  teammates: {
    title: "VEDC 2025 Team Members",
    badge: "TEAMMATE",
    image: "/images/VEDC2025_Teamate.png",
    description: "FET VNU-UET student engineering team collaborating on chassis mechanics, motor driver circuits, embedded firmware implementation, and competition track testing.",
    tags: ["VEDC 2025", "Hardware Team", "Chassis & Circuits", "VNU-UET"],
  },
  currentResearchCar: {
    title: "Autonomous Mobile Robot (AMR) CAR V2",
    badge: "RESEARCH VEHICLE",
    image: "/images/Car_V2.png",
    description: "Application platform for UWB-IPS research: custom robotic chassis integrating STM32 real-time motor controller, Decawave DWM1001 UWB transceiver modules, 2D LiDAR, and ROS 2 Nav2 stack.",
    tags: ["AMR Platform", "UWB DWM1001", "STM32", "ROS 2", "2D LiDAR SLAM"],
  },
};

// 2. Conference Section data
export const CONFERENCE_DATA = {
  title: "REV 2025 CONFERENCE",
  subtitle: "National Conference on Electronics, Communications and Information Technology (REV-ECIT)",
  badge: "NATIONAL CONFERENCE",
  image: "/images/REV2025.png",
  description: "Presented research paper: 'Evaluation of the applicability of state estimation filters (EKF, UKF, PF) for indoor robot positioning' using Ultra-Wideband (UWB) in GPS-denied environments.",
  tags: ["REV-ECIT 2025", "UWB Positioning", "EKF / UKF / PF", "Oral Defense"],
};

// 3. Research & Presentation Section data
export const RESEARCH_PRESENTATION_DATA = [
  {
    id: "nckh-presentation",
    title: "Student Scientific Research (NCKH) Defense",
    badge: "RESEARCH DEFENSE",
    image: "/images/NCKH_present.png",
    description: "Student Scientific Research — UWB-based indoor positioning with state estimation filters for GPS-denied environments applied to autonomous mobile robots.",
    tags: ["NCKH Defense", "UWB-IPS", "State Estimation", "VNU-UET"],
  },
  {
    id: "nckh-teamate",
    title: "Scientific Research Team Members",
    badge: "RESEARCH TEAM",
    image: "/images/NCKH_teamate.png",
    description: "Research team members and faculty advisor at the Department of Telecommunication Systems, VNU-UET developing and testing experimental UWB indoor positioning systems.",
    tags: ["Research Team", "Telecommunication Systems", "FET VNU-UET"],
  },
];

// 4. Lab Members Section data
export const LAB_DATA = {
  title: "DEPARTMENT RESEARCH LAB & MEMBERS",
  subtitle: "Department of Telecommunication Systems, Faculty of Electronics and Telecommunications (FET)",
  badge: "LAB MEMBERS",
  image: "/images/Lab.png",
  description: "Advanced laboratory members and academic workspace at VNU University of Engineering and Technology focusing on wireless communication, UWB localization, and robotic state estimation.",
  tags: ["Telecom Systems Lab", "FET", "VNU-UET", "Wireless & Robotics"],
};

// 5. Publications Section data - Actual titles from the PDF files
export const PUBLICATIONS: Publication[] = [
  {
    id: "atc-mcc-ukf",
    title: "Robust Indoor Mobile Robot Localization Using Maximum Correntropy Criterion UKF",
    authors: "Vu Nhat Quang, Dang Minh Duc, Ngo Gia Long, Nguyen Huu Chuyen, Le Duc Binh, Nguyen Tan-Phong, Dinh Thi Thai Mai*",
    venue: "IEEE International Conference on Advanced Technologies for Communications (ATC)",
    type: "International Conference",
    year: "2024 / 2025",
    pdfUrl: "/Research/Paper/ATC_Final_manuscript.pdf",
    tags: ["International Conference", "IEEE ATC", "MCC-UKF", "UWB Localization"],
  },
  {
    id: "nn-kalman-indoor-pos",
    title: "Neural Network-Aided Kalman Filtering for Indoor Positioning Autonomous Vehicle System",
    authors: "Nguyen Minh Duc, Ngo Gia Long, Dang Minh Duc, Nguyen Tan Phong, Dinh Thi Thai Mai*",
    venue: "International Conference on Advanced Robotics and Intelligent Control",
    type: "International Conference",
    year: "2024 / 2025",
    pdfUrl: "/Research/Paper/Neural_Network_Kalman_Filter_Indoor_Positioning.pdf",
    tags: ["International Conference", "Neural Network-aided KF", "UWB", "Autonomous Vehicle"],
  },
  {
    id: "jec-journal-paper",
    title: "Evaluation of the applicability of state estimation filters for indoor robot positioning",
    authors: "Dang Minh Duc, Nguyen Tan Phong, Nguyen Minh Duc, Nguyen Duc Binh, Nguyen Gia Quang, Dinh Thi Thai Mai*",
    venue: "REV Journal on Electronics and Communications (JEC)",
    type: "National Journal",
    year: "2024",
    pdfUrl: "/Research/Paper/JEC_remake_round_1_no_marking.pdf",
    tags: ["National Journal", "REV JEC", "EKF / UKF / PF", "UWB Benchmarking"],
  },
  {
    id: "rev-ecit-conference",
    title: "Đánh giá khả năng ứng dụng các bộ lọc ước lượng trạng thái EKF, UKF, PF sử dụng cho định vị robot trong nhà",
    authors: "Đặng Minh Đức, Nguyễn Tấn Phong, Nguyễn Minh Đức, Nguyễn Đức Bính, Nguyễn Gia Quang, Đinh Thị Thái Mai*",
    venue: "Hội nghị Quốc gia về Điện tử, Truyền thông và Công nghệ Thông tin (REV-ECIT)",
    type: "National Conference",
    year: "2024 / 2025",
    pdfUrl: "/Research/Paper/REV_2025_the_last.pdf",
    tags: ["National Conference", "REV-ECIT", "Định vị UWB", "Bộ lọc ước lượng trạng thái"],
  },
  {
    id: "nckh-report-2026",
    title: "Báo cáo Nghiên cứu Khoa học Sinh viên: Hệ thống Robot Tự hành & Định vị Trong nhà sử dụng UWB",
    authors: "Đặng Minh Đức và Nhóm NCKH (GVHD: TS. Đinh Thị Thái Mai)",
    venue: "Trường Đại học Công nghệ - ĐHQGHN (VNU-UET)",
    type: "Research Report",
    year: "2026",
    pdfUrl: "/Research/NCKH_2026.pdf",
    tags: ["Research Report", "VNU-UET NCKH", "UWB-IPS Monograph", "Full Monograph"],
  },
];
