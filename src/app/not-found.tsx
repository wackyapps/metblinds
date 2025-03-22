"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4">
      <div className="w-full max-w-md space-y-8 text-center">
        {/* Error illustration */}
        <div className="relative mx-auto h-64 w-64">
          <div className="absolute inset-0 animate-pulse rounded-full bg-primary/10" />
          <div className="absolute inset-4 flex items-center justify-center rounded-full bg-white">
            <span className="text-9xl font-bold text-primary/80">404</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900">Page Not Found</h1>

        <p className="text-lg text-gray-600">
          It seems the page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col justify-center gap-4 pt-6 sm:flex-row">
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="w-full sm:w-auto"
          >
            Go Back
          </Button>

          <Link href="/" passHref>
            <Button className="w-full sm:w-auto">Return Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
