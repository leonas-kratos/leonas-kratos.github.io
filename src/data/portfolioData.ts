export interface Publication {
  id: string;
  title: string;
  authors: string;
  authorRank?: string;
  venue: string;
  type: "International Conference" | "National Conference" | "National Journal" | "Research Report";
  year: string;
  pdfUrl: string;
  doi?: string;
  bibtex: string;
  abstract?: string;
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
    authorRank: "Co-Author (2nd Author)",
    venue: "IEEE International Conference on Advanced Technologies for Communications (ATC)",
    type: "International Conference",
    year: "2025 / 2026",
    pdfUrl: "/Research/Paper/ATC_Final_manuscript.pdf",
    abstract: "Addresses non-Gaussian multi-path and NLOS disturbances in UWB-based AMR indoor positioning by integrating the Maximum Correntropy Criterion into an Unscented Kalman Filter (MCC-UKF) framework.",
    tags: ["IEEE ATC", "MCC-UKF", "Non-Gaussian Noise", "UWB Positioning", "AMR Localization"],
    bibtex: `@inproceedings{quang2026robust,
  title={Robust Indoor Mobile Robot Localization Using Maximum Correntropy Criterion UKF},
  author={Quang, Vu Nhat and Duc, Dang Minh and Long, Ngo Gia and Chuyen, Nguyen Huu and Binh, Le Duc and Tan-Phong, Nguyen and Mai, Dinh Thi Thai},
  booktitle={IEEE International Conference on Advanced Technologies for Communications (ATC)},
  year={2026},
  organization={IEEE}
}`,
  },
  {
    id: "nn-kalman-indoor-pos",
    title: "Neural Network-Aided Kalman Filtering for Indoor Positioning Autonomous Vehicle System",
    authors: "Nguyen Minh Duc, Ngo Gia Long, Dang Minh Duc, Nguyen Tan Phong, Dinh Thi Thai Mai*",
    authorRank: "Co-Author (3rd Author)",
    venue: "International Conference on Advanced Robotics and Intelligent Control (ICARIC)",
    type: "International Conference",
    year: "2025 / 2026",
    pdfUrl: "/Research/Paper/Neural_Network_Kalman_Filter_Indoor_Positioning.pdf",
    abstract: "Proposes an end-to-end hybrid architecture coupling a deep neural network with a Kalman filter to adaptively compensate for kinematic modeling uncertainties and UWB measurement biases.",
    tags: ["ICARIC", "Neural-Aided KF", "Deep Learning Hybrid", "Autonomous Vehicles", "UWB"],
    bibtex: `@inproceedings{duc2026neural,
  title={Neural Network-Aided Kalman Filtering for Indoor Positioning Autonomous Vehicle System},
  author={Duc, Nguyen Minh and Long, Ngo Gia and Duc, Dang Minh and Phong, Nguyen Tan and Mai, Dinh Thi Thai},
  booktitle={International Conference on Advanced Robotics and Intelligent Control (ICARIC)},
  year={2026}
}`,
  },
  {
    id: "jec-journal-paper",
    title: "Evaluation of the applicability of state estimation filters for indoor robot positioning",
    authors: "Dang Minh Duc, Nguyen Tan Phong, Nguyen Minh Duc, Nguyen Duc Binh, Nguyen Gia Quang, Dinh Thi Thai Mai*",
    authorRank: "First Author (1st Author)",
    venue: "REV Journal on Electronics and Communications (JEC)",
    type: "National Journal",
    year: "2025 / 2026",
    pdfUrl: "/Research/Paper/JEC_remake_round_1_no_marking.pdf",
    abstract: "Rigorous comparative benchmarking of Extended Kalman Filter (EKF), Unscented Kalman Filter (UKF), and Particle Filter (PF) on physical AMR platforms in multi-room GPS-denied environments.",
    tags: ["REV JEC Journal", "EKF vs UKF vs PF", "State Estimation Benchmark", "AMR Robotics"],
    bibtex: `@article{duc2026evaluation,
  title={Evaluation of the applicability of state estimation filters for indoor robot positioning},
  author={Duc, Dang Minh and Phong, Nguyen Tan and Duc, Nguyen Minh and Binh, Nguyen Duc and Quang, Nguyen Gia and Mai, Dinh Thi Thai},
  journal={REV Journal on Electronics and Communications},
  volume={15},
  number={1},
  year={2026}
}`,
  },
  {
    id: "rev-ecit-conference",
    title: "Đánh giá khả năng ứng dụng các bộ lọc ước lượng trạng thái EKF, UKF, PF sử dụng cho định vị robot trong nhà",
    authors: "Đặng Minh Đức, Nguyễn Tấn Phong, Nguyễn Minh Đức, Nguyễn Đức Bính, Nguyễn Gia Quang, Đinh Thị Thái Mai*",
    authorRank: "First Author (Báo cáo Oral)",
    venue: "Hội nghị Quốc gia về Điện tử, Truyền thông và Công nghệ Thông tin (REV-ECIT)",
    type: "National Conference",
    year: "2025",
    pdfUrl: "/Research/Paper/REV_2025_the_last.pdf",
    abstract: "Báo cáo Oral tại hội nghị REV-ECIT về việc triển khai và kiểm chứng thực nghiệm các bộ lọc phi tuyến EKF, UKF và PF kết hợp công nghệ định vị sóng siêu rộng UWB trên robot di động.",
    tags: ["REV-ECIT 2025", "Báo cáo Oral", "Định vị Robot UWB", "Bộ lọc trạng thái", "VNU-UET"],
    bibtex: `@inproceedings{duc2025danhgia,
  title={Đánh giá khả năng ứng dụng các bộ lọc ước lượng trạng thái EKF, UKF, PF sử dụng cho định vị robot trong nhà},
  author={Đức, Đặng Minh and Phong, Nguyễn Tấn and Đức, Nguyễn Minh and Bính, Nguyễn Đức and Quang, Nguyễn Gia and Mai, Đinh Thị Thái},
  booktitle={Hội nghị Quốc gia về Điện tử, Truyền thông và CNTT (REV-ECIT)},
  year={2025}
}`,
  },
  {
    id: "nckh-report-2026",
    title: "Báo cáo Nghiên cứu Khoa học Sinh viên: Hệ thống Robot Tự hành & Định vị Trong nhà sử dụng UWB",
    authors: "Đặng Minh Đức và Nhóm NCKH (GVHD: TS. Đinh Thị Thái Mai)",
    authorRank: "Trưởng nhóm Đề tài (Giải Nhì NCKH)",
    venue: "Trường Đại học Công nghệ - ĐHQGHN (VNU-UET)",
    type: "Research Report",
    year: "2026",
    pdfUrl: "/Research/NCKH_2026.pdf",
    abstract: "Chuyên khảo hoàn chỉnh về thiết kế phần cứng, thuật toán ước lượng vị trí UWB thời gian thực, tích hợp ROS 2 Nav2 và kết quả nghiệm thu đạt Giải Nhì NCKH cấp Khoa ĐTVT - ĐH Công nghệ.",
    tags: ["Báo cáo NCKH", "Giải Nhì NCKH 2026", "VNU-UET", "Toàn văn Chuyên khảo", "ROS 2"],
    bibtex: `@techreport{duc2026nckh,
  title={Hệ thống Robot Tự hành và Định vị Trong nhà sử dụng UWB},
  author={Đức, Đặng Minh and Mai, Đinh Thị Thái},
  institution={Trường Đại học Công nghệ, Đại học Quốc gia Hà Nội},
  year={2026},
  type={Báo cáo Nghiên cứu Khoa học Sinh viên}
}`,
  },
];

