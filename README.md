# Vendor Tax Due Diligence Dashboard

Internal enterprise dashboard for **Deloitte M&A Tax** professionals to help Chartered Accountants manage the entire Vendor Tax Due Diligence process.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** components
- **Framer Motion** for animations
- **Recharts** for data visualization
- **next-themes** for dark/light mode

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Dashboard Sections

| Section | Description |
|---------|-------------|
| Executive Dashboard | KPIs, progress charts, issue breakdown |
| Deal Overview | Transaction details, parties, team, key considerations |
| Document Tracker | Required document upload status |
| Due Diligence Checklist | Workstream progress and completion |
| Issue Tracker | Priority, owner, status tracking |
| Management Query Tracker | Queries from management and client |
| Timeline | Engagement phases and milestones |
| Partner Summary | Project health, risks, next steps |

## Sample Engagement

The dashboard uses realistic mock data for **Project Atlas** — the acquisition of **Acme Manufacturing Ltd.** (mid-size manufacturing company, India, Share Purchase Agreement).

## Project Structure

```
src/
├── app/                    # Next.js App Router (layout, page, globals)
├── components/
│   ├── layout/             # Sidebar, header, dashboard shell
│   ├── motion/             # Framer Motion wrappers
│   ├── sections/           # Eight dashboard section components
│   ├── shared/             # Reusable UI helpers
│   └── ui/                 # shadcn/ui primitives
└── lib/
    ├── mock-data.ts        # Sample engagement data
    └── utils.ts            # Utilities
```

## Features

- Responsive sidebar navigation with scroll-spy active states
- Dark/light theme toggle
- Smooth scroll navigation between sections
- Framer Motion fade-in and stagger animations
- Professional navy/slate enterprise color palette

---

*Internal use only · Deloitte M&A Tax*
