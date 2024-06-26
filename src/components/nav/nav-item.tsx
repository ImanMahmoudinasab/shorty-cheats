import { SPACES } from "@/constants";
import { cn } from "@/lib/utils";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export function NavItem({ className, space, ...props }: NavItemProps) {
  return (
    <TabsPrimitive.Trigger
      key={space.id}
      value={space.id}
      className={cn(
        "cursor-pointer flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
        "data-[state=inactive]:text-muted-foreground data-[state=active]:bg-muted  data-[state=active]:text-primary data-[state=active]:font-medium",
      )}
    >
      <div {...props}>{space.name}</div>
    </TabsPrimitive.Trigger>
  );
}

interface NavItemProps extends React.HTMLAttributes<HTMLDivElement> {
  space: (typeof SPACES)[0];
}