// 6. Professional Experience
export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  badge: string;
  highlights: string[];
  tags: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    id: "viettel-high-tech",
    role: "Embedded Software Engineering Intern",
    organization: "Viettel High Tech",
    period: "Jul 2026 – Aug 2026",
    location: "Hanoi, Vietnam",
    badge: "INDUSTRY INTERNSHIP",
    highlights: [
      "Benchmarked and evaluated FreeRTOS and ZephyrOS real-time operating systems on STM32 microcontrollers.",
      "Engineered a PetaLinux project integrated with an existing Xilinx Vivado hardware design.",
      "Configured dual-core heterogeneous architecture running PetaLinux and RTOS on Xilinx SoC, establishing inter-core communication via RPMsg for low-latency data exchange.",
    ],
    tags: ["FreeRTOS", "ZephyrOS", "STM32", "PetaLinux", "Xilinx SoC", "RPMsg", "Vivado"],
  },
  {
    id: "telecom-lab-coordinator",
    role: "Researcher & Project Coordinator",
    organization: "Department of Telecommunication Systems, VNU-UET",
    period: "Jul 2024 – Present",
    location: "Hanoi, Vietnam",
    badge: "ACADEMIC LAB",
    highlights: [
      "Conducted core research on Ultra-Wideband (UWB) indoor positioning systems, algorithm engineering, and experimental performance analysis.",
      "Organized academic seminars and technical training sessions in embedded systems and IoT for lab members.",
      "Managed testing hardware platforms, DWM1001 transceivers, and sensor fusion validation testbeds.",
    ],
    tags: ["UWB-IPS", "Sensor Fusion", "Embedded Systems", "Academic Mentorship", "VNU-UET"],
  },
  {
    id: "vedc-system-developer",
    role: "Autonomous Vehicle System Developer",
    organization: "Vietnam Electronic Design Competition (VEDC 2025)",
    period: "Aug 2025 – Nov 2025",
    location: "Hanoi, Vietnam",
    badge: "NATIONAL COMPETITION",
    highlights: [
      "Engineered intelligent positioning and navigation systems for autonomous mobile robots operating in simulated factory environments.",
      "Designed embedded motor control routines and real-time obstacle avoidance algorithms on STM32 microcontrollers.",
      "Advanced to Semi-Finalist rank in national competition track.",
    ],
    tags: ["VEDC 2025", "STM32", "AMR Navigation", "Obstacle Avoidance", "AIoT"],
  },
];

