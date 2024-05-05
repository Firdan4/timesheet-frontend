import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  sufix?: string;
}

// export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
//   label?: string;
// };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

const InputSettings = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, prefix, sufix, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <Label className="text-gray-400 text-sm">{label}</Label>
        <div className="flex border rounded-md px-3 py-2 gap-1 items-center justify-center">
          <span className="text-gray-400">{sufix}</span>
          <input
            ref={ref}
            {...props}
            type={type}
            className={`focus:border-transparent focus:ring-0 outline-none w-full ${className}`}
          />
          <span className="text-gray-400">{prefix}</span>
        </div>
      </div>
    );
    // return <input type={type} className={className} ref={ref} {...props} />;
  }
);
Input.displayName = "InputSettings";

export { Input, InputSettings };
