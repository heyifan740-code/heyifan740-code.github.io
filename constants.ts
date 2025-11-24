import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  contact: {
    name: "Yifan He",
    email: "yh3921@columbia.edu",
    phone: "+1-347-556-1694",
    title: "M.S. in Robotics and Control",
    location: "New York, NY"
  },
  summary: "Master's student at Columbia University specializing in Robotics and Control. Strong foundation in Mechatronics, Embedded Systems, and Control Engineering. Proven track record in Formula Student competitions leading electrical teams. Proficient in Python, C, PLC programming, and mechanical design simulations.",
  education: [
    {
      institution: "Columbia University",
      location: "New York, USA",
      degree: "Master of Science",
      major: "Mechanical Engineering",
      concentration: "Robotics and Control",
      period: "Current",
      details: [
        "Specializing in advanced control theory and robotic systems."
      ]
    },
    {
      institution: "Ningbo University",
      location: "China",
      degree: "Bachelor of Engineering",
      major: "Mechanical Engineering and Its Automation",
      concentration: "Mechatronics",
      period: "09/2020 - 07/2024",
      details: [
        "GPA: Core courses usually 3.5+/4.0",
        "Technique Foundation Of Industrial Robot (3.93/4)",
        "Probability Theory (3.97/4)",
        "Python Programming (3.85/4)",
        "Mechanical Design (3.58/4)"
      ]
    }
  ],
  publications: [
    {
      title: "Research on DC Motor Driven by Microcontroller Based on PID Control",
      conference: "2023 3rd International Conference on Mechanical Engineering, Industrial Materials and Industrial Electronics (MEIMIE 2023), Denver, USA",
      date: "10/2023"
    }
  ],
  research: [
    {
      title: "Tactile Encoder Comparison for Imitation Learning",
      period: "Fall 2024",
      role: "Lead Researcher",
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4", // Replace with your actual video URL
      images: [
        "https://placehold.co/800x450/e2e8f0/64748b?text=Project+Setup", // Replace with actual image URL
        "https://placehold.co/800x450/e2e8f0/64748b?text=Results+Graph"  // Replace with actual image URL
      ],
      details: [
        "Collaboration: Co-led research with Naian Tao; leveraged 3D-ViTac hardware with mentorship from PhD candidate Binghao Huang.",
        "System Integration: Built a low-cost teleoperation setup (~$250) using the open-source SO100-ARM and high-density 3D-ViTac sensors, fully integrated with LeRobot APIs.",
        "Encoder Analysis: Benchmarked MLP, CNN, Spatial Attention-CNN, and ResNet encoders on fine-grained object classification tasks.",
        "Performance: ResNet achieved state-of-the-art accuracy (98.9%), effectively extracting complex spatial features where shallower networks (MLP 33-91%) struggled.",
        "Imitation Learning (ACT): Deployed the best-performing ResNet encoder within an Action Chunking with Transformers (ACT) policy. Achieved 90% success in pick-and-place tasks with just 50 training epochs (Last Point)."
      ]
    },
    {
      title: "Research on Microelectromechanical Systems & DC Motor PID Control",
      period: "04/2023 - 08/2023",
      role: "Independent Researcher",
      video: "", // Placeholder for video
      images: [], // Placeholder for images: ["/path/to/img1.jpg", "/path/to/img2.jpg"]
      details: [
        "Independently completed thesis on mechanical automation and digital control circuits.",
        "Modeled PID (Proportional-Integral-Differential) controllers using Matlab Simulink software to simulate its control behavior and performance.",
        "Calculated transfer functions theoretically and verified simulations.",
        "Designed and simulated circuit models with Falstad circuit simulation software.",
        "Built actual physical circuits on Tinkercad for experimentation and testing.",
        "Compared the control effects of proportional controller vs integral controller."
      ]
    },
    {
      title: "Design and Development of Power Battery Management System",
      role: "Formula Student Electric China",
      period: "03/2023 - 04/2024",
      video: "", // Placeholder for video
      images: [], // Placeholder for images
      details: [
        "Created the basic architecture of the battery management system (BMS).",
        "Designed the acquisition module circuit and performed low-voltage electrical layout.",
        "Conducted SOC calculation using a microcontroller and SOC calculation based on LSTM.",
        "Updated BMS data reception method by changing RS485-USB to RS485-Bluetooth for real-time monitoring."
      ]
    },
    {
      title: "Power Battery Thermal Management System Research",
      period: "12/2023 - 06/2024",
      role: "Formula Student China",
      video: "", // Placeholder for video
      images: [], // Placeholder for images
      details: [
        "Established a thermal model for lithium-ion cells and calculated thermophysical parameters.",
        "Studied heat generation mechanisms, analyzed conductive heat transfer, and completed thermal simulation by FLOEFD.",
        "Researched battery box structure, calculated fan airflow, and simulated heat dissipation systems.",
        "Employed SolidWorks for 3D simulation of electric cell monomer and battery box."
      ]
    }
  ],
  experience: [
    {
      role: "PLC Software Engineer Intern",
      company: "Ningbo Junpu Intelligent Manufacturing Co., Ltd.",
      period: "07/2023 - 08/2023",
      details: [
        "Performed structured language programming on Siemens PLC controllers using TIA Portal software for inbound/outbound warehouse operations.",
        "Utilized FACTORY IO simulation program to create 3D industrial site structure and connect with TIA PORTAL for code verification.",
        "Implemented visualization of process critical signals in TIA PORTAL.",
        "Standardized program blocks, data blocks, and variable naming formats to improve code readability.",
        "Used Beckhoff PLC software TWINCAT3 to port existing code and establish communication simulation."
      ]
    }
  ],
  competitions: [
    {
      title: "Electrical Team Leader & Safety Officer",
      company: "Formula Student Electric China (NIO Cup 2022)",
      period: "09/2021 - 10/2022",
      role: "Team Leader",
      video: "", // Placeholder for video
      images: [], // Placeholder for images
      details: [
        "Achievement: Team won the National Third Prize.",
        "Designed battery box to meet vehicle performance criteria.",
        "Calculated race power and chose motors based on maximum speed and linear acceleration.",
        "Utilized Optimum Lap and Cruise software to simulate and calculate race car energy usage.",
        "Designed wiring harness from vehicle controller to battery box/motor controller.",
        "Constructed high voltage circuits and verified compliance with regulations."
      ]
    },
    {
      title: "Electrical Team Member",
      company: "Formula Student Electric China (NIO Cup 2021)",
      period: "09/2020 - 11/2021",
      video: "", // Placeholder for video
      images: [], // Placeholder for images
      details: [
        "Achievement: Team won the National Third Prize.",
        "Responsible for installation and layout of low-voltage electrical wiring harnesses.",
        "Assisted in internal electrical design of the battery box.",
        "Learned Battery Management System knowledge."
      ]
    }
  ],
  skills: [
    {
      category: "Programming",
      items: ["Python", "C Language", "Matlab"]
    },
    {
      category: "Embedded & Control",
      items: ["Microcontrollers", "PLC (Siemens TIA Portal)", "Beckhoff TWINCAT3", "PID Control", "Mechatronics"]
    },
    {
      category: "Simulation & CAD",
      items: ["SolidWorks", "FLO-EFD", "Simulink", "COMSOL", "Ansys", "Falstad", "Optimum-lap", "Factory IO"]
    }
  ]
};

export const SYSTEM_PROMPT = `
You are an AI assistant representing Yifan He. Use the following resume data to answer questions about Yifan's background, skills, and experience.
Be professional, concise, and helpful. 
If asked about contact info, provide the email.

Resume Data:
${JSON.stringify(RESUME_DATA, null, 2)}
`;