// 7. Featured Engineering & TinyML Projects
export interface EngineeringProject {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  metrics: string[];
  tags: string[];
}

export const ENGINEERING_PROJECTS: EngineeringProject[] = [
  {
    id: "tinyml-uwb-nlos",
    title: "Lightweight UWB NLOS Identification on Edge MCU",
    subtitle: "Channel Impulse Response (CIR) classification with INT8 TinyML deployment",
    badge: "TINYML & EDGE AI",
    description:
      "Engineered a lightweight Non-Line-of-Sight (NLOS) classifier using CIR data. Deployed full-integer INT8 quantized neural network on an STM32F401RE Cortex-M4 MCU running at 84 MHz via X-CUBE-AI and CMSIS-NN.",
    metrics: [
      "93.76% INT8 Accuracy on eWINE dataset (beating LightMamba 92.03% & TinySA 92.99%)",
      "0.56 ms inference latency on STM32F401RE Cortex-M4 @ 84 MHz",
      "10.45 KB weights, 3.6 KB RAM footprint, ~10.4K MACs per inference",
      "3.8× memory reduction with 0.03% accuracy delta vs FP32 baseline",
    ],
    tags: ["TinyML", "STM32F401RE", "CMSIS-NN", "X-CUBE-AI", "UWB CIR", "INT8 Quantization", "TensorFlow"],
  },
  {
    id: "amr-cargo-transport",
    title: "Autonomous Mobile Robot (AMR) for Light Cargo Transport",
    subtitle: "Dual-layer cargo verification with multi-sensor odometry fusion",
    badge: "ROBOTICS & EMBEDDED",
    description:
      "Engineered a functional AMR utilizing Raspberry Pi 5 as high-level compute engine and STM32 Bluepill for real-time motor control and sensor acquisition. Integrated dual-layer security verification to reject mismatched or tampered goods.",
    metrics: [
      "Sensor fusion: BNO055 IMU + GA25-370 wheel encoders via STM32 HAL",
      "Dual cargo verification: Pi Camera V2 barcode scanner + high-precision load cell",
      "Autonomous dispatch rejection upon weight deviation or barcode mismatch",
    ],
    tags: ["Raspberry Pi 5", "STM32 Bluepill", "BNO055 IMU", "Load Cell", "Pi Camera V2", "Python", "STM32 HAL"],
  },
  {
    id: "smart-parking-system",
    title: "AIoT Smart Parking & Vehicle Tracking System",
    subtitle: "Vehicle-to-Slot Association (VSA) with RFID, YOLOv8 & MQTT",
    badge: "AIOT ARCHITECTURE",
    description:
      "Designed full system architecture and component interaction pipeline linking RFID gate access, YOLOv8 + BotSORT visual tracking, IR slot sensing, and MQTT cloud messaging across ESP8266 and Arduino Nano 33 IoT edge nodes.",
    metrics: [
      "Real-time violation detection: double-parking, excessive roaming, reserved-slot theft",
      "End-to-end telemetry via HiveMQ MQTT broker and MongoDB backend",
    ],
    tags: ["YOLOv8", "BotSORT", "MQTT", "ESP8266", "Arduino Nano 33 IoT", "RFID", "MongoDB"],
  },
];

