"use client";

import { useState } from "react";
import { Radio, Cpu, Network, Compass, Gauge, ChevronRight, CheckCircle2, Sparkles } from "lucide-react";

interface PipelineStep {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  hardware: string;
  rate: string;
  details: string;
  inputs: string[];
  outputs: string[];
  mathModel: string;
}

const PIPELINE_STEPS: PipelineStep[] = [
  {
    id: "anchors",
    number: "01",
    title: "UWB Anchors Array",
    subtitle: "RF Pulse & CIR Transmission",
    icon: <Radio className="w-5 h-5 text-[#00f0ff]" />,
    hardware: "Decawave DWM1001C Array (A0, A1, A2, A3)",
    rate: "6.5 GHz Channel 5 (850 kbps)",
    details: "Four known-coordinate UWB anchors positioned across the room perimeter emit high-bandwidth nanosecond RF pulses. The Channel Impulse Response (CIR) is sampled to detect line-of-sight vs non-line-of-sight (NLOS) conditions.",
    inputs: ["Known Anchor Coordinates (x_i, y_i, z_i)", "Synchronized RF Triggers"],
    outputs: ["Raw Time-of-Flight (ToF) Packets", "Channel Impulse Response (CIR) Vectors"],
    mathModel: "d_i = c \\cdot \\frac{(t_{rx} - t_{tx})}{2} + \\eta_{NLOS}",
  },
  {
    id: "tag",
    number: "02",
    title: "Onboard DWM1001 Tag",
    subtitle: "Microsecond Timestamping",
    icon: <Cpu className="w-5 h-5 text-[#38bdf8]" />,
    hardware: "DWM1001 Mobile Transceiver on AMR",
    rate: "50 Hz Update Rate",
    details: "Mounted rigidly on the AMR chassis, the tag coordinates two-way ranging (TWR) transactions with all reachable anchors, collecting time-stamped range vectors and streaming via SPI/UART.",
    inputs: ["Two-Way Ranging Response Packets"],
    outputs: ["Raw Distance Vector \\vec{z}_k = [d_0, d_1, d_2, d_3]^T"],
    mathModel: "\\mathbf{z}_k = h(\\mathbf{x}_k) + \\mathbf{v}_k",
  },
  {
    id: "filter",
    number: "03",
    title: "Non-linear State Estimation",
    subtitle: "EKF / UKF / PF / MCC-UKF",
    icon: <Network className="w-5 h-5 text-[#818cf8]" />,
    hardware: "Embedded ARM / Onboard SBC Co-processor",
    rate: "Execution Latency < 1.2 ms",
    details: "Core research focus: benchmarks Extended Kalman Filter (EKF), Unscented Kalman Filter (UKF), and Particle Filter (PF). Applies Maximum Correntropy Criterion (MCC-UKF) to reject non-Gaussian multi-path outliers in NLOS industrial settings.",
    inputs: ["Range Vector \\vec{z}_k", "Wheel Odometry (v, \\omega)", "Prior State \\hat{x}_{k-1}"],
    outputs: ["Optimal Posterior State \\hat{\\mathbf{x}}_k = [x, y, \\theta, v, \\omega]^T", "Error Covariance \\mathbf{P}_k"],
    mathModel: "\\hat{\\mathbf{x}}_k = \\hat{\\mathbf{x}}_k^- + \\mathbf{K}_k (\\mathbf{z}_k - h(\\hat{\\mathbf{x}}_k^-))",
  },
  {
    id: "ros2",
    number: "04",
    title: "ROS 2 & Nav2 Fusion",
    subtitle: "2D LiDAR SLAM & Costmaps",
    icon: <Compass className="w-5 h-5 text-[#34d399]" />,
    hardware: "Raspberry Pi 5 / Robot SBC (ROS 2 Humble)",
    rate: "Costmap Update: 20 Hz",
    details: "Integrates estimated UWB state into the robot_localization EKF node alongside 2D LiDAR scan-matching and IMU yaw rates. Nav2 calculates global path planning and local collision avoidance.",
    inputs: ["Filtered UWB Pose (/pose_uwb)", "2D LiDAR /scan", "IMU BNO055 (/imu/data)"],
    outputs: ["Global Trajectory (/plan)", "Velocity Command (/cmd_vel)"],
    mathModel: "\\min_u \\int_0^T (\\mathbf{x}^T \\mathbf{Q} \\mathbf{x} + \\mathbf{u}^T \\mathbf{R} \\mathbf{u}) dt",
  },
  {
    id: "actuation",
    number: "05",
    title: "STM32 Real-Time Control",
    subtitle: "Motor Drivers & FreeRTOS",
    icon: <Gauge className="w-5 h-5 text-[#f59e0b]" />,
    hardware: "STM32 Microcontroller + Dual H-Bridge Drivers",
    rate: "Closed-Loop PID: 100 Hz",
    details: "FreeRTOS deterministic tasks translate linear and angular velocity commands (/cmd_vel) into dual-wheel motor PWM signals with optical encoder feedback, maintaining sub-10 cm trajectory accuracy.",
    inputs: ["Target Velocities (v_{target}, \\omega_{target})", "Encoder Ticks (CPR 900)"],
    outputs: ["Motor PWM Duty Cycles", "Wheel Odometry Telemetry"],
    mathModel: "PWM = K_p e(t) + K_i \\int e(t)dt + K_d \\frac{de(t)}{dt}",
  },
];

