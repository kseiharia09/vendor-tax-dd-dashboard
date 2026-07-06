"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/motion/fade-in";
import { timelinePhases } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { CheckCircle2, Circle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    color: "text-emerald-500",
    bg: "bg-emerald-500",
    line: "bg-emerald-500",
    label: "Completed",
  },
  "in-progress": {
    icon: Loader2,
    color: "text-blue-500",
    bg: "bg-blue-500",
    line: "bg-blue-500",
    label: "In Progress",
  },
  upcoming: {
    icon: Circle,
    color: "text-muted-foreground",
    bg: "bg-muted-foreground/30",
    line: "bg-border",
    label: "Upcoming",
  },
};

export function Timeline() {
  return (
    <section id="timeline" className="section-padding scroll-mt-16">
      <FadeIn>
        <SectionHeader
          title="Engagement Timeline"
          description="Milestones and phase progress for Project Atlas"
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <Card className="border-border/60">
          <CardContent className="p-6 lg:p-8">
            <div className="relative">
              {timelinePhases.map((phase, index) => {
                const config = statusConfig[phase.status];
                const Icon = config.icon;
                const isLast = index === timelinePhases.length - 1;

                return (
                  <div key={phase.phase} className="relative flex gap-6 pb-10 last:pb-0">
                    {!isLast && (
                      <div
                        className={cn(
                          "absolute left-[15px] top-8 h-[calc(100%-16px)] w-0.5",
                          phase.status === "completed" ? config.line : "bg-border"
                        )}
                      />
                    )}

                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative z-10"
                    >
                      <div
                        className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-full ring-4 ring-background",
                          phase.status === "completed" && "bg-emerald-500/15",
                          phase.status === "in-progress" && "bg-blue-500/15",
                          phase.status === "upcoming" && "bg-muted"
                        )}
                      >
                        <Icon
                          className={cn(
                            "h-4 w-4",
                            config.color,
                            phase.status === "in-progress" && "animate-spin"
                          )}
                        />
                      </div>
                    </motion.div>

                    <div className="min-w-0 flex-1 pt-0.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold">{phase.phase}</h3>
                        <span
                          className={cn(
                            "rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide",
                            phase.status === "completed" && "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
                            phase.status === "in-progress" && "bg-blue-500/15 text-blue-600 dark:text-blue-400",
                            phase.status === "upcoming" && "bg-muted text-muted-foreground"
                          )}
                        >
                          {config.label}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {formatDate(phase.startDate)} — {formatDate(phase.endDate)}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </FadeIn>
    </section>
  );
}
