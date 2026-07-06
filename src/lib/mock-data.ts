export const engagement = {
  id: "ENG-2026-0147",
  name: "Project Atlas — Acme Manufacturing Acquisition",
  client: "Acme Manufacturing Ltd.",
  dealType: "Share Purchase Agreement (SPA)",
  jurisdiction: "India",
  targetEntity: "Acme Manufacturing Private Limited",
  acquirer: "GlobalTech Industries Inc.",
  dealValue: "₹850 Cr",
  status: "In Progress",
  startDate: "2026-02-03",
  expectedClose: "2026-06-30",
  completionPercent: 62,
};

export const team = {
  partner: { name: "Rajesh Mehta", role: "Engagement Partner", email: "rmehta@deloitte.com" },
  manager: { name: "Priya Sharma", role: "Tax Manager", email: "psharma@deloitte.com" },
  senior: { name: "Arjun Patel", role: "Senior Consultant", email: "apatel@deloitte.com" },
  members: [
    { name: "Neha Gupta", role: "Consultant" },
    { name: "Vikram Singh", role: "Consultant" },
    { name: "Ananya Reddy", role: "Analyst" },
  ],
  clientContact: { name: "Sanjay Khanna", role: "CFO, Acme Manufacturing Ltd.", email: "s.khanna@acmemfg.in" },
};

export const kpis = [
  { label: "Overall Progress", value: "62%", change: "+8% this week", trend: "up" as const },
  { label: "Documents Received", value: "34/48", change: "71% complete", trend: "up" as const },
  { label: "Open Issues", value: "12", change: "3 critical", trend: "down" as const },
  { label: "Queries Pending", value: "7", change: "2 overdue", trend: "neutral" as const },
  { label: "Days to Close", value: "24", change: "On track", trend: "up" as const },
  { label: "Checklist Items", value: "28/45", change: "62% done", trend: "up" as const },
];

export const progressChart = [
  { week: "W1", documents: 12, checklist: 8, issues: 18 },
  { week: "W2", documents: 18, checklist: 14, issues: 16 },
  { week: "W3", documents: 24, checklist: 20, issues: 14 },
  { week: "W4", documents: 28, checklist: 24, issues: 13 },
  { week: "W5", documents: 31, checklist: 26, issues: 12 },
  { week: "W6", documents: 34, checklist: 28, issues: 12 },
];

export const issueBreakdown = [
  { name: "Critical", value: 3, color: "#ef4444" },
  { name: "High", value: 4, color: "#f97316" },
  { name: "Medium", value: 3, color: "#eab308" },
  { name: "Low", value: 2, color: "#22c55e" },
];

export const dealDetails = {
  transactionStructure: "100% share acquisition of Acme Manufacturing Pvt. Ltd.",
  industry: "Manufacturing — Industrial Components",
  employees: "~1,200",
  revenue: "₹620 Cr (FY25)",
  ebitda: "₹78 Cr (FY25)",
  taxRegistrations: ["GST", "TDS", "Professional Tax", "Labour Welfare Fund", "Import/Export Code"],
  keyConsiderations: [
    "Section 56(2)(x) implications on share premium",
    "Transfer pricing documentation for related-party transactions",
    "Pending GST assessments for FY22–FY24",
    "Capital gains tax computation for promoter group",
    "MAT credit carry-forward verification",
    "Undisclosed liabilities under IBC framework",
  ],
  parties: [
    { role: "Target", name: "Acme Manufacturing Pvt. Ltd.", jurisdiction: "India" },
    { role: "Acquirer", name: "GlobalTech Industries Inc.", jurisdiction: "USA" },
    { role: "Seller", name: "Khanna Family Trust", jurisdiction: "India" },
    { role: "Legal Counsel", name: "Khaitan & Co.", jurisdiction: "India" },
    { role: "Financial DD", name: "EY India", jurisdiction: "India" },
  ],
};

