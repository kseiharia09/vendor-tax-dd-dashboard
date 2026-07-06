"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { StatusBadge } from "@/components/shared/status-badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { checklistItems } from "@/lib/mock-data";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const statusIcon = {
  complete: CheckCircle2,
  "in-progress": Loader2,
  pending: Circle,
};

const areas = [...new Set(checklistItems.map((i) => i.area))];
const completeCount = checklistItems.filter((i) => i.status === "complete").length;
const progressPercent = Math.round((completeCount / checklistItems.length) * 100);

export function DueDiligenceChecklist() {
  return (
    <section id="checklist" className="section-padding scroll-mt-16 border-t border-border/40 bg-muted/20">
      <FadeIn>
        <SectionHeader
          title="Due Diligence Checklist"
          description="Progress indicators and completion status by workstream"
        />
      </FadeIn>

      <FadeIn delay={0.05}>
        <Card className="mb-6 border-border/60">
          <CardContent className="p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium">Checklist Completion</p>
                <p className="text-xs text-muted-foreground">
                  {completeCount} of {checklistItems.length} items complete
                </p>
              </div>
              <p className="text-2xl font-semibold">{progressPercent}%</p>
            </div>
            <Progress value={progressPercent} className="mt-4 h-2" />
          </CardContent>
        </Card>
      </FadeIn>

      <div className="grid gap-6 lg:grid-cols-2">
        {areas.map((area, areaIndex) => {
          const items = checklistItems.filter((i) => i.area === area);
          const areaComplete = items.filter((i) => i.status === "complete").length;
          const areaPercent = Math.round((areaComplete / items.length) * 100);

          return (
            <FadeIn key={area} delay={0.1 + areaIndex * 0.05}>
              <Card className="border-border/60">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{area}</CardTitle>
                    <span className="text-xs font-medium text-muted-foreground">
                      {areaComplete}/{items.length}
                    </span>
                  </div>
                  <Progress value={areaPercent} className="h-1.5" />
                </CardHeader>
                <CardContent className="space-y-2">
                  <StaggerContainer>
                    {items.map((item) => {
                      const Icon = statusIcon[item.status];
                      return (
                        <StaggerItem key={item.id}>
                          <div
                            className={cn(
                              "flex items-start gap-3 rounded-lg border border-border/40 p-3 transition-colors hover:bg-accent/30",
                              item.status === "complete" && "opacity-80"
                            )}
                          >
                            <Icon
                              className={cn(
                                "mt-0.5 h-4 w-4 shrink-0",
                                item.status === "complete" && "text-emerald-500",
                                item.status === "in-progress" && "animate-spin text-blue-500",
                                item.status === "pending" && "text-muted-foreground"
                              )}
                            />
                            <div className="min-w-0 flex-1">
                              <p className="text-sm">{item.item}</p>
                              <div className="mt-1.5 flex items-center gap-2">
                                <StatusBadge status={item.status} />
                                <span className="text-xs text-muted-foreground">{item.assignee}</span>
                              </div>
                            </div>
                          </div>
                        </StaggerItem>
                      );
                    })}
                  </StaggerContainer>
                </CardContent>
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
