/* eslint-disable @typescript-eslint/no-explicit-any */
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import FieldError from "../FieldError/FieldError";
import { cn } from "@/lib/utils";

interface TextareaFieldProps {
  name: string;
  label?: string;
  register?: any;
  error?: string;
  placeholder: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  rows?: number;
  [key: string]: any;
}

export function TextareaField({
  name,
  label,
  register,
  error,
  placeholder,
  required = false,
  className,
  disabled,
  readOnly,
  rows = 4,
  ...props
}: TextareaFieldProps) {
  return (
    <div className="grid gap-2">
      {label && (
        <Label htmlFor={name}>
          {label}
          {required && <span className="text-red-600"> *</span>}
        </Label>
      )}
      <Textarea
        id={name}
        name={name}
        className={cn(" placeholder:opacity-40", className)}
        disabled={disabled}
        placeholder={placeholder}
        readOnly={readOnly}
        rows={rows}
        {...(register && register(name))}
        {...props}
      />
      <FieldError error={error} />
    </div>
  );
}
