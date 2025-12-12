'use client'
import { cn } from "@/lib/utils";
interface FieldErrorProps {
  error: string | undefined;
  className?: string;
}

export default function FieldError({
  error,
  className = "",
  ...props
}: FieldErrorProps) {
  return error ? (
    <p
      {...props}
      className={cn("text-sm text-red-600 dark:text-red-400", className)}
    >
      {error}
    </p>
  ) : null;
}
