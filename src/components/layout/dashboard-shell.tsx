"use client";

import { Sidebar, useActiveSection } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { ExecutiveDashboard } from "@/components/sections/executive-dashboard";
import { DealOverview } from "@/components/sections/deal-overview";
import { DocumentTracker } from "@/components/sections/document-tracker";
import { DueDiligenceChecklist } from "@/components/sections/due-diligence-checklist";
import { IssueTracker } from "@/components/sections/issue-tracker";
import { ManagementQueryTracker } from "@/components/sections/management-query-tracker";
import { Timeline } from "@/components/sections/timeline";
import { PartnerSummary } from "@/components/sections/partner-summary";
import { TooltipProvider } from "@/components/ui/tooltip";

export function DashboardShell() {
  const { activeSection, navigateTo } = useActiveSection();

  return (
    <TooltipProvider>
      <div className="flex min-h-screen bg-background">
        <Sidebar activeSection={activeSection} onNavigate={navigateTo} />
        <div className="flex min-w-0 flex-1 flex-col">
          <Header />
          <main className="flex-1 overflow-y-auto">
            <ExecutiveDashboard />
            <DealOverview />
            <DocumentTracker />
            <DueDiligenceChecklist />
            <IssueTracker />
            <ManagementQueryTracker />
            <Timeline />
            <PartnerSummary />
            <footer className="border-t border-border/40 px-6 py-6 text-center text-xs text-muted-foreground lg:px-8">
              Vendor Tax Due Diligence Dashboard · Deloitte M&A Tax · Internal Use Only · {new Date().getFullYear()}
            </footer>
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
