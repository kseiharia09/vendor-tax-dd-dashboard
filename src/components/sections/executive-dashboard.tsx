"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { kpis, progressChart, issueBreakdown, engagement, team } from "@/lib/mock-data";
import { cn, formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const trendIcon = {
  up: TrendingUp,
  down: TrendingDown,
  neutral: Minus,
};

export function ExecutiveDashboard() {
  return (
    <section id="executive" className="section-padding scroll-mt-16">
      <FadeIn>
        <SectionHeader
          title="Executive Dashboard"
          description="Key engagement metrics and progress overview"
          badge={
            <Badge variant="outline" className="font-mono text-xs">
              {engagement.id}
            </Badge>
          }
        />
      </FadeIn>

      <StaggerContainer className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {kpis.map((kpi) => {
          const Icon = trendIcon[kpi.trend];
          return (
            <StaggerItem key={kpi.label}>
              <Card className="border-border/60 transition-shadow hover:shadow-md">
                <CardContent className="p-5">
                  <p className="text-xs font-medium text-muted-foreground">{kpi.label}</p>
                  <p className="mt-2 text-2xl font-semibold tracking-tight">{kpi.value}</p>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Icon
                      className={cn(
                        "h-3.5 w-3.5",
                        kpi.trend === "up" && "text-emerald-500",
                        kpi.trend === "down" && "text-red-500"
                      )}
                    />
                    <span>{kpi.change}</span>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <FadeIn delay={0.1} className="lg:col-span-2">
          <Card className="border-border/60">
            <CardHeader>
              <CardTitle className="text-base">Engagement Progress</CardTitle>
              <CardDescription>Weekly completion across workstreams</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={progressChart} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorDocs" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(213, 56%, 24%)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(213, 56%, 24%)" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorCheck" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(160, 60%, 40%)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(160, 60%, 40%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis dataKey="week" tick={{ fontSize: 12 }} className="text-muted-foreground" />
                    <YAxis tick={{ fontSize: 12 }} className="text-muted-foreground" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                        fontSize: "12px",
                      }}
                    />
                    <Area type="monotone" dataKey="documents" name="Documents" stroke="hsl(213, 56%, 24%)" fill="url(#colorDocs)" strokeWidth={2} />
                    <Area type="monotone" dataKey="checklist" name="Checklist" stroke="hsl(160, 60%, 40%)" fill="url(#colorCheck)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={0.15}>
          <Card className="border-border/60">
            <CardHeader>
              <CardTitle className="text-base">Issue Breakdown</CardTitle>
              <CardDescription>By priority level</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={issueBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={55}
                      outerRadius={80}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {issueBreakdown.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                        fontSize: "12px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {issueBreakdown.map((item) => (
                  <div key={item.name} className="flex items-center gap-2 text-xs">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-muted-foreground">{item.name}</span>
                    <span className="ml-auto font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>

      <FadeIn delay={0.2} className="mt-6">
        <Card className="border-border/60">
          <CardContent className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center">
            <div className="flex-1">
              <p className="text-sm font-medium">Overall Engagement Progress</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Started {formatDate(engagement.startDate)} · Expected close {formatDate(engagement.expectedClose)}
              </p>
              <Progress value={engagement.completionPercent} className="mt-4 h-2" />
            </div>
            <div className="text-right">
              <p className="text-3xl font-semibold">{engagement.completionPercent}%</p>
              <p className="text-xs text-muted-foreground">Lead: {team.manager.name}</p>
            </div>
          </CardContent>
        </Card>
      </FadeIn>
    </section>
  );
}
