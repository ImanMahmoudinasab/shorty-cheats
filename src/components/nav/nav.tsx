import { SPACES } from "@/constants";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { NavItem } from "./nav-item";

export function Nav({ className, spaces, defaultValue, ...props }: NavProps) {
  return (
    <TabsPrimitive.Root defaultValue={defaultValue}>
      <TabsPrimitive.List className="relative flex justify-center">
        <ScrollArea className="max-w-[600px] lg:max-w-none">
          <div className={cn("mb-4 flex items-center", className)} {...props}>
            {spaces.map((space) => (
              <NavItem key={space.name} space={space} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="invisible" />
        </ScrollArea>
      </TabsPrimitive.List>
      {props.children}
    </TabsPrimitive.Root>
  );
}

interface NavProps extends React.HTMLAttributes<HTMLDivElement> {
  spaces: typeof SPACES;
  defaultValue: string;
}
