export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  type: "International Conference" | "National Conference" | "National Journal" | "Research Report";
  year: string;
  abstract: string;
  pdfUrl: string;
  tags: string[];
}

export interface Activity {
  id: string;
  title: string;
  category: "Robotics & AMR" | "VEDC Competition" | "REV Conference" | "NCKH" | "Lab & Team";
  role: string;
  period: string;
  description: string;
  image: string;
  tags: string[];
}

export const PERSONAL_INFO = {
  name: "Đặng Minh Đức",
  englishName: "Dang Minh Duc",
  alias: "Leonas Kratos",
  title: "Robotics, Autonomous Mobile Robots (AMR) & Embedded AI Engineer",
  bio: "Kỹ sư nghiên cứu và phát triển hệ thống Robot tự hành (AMR), tích hợp điều khiển nhúng thời gian thực (STM32, FreeRTOS), thuật toán định vị & ước lượng trạng thái (UWB, EKF/UKF, Neural Network-aided Filters), SLAM & Nav2 trên nền tảng ROS 2.",
  affiliation: "Khoa Điện tử Viễn thông, Trường Đại học Công nghệ - ĐHQGHN (VNU-UET)",
  location: "Hà Nội, Việt Nam",
  email: "manzak.work@gmail.com",
  eduEmail: "23021798@vnu.edu.vn",
  github: "https://github.com/leonas-kratos",
  avatar: "/images/DangMinhDuc.png",
  prizeBadge: "/images/prize.png",
};

export const PUBLICATIONS: Publication[] = [
  {
    id: "atc-correntropy-ukf",
    title: "Robust Indoor Mobile Robot Localization Using Maximum Correntropy Criterion UKF",
    authors: "Vu Nhat Quang, Dang Minh Duc, Ngo Gia Long, Nguyen Huu Chuyen, Le Duc Binh, Nguyen Tan-Phong, Dinh Thi Thai Mai*",
    venue: "IEEE International Conference on Advanced Technologies for Communications (ATC)",
    type: "International Conference",
    year: "2024 / 2025",
    abstract: "Proposes a Sensor Fusion-based Maximum Correntropy Criterion Unscented Kalman Filter (MCC-UKF) to handle severe outliers and non-Gaussian measurement noise in UWB-based AMR indoor localization.",
    pdfUrl: "/Research/Paper/ATC_Final_manuscript.pdf",
    tags: ["AMR", "UWB Localization", "MCC-UKF", "Non-Gaussian Noise", "Sensor Fusion"],
  },
  {
    id: "nn-kalman-indoor-pos",
    title: "Neural Network-Aided Kalman Filtering for Indoor Positioning Autonomous Vehicle System",
    authors: "Nguyen Minh Duc, Ngo Gia Long, Dang Minh Duc, Nguyen Tan Phong, Dinh Thi Thai Mai*",
    venue: "International Conference on Advanced Robotics and Intelligent Control",
    type: "International Conference",
    year: "2024 / 2025",
    abstract: "Enhances conventional Kalman filtering by integrating neural networks to adaptively compensate for NLOS (Non-Line-Of-Sight) interference and multipath distortion in autonomous vehicle trajectory tracking.",
    pdfUrl: "/Research/Paper/Neural_Network_Kalman_Filter_Indoor_Positioning.pdf",
    tags: ["Neural Networks", "Adaptive Kalman Filter", "Autonomous Vehicles", "UWB", "NLOS"],
  },
  {
    id: "rev-journal-jec",
    title: "Evaluation of the applicability of state estimation filters for indoor robot positioning",
    authors: "Dang Minh Duc, Nguyen Tan Phong, Nguyen Minh Duc, Nguyen Duc Binh, Nguyen Gia Quang, Dinh Thi Thai Mai*",
    venue: "REV Journal on Electronics and Communications (JEC)",
    type: "National Journal",
    year: "2024",
    abstract: "Rigorous benchmark and performance comparison of state estimation filters (EKF, UKF, Particle Filters) in real-world indoor robotic positioning environments using Ultra-Wideband (UWB).",
    pdfUrl: "/Research/Paper/JEC_remake_round_1_no_marking.pdf",
    tags: ["State Estimation", "EKF / UKF / PF", "UWB Positioning", "Robotics"],
  },
  {
    id: "rev-conference-vietnam",
    title: "Đánh giá khả năng ứng dụng các bộ lọc ước lượng trạng thái EKF, UKF, PF sử dụng cho định vị robot trong nhà",
    authors: "Đặng Minh Đức, Nguyễn Tấn Phong, Nguyễn Minh Đức, Nguyễn Đức Bính, Nguyễn Gia Quang, Đinh Thị Thái Mai*",
    venue: "Hội nghị Quốc gia về Điện tử, Truyền thông và Công nghệ Thông tin (REV-ECIT)",
    type: "National Conference",
    year: "2024 / 2025",
    abstract: "Nghiên cứu ứng dụng và đánh giá thực nghiệm các giải thuật lọc phi tuyến cho bài toán định vị robot tự hành trong nhà với công nghệ Ultra-Wideband (UWB) khi không có tín hiệu GPS.",
    pdfUrl: "/Research/Paper/REV_2025_the_last.pdf",
    tags: ["Hội nghị REV", "Định vị Robot", "UWB", "Bộ lọc EKF/UKF/PF"],
  },
  {
    id: "nckh-report-2026",
    title: "Báo cáo Nghiên cứu Khoa học Sinh viên (NCKH): Hệ thống Robot Tự hành & Định vị Trong nhà",
    authors: "Đặng Minh Đức và Nhóm NCKH (GVHD: TS. Đinh Thị Thái Mai)",
    venue: "Đại học Công nghệ - ĐHQGHN (VNU-UET)",
    type: "Research Report",
    year: "2026",
    abstract: "Báo cáo toàn văn nghiên cứu tổng hợp về phần cứng xe tự hành, mạch điều khiển nhúng thời gian thực, thuật toán định vị UWB kết hợp sensor fusion và định tuyến điều hướng.",
    pdfUrl: "/Research/NCKH_2026.pdf",
    tags: ["Báo cáo NCKH", "VNU-UET", "Hệ thống Robot Tự hành", "Full Research"],
  },
];