export default function UwbPipelineDemo() {
  const [activeStep, setActiveStep] = useState<PipelineStep>(PIPELINE_STEPS[2]);

  return (
    <section id="pipeline" className="bg-[#060a12] border-b border-cyan-500/10">
      <div className="page-container">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <div className="reveal section-title !mb-1">
              End-to-End Robotics &amp; Localization Pipeline
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              From raw electromagnetic RF nanosecond pulses to deterministic closed-loop motor actuation on STM32 microcontrollers.
            </p>
          </div>
          <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1 rounded-full uppercase flex items-center gap-1.5 self-start sm:self-auto">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            INTERACTIVE SYSTEM ARCHITECTURE
          </span>
        </div>

        {/* 5-Stage Interactive Progression Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 mb-8">
          {PIPELINE_STEPS.map((step) => {
            const isCurrent = step.id === activeStep.id;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveStep(step)}
                className={`p-3.5 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? "bg-[#0c182c] border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.25)] ring-1 ring-cyan-400/50"
                    : "bg-[#0a0f1d] border-slate-800 hover:border-slate-700 hover:bg-[#0e1628]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold text-slate-400">
                    STEP {step.number}
                  </span>
                  <div className={`p-1.5 rounded-lg ${isCurrent ? "bg-cyan-500/20" : "bg-white/[0.03]"}`}>
                    {step.icon}
                  </div>
                </div>

                <div>
                  <h4 className={`text-xs font-bold leading-tight mb-1 ${isCurrent ? "text-cyan-300" : "text-white"}`}>
                    {step.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 line-clamp-1 font-mono">
                    {step.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Deep-Dive Card */}
        <div className="glass-card p-6 sm:p-8 border border-cyan-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Overview & Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  {`STAGE ${activeStep.number} // ${activeStep.hardware}`}
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {activeStep.rate}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                {activeStep.title}: {activeStep.subtitle}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeStep.details}
              </p>

              {/* Mathematical Representation */}
              <div className="p-3.5 rounded-lg bg-[#070c16] border border-cyan-500/20 font-mono text-xs text-cyan-300">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1 font-sans">
                  Governing Kinematic / Estimation Model:
                </div>
                <div className="text-sm font-bold text-slate-100 tracking-wider">
                  {activeStep.mathModel}
                </div>
              </div>
            </div>

            {/* Right: I/O Specifications Box */}
            <div className="lg:col-span-5 bg-[#080d1a] border border-slate-800 rounded-xl p-5 space-y-4">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-800">
                Telemetry &amp; Signal Interfaces
              </div>

              {/* Inputs */}
              <div>
                <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-2">
                  Incoming Signals:
                </div>
                <div className="space-y-1.5">
                  {activeStep.inputs.map((inp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{inp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outputs */}
              <div className="pt-2 border-t border-slate-800/80">
                <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-2">
                  Propagated Data:
                </div>
                <div className="space-y-1.5">
                  {activeStep.outputs.map((out, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
