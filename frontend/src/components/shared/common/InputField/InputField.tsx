/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import FieldError from "../FieldError/FieldError";

interface InputFieldProps {
  label?: string;
  name: string;
  type: string;
  register?: any;
  error?: string;
  placeholder: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
  readOnly?: boolean;
  [key: string]: any;
}

export function InputField({
  label,
  name,
  type = "text",
  register,
  error,
  placeholder,
  required = false,
  className,
  disabled,
  readOnly,
  ...props
}: InputFieldProps) {
  return (
    <div className={cn("grid gap-2")}>
      {label && (
        <Label htmlFor={name}>
          {label}
          {required && <span className="text-red-600"> *</span>}
        </Label>
      )}

      <Input
        id={name}
        required={required}
        type={type}
        className={cn("placeholder:opacity-40", className)}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        { ...(register && register(name))}
        {...props}
      />

      <FieldError error={error} />
    </div>
  );
}