export const ACTIVITIES: Activity[] = [
  {
    id: "car-v2-research",
    title: "Nghiên cứu & Chế tạo AMR Robot Car V2 (Hiện tại)",
    category: "Robotics & AMR",
    role: "Lead Hardware & ROS 2 Navigation Integration",
    period: "2025 - Hiện tại",
    description: "Phiên bản xe AMR thế hệ thứ hai được nâng cấp toàn diện: cấu trúc khung gầm gia cố vững chắc, tích hợp vi điều khiển STM32 công suất cao, cụm LiDAR 2D độ chính xác cao, camera thị giác máy tính và hệ thống định vị UWB.",
    image: "/images/Car_V2.png",
    tags: ["AMR Car V2", "ROS 2", "STM32", "LiDAR", "Autonomous Navigation"],
  },
  {
    id: "vedc-competition",
    title: "Cuộc thi Thiết kế Xe Điện Tự Hành (VEDC)",
    category: "VEDC Competition",
    role: "Team Leader / Core Hardware & Embedded Developer",
    period: "VEDC 2025",
    description: "Tham gia cuộc thi Thiết kế Vi mạch & Hệ thống Điện tử Xe tự hành (VEDC). Chế tạo xe tự hành VEDC CAR với thuật toán bám làn đường, nhận diện biển báo vật cản và vượt chướng ngại vật tự động.",
    image: "/images/VEDC_CAR.png",
    tags: ["VEDC 2025", "Autonomous Car", "Embedded Control", "Competition"],
  },
  {
    id: "vedc-teamate",
    title: "Đội ngũ Thành viên VEDC 2025",
    category: "VEDC Competition",
    role: "Thành viên Đội thi VEDC",
    period: "VEDC 2025",
    description: "Phối hợp cùng các đồng đội trong lab chế tạo mô hình xe, thiết kế mạch PCB điều khiển động cơ, thuật toán lái và thử nghiệm đường đua thực tế tại cuộc thi VEDC.",
    image: "/images/VEDC2025_Teamate.png",
    tags: ["VEDC Team", "Collaboration", "Chế tạo phần cứng"],
  },
  {
    id: "rev-conference-present",
    title: "Báo cáo tại Hội nghị Quốc gia REV 2025",
    category: "REV Conference",
    role: "Presenter / Author",
    period: "2025",
    description: "Trực tiếp trình bày báo cáo khoa học về giải thuật ước lượng trạng thái EKF, UKF, PF cho hệ thống định vị robot trong nhà tại Hội nghị Quốc gia Điện tử & Truyền thông (REV).",
    image: "/images/REV2025.png",
    tags: ["Hội nghị REV", "Presenter", "Thuyết trình Báo cáo"],
  },
  {
    id: "nckh-presentation",
    title: "Thuyết trình Đề tài Nghiên cứu Khoa học (NCKH)",
    category: "NCKH",
    role: "Trưởng nhóm Báo cáo NCKH",
    period: "2025 - 2026",
    description: "Bảo vệ thành công công trình nghiên cứu khoa học trước hội đồng khoa học Khoa Điện tử Viễn thông, VNU-UET với sự đánh giá cao về tính ứng dụng và hàm lượng học thuật.",
    image: "/images/NCKH_present.png",
    tags: ["NCKH", "Bảo vệ đề tài", "VNU-UET"],
  },
  {
    id: "nckh-teamate",
    title: "Đội ngũ Nhóm Nghiên cứu Khoa học NCKH",
    category: "NCKH",
    role: "Thành viên Nhóm NCKH",
    period: "2025 - 2026",
    description: "Kỷ niệm cùng các bạn sinh viên và giảng viên hướng dẫn trong quá trình thực hiện đề tài nghiên cứu về hệ thống robot tự hành và công nghệ định vị thông minh.",
    image: "/images/NCKH_teamate.png",
    tags: ["Team NCKH", "VNU-UET", "Research Group"],
  },
  {
    id: "lab-members",
    title: "Lab Nghiên cứu & Thành viên Phòng thí nghiệm",
    category: "Lab & Team",
    role: "Research Member",
    period: "2024 - Hiện tại",
    description: "Không gian làm việc, nghiên cứu chuyên sâu về viễn thông, IoT, Robot tự hành và định vị thông minh cùng các thầy cô và thành viên trong phòng Lab.",
    image: "/images/Lab.png",
    tags: ["Research Lab", "FET - VNU-UET", "Robotics Team"],
  },
];

