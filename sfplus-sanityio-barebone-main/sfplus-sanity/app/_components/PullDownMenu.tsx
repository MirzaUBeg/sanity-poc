"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { ChevronDownIcon } from "./_Icons";

interface MenuItem {
  title: string;
  path: string;
}

interface PullDownMenuProps {
  title: string;
  items: MenuItem[];
}

export default ({ title, items }: PullDownMenuProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const firstColumnItems = items.slice(0, 10);
  const secondColumnItems = items.slice(10);
  const pullDownWidth = secondColumnItems.length > 0 ? "600px" : "300px";

  return (
    <div
      className="relative flex items-center gap-1 "
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className="hover:text-sfplus-light-blue text-sfplus-dark text-xs font-bold">
        {title}
      </span>
      <ChevronDownIcon className="text-sfplus-dark h-5 w-5" />

      {isHovering && (
        <div
          className="absolute z-30 rounded-lg bg-white p-6 shadow-md"
          style={{ top: "calc(100%)", left: 0, width: pullDownWidth }}
        >
          <div
            className={`text-sfplus-dark grid ${
              secondColumnItems.length > 0 ? "grid-cols-2" : "grid-cols-1"
            }  gap-4 font-heading text-xs font-bold`}
          >
            <div>
              {firstColumnItems.map((item) => (
                <Link href={item.path}>
                  <p className="my-4" key={item.path}>
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
            {secondColumnItems.length > 0 && (
              <div>
                {secondColumnItems.map((item) => (
                  <Link href={item.path}>
                    <p className="my-4" key={item.path}>
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