export const documents = [
  { id: 1, name: "Income Tax Returns (FY21–FY25)", category: "Direct Tax", status: "received" as const, dueDate: "2026-02-15", receivedDate: "2026-02-12", owner: "Client" },
  { id: 2, name: "GST Returns (Monthly, FY23–FY25)", category: "Indirect Tax", status: "received" as const, dueDate: "2026-02-20", receivedDate: "2026-02-18", owner: "Client" },
  { id: 3, name: "Transfer Pricing Documentation", category: "Transfer Pricing", status: "partial" as const, dueDate: "2026-02-25", receivedDate: null, owner: "Client" },
  { id: 4, name: "TDS Returns & Form 16/16A", category: "Direct Tax", status: "received" as const, dueDate: "2026-02-15", receivedDate: "2026-02-14", owner: "Client" },
  { id: 5, name: "Tax Audit Reports (3CA/3CD)", category: "Direct Tax", status: "received" as const, dueDate: "2026-02-20", receivedDate: "2026-02-19", owner: "Client" },
  { id: 6, name: "Advance Ruling Applications", category: "Direct Tax", status: "pending" as const, dueDate: "2026-03-01", receivedDate: null, owner: "Client" },
  { id: 7, name: "Litigation & Dispute Summary", category: "Legal/Tax", status: "received" as const, dueDate: "2026-02-28", receivedDate: "2026-02-26", owner: "Client" },
  { id: 8, name: "Fixed Asset Register & Depreciation Schedule", category: "Direct Tax", status: "received" as const, dueDate: "2026-02-18", receivedDate: "2026-02-17", owner: "Client" },
  { id: 9, name: "Related Party Transaction Schedule", category: "Transfer Pricing", status: "partial" as const, dueDate: "2026-03-05", receivedDate: null, owner: "Client" },
  { id: 10, name: "MAT Computation & Credit Schedule", category: "Direct Tax", status: "pending" as const, dueDate: "2026-03-10", receivedDate: null, owner: "Client" },
  { id: 11, name: "Customs & Import Duty Records", category: "Indirect Tax", status: "overdue" as const, dueDate: "2026-02-28", receivedDate: null, owner: "Client" },
  { id: 12, name: "Employee Stock Option Tax Impact", category: "Direct Tax", status: "pending" as const, dueDate: "2026-03-15", receivedDate: null, owner: "Client" },
];

export const checklistItems = [
  { id: 1, area: "Direct Tax", item: "Verify income tax return filings for last 5 years", status: "complete" as const, assignee: "Arjun Patel" },
  { id: 2, area: "Direct Tax", item: "Review tax assessment orders and appeals", status: "complete" as const, assignee: "Neha Gupta" },
  { id: 3, area: "Direct Tax", item: "Analyze MAT credit carry-forward position", status: "in-progress" as const, assignee: "Arjun Patel" },
  { id: 4, area: "Direct Tax", item: "Review depreciation methodology and block assets", status: "complete" as const, assignee: "Vikram Singh" },
  { id: 5, area: "Indirect Tax", item: "Verify GST registration and filing compliance", status: "complete" as const, assignee: "Neha Gupta" },
  { id: 6, area: "Indirect Tax", item: "Review input tax credit reconciliation", status: "in-progress" as const, assignee: "Ananya Reddy" },
  { id: 7, area: "Indirect Tax", item: "Assess pending GST assessment notices", status: "in-progress" as const, assignee: "Neha Gupta" },
  { id: 8, area: "Transfer Pricing", item: "Review TP documentation and benchmarking", status: "in-progress" as const, assignee: "Arjun Patel" },
  { id: 9, area: "Transfer Pricing", item: "Analyze related-party transaction pricing", status: "pending" as const, assignee: "Arjun Patel" },
  { id: 10, area: "Transaction Tax", item: "Compute capital gains for promoter shareholders", status: "pending" as const, assignee: "Priya Sharma" },
  { id: 11, area: "Transaction Tax", item: "Assess Section 56(2)(x) implications", status: "in-progress" as const, assignee: "Priya Sharma" },
  { id: 12, area: "Compliance", item: "Verify TDS/TCS compliance and defaults", status: "complete" as const, assignee: "Vikram Singh" },
];

