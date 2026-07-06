"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { PriorityBadge, StatusBadge } from "@/components/shared/status-badge";
import { FadeIn } from "@/components/motion/fade-in";
import { issues } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function IssueTracker() {
  const openCount = issues.filter((i) => i.status !== "Resolved").length;
  const criticalCount = issues.filter((i) => i.priority === "Critical" && i.status !== "Resolved").length;

  return (
    <section id="issues" className="section-padding scroll-mt-16">
      <FadeIn>
        <SectionHeader
          title="Issue Tracker"
          description={`${openCount} open issues · ${criticalCount} critical requiring attention`}
        />
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="mb-6 flex flex-wrap gap-3">
          {(["Critical", "High", "Medium", "Low"] as const).map((priority) => {
            const count = issues.filter((i) => i.priority === priority).length;
            return (
              <div
                key={priority}
                className="flex items-center gap-2 rounded-lg border border-border/60 bg-card px-4 py-2"
              >
                <PriorityBadge priority={priority} />
                <span className="text-sm font-semibold">{count}</span>
              </div>
            );
          })}
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <Card className="border-border/60">
          <CardHeader>
            <CardTitle className="text-base">All Issues</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-[80px]">ID</TableHead>
                  <TableHead>Issue</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead className="hidden md:table-cell">Area</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden sm:table-cell">Owner</TableHead>
                  <TableHead className="hidden lg:table-cell">Due</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {issues.map((issue) => (
                  <TableRow key={issue.id}>
                    <TableCell className="font-mono text-xs text-muted-foreground">
                      {issue.id}
                    </TableCell>
                    <TableCell>
                      <p className="max-w-md font-medium">{issue.title}</p>
                      <p className="text-xs text-muted-foreground">
                        Raised {formatDate(issue.raisedDate)}
                      </p>
                    </TableCell>
                    <TableCell>
                      <PriorityBadge priority={issue.priority} />
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground">
                      {issue.area}
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={issue.status} />
                    </TableCell>
                    <TableCell className="hidden sm:table-cell text-muted-foreground">
                      {issue.owner}
                    </TableCell>
                    <TableCell className="hidden lg:table-cell text-muted-foreground">
                      {formatDate(issue.dueDate)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </FadeIn>
    </section>
  );
}
