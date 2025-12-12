/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import FieldError from "../FieldError/FieldError";
import { Eye, EyeOff } from "lucide-react";

interface PasswordFieldProps {
  label?: string;
  name: string;
  register?: any;
  error?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
  readOnly?: boolean;
  [key: string]: any;
}

export function PasswordField({
  label,
  name,
  register,
  error,
  placeholder,
  required = false,
  className,
  disabled,
  readOnly,
  ...props
}: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={cn("grid gap-2")}>
      {label && (
        <Label htmlFor={name}>
          {label}
          {required && <span className="text-red-600"> *</span>}
        </Label>
      )}

      <div className="relative">
        <Input
          id={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          className={cn("pr-10 placeholder:opacity-40", className)}
          {...(register && register(name))}
          {...props}
        />

        <button
          type="button"
          onClick={() => setShowPassword(prev => !prev)}
          disabled={disabled || readOnly}
          aria-label={showPassword ? "Hide password" : "Show password"}
          className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      <FieldError error={error} />
    </div>
  );
}