# BMSIT Digital Platform — Product Requirements Document

**Version:** 1.0
**Date:** March 27, 2026
**Owner:** BMSIT Digital Transformation Team
**Launch Target:** June 25, 2026 — Ready for 2026–27 Admissions Cycle
(MCP already connected, BMSIT)
---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Goals & Success Metrics](#2-goals--success-metrics)
3. [Target Users & Personas](#3-target-users--personas)
4. [Site Architecture](#4-site-architecture)
5. [Page Specifications](#5-page-specifications)
6. [Technical Architecture](#6-technical-architecture)
7. [REST API Specification](#7-rest-api-specification)
8. [Database Schema](#8-database-schema)
9. [Design System](#9-design-system)
10. [Features & Functionality](#10-features--functionality)
11. [Development Roadmap](#11-development-roadmap)
12. [Pre-Launch Checklist](#12-pre-launch-checklist)
13. [Approval Signatures](#13-approval-signatures)

---

## 1. Executive Summary

BMSIT seeks to establish a global-standard digital presence — a living platform that reflects its NAAC 'A' accreditation, VTU Autonomous status, and ambition to become Bengaluru's foremost engineering institution. This PRD defines every layer of that system, modelled on MIT's world-class `mit.edu`.

| Field | Detail |
|---|---|
| Institution | BMS Institute of Technology & Management |
| Location | Yelahanka, Bengaluru — 25-Acre Eco Campus |
| Accreditation | NAAC 'A' Grade · NBA Accredited (7 UG, 2 PG) |
| Autonomy | VTU Autonomous Status 2020–2030 |
| Primary Objective | Drive 2026–27 KCET / COMEDK Admissions |
| Stack | Next.js 14 · Strapi CMS · PostgreSQL · Vercel |
| Launch Date | June 25, 2026 |

---

## 2. Goals & Success Metrics

| Goal | KPI | Target | Measurement |
|---|---|---|---|
| Increase admissions enquiries | Form submissions | +60% YoY | CRM / GA4 |
| Improve search rankings | Google position for "BMSIT Bangalore" | Top 3 | Search Console |
| Enhance user engagement | Average session duration | > 3 minutes | GA4 |
| Performance | Lighthouse score | 90+ (all 4 metrics) | Core Web Vitals |
| Reduce drop-off | Bounce rate | < 40% | GA4 |
| User satisfaction | NPS | > 8 | Post-launch survey |
| Uptime | Availability SLA | 99.9% | UptimeRobot |

---

## 3. Target Users & Personas

### Persona 1 — Prospective Students & Parents `PRIMARY`

**Representative:** Thushar K S, CS aspirant, Bengaluru

- **Needs:** KCET/COMEDK cutoffs, CSE/AI-ML course details, hostel fees, scholarship options
- **Journey:** Home → Academics → Admissions → Enquiry Form → Apply

### Persona 2 — Current Students & Faculty `SECONDARY`

- **Needs:** Syllabus, circulars, exam schedules, bus routes, CICC grievance portal, research publications
- **Journey:** Student Life → Academics → Notices

### Persona 3 — Alumni & Recruiters `TERTIARY`

- **Needs:** Placement statistics, alumni network, company registration, campus recruitment portal
- **Journey:** Placements → Alumni → Contact

### Persona 4 — Researchers & PhD Aspirants `TERTIARY`

- **Needs:** Faculty profiles, research publications, patents, KSCST projects, PhD admission pathways
- **Journey:** Research → Departments → Faculty

---

## 4. Site Architecture

```
bmsit.edu.in/
├── /                          — Home
├── /academics                 — Academics Hub
│   ├── /academics/[slug]      — Department Detail (CSE, ECE, AIML…)
│   └── /academics/phd         — PhD & Research Admissions
├── /admissions                — Admissions Hub
│   ├── /admissions/ug         — UG Admissions (KCET / COMEDK)
│   ├── /admissions/pg         — PG Admissions (GATE / PGCET)
│   ├── /admissions/fees       — Fees Structure 2026–27
│   └── /admissions/scholarships — Scholarship Information
├── /research                  — Research & Innovation
│   ├── /research/patents      — Patents & Publications
│   ├── /research/projects     — KSCST / Funded Projects
│   └── /research/centers      — Centers of Excellence
├── /placements                — Placement Statistics & Portal
├── /student-life              — Student Life
│   ├── /student-life/clubs    — Clubs & Events
│   ├── /student-life/hostel   — Hostel Information
│   └── /student-life/transport — Bus Routes
├── /about                     — About BMSIT
│   ├── /about/leadership      — Principal, Deans, HODs
│   ├── /about/accreditations  — NAAC, NBA, VTU, UGC docs
│   └── /about/campus-tour     — Virtual 360° Tour
├── /news                      — News, Circulars & Events
│   └── /news/[slug]           — Article Detail
├── /alumni                    — Alumni Network Portal
└── /contact                   — Contact & Map
```

**Navigation Model (MIT-Inspired):**

| Level | Items |
|---|---|
| Primary Nav | Academics · Admissions · Research · Placements · Student Life · News · About · Alumni |
| Secondary Nav | Quick links: Fees, Hostel, Bus Routes, CICC Portal, AICTE Feedback |
| Footer | Departments · Policies · Accreditations · Social Media · Contact |

---

## 5. Page Specifications

### 5.1 Home Page `/`

**Template:** Static (ISR 24h) | **Priority:** P0 — Launch Blocker

**SEO Targets:** "BMSIT Bangalore", "Engineering College Yelahanka", "BMSIT admissions 2026"

| Component | Description |
|---|---|
| `HeroSlider` | Full-width, 3 slides, autoplay 5s — Academics, Research, Campus Life |
| `StatsRail` | 1920 UG seats · 80%+ placement · NAAC 'A' · 25-acre campus |
| `AccoladesTicker` | Marquee — NAAC · NBA · VTU Autonomous · UGC 12(B) |
| `ProgramCards` | Grid of 7 UG + 5 PG programs — image, title, intake, CTA |
| `AdmissionsCountdown` | KCET/COMEDK 2026 countdown timer with key dates |
| `NewsLatest` | 3 latest articles from CMS, CTA → /news |
| `PlacementsSnapshot` | Top recruiter logos, avg/highest CTC, CTA → /placements |
| `QuickLinks` | Fees 2026-27 · Hostel Application · Bus Routes · CICC |
| `CampusGalleryStrip` | 5-image horizontal scroll — campus photography |

---

### 5.2 Academics `/academics` · `/academics/[slug]`

**Template:** Dynamic CMS-driven, ISR 12h | **Priority:** P0 — Core Conversion

**Dynamic Routes:** `/academics/cse`, `/academics/ece`, `/academics/aiml`, `/academics/mca`, `/academics/mba`…

| Component | Description |
|---|---|
| `ProgramsIndex` | Tabbed list: UG / PG / PhD with intake and accreditation badges |
| `DepartmentHero` | Program name, NBA badge, intake count, quick stats |
| `SyllabusViewer` | PDF embed (Cloudinary) + downloadable, VTU regulation sync |
| `FacultyGrid` | Photo, name, designation, Google Scholar link, research areas |
| `CutoffHistory` | Chart.js bar chart — KCET/COMEDK ranks for last 3 years |
| `LabsInfrastructure` | Image cards — lab photos, equipment list |
| `PlacementsForDept` | Dept-scoped: avg CTC, top recruiters, placement % |

**Programs Covered:**

| Program | Intake | Accreditation | Type |
|---|---|---|---|
| B.E. AI & Machine Learning | 180 | NBA Accredited | UG |
| B.E. Computer Science & Engineering | 180 | NBA Accredited | UG |
| B.E. Electronics & Communication Engg | 120 | NBA Accredited | UG |
| B.E. Mechanical Engineering | 60 | — | UG |
| B.E. Civil Engineering | 60 | — | UG |
| B.E. Information Science | 60 | — | UG |
| B.E. Electrical & Electronics | 60 | — | UG |
| M.Tech (CSE / ECE) | 36 each | NBA Accredited (2) | PG |
| MCA | 120 | — | PG |
| MBA | 120 | — | PG |
| PhD | Multiple | VTU | Research |

---

### 5.3 Admissions Hub `/admissions`

**Template:** Static + Interactive forms (CSR) | **Priority:** P0 — Primary Conversion Funnel

| Component | Description |
|---|---|
| `AdmissionsTimeline` | KCET · COMEDK · PGCET 2026 key dates, interactive |
| `FeesTable` | Year-wise fee breakdowns (tuition, hostel, bus), downloadable PDF |
| `EligibilityChecker` | Input marks/rank → output eligibility and expected cutoff |
| `EnquiryForm` | Lead capture → CRM (Zoho) via webhook, 201 response |
| `CounselingTracker` | KCET round status, historical cutoff charts by branch |
| `ScholarshipCards` | Merit · SC/ST · Sports · Management — eligibility + Apply CTA |
| `DocumentChecklist` | Interactive download list — required admission docs |
| `HostelApplicationForm` | Boys / Girls hostel application, PDF confirmation |
| `BusApplicationForm` | Route selection, fee display, application submission |

---

### 5.4 Research & Innovation `/research`

**Template:** Dynamic, searchable database | **Priority:** P1 — Credibility & Rankings

| Component | Description |
|---|---|
| `PatentsDatabase` | Searchable + filterable — granted & filed, year, inventors |
| `KSCSTProjects` | Funded project cards — team, funding amount, outcomes |
| `PublicationsIndex` | Google Scholar / Scopus API integration, citation counts |
| `ResearchCenters` | Centers of Excellence — AI, VLSI, IoT, Robotics |
| `PhDAdmissions` | Available seats, supervisors, eligibility, application portal |
| `ResearchStatsRail` | Patents count · Publications · Funded projects · PhD scholars |

---

### 5.5 Placements `/placements`

**Template:** CMS-driven, annual update | **Priority:** P0 — Top Conversion Driver

| Component | Description |
|---|---|
| `PlacementsHero` | Highest CTC · Average CTC · Total offers · Companies count |
| `RecruiterLogos` | Marquee — Google, Amazon, Microsoft, Infosys, TCS, Wipro… |
| `YearWiseChart` | Chart.js — 5-year placement trend, department filter |
| `StudentTestimonials` | Video embeds, photo + quote, company logo overlay |
| `RecruiterPortal` | Company JD submission form → placement cell email |
| `DepartmentBreakdown` | Placement % and avg CTC per department, tabbed |

---

### 5.6 Student Life `/student-life`

**Template:** Static (ISR 48h) | **Priority:** P1 — Retention & Differentiation

| Component | Description |
|---|---|
| `CampusGallery` | Masonry grid, Cloudinary CDN, lightbox — 50+ images |
| `ClubsDirectory` | Technical · Cultural · Sports · NSS — name, description, contact |
| `BusRouteFinder` | Interactive map — route + stop lookup, downloadable schedule |
| `HostelInfo` | Boys / Girls, facilities, fees, application CTA |
| `EventCalendar` | Live from CMS, monthly view, iCal export |
| `FacilitiesGrid` | Library · Cafeteria · Sports Complex · Medical · Wi-Fi coverage |

---

### 5.7 About BMSIT `/about`

**Template:** Static (ISR 7d) | **Priority:** P1 — Trust & Credibility

| Component | Description |
|---|---|
| `VisionMission` | Official text, BMS Group context, founding story |
| `LeadershipGrid` | Principal, Deans, HODs — photo, bio, LinkedIn |
| `AccreditationBadges` | NAAC certificate · NBA · VTU · UGC 12(B) · AICTE — downloadable |
| `VirtualCampusTour` | Google Street View 360° embed, custom campus markers |
| `BMSGroupBanner` | BMS Group of Institutions context, legacy since 1946 |

---

### 5.8 News & Notices `/news` · `/news/[slug]`

**Template:** Dynamic CMS, ISR 1h | **Priority:** P1 — SEO Long-Tail

| Component | Description |
|---|---|
| `NewsGrid` | Filterable by category — Events · Academic · Research · Circulars |
| `CircularsFeed` | Real-time, PDF attachments, date-sorted, searchable |
| `ArticleDetail` | Rich-text body, cover image, social share, related articles |
| `NewsletterSubscribe` | Email opt-in → Mailchimp / Resend integration |

---

## 6. Technical Architecture

### 6.1 Stack Overview

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend** | Next.js 14 (App Router) + React 18 | SSR · ISR · CSR hybrid rendering |
| **Styling** | Tailwind CSS + CSS Variables | Utility-first, design tokens |
| **Animation** | Framer Motion | Page transitions, scroll reveals |
| **Charts** | Chart.js | Placement trends, cutoff history |
| **Data Fetching** | SWR | Client-side revalidation |
| **i18n** | next-i18n | English + Kannada |
| **CMS** | Strapi v4 (Headless, self-hosted) | Content management, media library |
| **API** | Next.js API Routes + Strapi REST | Unified REST API, /api/v1/ |
| **Auth** | NextAuth.js (JWT + RBAC) | Admin · Editor · Faculty · Student roles |
| **Validation** | Zod | Request body validation |
| **Database** | PostgreSQL 16 on Supabase | Relational structured content |
| **ORM** | Prisma | Type-safe DB access |
| **Cache** | Redis (Upstash) | API response caching, session store |
| **Search** | Algolia | Site-wide instant search |
| **Media CDN** | Cloudinary | Images, PDFs, videos |
| **Email** | Resend (transactional) + Mailchimp | Enquiry confirmations, newsletter |
| **Hosting FE** | Vercel (Edge Network) | Global CDN, auto-scaling, CI/CD |
| **Hosting BE** | Railway | Strapi + Redis containers |
| **DNS** | Cloudflare | DNS, DDoS protection, WAF |
| **CI/CD** | GitHub Actions | Lint → Test → Build → Deploy |
| **Error Monitoring** | Sentry | Error tracking + alerting |
| **APM** | Datadog | API performance, DB query tracing |
| **Analytics** | GA4 + Vercel Analytics | Traffic, funnels, Core Web Vitals |
| **Uptime** | UptimeRobot | 99.9% SLA monitoring + PagerDuty |

---

### 6.2 Rendering Strategy

| Page Type | Strategy | Revalidation |
|---|---|---|
| Home | ISR | 24 hours |
| Program detail | ISR | 12 hours |
| News article | ISR | 1 hour |
| Admissions forms | CSR | Real-time |
| Admin dashboard | CSR + Auth | Real-time |
| About / Accreditations | ISR | 7 days |
| Placements | ISR | 24 hours |

---

### 6.3 Authentication & RBAC

| Role | Permissions |
|---|---|
| `superadmin` | Full access to all CMS content, user management, settings |
| `admin` | Create/edit/delete all content, view analytics, manage enquiries |
| `editor` | Create/edit news, circulars, events. No user management |
| `faculty` | Edit own profile, upload publications, view department data |
| `student` | View authenticated content (timetable, results) — future phase |

---

### 6.4 Infrastructure Diagram

```
User → Cloudflare DNS/WAF
     → Vercel Edge (Next.js SSR/ISR)
          ├── Static assets → Cloudinary CDN
          ├── API Routes → /api/v1/*
          │     ├── Strapi CMS (Railway)
          │     │     └── PostgreSQL (Supabase)
          │     ├── Redis Cache (Upstash)
          │     ├── Algolia Search Index
          │     └── Resend / Mailchimp (email)
          └── NextAuth.js (JWT sessions)

Admin Panel → Strapi Admin UI (Railway)
GitHub → GitHub Actions CI/CD → Vercel Deploy → Railway Deploy
Sentry ← Error events ← Next.js + Strapi
Datadog ← APM traces ← All services
```

---

## 7. REST API Specification

**Base URL:** `https://bmsit.edu.in/api/v1`
**Auth:** JWT Bearer Token via NextAuth.js
**Rate Limits:** 100 req/min (public) · 1,000 req/min (admin)
**Format:** JSON · UTF-8
**Versioning:** `/api/v1/` prefix

---

### 7.1 `GET /programs`

Returns all academic programs. Supports `?type=ug|pg|phd`, `?accredited=true`, `?limit=N`.

```json
{
  "data": [
    {
      "id": 1,
      "name": "B.E. Computer Science & Engineering",
      "code": "CSE",
      "type": "ug",
      "intake": 180,
      "nba_accredited": true,
      "duration_years": 4,
      "slug": "cse"
    }
  ],
  "meta": { "total": 12, "page": 1, "pageSize": 25 }
}
```

---

### 7.2 `GET /programs/[slug]`

Full program detail — syllabus PDF, faculty, historical cutoffs, placement stats.

```json
{
  "data": {
    "id": 1,
    "name": "B.E. CSE",
    "slug": "cse",
    "syllabus_pdf_url": "https://cdn.bmsit.edu.in/syllabus/cse-2024.pdf",
    "cutoffs": {
      "kcet_2025": 8540,
      "comedk_2025": 14200,
      "kcet_2024": 9120,
      "comedk_2024": 15800
    },
    "faculty": [
      { "id": 12, "name": "Dr. Meena Rao", "designation": "Professor & HOD" }
    ],
    "placement_stats": {
      "avg_ctc_lpa": 9.2,
      "highest_ctc_lpa": 48,
      "placement_pct": 91
    }
  }
}
```

---

### 7.3 `GET /news`

Paginated news and circulars. Supports `?category=circular|event|research&limit=N&page=N`.

```json
{
  "data": [
    {
      "id": 101,
      "title": "BMSIT Ranks 3rd in VTU Results 2025-26",
      "category": "academic",
      "published_at": "2026-03-15T10:00:00Z",
      "slug": "bmsit-vtu-rank-2025-26",
      "excerpt": "BMSIT achieves outstanding results in the 2025-26 VTU examinations…",
      "cover_image_url": "https://cdn.bmsit.edu.in/news/vtu-results-2026.jpg"
    }
  ],
  "meta": { "total": 84, "page": 1, "pageSize": 12 }
}
```

---

### 7.4 `POST /enquiry` _(public, rate-limited: 5/IP/hour)_

Lead capture from admissions form. Forwards to Zoho CRM via webhook.

**Request:**
```json
{
  "name": "Thushar K S",
  "email": "thushar@email.com",
  "phone": "+91-9876543210",
  "program_interest": "CSE",
  "kcet_rank": 8200,
  "message": "Interested in B.E. CSE admissions 2026-27"
}
```

**Response `201`:**
```json
{ "success": true, "enquiry_id": "ENQ-2026-001423" }
```

---

### 7.5 `GET /placements/stats`

Placement summary — overall and department-wise. Updated annually by admin.

```json
{
  "data": {
    "year": 2025,
    "total_offers": 1284,
    "students_placed_pct": 84,
    "highest_ctc_lpa": 48.5,
    "avg_ctc_lpa": 9.2,
    "top_recruiters": ["Amazon", "Google", "Microsoft", "Infosys", "TCS", "Wipro"],
    "by_department": {
      "CSE":  { "placed_pct": 91, "avg_ctc_lpa": 11.2 },
      "AIML": { "placed_pct": 88, "avg_ctc_lpa": 10.8 },
      "ECE":  { "placed_pct": 78, "avg_ctc_lpa": 7.4 },
      "MECH": { "placed_pct": 65, "avg_ctc_lpa": 5.8 }
    }
  }
}
```

---

### 7.6 `POST /admin/news` 🔒 _(requires JWT role: admin | editor)_

Create a news article. Auth header required.

**Request:**
```json
{
  "title": "Tech Sanchalana 2026 Highlights",
  "category": "event",
  "body_markdown": "## Event Recap\nTech Sanchalana 2026 was held on…",
  "cover_image_id": "cloudinary-asset-id-abc123",
  "published_at": "2026-04-20T09:00:00Z"
}
```

**Response `201`:**
```json
{ "id": 205, "slug": "tech-sanchalana-2026", "status": "published" }
```

---

### 7.7 `GET /search?q=[query]`

Unified site-wide search via Algolia proxy. Supports `?type=program|news|faculty|page`.

```json
{
  "hits": [
    {
      "type": "program",
      "name": "B.E. AI & Machine Learning",
      "slug": "/academics/aiml",
      "snippet": "Intelligent Systems, Data Science, 180 seats…"
    },
    {
      "type": "news",
      "title": "AI-ML Research Lab Inauguration",
      "slug": "/news/aiml-lab-2026",
      "snippet": "BMSIT inaugurated its state-of-the-art AI-ML lab…"
    }
  ],
  "nbHits": 12,
  "processingTimeMS": 4
}
```

---

### 7.8 `GET /faculty`

Faculty directory. Supports `?department=cse|ece|aiml…` and `?research_area=[tag]`.

```json
{
  "data": [
    {
      "id": 12,
      "name": "Dr. Meena Rao",
      "designation": "Professor & HOD",
      "department": "CSE",
      "email": "meena.rao@bmsit.in",
      "google_scholar_url": "https://scholar.google.com/…",
      "photo_url": "https://cdn.bmsit.edu.in/faculty/meena-rao.jpg",
      "research_areas": ["Machine Learning", "NLP", "Computer Vision"]
    }
  ]
}
```

---

### 7.9 `POST /hostel/apply` _(authenticated student)_

Hostel application submission.

**Request:**
```json
{
  "student_id": "1BM22CS001",
  "hostel_type": "boys",
  "room_preference": "double",
  "academic_year": "2026-27"
}
```

**Response `201`:**
```json
{ "application_id": "HST-2026-00312", "status": "pending_review" }
```

---

## 8. Database Schema

**ORM:** Prisma | **Database:** PostgreSQL 16 on Supabase

---

### Table: `programs`

| Column | Type | Constraints | Notes |
|---|---|---|---|
| `id` | `uuid` | PRIMARY KEY, default gen_random_uuid() | — |
| `name` | `varchar(120)` | NOT NULL | Full program name |
| `code` | `varchar(10)` | NOT NULL, UNIQUE | CSE, ECE, AIML… |
| `type` | `enum(ug, pg, phd)` | NOT NULL | — |
| `intake` | `int` | NOT NULL | Annual seat count |
| `nba_accredited` | `bool` | DEFAULT false | — |
| `duration_years` | `int` | NOT NULL | 4 for B.E., 2 for M.Tech |
| `slug` | `varchar(60)` | NOT NULL, UNIQUE | URL segment |
| `created_at` | `timestamptz` | DEFAULT NOW() | Auto |
| `updated_at` | `timestamptz` | DEFAULT NOW() | Auto-update trigger |

---

### Table: `enquiries`

| Column | Type | Constraints | Notes |
|---|---|---|---|
| `id` | `uuid` | PRIMARY KEY | — |
| `name` | `varchar(100)` | NOT NULL | Applicant full name |
| `email` | `varchar(200)` | NOT NULL | — |
| `phone` | `varchar(15)` | — | E.164 format |
| `program_id` | `uuid` | FK → `programs.id` | Nullable |
| `kcet_rank` | `int` | — | Nullable |
| `comedk_rank` | `int` | — | Nullable |
| `message` | `text` | — | Free text |
| `status` | `enum(new, contacted, admitted, dropped)` | DEFAULT 'new' | CRM pipeline |
| `ip_address` | `inet` | — | For rate limiting |
| `created_at` | `timestamptz` | DEFAULT NOW() | — |

---

### Table: `faculty`

| Column | Type | Constraints | Notes |
|---|---|---|---|
| `id` | `uuid` | PRIMARY KEY | — |
| `name` | `varchar(120)` | NOT NULL | — |
| `designation` | `varchar(100)` | NOT NULL | Professor, HOD, etc. |
| `program_id` | `uuid` | FK → `programs.id` | Department |
| `email` | `varchar(200)` | UNIQUE | Official email |
| `phone` | `varchar(15)` | — | — |
| `google_scholar_url` | `text` | — | Nullable |
| `photo_url` | `text` | — | Cloudinary URL |
| `research_areas` | `text[]` | — | Array of tags |
| `is_hod` | `bool` | DEFAULT false | — |
| `joined_at` | `date` | — | — |
| `created_at` | `timestamptz` | DEFAULT NOW() | — |

---

### Table: `placement_stats`

| Column | Type | Constraints | Notes |
|---|---|---|---|
| `id` | `uuid` | PRIMARY KEY | — |
| `year` | `int` | NOT NULL | Academic year start e.g. 2025 |
| `program_id` | `uuid` | FK → `programs.id` | Department scope |
| `total_offers` | `int` | NOT NULL | — |
| `students_eligible` | `int` | NOT NULL | — |
| `placed_pct` | `decimal(5,2)` | NOT NULL | — |
| `avg_ctc_lpa` | `decimal(6,2)` | NOT NULL | — |
| `highest_ctc_lpa` | `decimal(6,2)` | NOT NULL | — |
| `top_recruiters` | `text[]` | — | Company name array |
| `updated_at` | `timestamptz` | DEFAULT NOW() | — |

---

### Table: `hostel_applications`

| Column | Type | Constraints | Notes |
|---|---|---|---|
| `id` | `uuid` | PRIMARY KEY | — |
| `student_id` | `varchar(20)` | NOT NULL | USN e.g. 1BM22CS001 |
| `hostel_type` | `enum(boys, girls)` | NOT NULL | — |
| `room_preference` | `enum(single, double, triple)` | DEFAULT 'double' | — |
| `academic_year` | `varchar(10)` | NOT NULL | e.g. 2026-27 |
| `status` | `enum(pending_review, approved, rejected, waitlisted)` | DEFAULT 'pending_review' | — |
| `created_at` | `timestamptz` | DEFAULT NOW() | — |

---

### Table: `patents`

| Column | Type | Constraints | Notes |
|---|---|---|---|
| `id` | `uuid` | PRIMARY KEY | — |
| `title` | `text` | NOT NULL | — |
| `patent_number` | `varchar(50)` | UNIQUE | Nullable until granted |
| `status` | `enum(filed, published, granted)` | NOT NULL | — |
| `filed_date` | `date` | NOT NULL | — |
| `granted_date` | `date` | — | Nullable |
| `inventors` | `text[]` | NOT NULL | Faculty/student names |
| `department` | `varchar(10)` | FK → programs.code | — |
| `abstract` | `text` | — | — |

---

## 9. Design System

### 9.1 Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--bms-crimson` | `#C41230` | Primary brand, CTAs, accents |
| `--bms-warm-gold` | `#E0A96D` | Italic headings, highlights |
| `--bms-near-black` | `#0D0D0D` | Page background |
| `--bms-surface` | `#141414` | Card and component backgrounds |
| `--bms-cream` | `#F0EDE8` | Primary text on dark |
| `--bms-muted` | `#8A8A8A` | Secondary text, captions |
| `--bms-blue` | `#2D6FC4` | Links, info states |
| `--bms-success` | `#3FB06A` | Success states, placement ticks |
| `--bms-border` | `rgba(255,255,255,0.08)` | Subtle dividers, card borders |

### 9.2 Typography

| Scale | Font | Size | Weight | Usage |
|---|---|---|---|---|
| Display | DM Serif Display | 48–96px | 400 | Hero headings |
| H1 | DM Serif Display | 36–48px | 400 | Section titles |
| H2 | DM Serif Display | 28–36px | 400 | Sub-section titles |
| H3 | DM Sans | 20–24px | 500 | Card titles, component heads |
| Body | DM Sans | 15–16px | 300 | Body copy, descriptions |
| Label | DM Sans | 11–12px | 500 | Eyebrows, tags, nav items |
| Mono | Courier New | 13px | 400 | Code, API paths, URLs |

### 9.3 Spacing Scale

```
4px · 8px · 12px · 16px · 24px · 32px · 48px · 64px · 96px · 128px
```

### 9.4 Component Library

All components built in React with Tailwind CSS. Primitives sourced from **Shadcn/ui**, customised to BMSIT design tokens.

| Component | Description |
|---|---|
| `Button` | Primary (crimson fill) · Secondary (ghost) · Destructive |
| `Card` | Surface + 0.5px border + hover state |
| `Badge` | Inline tag — red · gold · blue · neutral variants |
| `HeroSlider` | Full-width, autoplay, accessible keyboard navigation |
| `Ticker` | CSS marquee — accreditation accolades |
| `ProgramCard` | Image + department name + intake + NBA badge + CTA |
| `FacultyCard` | Avatar + name + designation + Google Scholar link |
| `SyllabusViewer` | PDF embed (pdf.js) + download button |
| `ChartBar` | Chart.js wrapper — placement trends, cutoff history |
| `EnquiryForm` | Zod-validated multi-field form, honeypot spam trap |
| `CountdownTimer` | SSR-safe hydration, KCET/COMEDK deadline |
| `SearchBar` | Algolia InstantSearch — typeahead with keyboard nav |
| `LanguageSwitcher` | EN / ಕನ್ನಡ toggle, persisted in localStorage |
| `Breadcrumb` | Structured data JSON-LD, accessible nav |
| `Lightbox` | Campus gallery image expand, keyboard close |

### 9.5 Iconography

- **Library:** Lucide React (consistent 24px stroke-based icons)
- **Stroke width:** 1.5px
- **Usage:** Navigation, card icons, feature tiles

### 9.6 Motion

- **Library:** Framer Motion
- **Page transitions:** Fade + subtle Y shift (200ms ease)
- **Scroll reveals:** `useInView` — staggered card animations
- **Hover states:** Scale 1.02 on cards, color transitions 200ms
- **Reduced motion:** All animations respect `prefers-reduced-motion`

---

## 10. Features & Functionality

### 10.1 Core Features

| Feature | Technology | Priority |
|---|---|---|
| AI-powered site search | Algolia InstantSearch | P0 |
| CMS-driven content management | Strapi v4 | P0 |
| Role-based access control | NextAuth + Strapi permissions | P0 |
| Enquiry form + CRM sync | Zod + Zoho webhook | P0 |
| PDF document management | Cloudinary CDN | P0 |
| Multilingual — Kannada | next-i18n | P1 |
| Progressive Web App (PWA) | next-pwa + service worker | P1 |
| WCAG 2.1 AA accessibility | axe-core CI checks | P0 |
| Interactive placement charts | Chart.js | P1 |
| Campus map with markers | Google Maps API | P1 |
| Virtual campus tour | Google Street View 360° embed | P2 |
| Alumni network portal | LinkedIn OAuth + custom DB | P2 |
| Recruiter JD portal | Email webhook → placement cell | P1 |
| Newsletter subscriptions | Mailchimp / Resend | P1 |
| CICC Grievance portal | Custom form + email routing | P0 |
| AICTE student feedback | Embedded AICTE portal link | P0 |
| VTU syllabus integration | PDF CDN + version history | P1 |
| NEP 2020 policy documents | PDF library page | P1 |
| Hostel application form | DB + confirmation email | P1 |
| Bus route finder | Interactive map + schedule | P1 |
| Analytics admin dashboard | GA4 + Vercel Analytics | P1 |

### 10.2 SEO Strategy

- **Technical SEO:** Sitemap, robots.txt, structured data (JSON-LD: Organization, Course, Event)
- **Meta:** Unique title + description on every page, Open Graph + Twitter Cards
- **Performance:** Core Web Vitals — LCP < 2.5s, FID < 100ms, CLS < 0.1
- **URLs:** Clean slugs (`/academics/cse`), no trailing slashes, canonical tags
- **Content:** Long-tail keywords via news/circular pages (e.g. "KCET 2026 CSE cutoff BMSIT")
- **Images:** WebP via Cloudinary, `alt` text on all images, lazy loading

### 10.3 Compliance & Regulatory

| Requirement | Implementation |
|---|---|
| AICTE Student Feedback | Dedicated portal page with embedded link |
| CICC Grievance Redressal | Custom form → ticket system |
| VTU Syllabus Publication | Annual PDF update + version archive |
| NEP 2020 Policies | Document library, downloadable |
| RTI / Mandatory Disclosure | Static page, annually updated |
| GDPR / Privacy | Privacy policy page, cookie consent |

---

## 11. Development Roadmap

**Total Duration:** 12 Weeks
**Methodology:** 2-week sprints, Jira, GitHub
**Team:** 2 Frontend · 1 Backend · 1 Designer · 1 PM

---

### Phase 1 — Discovery & Foundation
**April 1–14, 2026 · 2 weeks**

- Content audit of bmsit.ac.in — inventory all pages, PDFs, media
- Information architecture finalised, navigation approved by stakeholders
- Figma wireframes for all P0 pages
- Design system tokens defined, component library scaffolded
- GitHub monorepo setup, branching strategy, CI/CD pipeline (GitHub Actions → Vercel)
- Strapi v4 installed on Railway, content types defined
- PostgreSQL schema created via Prisma migrations
- Cloudinary account setup, folder structure, upload presets

**Deliverables:** Figma wireframes, repo, Strapi running, DB schema, CI green

---

### Phase 2 — Core Build
**April 15 – May 12, 2026 · 4 weeks**

- Home page — HeroSlider, StatsRail, ProgramCards, AccoladesTicker
- Academics section — index + 12 department dynamic pages, SyllabusViewer, FacultyGrid
- Admissions hub — AdmissionsTimeline, FeesTable, EnquiryForm + CRM sync
- Placements page — stats, RecruiterLogos marquee, YearWiseChart
- REST API — all endpoints in Section 7 implemented and documented
- NextAuth.js — RBAC roles, admin/editor login
- Strapi CMS — content editors trained, first content migrated
- Cloudinary integration — all images/PDFs served via CDN

**Deliverables:** P0 pages live on staging, API docs (Swagger/Postman), CMS working

---

### Phase 3 — Advanced Features & SEO
**May 13 – June 9, 2026 · 4 weeks**

- Research portal — patents DB, KSCST projects, publications index
- Student Life — ClubsDirectory, BusRouteFinder, EventCalendar
- About BMSIT — LeadershipGrid, AccreditationBadges, VirtualTour
- News & Circulars — CMS feed, CircularsFeed, newsletter subscribe
- Algolia search — index all content types, InstantSearch UI
- Kannada localisation (next-i18n) — key pages translated
- PWA — service worker, offline caching of key routes
- SEO — sitemap.xml, JSON-LD, Open Graph, robots.txt
- GA4 + Vercel Analytics integration
- Lighthouse CI — enforce 90+ score on every PR

**Deliverables:** All P1 pages live on staging, search working, 90+ Lighthouse score

---

### Phase 4 — QA, Migration & Launch
**June 10–25, 2026 · 2 weeks**

- Full content migration from bmsit.ac.in — all pages, PDFs, images
- 301 redirect map implemented and tested
- Security audit — OWASP Top 10, dependency scan (Snyk)
- WCAG 2.1 AA audit — axe-core + manual screen reader testing
- Cross-browser testing — Chrome, Firefox, Safari, Edge
- Mobile testing — Android (Chrome), iOS (Safari), tablet breakpoints
- Load test — k6, 500 concurrent users, no P95 > 800ms
- SSL certificate active on production domain
- DNS cutover from bmsit.ac.in → bmsit.edu.in (or subdomain)
- Sentry + UptimeRobot live on production
- Backup + disaster recovery plan documented and tested

**🚀 Go-Live: June 25, 2026**

---

## 12. Pre-Launch Checklist

### Content & SEO
- [ ] Migrate 100% of bmsit.ac.in content to CMS
- [ ] 301 redirect map for all old URLs verified
- [ ] Google Search Console ownership verified
- [ ] `sitemap.xml` submitted to Google Search Console
- [ ] Open Graph + Twitter Card meta on all pages
- [ ] `robots.txt` correctly configured
- [ ] All PDFs uploaded to Cloudinary and linked
- [ ] JSON-LD structured data validated (schema.org)

### Technical
- [ ] SSL certificate active on production domain
- [ ] Lighthouse score ≥ 90 on all 4 metrics (all P0 pages)
- [ ] WCAG 2.1 AA audit passed
- [ ] Mobile responsive — all breakpoints tested (320px, 768px, 1024px, 1440px)
- [ ] Cross-browser tested — Chrome, Firefox, Safari, Edge
- [ ] Load test passed — 500 concurrent users, P95 < 800ms (k6)
- [ ] All API endpoints returning correct status codes
- [ ] Rate limiting active and tested

### Security
- [ ] OWASP Top 10 security scan completed (Snyk)
- [ ] All environment variables in Vercel/Railway, none in codebase
- [ ] CORS policy restricted to production domain
- [ ] Content Security Policy (CSP) headers configured
- [ ] Admin credentials rotated from defaults

### Operations
- [ ] Sentry error monitoring live on production
- [ ] UptimeRobot alerts configured (email + Slack)
- [ ] GA4 tracking verified — events firing correctly
- [ ] CRM webhook tested — enquiry leads flowing to Zoho
- [ ] Backup schedule configured — daily DB snapshot to S3
- [ ] Disaster recovery runbook documented
- [ ] CMS editorial training completed for admin team
- [ ] Rollback plan documented (Vercel instant rollback)

---

## 13. Approval Signatures

This document requires sign-off from all parties before development commences.

| Role | Name | Signature | Date |
|---|---|---|---|
| Principal, BMSIT | | _________________________ | _________ |
| Project Manager | | _________________________ | _________ |
| Technical Lead | | _________________________ | _________ |
| Head of Marketing | | _________________________ | _________ |
| CMS / Content Owner | | _________________________ | _________ |

---

*BMSIT Digital Platform PRD · Version 1.0 · March 27, 2026*
*Confidential — BMSIT Internal Document*
*BMS Institute of Technology & Management · Yelahanka · Bengaluru 560064*