import { useState } from "react";
import { Map, SkiIcon, Cloud, Mountain } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@/lib/utils";

export const MobileBottomNav = () => {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "map", label: "Map", icon: Map },
    { id: "resorts", label: "Resorts", icon: SkiIcon },
    { id: "weather", label: "weather", icon: Cloud },
    { id: "conditions", label: "Conditions", icon: Mountain },
  ];

  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0",
        "bg-background border-t border-border",
        "h-20 md:hidden",
        "flex items-center justify-around",
        "safe-area-inset-bottom",
      )}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.id;

        return (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={cn(
              "flex flex-col items-center justify-center gap-1",
              "w-full h-full",
              "transition-all duration-200",
              "focus-visible:outline-2 outline-ring outline-offset-0",
              isActive
                ? "text-primary font-medium"
                : "text-muted-foreground hover:text-foreground",
            )}
            aria-label={item.label}
            aria-current={isActive ? "page" : undefined}
          >
            <HugeiconsIcon icon={Icon} className="size-6" strokeWidth={1.5} />
            <span className="text-[10px] leading-none">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
