"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { HealthBadge } from "@/components/shared/status-badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { partnerSummary, team } from "@/lib/mock-data";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, CheckCircle2, ArrowRight, Clock } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";

export function PartnerSummary() {
  const budgetPercent = Math.round(
    (partnerSummary.budget.consumed / partnerSummary.budget.allocated) * 100
  );

  return (
    <section id="partner" className="section-padding scroll-mt-16 border-t border-border/40 bg-muted/20">
      <FadeIn>
        <SectionHeader
          title="Partner Summary"
          description="Overall project health and executive overview"
          badge={<HealthBadge health={partnerSummary.overallHealth as "Amber"} />}
        />
      </FadeIn>

      <div className="grid gap-6 lg:grid-cols-3">
        <FadeIn delay={0.05} className="lg:col-span-2">
          <Card className="border-border/60">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Executive Summary</CardTitle>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Health Score</span>
                  <span className="text-2xl font-semibold">{partnerSummary.healthScore}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {partnerSummary.summary}
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <p className="text-sm font-medium">Strengths</p>
                  </div>
                  <ul className="space-y-2">
                    {partnerSummary.strengths.map((item) => (
                      <li key={item} className="flex gap-2 text-xs text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                    <p className="text-sm font-medium">Key Risks</p>
                  </div>
                  <ul className="space-y-2">
                    {partnerSummary.risks.map((item) => (
                      <li key={item} className="flex gap-2 text-xs text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        <div className="space-y-6">
          <FadeIn delay={0.1}>
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="text-base">Budget Utilization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <p className="text-2xl font-semibold">
                    {partnerSummary.budget.consumed}
                    <span className="text-sm font-normal text-muted-foreground">
                      {" "}/ {partnerSummary.budget.allocated} {partnerSummary.budget.unit}
                    </span>
                  </p>
                  <span className="text-sm text-muted-foreground">{budgetPercent}%</span>
                </div>
                <Progress value={budgetPercent} className="mt-4 h-2" />
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.15}>
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="text-base">Milestone Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {partnerSummary.milestones.map((milestone) => (
                  <div key={milestone.label}>
                    <div className="mb-1.5 flex justify-between text-xs">
                      <span className="font-medium">{milestone.label}</span>
                      <span className="text-muted-foreground">{milestone.percent}%</span>
                    </div>
                    <Progress value={milestone.percent} className="h-1.5" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="text-base">Partner Sign-off</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {getInitials(team.partner.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{team.partner.name}</p>
                    <p className="text-xs text-muted-foreground">{team.partner.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.25} className="mt-6">
        <Card className="border-border/60">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <CardTitle className="text-base">Recommended Next Steps</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <StaggerContainer className="grid gap-3 sm:grid-cols-2">
              {partnerSummary.nextSteps.map((step, i) => (
                <StaggerItem key={step}>
                  <div className="flex items-start gap-3 rounded-lg border border-border/50 p-4 transition-colors hover:bg-accent/20">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                      {i + 1}
                    </span>
                    <p className="text-sm">{step}</p>
                    <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </CardContent>
        </Card>
      </FadeIn>
    </section>
  );
}
