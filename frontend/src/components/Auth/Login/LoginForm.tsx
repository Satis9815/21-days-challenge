"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PasswordField } from "@/components/shared/common/PasswordField/PasswordField";
import { InputField } from "@/components/shared/common/InputField/InputField";

export default function LoginForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-lg border border-gray-200">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl font-semibold">Welcome Back</CardTitle>
          <CardDescription className="text-sm">
            Login to your account to continue
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-5">
          <form className="space-y-5">
            <InputField
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
            />

            <PasswordField
              name="password"
              label="Password"
              placeholder="Enter your password"
            />

            <Button className="w-full" size="lg">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
