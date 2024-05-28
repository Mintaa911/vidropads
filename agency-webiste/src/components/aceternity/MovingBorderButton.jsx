import React from "react";
import { Button } from "./MovingBorder";

export function MovingBorderButton({align="justify-center"}) {
  return (
    <div className={`flex ${align} md:justify-start`}>
      <Button
        borderRadius="1.75rem"
        className="bg-purple-normal border-neutral-200 hover:opacity-80"
      >
        Get Started
      </Button>
    </div>
  );
}
