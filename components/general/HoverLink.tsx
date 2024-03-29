import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface HoverLinkProps {
    children: ReactNode;
    className?: string;
}

const HoverLink: React.FC<HoverLinkProps> = ({
    children,
    className = "gradient-primary bg-gradient-to-r",
}) => {
    return (
        <div className="group">
            {children}
            <div className={cn("h-1 w-0 transition-all rounded-full group-hover:w-full", className)} />
        </div>
    );
};

export default HoverLink;