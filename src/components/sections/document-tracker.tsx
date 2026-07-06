"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { StatusBadge } from "@/components/shared/status-badge";
import { FadeIn } from "@/components/motion/fade-in";
import { documents } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { FileCheck, FileClock, FileWarning, FileX } from "lucide-react";

const statusCounts = {
  received: documents.filter((d) => d.status === "received").length,
  partial: documents.filter((d) => d.status === "partial").length,
  pending: documents.filter((d) => d.status === "pending").length,
  overdue: documents.filter((d) => d.status === "overdue").length,
};

const total = documents.length;
const receivedPercent = Math.round((statusCounts.received / total) * 100);

export function DocumentTracker() {
  return (
    <section id="documents" className="section-padding scroll-mt-16">
      <FadeIn>
        <SectionHeader
          title="Document Tracker"
          description="Upload status for required tax due diligence documents"
        />
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Received", count: statusCounts.received, icon: FileCheck, color: "text-emerald-500" },
            { label: "Partial", count: statusCounts.partial, icon: FileClock, color: "text-amber-500" },
            { label: "Pending", count: statusCounts.pending, icon: FileWarning, color: "text-blue-500" },
            { label: "Overdue", count: statusCounts.overdue, icon: FileX, color: "text-red-500" },
          ].map((stat) => (
            <Card key={stat.label} className="border-border/60">
              <CardContent className="flex items-center gap-4 p-4">
                <div className={`rounded-lg bg-secondary/80 p-2.5 ${stat.color}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-semibold">{stat.count}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <Card className="mb-6 border-border/60">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Overall Document Collection</p>
              <p className="text-sm text-muted-foreground">
                {statusCounts.received + statusCounts.partial}/{total} documents
              </p>
            </div>
            <Progress value={receivedPercent} className="mt-3 h-2" />
          </CardContent>
        </Card>
      </FadeIn>

      <FadeIn delay={0.15}>
        <Card className="border-border/60">
          <CardHeader>
            <CardTitle className="text-base">Document Register</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead>Document</TableHead>
                  <TableHead className="hidden md:table-cell">Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden lg:table-cell">Due Date</TableHead>
                  <TableHead className="hidden sm:table-cell">Owner</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {documents.map((doc) => (
                  <TableRow key={doc.id} className="group">
                    <TableCell>
                      <p className="font-medium">{doc.name}</p>
                      {doc.receivedDate && (
                        <p className="text-xs text-muted-foreground">
                          Received {formatDate(doc.receivedDate)}
                        </p>
                      )}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <span className="text-xs text-muted-foreground">{doc.category}</span>
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={doc.status} />
                    </TableCell>
                    <TableCell className="hidden lg:table-cell text-muted-foreground">
                      {formatDate(doc.dueDate)}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell text-muted-foreground">
                      {doc.owner}
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
