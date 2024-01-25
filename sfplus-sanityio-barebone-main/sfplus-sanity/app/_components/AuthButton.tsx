"use client";

import Link from "next/link";

export default ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <Link href="/signup">Sign Up</Link>
    </div>
  );
};