export const issues = [
  { id: "ISS-001", title: "Undisclosed GST demand of ₹2.4 Cr for FY22", priority: "Critical" as const, status: "Open" as const, owner: "Neha Gupta", area: "Indirect Tax", raisedDate: "2026-03-05", dueDate: "2026-03-12" },
  { id: "ISS-002", title: "Missing TP documentation for Singapore subsidiary transactions", priority: "Critical" as const, status: "In Review" as const, owner: "Arjun Patel", area: "Transfer Pricing", raisedDate: "2026-03-08", dueDate: "2026-03-15" },
  { id: "ISS-003", title: "Discrepancy in MAT credit carry-forward (₹1.8 Cr variance)", priority: "Critical" as const, status: "Open" as const, owner: "Arjun Patel", area: "Direct Tax", raisedDate: "2026-03-10", dueDate: "2026-03-18" },
  { id: "ISS-004", title: "Pending income tax assessment for AY 2022-23", priority: "High" as const, status: "In Review" as const, owner: "Neha Gupta", area: "Direct Tax", raisedDate: "2026-02-28", dueDate: "2026-03-14" },
  { id: "ISS-005", title: "Customs duty short-payment on imported machinery", priority: "High" as const, status: "Open" as const, owner: "Vikram Singh", area: "Indirect Tax", raisedDate: "2026-03-01", dueDate: "2026-03-20" },
  { id: "ISS-006", title: "ESOP tax withholding non-compliance for FY24", priority: "High" as const, status: "Resolved" as const, owner: "Ananya Reddy", area: "Direct Tax", raisedDate: "2026-02-20", dueDate: "2026-03-01" },
  { id: "ISS-007", title: "Related-party loan at below-market interest rate", priority: "Medium" as const, status: "In Review" as const, owner: "Arjun Patel", area: "Transfer Pricing", raisedDate: "2026-03-06", dueDate: "2026-03-22" },
  { id: "ISS-008", title: "Professional tax registration gap in Karnataka facility", priority: "Medium" as const, status: "Open" as const, owner: "Vikram Singh", area: "Compliance", raisedDate: "2026-03-09", dueDate: "2026-03-25" },
  { id: "ISS-009", title: "Delayed TDS deposit for Q3 FY25", priority: "Medium" as const, status: "Resolved" as const, owner: "Vikram Singh", area: "Direct Tax", raisedDate: "2026-02-15", dueDate: "2026-02-28" },
  { id: "ISS-010", title: "Minor GST classification discrepancy on exports", priority: "Low" as const, status: "Open" as const, owner: "Ananya Reddy", area: "Indirect Tax", raisedDate: "2026-03-11", dueDate: "2026-03-30" },
  { id: "ISS-011", title: "Outdated Form 15CA/CB for foreign remittances", priority: "Low" as const, status: "In Review" as const, owner: "Neha Gupta", area: "Direct Tax", raisedDate: "2026-03-07", dueDate: "2026-03-28" },
  { id: "ISS-012", title: "Depreciation rate mismatch on leased assets", priority: "Low" as const, status: "Open" as const, owner: "Ananya Reddy", area: "Direct Tax", raisedDate: "2026-03-12", dueDate: "2026-04-05" },
];

