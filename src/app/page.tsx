/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useEffect, useState } from "react";
import Script from "next/script";

interface PdfRenderTask {
  promise: Promise<void>;
}

interface PdfViewport {
  width: number;
  height: number;
}

interface PdfPage {
  getViewport: (params: { scale: number }) => PdfViewport;
  render: (params: {
    canvasContext: CanvasRenderingContext2D;
    viewport: PdfViewport;
  }) => PdfRenderTask;
}

interface PdfDocument {
  getPage: (pageNumber: number) => Promise<PdfPage>;
}

interface PdfLoadingTask {
  promise: Promise<PdfDocument>;
}

interface PdfJsLib {
  GlobalWorkerOptions: { workerSrc: string };
  getDocument: (url: string) => PdfLoadingTask;
}

declare global {
  interface Window {
    pdfjsLib?: PdfJsLib;
  }
}

export default function Home() {
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => window.clearInterval(timer);
  }, [heroSlide]);

  const renderPdfThumbnails = useCallback(() => {
    if (typeof window === "undefined" || !window.pdfjsLib) return;

    const pdfjsLib = window.pdfjsLib;
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

    document.querySelectorAll<HTMLCanvasElement>(".pdf-canvas").forEach((canvas) => {
      if (canvas.dataset.rendered === "true") return;
      const pdfUrl = canvas.dataset.pdf;
      if (!pdfUrl) return;

      canvas.dataset.rendered = "true";

      pdfjsLib
        .getDocument(pdfUrl)
        .promise.then((pdf) => pdf.getPage(1))
        .then((page) => {
          const vp = page.getViewport({ scale: 0.38 });
          const context = canvas.getContext("2d");
          if (!context) return;
          canvas.width = vp.width;
          canvas.height = vp.height;
          return page.render({ canvasContext: context, viewport: vp }).promise.then(() => {
            canvas.style.display = "block";
            const fallback = canvas.parentElement?.querySelector<HTMLElement>(".thumb-fallback");
            if (fallback) fallback.style.display = "none";
          });
        })
        .catch(() => {
          canvas.style.display = "none";
        });
    });
  }, []);

  useEffect(() => {
    /* ── SCROLL PROGRESS ─────────────────────── */
    const bar = document.getElementById("progress");
    const onScroll = () => {
      if (!bar) return;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      bar.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* ── REVEAL ON SCROLL (re-triggers both ways) ── */
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("on");
          else e.target.classList.remove("on");
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));

    /* ── STAT COUNT-UP ───────────────────────── */
    const intervals: number[] = [];
    const countObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const target = parseInt(el.dataset.target || "0", 10);
          let n = 0;
          const step = Math.max(1, Math.ceil(target / 40));
          const t = window.setInterval(() => {
            n = Math.min(n + step, target);
            el.textContent = String(n);
            if (n >= target) window.clearInterval(t);
          }, 35);
          intervals.push(t);
          countObs.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll(".stat-n[data-target]").forEach((el) => countObs.observe(el));

    /* ── FULL-PORTFOLIO CONSTELLATION & UWB RANGING MESH ── */
    const canvas = document.getElementById("bg-canvas") as HTMLCanvasElement | null;
    const ctx = canvas?.getContext("2d");
    let animFrame = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const mouse = { x: -9999, y: -9999 };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const resize = () => {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    if (canvas && ctx) {
      resize();
      window.addEventListener("resize", resize);
      window.addEventListener("mousemove", onMouseMove, { passive: true });
      window.addEventListener("mouseleave", onMouseLeave);

      // Ambient twinkling deep-space micro-stars
      const starCount = Math.min(Math.floor((width * height) / 22000), 70);
      const stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.1 + 0.35,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.008,
      }));

      // Drifting UWB anchor/constellation nodes
      const nodeCount = Math.min(Math.floor((width * height) / 38000), 34);
      const nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.42,
        vy: (Math.random() - 0.5) * 0.42,
        radius: Math.random() * 1.6 + 1.4,
        pulse: Math.random() * Math.PI * 2,
      }));

      const draw = () => {
        ctx.clearRect(0, 0, width, height);

        // 1. Twinkling background stars
        for (const s of stars) {
          s.phase += s.speed;
          const alpha = 0.12 + (Math.sin(s.phase) + 1) * 0.16;
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fill();
        }

        // 2. Constellation / UWB mesh ranging links between nodes
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 185) {
              const alpha = (1 - dist / 185) * 0.24;
              ctx.strokeStyle = `rgba(215, 20, 45, ${alpha})`;
              ctx.lineWidth = 0.85;
              ctx.beginPath();
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
              ctx.stroke();
            }
          }

          // Interactive cursor UWB tag ranging link
          const mdx = nodes[i].x - mouse.x;
          const mdy = nodes[i].y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 210) {
            const malpha = (1 - mdist / 210) * 0.35;
            ctx.strokeStyle = `rgba(235, 45, 70, ${malpha})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        // 3. UWB anchor nodes & RF pulsing rings
        for (const node of nodes) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;

          node.pulse += 0.028;
          const pulseR = (Math.sin(node.pulse) + 1) * 6.5 + node.radius;
          const pulseAlpha = (Math.cos(node.pulse) + 1) * 0.13;

          // Expanding RF pulse ring
          ctx.strokeStyle = `rgba(200, 0, 26, ${pulseAlpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(node.x, node.y, pulseR, 0, Math.PI * 2);
          ctx.stroke();

          // Node glow core
          ctx.fillStyle = "rgba(235, 55, 78, 0.8)";
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fill();

          // Crisp starlight center
          ctx.fillStyle = "rgba(255, 225, 230, 0.85)";
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 0.45, 0, Math.PI * 2);
          ctx.fill();
        }

        animFrame = requestAnimationFrame(draw);
      };
      draw();
    }

    /* ── ACTIVE NAV ──────────────────────────── */
    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll(".nav-links a");
    const navObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((l) => l.classList.remove("active"));
            const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
            if (a) a.classList.add("active");
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => navObs.observe(s));

    /* ── PDF THUMBNAILS (if script already cached) ── */
    renderPdfThumbnails();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animFrame);
      obs.disconnect();
      countObs.disconnect();
      navObs.disconnect();
      intervals.forEach((t) => window.clearInterval(t));
    };
  }, [renderPdfThumbnails]);

  return (
    <>
      <canvas id="bg-canvas" aria-hidden="true" />
      <div id="progress" />

      {/* NAVBAR */}
      <nav>
        <div className="wrap nav-inner">
          <span className="nav-logo">DMD // UWB-IPS</span>
          <ul className="nav-links">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#research-pipeline">Research</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#publications">Publications</a>
            </li>
            <li>
              <a href="#awards">Awards</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="nav-actions">
            <a
              href="https://github.com/leonas-kratos"
              className="nav-gh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a href="/images/my_cv.pdf" className="nav-cv" target="_blank" rel="noopener noreferrer">
              CV PDF
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="wrap">
          <div className="hero-inner">
            <div className="hero-left reveal">
              <p className="hero-eyebrow">{"// VNU-UET · FET · DEPT. TELECOM SYSTEMS"}</p>
              <h1 className="hero-name">
                Đặng
                <br />
                Minh Đức
              </h1>
              <div className="hero-title">
                <span>UWB Indoor Positioning</span> &amp; State Estimation Researcher
                <br />
                <span>EKF · UKF · Particle Filter</span> · Embedded Systems · ROS 2
              </div>
              <p className="hero-bio">
                Final-year student at VNU-UET researching GPS-denied indoor localization using
                Ultra-Wideband technology and nonlinear state estimation algorithms applied to
                Autonomous Mobile Robots.
              </p>
              <div className="hero-actions">
                <a href="#publications" className="btn btn-solid">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  Publications
                </a>
                <a
                  href="/images/my_cv.pdf"
                  className="btn btn-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download CV
                </a>
                <a
                  href="https://github.com/leonas-kratos"
                  className="btn btn-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
            <div className="hero-right reveal d1">
              <div
                className="av-card"
                onClick={() => setHeroSlide((prev) => (prev === 0 ? 1 : 0))}
                title="Click to switch photo"
              >
                <div className="av-img">
                  <img
                    className={`av-slide ${heroSlide === 0 ? "active" : ""}`}
                    src="/images/DangMinhDuc.png"
                    alt="Đặng Minh Đức"
                    loading="eager"
                  />
                  <img
                    className={`av-slide ${heroSlide === 1 ? "active" : ""}`}
                    src="/images/prize.png"
                    alt="NCKH Award"
                    loading="eager"
                  />
                </div>
                <div className="av-label">
                  <span>{heroSlide === 0 ? "ĐẶNG MINH ĐỨC" : "NCKH AWARD"}</span>
                  <span className="av-dots" onClick={(e) => e.stopPropagation()}>
                    <button
                      type="button"
                      className={`av-dot ${heroSlide === 0 ? "active" : ""}`}
                      onClick={() => setHeroSlide(0)}
                      aria-label="Show Đặng Minh Đức photo"
                    />
                    <button
                      type="button"
                      className={`av-dot ${heroSlide === 1 ? "active" : ""}`}
                      onClick={() => setHeroSlide(1)}
                      aria-label="Show NCKH Award photo"
                    />
                  </span>
                </div>
              </div>
              <div className="hero-meta">
                <div className="meta-row">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                  Dept. of Telecommunication Systems, VNU-UET
                </div>
                <div className="meta-row">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Hanoi, Vietnam
                </div>
                <div className="meta-row">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  manzak.work@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div id="stats">
        <div className="wrap">
          <div className="stats-grid">
            <div className="stat reveal">
              <div className="stat-n" data-target="5">
                0
              </div>
              <div className="stat-l">Publications</div>
            </div>
            <div className="stat reveal d1">
              <div className="stat-n" data-target="2">
                0
              </div>
              <div className="stat-l">Intl. Conferences</div>
            </div>
            <div className="stat reveal d2">
              <div className="stat-n" data-target="1">
                0
              </div>
              <div className="stat-l">VEDC Award</div>
            </div>
            <div className="stat reveal d3">
              <div className="stat-n" data-target="1">
                0
              </div>
              <div className="stat-l">NCKH Award</div>
            </div>
          </div>
        </div>
      </div>

      {/* RESEARCH PIPELINE */}
      <section className="section" id="research-pipeline">
        <div className="wrap">
          <div className="sec-header reveal">
            <p className="sec-tag">{"// RESEARCH ARCHITECTURE"}</p>
            <h2 className="sec-title">UWB Indoor Positioning Pipeline</h2>
            <p className="sec-sub">
              End-to-end localization system: from UWB ranging to autonomous navigation in
              GPS-denied environments.
            </p>
          </div>
          <div className="pipeline-track reveal">
            <div className="pipe-step">
              <div className="pipe-num">01</div>
              <svg
                className="pipe-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M6.3 6.3a8 8 0 0 0 0 11.4m11.4 0a8 8 0 0 0 0-11.4M3.5 3.5a12 12 0 0 0 0 17m17 0a12 12 0 0 0 0-17" />
              </svg>
              <div className="pipe-title">UWB Ranging</div>
              <div className="pipe-desc">
                Decawave DWM1001 modules perform Two-Way Ranging (TWR) to compute anchor–tag
                distances.
              </div>
              <div className="pipe-tags">
                <span className="ptag">DWM1001</span>
                <span className="ptag">TWR</span>
                <span className="ptag">STM32</span>
              </div>
            </div>
            <div className="pipe-step">
              <div className="pipe-num">02</div>
              <svg
                className="pipe-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="m2 17 10 5 10-5" />
                <path d="m2 12 10 5 10-5" />
              </svg>
              <div className="pipe-title">State Estimation</div>
              <div className="pipe-desc">
                EKF, UKF, Particle Filter and NN-aided Kalman filters fuse ranging data with IMU
                odometry.
              </div>
              <div className="pipe-tags">
                <span className="ptag">EKF</span>
                <span className="ptag">UKF</span>
                <span className="ptag">PF</span>
                <span className="ptag">NN-KF</span>
              </div>
            </div>
            <div className="pipe-step">
              <div className="pipe-num">03</div>
              <svg
                className="pipe-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              <div className="pipe-title">ROS 2 / Nav2</div>
              <div className="pipe-desc">
                Position estimates published to ROS 2; Nav2 stack handles path planning, costmap
                and local control.
              </div>
              <div className="pipe-tags">
                <span className="ptag">ROS 2</span>
                <span className="ptag">Nav2</span>
                <span className="ptag">2D LiDAR</span>
              </div>
            </div>
            <div className="pipe-step">
              <div className="pipe-num">04</div>
              <svg
                className="pipe-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M4.5 4.5 8 8m8 8 3.5 3.5M19.5 4.5 16 8M8 16l-3.5 3.5M2 12h4m12 0h4M12 2v4m0 12v4" />
              </svg>
              <div className="pipe-title">AMR Navigation</div>
              <div className="pipe-desc">
                AMR Car V2 autonomously navigates GPS-denied indoor environments with real-time
                obstacle avoidance.
              </div>
              <div className="pipe-tags">
                <span className="ptag">AMR Car V2</span>
                <span className="ptag">SLAM</span>
                <span className="ptag">Indoor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS / GALLERY */}
      <section className="section" id="projects">
        <div className="wrap">
          <div className="sec-header reveal">
            <p className="sec-tag">{"// HARDWARE · COMPETITION · LAB"}</p>
            <h2 className="sec-title">Projects &amp; Gallery</h2>
          </div>

          {/* VEDC */}
          <div className="sec-header reveal" style={{ marginBottom: 24 }}>
            <p className="sec-tag">VEDC COMPETITION</p>
            <p className="sec-sub">
              Vietnam Electronic Design Competition — autonomous electric vehicle, national
              semi-finalist 2025.
            </p>
          </div>
          <div className="grid-3 reveal" style={{ marginBottom: 48 }}>
            <div className="photo-card">
              <div className="photo-frame contain">
                <img src="/images/VEDC_CAR.png" alt="VEDC Competition Car" loading="lazy" />
              </div>
              <div className="photo-body">
                <div className="photo-badge">COMPETITION CAR</div>
                <div className="photo-title">VEDC Autonomous Vehicle</div>
                <div className="photo-desc">
                  STM32 + FreeRTOS real-time controller, lane tracking, ultrasonic obstacle
                  avoidance.
                </div>
                <div className="photo-tags">
                  <span className="ctag">STM32</span>
                  <span className="ctag">FreeRTOS</span>
                  <span className="ctag">VEDC 2025</span>
                </div>
              </div>
            </div>
            <div className="photo-card">
              <div className="photo-frame cover">
                <img src="/images/VEDC2025_Teamate.png" alt="VEDC Team" loading="lazy" />
              </div>
              <div className="photo-body">
                <div className="photo-badge">TEAM</div>
                <div className="photo-title">VEDC 2025 Engineering Team</div>
                <div className="photo-desc">
                  FET VNU-UET team: chassis design, PCB motor driver, embedded firmware.
                </div>
                <div className="photo-tags">
                  <span className="ctag">VNU-UET</span>
                  <span className="ctag">Hardware</span>
                </div>
              </div>
            </div>
            <div className="photo-card">
              <div className="photo-frame contain">
                <img src="/images/Car_V2.png" alt="AMR Car V2" loading="lazy" />
              </div>
              <div className="photo-body">
                <div className="photo-badge">CURRENT RESEARCH</div>
                <div className="photo-title">AMR Car V2 — UWB Testbed</div>
                <div className="photo-desc">
                  Research platform: DWM1001 UWB, 2D LiDAR, STM32 motor control, ROS 2 Nav2.
                </div>
                <div className="photo-tags">
                  <span className="ctag">UWB</span>
                  <span className="ctag">ROS 2</span>
                  <span className="ctag">LiDAR</span>
                </div>
              </div>
            </div>
          </div>

          {/* CONFERENCE + RESEARCH */}
          <div className="sec-header reveal" style={{ marginBottom: 24 }}>
            <p className="sec-tag">CONFERENCES · NCKH DEFENSE · LAB</p>
          </div>
          <div className="grid-2 reveal" style={{ marginBottom: 20 }}>
            <div className="photo-card">
              <div className="photo-frame cover">
                <img src="/images/REV2025.png" alt="REV 2025 Conference" loading="lazy" />
              </div>
              <div className="photo-body">
                <div className="photo-badge">REV-ECIT 2025</div>
                <div className="photo-title">National Conference Oral Presentation</div>
                <div className="photo-desc">
                  Presenting EKF/UKF/PF benchmarks for UWB indoor robot localization.
                </div>
                <div className="photo-tags">
                  <span className="ctag">REV-ECIT</span>
                  <span className="ctag">Oral Defense</span>
                </div>
              </div>
            </div>
            <div className="photo-card">
              <div className="photo-frame cover">
                <img src="/images/Lab.png" alt="Lab" loading="lazy" />
              </div>
              <div className="photo-body">
                <div className="photo-badge">LAB</div>
                <div className="photo-title">Telecommunication Systems Laboratory</div>
                <div className="photo-desc">
                  Department lab at VNU-UET — UWB localization testbeds, embedded workbenches, RF
                  measurement.
                </div>
                <div className="photo-tags">
                  <span className="ctag">VNU-UET</span>
                  <span className="ctag">FET</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-2 reveal">
            <div className="photo-card">
              <div className="photo-frame cover">
                <img src="/images/NCKH_present.png" alt="NCKH Defense" loading="lazy" />
              </div>
              <div className="photo-body">
                <div className="photo-badge">NCKH DEFENSE</div>
                <div className="photo-title">Scientific Research Defense — Second Prize</div>
                <div className="photo-desc">
                  Defending UWB indoor AMR localization research before the Faculty Evaluation
                  Council.
                </div>
                <div className="photo-tags">
                  <span className="ctag">Giải Nhì</span>
                  <span className="ctag">UWB-IPS</span>
                </div>
              </div>
            </div>
            <div className="photo-card">
              <div className="photo-frame cover">
                <img src="/images/NCKH_teamate.png" alt="Research Team" loading="lazy" />
              </div>
              <div className="photo-body">
                <div className="photo-badge">RESEARCH GROUP</div>
                <div className="photo-title">UWB Research Group &amp; Advisor</div>
                <div className="photo-desc">
                  Student researchers and faculty advisor, Dept. of Telecommunication Systems,
                  VNU-UET.
                </div>
                <div className="photo-tags">
                  <span className="ctag">Research Team</span>
                  <span className="ctag">FET</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className="section" id="publications">
        <div className="wrap">
          <div className="sec-header reveal">
            <p className="sec-tag">{"// SCIENTIFIC OUTPUT"}</p>
            <h2 className="sec-title">Publications</h2>
            <p className="sec-sub">
              2 International Conferences · 1 National Journal · 1 National Conference · 1 Research
              Report
            </p>
          </div>
          <div className="pub-grid">
            {/* ATC */}
            <div className="pub-card reveal">
              <div className="pub-thumb">
                <canvas
                  className="pdf-canvas"
                  data-pdf="/Research/Paper/ATC_Final_manuscript.pdf"
                  width={100}
                  height={130}
                  style={{ display: "none" }}
                />
                <div className="thumb-fallback">
                  <svg
                    className="thumb-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <span className="thumb-text">PDF</span>
                </div>
              </div>
              <div className="pub-body">
                <div className="pub-top">
                  <span className="pub-type">INTL CONFERENCE</span>
                  <span className="pub-year">2024</span>
                </div>
                <div className="pub-title">
                  Robust Indoor Mobile Robot Localization Using Maximum Correntropy Criterion UKF —
                  IEEE ATC
                </div>
                <div className="pub-venue">
                  IEEE International Conference on Advanced Technologies for Communications (ATC)
                </div>
                <a
                  className="pub-link"
                  href="/Research/Paper/ATC_Final_manuscript.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  Read PDF
                </a>
              </div>
            </div>

            {/* ATC - Neural Network */}
            <div className="pub-card reveal d1">
              <div className="pub-thumb">
                <canvas
                  className="pdf-canvas"
                  data-pdf="/Research/Paper/Neural_Network_Kalman_Filter_Indoor_Positioning.pdf"
                  width={100}
                  height={130}
                  style={{ display: "none" }}
                />
                <div className="thumb-fallback">
                  <svg
                    className="thumb-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <span className="thumb-text">PDF</span>
                </div>
              </div>
              <div className="pub-body">
                <div className="pub-top">
                  <span className="pub-type">INTL CONFERENCE</span>
                  <span className="pub-year">2025</span>
                </div>
                <div className="pub-title">
                  Neural Network-Aided Kalman Filtering for Indoor Positioning Autonomous Vehicle
                  System — IEEE ATC
                </div>
                <div className="pub-venue">
                  IEEE International Conference on Advanced Technologies for Communications (ATC)
                </div>
                <a
                  className="pub-link"
                  href="/Research/Paper/Neural_Network_Kalman_Filter_Indoor_Positioning.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  Read PDF
                </a>
              </div>
            </div>

            {/* JEC */}
            <div className="pub-card reveal d2">
              <div className="pub-thumb">
                <canvas
                  className="pdf-canvas"
                  data-pdf="/Research/Paper/JEC_remake_round_1_no_marking.pdf"
                  width={100}
                  height={130}
                  style={{ display: "none" }}
                />
                <div className="thumb-fallback">
                  <svg
                    className="thumb-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <span className="thumb-text">PDF</span>
                </div>
              </div>
              <div className="pub-body">
                <div className="pub-top">
                  <span className="pub-type">NATIONAL JOURNAL</span>
                  <span className="pub-year">2024</span>
                </div>
                <div className="pub-title">
                  UWB-based Indoor Localization using Nonlinear Filters — REV JEC
                </div>
                <div className="pub-venue">
                  REV Journal on Electronics and Communications (JEC)
                </div>
                <a
                  className="pub-link"
                  href="/Research/Paper/JEC_remake_round_1_no_marking.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  Read PDF
                </a>
              </div>
            </div>

            {/* REV-ECIT */}
            <div className="pub-card reveal d3">
              <div className="pub-thumb">
                <canvas
                  className="pdf-canvas"
                  data-pdf="/Research/Paper/REV_2025_the_last.pdf"
                  width={100}
                  height={130}
                  style={{ display: "none" }}
                />
                <div className="thumb-fallback">
                  <svg
                    className="thumb-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <span className="thumb-text">PDF</span>
                </div>
              </div>
              <div className="pub-body">
                <div className="pub-top">
                  <span className="pub-type">NATIONAL CONFERENCE</span>
                  <span className="pub-year">2025</span>
                </div>
                <div className="pub-title">
                  Applicability of EKF, UKF, PF for Indoor Robot Positioning — REV-ECIT
                </div>
                <div className="pub-venue">
                  National Conference on Electronics, Communications and IT (REV-ECIT)
                </div>
                <a
                  className="pub-link"
                  href="/Research/Paper/REV_2025_the_last.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  Read PDF
                </a>
              </div>
            </div>

            {/* NCKH Report */}
            <div className="pub-card reveal d4">
              <div className="pub-thumb">
                <canvas
                  className="pdf-canvas"
                  data-pdf="/Research/NCKH_2026.pdf"
                  width={100}
                  height={130}
                  style={{ display: "none" }}
                />
                <div className="thumb-fallback">
                  <svg
                    className="thumb-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <span className="thumb-text">PDF</span>
                </div>
              </div>
              <div className="pub-body">
                <div className="pub-top">
                  <span className="pub-type">RESEARCH REPORT</span>
                  <span className="pub-year">2026</span>
                </div>
                <div className="pub-title">
                  AMR Indoor Localization via UWB — Student Research Report (NCKH Full Monograph)
                </div>
                <div className="pub-venue">
                  VNU University of Engineering and Technology (VNU-UET)
                </div>
                <a
                  className="pub-link"
                  href="/Research/NCKH_2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  Read PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="section" id="awards">
        <div className="wrap">
          <div className="sec-header reveal">
            <p className="sec-tag">{"// HONORS & RECOGNITION"}</p>
            <h2 className="sec-title">Awards</h2>
          </div>
          <div className="award-grid">
            <div className="award-card reveal">
              <div className="award-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <div>
                <div className="award-rank">Second Prize — Giải Nhì</div>
                <div className="award-title">Student Scientific Research (NCKH)</div>
                <div className="award-org">
                  Faculty of Electronics &amp; Telecommunications, VNU-UET
                </div>
                <div className="award-date">April 2026</div>
              </div>
            </div>
            <div className="award-card reveal d1">
              <div className="award-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div>
                <div className="award-rank">National Semi-finalist</div>
                <div className="award-title">
                  Vietnam Electronic Design Competition (VEDC 2025)
                </div>
                <div className="award-org">VEDC National Committee</div>
                <div className="award-date">October 2025</div>
              </div>
            </div>
            <div className="award-card reveal d2">
              <div className="award-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <div>
                <div className="award-rank">Encouragement Award — Giải Khuyến khích</div>
                <div className="award-title">Student Scientific Research (NCKH)</div>
                <div className="award-org">
                  Faculty of Electronics &amp; Telecommunications, VNU-UET
                </div>
                <div className="award-date">March 2025</div>
              </div>
            </div>
            <div className="award-card reveal d3">
              <div className="award-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <div>
                <div className="award-rank">Merit Scholar</div>
                <div className="award-title">Academic Encouragement Scholarship</div>
                <div className="award-org">VNU University of Engineering and Technology</div>
                <div className="award-date">Sem 2 2024–2025 &amp; Sem 1 2025–2026</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <div className="wrap">
          <div className="sec-header reveal">
            <p className="sec-tag">{"// TECHNICAL EXPERTISE"}</p>
            <h2 className="sec-title">Skills</h2>
          </div>
          <div className="skills-grid">
            <div className="skill-group reveal">
              <div className="skill-cat">LANGUAGES &amp; SCRIPTING</div>
              <div className="skill-pills">
                <span className="skill-pill">C</span>
                <span className="skill-pill">C++</span>
                <span className="skill-pill">Python</span>
                <span className="skill-pill">Bash</span>
                <span className="skill-pill">MATLAB</span>
              </div>
            </div>
            <div className="skill-group reveal d1">
              <div className="skill-cat">EMBEDDED &amp; RTOS</div>
              <div className="skill-pills">
                <span className="skill-pill">STM32 HAL</span>
                <span className="skill-pill">FreeRTOS</span>
                <span className="skill-pill">ZephyrOS</span>
                <span className="skill-pill">Raspberry Pi</span>
                <span className="skill-pill">Arduino</span>
              </div>
            </div>
            <div className="skill-group reveal d2">
              <div className="skill-cat">ROBOTICS &amp; STATE ESTIMATION</div>
              <div className="skill-pills">
                <span className="skill-pill">UWB DWM1001</span>
                <span className="skill-pill">EKF</span>
                <span className="skill-pill">UKF</span>
                <span className="skill-pill">Particle Filter</span>
                <span className="skill-pill">ROS 2</span>
                <span className="skill-pill">Nav2</span>
                <span className="skill-pill">SLAM</span>
              </div>
            </div>
            <div className="skill-group reveal d3">
              <div className="skill-cat">AI &amp; TINYML</div>
              <div className="skill-pills">
                <span className="skill-pill">TensorFlow</span>
                <span className="skill-pill">Keras</span>
                <span className="skill-pill">X-CUBE-AI</span>
                <span className="skill-pill">CMSIS-NN</span>
                <span className="skill-pill">YOLOv8</span>
                <span className="skill-pill">INT8 Quant.</span>
              </div>
            </div>
            <div className="skill-group reveal d4" style={{ gridColumn: "1 / -1" }}>
              <div className="skill-cat">HARDWARE &amp; EDA</div>
              <div className="skill-pills">
                <span className="skill-pill">KiCad</span>
                <span className="skill-pill">EasyEDA</span>
                <span className="skill-pill">PCB Design</span>
                <span className="skill-pill">Xilinx Vivado</span>
                <span className="skill-pill">Docker</span>
                <span className="skill-pill">Git / GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="wrap">
          <div className="contact-grid">
            <div className="contact-left reveal">
              <h2 className="contact-title">Let&apos;s connect.</h2>
              <p>
                Open to research collaborations, embedded systems projects, and opportunities in
                robotics and indoor positioning.
              </p>
              <div className="contact-items">
                <div className="contact-item">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <a href="mailto:manzak.work@gmail.com">manzak.work@gmail.com</a>
                </div>
                <div className="contact-item">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <a href="mailto:23021798@vnu.edu.vn">23021798@vnu.edu.vn</a>
                </div>
                <div className="contact-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <a
                    href="https://github.com/leonas-kratos"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/leonas-kratos
                  </a>
                </div>
                <div className="contact-item">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Hanoi, Vietnam — VNU-UET
                </div>
              </div>
            </div>
            <div className="reveal d1">
              <div className="cv-box">
                <div className="cv-box-title">Curriculum Vitae</div>
                <div className="cv-box-desc">
                  Full academic credentials, research publications, competition results and
                  engineering project milestones.
                </div>
                <a
                  href="/images/my_cv.pdf"
                  className="cv-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download CV (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="foot-inner">
            <span className="foot-copy">© 2026 Đặng Minh Đức · VNU-UET</span>
            <div className="foot-links">
              <a
                href="https://github.com/leonas-kratos"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a href="/images/my_cv.pdf" target="_blank" rel="noopener noreferrer">
                CV
              </a>
              <a href="mailto:manzak.work@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </footer>

      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"
        strategy="afterInteractive"
        onLoad={renderPdfThumbnails}
      />
    </>
  );
}
