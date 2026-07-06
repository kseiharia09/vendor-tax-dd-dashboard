"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { PriorityBadge, StatusBadge } from "@/components/shared/status-badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { managementQueries } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import { MessageSquare, User } from "lucide-react";

export function ManagementQueryTracker() {
  const pendingCount = managementQueries.filter(
    (q) => q.status === "Pending" || q.status === "In Progress" || q.status === "Overdue"
  ).length;

  return (
    <section id="queries" className="section-padding scroll-mt-16 border-t border-border/40 bg-muted/20">
      <FadeIn>
        <SectionHeader
          title="Management Query Tracker"
          description={`${pendingCount} queries awaiting response`}
        />
      </FadeIn>

      <StaggerContainer className="grid gap-4">
        {managementQueries.map((query) => (
          <StaggerItem key={query.id}>
            <Card className="border-border/60 transition-shadow hover:shadow-sm">
              <CardContent className="p-5">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex gap-4">
                    <div className="hidden rounded-lg bg-primary/10 p-2.5 sm:block">
                      <MessageSquare className="h-4 w-4 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs text-muted-foreground">{query.id}</span>
                        <PriorityBadge priority={query.priority} />
                        <StatusBadge status={query.status} />
                      </div>
                      <p className="mt-2 text-sm font-medium leading-relaxed">{query.query}</p>
                      <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          Raised by: {query.raisedBy}
                        </span>
                        <span>Assignee: {query.assignee}</span>
                        <span>Raised: {formatDate(query.raisedDate)}</span>
                        {query.responseDate && (
                          <span>Answered: {formatDate(query.responseDate)}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
