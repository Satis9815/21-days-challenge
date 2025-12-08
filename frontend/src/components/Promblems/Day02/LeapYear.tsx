"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { checkLeapYear } from "@/lib/problem-solvers"

export function LeapYear() {
  const [year, setYear] = useState("")
  const [result, setResult] = useState<boolean | null>(null)
  const [error, setError] = useState("")

  const handleCheck = () => {
    setError("")
    if (!year) {
      setError("Please enter a year")
      return
    }

    const numYear = Number.parseInt(year)
    if (isNaN(numYear) || numYear < 1) {
      setError("Please enter a valid year")
      return
    }

    setResult(checkLeapYear(numYear))
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Leap Year Checker</CardTitle>
        <CardDescription>Determine if a year is a leap year</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-lg text-sm">
          <p className="font-medium mb-2">Leap Year Rules:</p>
          <ul className="space-y-1 text-gray-600 dark:text-gray-300">
            <li>✓ Divisible by 400</li>
            <li>✓ Divisible by 4 AND not by 100</li>
          </ul>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Enter a Year</label>
          <Input
            type="number"
            placeholder="e.g., 2024"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleCheck()}
            min="1"
          />
        </div>

        {error && <div className="text-red-500 text-sm">{error}</div>}

        <Button onClick={handleCheck} className="w-full">
          Check Year
        </Button>

        {result !== null && (
          <div
            className={`mt-6 p-4 rounded-lg border ${result ? "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800" : "bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800"}`}
          >
            <p className="text-sm font-medium">
              {result ? "text-green-700 dark:text-green-200" : "text-red-700 dark:text-red-200"}
            </p>
            <p
              className={`text-3xl font-bold ${result ? "text-green-600 dark:text-green-300" : "text-red-600 dark:text-red-300"}`}
            >
              {result ? "Leap Year! ✓" : "Not a Leap Year"}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