// 8. Honors & Awards
export interface Award {
  id: string;
  title: string;
  rank: string;
  date: string;
  organization: string;
  badge: string;
}

export const HONORS_AWARDS: Award[] = [
  {
    id: "nckh-second-prize-2026",
    title: "Student Scientific Research Competition (NCKH)",
    rank: "Second Prize (Giải Nhì)",
    date: "April 2026",
    organization: "Faculty of Electronics and Telecommunications (FET), VNU-UET",
    badge: "RESEARCH EXCELLENCE",
  },
  {
    id: "vedc-semifinalist-2025",
    title: "Vietnam Electronic Design Competition (VEDC 2025)",
    rank: "National Semi-finalist",
    date: "October 2025",
    organization: "VEDC National Committee",
    badge: "NATIONAL COMPETITION",
  },
  {
    id: "nckh-encouragement-2025",
    title: "Student Scientific Research Competition (NCKH)",
    rank: "Encouragement Award (Giải Khuyến khích)",
    date: "March 2025",
    organization: "Faculty of Electronics and Telecommunications (FET), VNU-UET",
    badge: "RESEARCH AWARD",
  },
  {
    id: "academic-scholarship",
    title: "Academic Encouragement Scholarship (Học bổng Khuyến khích học tập)",
    rank: "Merit Scholar",
    date: "Semester 2 (2024–2025) & Semester 1 (2025–2026)",
    organization: "VNU University of Engineering and Technology (VNU-UET)",
    badge: "ACADEMIC SCHOLARSHIP",
  },
];

// 9. Structured Skills Matrix
export const TECHNICAL_SKILLS = [
  {
    category: "Languages & Scripting",
    skills: ["C", "C++", "Python", "Bash", "MATLAB"],
  },
  {
    category: "Embedded & RTOS",
    skills: ["STM32 (CubeMX / HAL)", "FreeRTOS", "ZephyrOS", "PetaLinux", "Raspberry Pi", "Arduino"],
  },
  {
    category: "Robotics & State Estimation",
    skills: ["UWB (DWM1001)", "EKF / UKF / Particle Filter", "ROS 2", "Nav2", "2D LiDAR SLAM", "Sensor Fusion"],
  },
  {
    category: "AI & TinyML",
    skills: ["TensorFlow", "Keras", "X-CUBE-AI", "CMSIS-NN", "INT8 Quantization", "Scikit-learn", "YOLOv8"],
  },
  {
    category: "Hardware & EDA Tools",
    skills: ["KiCad", "EasyEDA", "Xilinx Vivado", "PCB Design", "Docker", "Git / GitHub"],
  },
];

// 10. Distinct Hardware & Research Gallery Items (NO DUPLICATES)
export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: "AMR Platform" | "Competition" | "Scientific Defense" | "Laboratory" | "Honors";
  badge: string;
  image: string;
  imageFit?: "contain" | "cover";
  description: string;
  techSpecs: string[];
}

