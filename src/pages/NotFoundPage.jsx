// src/pages/NotFoundPage.jsx

import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/Button.jsx";

export function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p
        className="text-sm font-semibold uppercase tracking-wider"
        style={{
          color: "var(--color-accent-primary)",
        }}
      >
        404 Error
      </p>

      <h1
        className="mt-3 text-4xl font-bold sm:text-5xl"
        style={{
          color: "var(--color-text-primary)",
        }}
      >
        Page not found
      </h1>

      <p
        className="mt-4 max-w-md"
        style={{
          color: "var(--color-text-secondary)",
        }}
      >
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link to="/" className="mt-8">
        <Button variant="primary" iconLeft={<Home size={16} />}>
          Back to Home
        </Button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
