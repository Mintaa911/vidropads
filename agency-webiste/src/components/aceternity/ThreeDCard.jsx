import React from "react";
import { CardBody, CardContainer, CardItem } from "./CardEffect";

export function ThreeDCard({children, bgColor, textColor, padding, rounded="rounded-xl", shadow=""}) {
  return (
    <CardContainer className={`inter-var`}>
      <CardBody className={`relative ${bgColor} group/card ${shadow} dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-black/[0.1] w-auto h-auto ${rounded} p-0`}>
        <CardItem
          translateZ="50"
          className={`text-xl  text-neutral-600 ${textColor} ${padding}`}
        >
            {children}
        </CardItem>
        
      </CardBody>
    </CardContainer>
  );
}