export const RESEARCH_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "amr-car-v2",
    title: "AMR Platform Car V2",
    subtitle: "Custom UWB-IPS Robotic Testbed",
    category: "AMR Platform",
    badge: "RESEARCH VEHICLE",
    image: "/images/Car_V2.png",
    imageFit: "contain",
    description: "Custom four-wheel differential autonomous mobile robot platform engineered for indoor positioning experiments. Integrates STM32 real-time motor actuation, Decawave DWM1001 UWB transceivers, 2D LiDAR, and ROS 2 Nav2 stack.",
    techSpecs: ["STM32 Real-Time Control", "Decawave DWM1001 UWB", "2D LiDAR SLAM", "ROS 2 Humble / Nav2"],
  },
  {
    id: "vedc-competition-car",
    title: "VEDC Autonomous Electric Vehicle",
    subtitle: "National Competition Platform",
    category: "Competition",
    badge: "COMPETITION CAR",
    image: "/images/VEDC_CAR.png",
    imageFit: "contain",
    description: "High-speed autonomous vehicle designed for the Vietnam Electronic Design Competition. Features low-latency vision lane tracking, ultrasonic obstacle avoidance, and responsive motor drive running FreeRTOS on STM32.",
    techSpecs: ["STM32 Microcontroller", "FreeRTOS Real-Time Kernel", "Lane Tracking", "Obstacle Avoidance"],
  },
  {
    id: "vedc-team",
    title: "VEDC 2025 Engineering Team",
    subtitle: "Hardware & Firmware Developers",
    category: "Competition",
    badge: "ENGINEERING CREW",
    image: "/images/VEDC2025_Teamate.png",
    imageFit: "cover",
    description: "FET VNU-UET student robotics team collaborating on mechanical chassis assembly, motor drive circuit design, embedded C++ firmware implementation, and real-track competitive testing.",
    techSpecs: ["Semi-finalist Award", "Chassis & Driver Circuit", "Track Validation", "VNU-UET"],
  },
  {
    id: "nckh-presentation-defense",
    title: "Scientific Research (NCKH) Defense",
    subtitle: "Faculty Evaluation Council",
    category: "Scientific Defense",
    badge: "ORAL DEFENSE",
    image: "/images/NCKH_present.png",
    imageFit: "cover",
    description: "Defending the research monograph 'Autonomous Mobile Robot & Indoor Localization Using Ultra-Wideband' in front of the Faculty Evaluation Council at VNU-UET, achieving Second Prize (Giải Nhì).",
    techSpecs: ["Second Prize Honor", "UWB-IPS State Estimation", "Experimental Verification", "VNU-UET Council"],
  },
  {
    id: "nckh-research-team",
    title: "UWB Research Group & Advisor",
    subtitle: "Department of Telecommunication Systems",
    category: "Scientific Defense",
    badge: "RESEARCH GROUP",
    image: "/images/NCKH_teamate.png",
    imageFit: "cover",
    description: "Student researchers and faculty advisor (Dr. Dinh Thi Thai Mai) at the Department of Telecommunication Systems, VNU-UET, collaborating on nonlinear state estimation algorithms and indoor localization testbeds.",
    techSpecs: ["Faculty of Electronics & Telecom", "Academic Advisors", "Multi-Room Testbed", "Research Publications"],
  },
  {
    id: "rev-2025-conference",
    title: "REV-ECIT 2025 National Conference",
    subtitle: "Oral Presentation & Peer Review",
    category: "Scientific Defense",
    badge: "NATIONAL CONFERENCE",
    image: "/images/REV2025.png",
    imageFit: "cover",
    description: "Oral presentation on 'Evaluation of the applicability of state estimation filters (EKF, UKF, PF) for indoor robot positioning' at the National Conference on Electronics, Communications and IT (REV-ECIT).",
    techSpecs: ["REV-ECIT 2025", "Oral Presentation", "EKF / UKF / PF Benchmarks", "Peer-Reviewed"],
  },
  {
    id: "telecom-lab",
    title: "Telecommunication Systems Laboratory",
    subtitle: "Advanced Wireless & Robotics Lab",
    category: "Laboratory",
    badge: "RESEARCH LAB",
    image: "/images/Lab.png",
    imageFit: "cover",
    description: "Department research laboratory and development environment at VNU University of Engineering and Technology, focusing on wireless communication systems, edge computing, UWB localization, and robotic state estimation.",
    techSpecs: ["VNU-UET Campus", "RF Measurement Equipment", "Robotics Test Track", "Embedded Workbenches"],
  },
  {
    id: "nckh-prize-cert",
    title: "Scientific Research Excellence Award",
    subtitle: "Second Prize (Giải Nhì NCKH FET)",
    category: "Honors",
    badge: "FACULTY AWARD",
    image: "/images/prize.png",
    imageFit: "contain",
    description: "Official Second Prize Certificate awarded by the Faculty of Electronics and Telecommunications (FET), VNU-UET in recognition of high-impact research on UWB indoor robot localization and nonlinear filtering.",
    techSpecs: ["Second Prize (Giải Nhì)", "Faculty-Level Award", "VNU-UET Recognition", "April 2026"],
  },
];
