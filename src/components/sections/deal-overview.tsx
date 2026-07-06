"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { dealDetails, engagement, team } from "@/lib/mock-data";
import { formatDate, getInitials } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Building2, Globe, Users, Calendar, DollarSign } from "lucide-react";

export function DealOverview() {
  return (
    <section id="deal" className="section-padding scroll-mt-16 border-t border-border/40 bg-muted/20">
      <FadeIn>
        <SectionHeader
          title="Deal Overview"
          description="Transaction details, parties, and key considerations"
        />
      </FadeIn>

      <div className="grid gap-6 lg:grid-cols-3">
        <FadeIn delay={0.05} className="lg:col-span-2">
          <Card className="border-border/60">
            <CardHeader>
              <CardTitle className="text-base">Transaction Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Building2, label: "Target Entity", value: engagement.targetEntity },
                  { icon: Globe, label: "Jurisdiction", value: engagement.jurisdiction },
                  { icon: DollarSign, label: "Deal Value", value: engagement.dealValue },
                  { icon: Users, label: "Employees", value: dealDetails.employees },
                  { icon: Calendar, label: "Deal Type", value: engagement.dealType },
                  { icon: Building2, label: "Industry", value: dealDetails.industry },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3 rounded-lg border border-border/50 bg-background/50 p-4">
                    <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="mt-0.5 text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator />

              <div>
                <p className="text-sm font-medium">Transaction Structure</p>
                <p className="mt-1 text-sm text-muted-foreground">{dealDetails.transactionStructure}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-medium">Revenue (FY25)</p>
                  <p className="mt-1 text-lg font-semibold">{dealDetails.revenue}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">EBITDA (FY25)</p>
                  <p className="mt-1 text-lg font-semibold">{dealDetails.ebitda}</p>
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium">Tax Registrations</p>
                <div className="flex flex-wrap gap-2">
                  {dealDetails.taxRegistrations.map((reg) => (
                    <span
                      key={reg}
                      className="rounded-md border border-border/60 bg-secondary/50 px-2.5 py-1 text-xs font-medium"
                    >
                      {reg}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        <div className="space-y-6">
          <FadeIn delay={0.1}>
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="text-base">Parties</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {dealDetails.parties.map((party) => (
                  <div key={party.role} className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-medium text-primary">{party.role}</p>
                      <p className="text-sm">{party.name}</p>
                    </div>
                    <span className="shrink-0 text-xs text-muted-foreground">{party.jurisdiction}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.15}>
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="text-base">Engagement Team</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[team.partner, team.manager, team.senior].map((member) => (
                  <div key={member.email} className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary/10 text-xs text-primary">
                        {getInitials(member.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                ))}
                <Separator />
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-secondary text-xs">
                      {getInitials(team.clientContact.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{team.clientContact.name}</p>
                    <p className="text-xs text-muted-foreground">{team.clientContact.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.2} className="mt-6">
        <Card className="border-border/60">
          <CardHeader>
            <CardTitle className="text-base">Key Tax Considerations</CardTitle>
          </CardHeader>
          <CardContent>
            <StaggerContainer className="grid gap-3 sm:grid-cols-2">
              {dealDetails.keyConsiderations.map((item, i) => (
                <StaggerItem key={item}>
                  <div className="flex gap-3 rounded-lg border border-border/50 p-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      {i + 1}
                    </span>
                    <p className="text-sm text-muted-foreground">{item}</p>
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
