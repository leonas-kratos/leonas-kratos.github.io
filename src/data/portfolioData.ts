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

export const PERSONAL_INFO = {
  name: "ĐẶNG MINH ĐỨC",
  englishName: "Dang Minh Duc",
  alias: "Leonas Kratos",
  title: "AMR ROBOTICS & EMBEDDED AI ENGINEER",
  affiliation: "Khoa Điện tử Viễn thông, Trường Đại học Công nghệ - ĐHQGHN (VNU-UET)",
  bio: "Kỹ sư nghiên cứu và phát triển hệ thống Robot tự hành (AMR), chuyên sâu về điều khiển nhúng thời gian thực (STM32, FreeRTOS), giải thuật định vị & ước lượng trạng thái (UWB, EKF/UKF, Neural Network-aided Filters), SLAM & Nav2 trên nền tảng ROS 2.",
  location: "Hà Nội, Việt Nam",
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
  sectionSubtitle: "Cuộc thi Thiết kế Vi mạch & Hệ thống Điện tử Xe Tự Hành (VEDC)",
  car: {
    title: "VEDC Autonomous Vehicle",
    badge: "COMPETITION CAR",
    image: "/images/VEDC_CAR.png",
    description: "Xe đua tự hành tham gia cuộc thi VEDC với hệ thống điều khiển bám làn tốc độ cao, nhận diện biển báo và tự động xử lý chướng ngại vật trên sa bàn thi đấu.",
    tags: ["VEDC CAR", "Embedded Control", "Line Following", "Sensors"],
  },
  teammates: {
    title: "VEDC 2025 Team Members",
    badge: "TEAMATE",
    image: "/images/VEDC2025_Teamate.png",
    description: "Các thành viên trong đội thi VEDC 2025 phối hợp nghiên cứu, gia công cơ khí, lập trình mạch điều khiển và kiểm thử thực tế trên đường đua.",
    tags: ["VEDC Team", "Teammates", "Hardware R&D"],
  },
  currentResearchCar: {
    title: "Autonomous Mobile Robot (AMR) CAR V2",
    badge: "CURRENT RESEARCH",
    image: "/images/Car_V2.png",
    description: "Xe tự hành AMR V2 thế hệ mới đang nghiên cứu hiện tại: khung gầm cơ khí kiên cố, tích hợp STM32 công suất cao, 2D LiDAR tầm xa, camera thị giác máy tính và hệ thống định vị UWB chính xác cao.",
    tags: ["AMR Car V2", "ROS 2 Nav2", "STM32", "2D LiDAR", "UWB Positioning"],
  },
};

// 2. Conference Section data
export const CONFERENCE_DATA = {
  title: "REV 2025 CONFERENCE",
  subtitle: "Hội nghị Quốc gia về Điện tử, Truyền thông và Công nghệ Thông tin (REV-ECIT)",
  badge: "NATIONAL CONFERENCE",
  image: "/images/REV2025.png",
  description: "Trực tiếp báo cáo công trình khoa học nghiên cứu về giải thuật ước lượng trạng thái EKF, UKF, PF sử dụng cho định vị robot tự hành trong nhà trước các nhà khoa học và chuyên gia đầu ngành.",
  tags: ["REV 2025", "Conference Presentation", "Keynote", "VNU-UET"],
};

// 3. Research & Presentation Section data
export const RESEARCH_PRESENTATION_DATA = [
  {
    id: "nckh-presentation",
    title: "Thuyết trình Đề tài NCKH Sinh viên",
    badge: "RESEARCH PRESENTATION",
    image: "/images/NCKH_present.png",
    description: "Buổi thuyết trình báo cáo và bảo vệ kết quả đề tài Nghiên cứu Khoa học Sinh viên về hệ thống robot tự hành và công nghệ định vị trong nhà.",
    tags: ["NCKH Defense", "Presentation", "Academic Defense"],
  },
  {
    id: "nckh-teamate",
    title: "Thành viên Nhóm Nghiên cứu NCKH",
    badge: "NCKH TEAMATE",
    image: "/images/NCKH_teamate.png",
    description: "Tập thể các thành viên nhóm sinh viên nghiên cứu khoa học cùng giảng viên hướng dẫn trong suốt quá trình triển khai dự án.",
    tags: ["NCKH Team", "Teammates", "VNU-UET Research"],
  },
];

// 4. Lab Members Section data
export const LAB_DATA = {
  title: "FET RESEARCH LAB & MEMBERS",
  subtitle: "Thành viên Phòng Thí nghiệm Nghiên cứu Khoa Điện tử Viễn thông",
  badge: "LAB MEMBERS",
  image: "/images/Lab.png",
  description: "Không gian làm việc nghiên cứu chuyên sâu về robotics, IoT nhúng và các hệ thống viễn thông thông minh cùng các thầy cô và thành viên trong phòng Lab.",
  tags: ["Research Lab", "Lab Members", "FET - VNU-UET"],
};

// 5. Publications Section data
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
    tags: ["International Conference", "MCC-UKF", "AMR", "UWB Localization"],
  },
  {
    id: "nn-kalman-indoor-pos",
    title: "Neural Network-Aided Kalman Filtering for Indoor Positioning Autonomous Vehicle System",
    authors: "Nguyen Minh Duc, Ngo Gia Long, Dang Minh Duc, Nguyen Tan Phong, Dinh Thi Thai Mai*",
    venue: "International Conference on Advanced Robotics and Intelligent Control (ICARIC)",
    type: "International Conference",
    year: "2024 / 2025",
    abstract: "Enhances conventional Kalman filtering by integrating neural networks to adaptively compensate for NLOS (Non-Line-Of-Sight) interference and multipath distortion in autonomous vehicle trajectory tracking.",
    pdfUrl: "/Research/Paper/Neural_Network_Kalman_Filter_Indoor_Positioning.pdf",
    tags: ["International Conference", "Neural Networks", "Adaptive Kalman", "UWB"],
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
    tags: ["National Journal", "REV JEC", "State Estimation", "UWB Benchmark"],
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
    tags: ["National Conference", "Hội nghị REV", "Định vị Robot", "EKF / UKF / PF"],
  },
  {
    id: "nckh-report-2026",
    title: "Báo cáo Toàn văn Nghiên cứu Khoa học Sinh viên: Hệ thống Robot Tự hành & Định vị Trong nhà",
    authors: "Đặng Minh Đức và Nhóm NCKH (GVHD: TS. Đinh Thị Thái Mai)",
    venue: "Trường Đại học Công nghệ - ĐHQGHN (VNU-UET)",
    type: "Research Report",
    year: "2026",
    abstract: "Báo cáo toàn văn nghiên cứu tổng hợp về phần cứng xe tự hành, mạch điều khiển nhúng thời gian thực STM32, thuật toán định vị UWB kết hợp sensor fusion và định tuyến điều hướng.",
    pdfUrl: "/Research/NCKH_2026.pdf",
    tags: ["Báo cáo NCKH", "VNU-UET", "Hệ thống Robot Tự hành", "Full Report"],
  },
];
