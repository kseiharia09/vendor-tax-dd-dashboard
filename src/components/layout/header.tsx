"use client";

import { engagement, team } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { formatDate } from "@/lib/utils";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="flex h-14 items-center justify-between gap-4 px-6 lg:px-8">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            <h1 className="truncate text-base font-semibold tracking-tight lg:text-lg">
              {engagement.name}
            </h1>
            <Badge variant="info" className="hidden shrink-0 sm:inline-flex">
              {engagement.status}
            </Badge>
          </div>
          <p className="hidden truncate text-xs text-muted-foreground sm:block">
            {engagement.client} · {engagement.dealType} · {engagement.jurisdiction}
          </p>
        </div>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="relative h-9 w-9 text-muted-foreground">
            <Bell className="h-4 w-4" />
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500" />
          </Button>
          <ThemeToggle />
          <div className="ml-2 hidden border-l border-border pl-3 md:block">
            <p className="text-xs font-medium">{team.partner.name}</p>
            <p className="text-[10px] text-muted-foreground">
              Close: {formatDate(engagement.expectedClose)}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