export const SKILL_CATEGORIES = [
  {
    title: "Robotics & AMR",
    skills: [
      { name: "ROS / ROS 2 (Nav2, micro-ROS)" },
      { name: "SLAM (Cartographer, Gmapping)" },
      { name: "Gazebo & RViz Simulation" },
      { name: "Kinematics & Odometry Fusion" },
      { name: "Path Planning & Obstacle Avoidance" },
    ],
  },
  {
    title: "Algorithms & State Estimation",
    skills: [
      { name: "Kalman Filtering (EKF, UKF, MCC-UKF)" },
      { name: "Particle Filter (PF)" },
      { name: "Neural Network-Aided Filtering" },
      { name: "Ultra-Wideband (UWB) Positioning" },
      { name: "Sensor Fusion (IMU + Encoders + UWB)" },
    ],
  },
  {
    title: "Embedded Systems & Hardware",
    skills: [
      { name: "STM32 (HAL, FreeRTOS, CubeMX)" },
      { name: "ESP32 (ESP-IDF, FreeRTOS)" },
      { name: "C / C++ (Real-time Embedded)" },
      { name: "Protocols: CAN, UART, SPI, I2C" },
      { name: "PCB Circuit Design & Debugging" },
    ],
  },
  {
    title: "AI, Vision & Software Tools",
    skills: [
      { name: "Python / PyTorch / NumPy / SciPy" },
      { name: "OpenCV Computer Vision" },
      { name: "Linux / Ubuntu & Shell Scripting" },
      { name: "Git, GitHub Actions & CI/CD" },
      { name: "LaTeX Scientific Publishing" },
    ],
  },
];