export const managementQueries = [
  { id: "MQ-001", query: "What is the total tax exposure from pending GST assessments?", raisedBy: "Rajesh Mehta", assignee: "Neha Gupta", status: "Answered" as const, priority: "High" as const, raisedDate: "2026-03-01", responseDate: "2026-03-04" },
  { id: "MQ-002", query: "Can MAT credits be carried forward post-acquisition under new ownership?", raisedBy: "Client — Sanjay Khanna", assignee: "Priya Sharma", status: "In Progress" as const, priority: "Critical" as const, raisedDate: "2026-03-05", responseDate: null },
  { id: "MQ-003", query: "Summary of Section 56(2)(x) risk and potential quantification", raisedBy: "Rajesh Mehta", assignee: "Priya Sharma", status: "In Progress" as const, priority: "High" as const, raisedDate: "2026-03-08", responseDate: null },
  { id: "MQ-004", query: "Timeline for completion of transfer pricing analysis", raisedBy: "Client — Sanjay Khanna", assignee: "Arjun Patel", status: "Answered" as const, priority: "Medium" as const, raisedDate: "2026-02-25", responseDate: "2026-02-27" },
  { id: "MQ-005", query: "Impact of pending customs duty dispute on deal valuation", raisedBy: "Rajesh Mehta", assignee: "Vikram Singh", status: "Pending" as const, priority: "High" as const, raisedDate: "2026-03-10", responseDate: null },
  { id: "MQ-006", query: "Breakdown of capital gains tax liability for promoter group", raisedBy: "Client — Sanjay Khanna", assignee: "Priya Sharma", status: "Pending" as const, priority: "Critical" as const, raisedDate: "2026-03-12", responseDate: null },
  { id: "MQ-007", query: "Status of employee-related tax compliance review", raisedBy: "Rajesh Mehta", assignee: "Ananya Reddy", status: "Overdue" as const, priority: "Medium" as const, raisedDate: "2026-02-28", responseDate: null },
];

export const timelinePhases = [
  { phase: "Kickoff", status: "completed" as const, startDate: "2026-02-03", endDate: "2026-02-07", description: "Engagement letter signed, team mobilized, initial data request sent" },
  { phase: "Data Collection", status: "completed" as const, startDate: "2026-02-08", endDate: "2026-03-07", description: "Document requests issued, VDR access established, 71% documents received" },
  { phase: "Analysis", status: "in-progress" as const, startDate: "2026-03-08", endDate: "2026-04-15", description: "Tax due diligence analysis underway across direct, indirect, and TP workstreams" },
  { phase: "Reporting", status: "upcoming" as const, startDate: "2026-04-16", endDate: "2026-05-15", description: "Draft report preparation, issue summary, and management presentation" },
  { phase: "Sign-off", status: "upcoming" as const, startDate: "2026-05-16", endDate: "2026-06-30", description: "Final report issuance, partner review, and engagement closure" },
];

export const partnerSummary = {
  overallHealth: "Amber",
  healthScore: 72,
  summary: "The engagement is progressing on schedule with 62% overall completion. Three critical issues require immediate attention — undisclosed GST demand, missing TP documentation, and MAT credit variance. Document collection is at 71% with customs records overdue. Management queries on Section 56(2)(x) and capital gains remain pending partner review.",
  strengths: [
    "Strong client cooperation on direct tax document submission",
    "GST compliance review substantially complete",
    "TDS/TCS compliance verified with no material defaults",
    "Team utilization within budget at 78%",
  ],
  risks: [
    "₹2.4 Cr undisclosed GST demand could impact deal pricing",
    "Missing TP docs for Singapore transactions — potential ₹5 Cr exposure",
    "MAT credit variance requires urgent reconciliation",
    "Customs duty records overdue — blocking indirect tax sign-off",
  ],
  nextSteps: [
    "Escalate GST demand issue to client CFO by 14 Mar",
    "Schedule TP working session with client tax team",
    "Complete MAT credit reconciliation by 18 Mar",
    "Draft interim findings memo for partner review by 20 Mar",
  ],
  budget: { allocated: 450, consumed: 352, unit: "hours" },
  milestones: [
    { label: "Data Collection", percent: 71 },
    { label: "Analysis", percent: 45 },
    { label: "Issue Resolution", percent: 33 },
    { label: "Reporting", percent: 0 },
  ],
};

export const navItems = [
  { id: "executive", label: "Executive Dashboard", icon: "LayoutDashboard" },
  { id: "deal", label: "Deal Overview", icon: "Briefcase" },
  { id: "documents", label: "Document Tracker", icon: "FileText" },
  { id: "checklist", label: "Due Diligence Checklist", icon: "CheckSquare" },
  { id: "issues", label: "Issue Tracker", icon: "AlertTriangle" },
  { id: "queries", label: "Management Queries", icon: "MessageSquare" },
  { id: "timeline", label: "Timeline", icon: "Clock" },
  { id: "partner", label: "Partner Summary", icon: "Users" },
];
