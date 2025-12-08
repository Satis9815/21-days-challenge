"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { checkIsNumberPositiveNegativeOrZero } from "@/lib/problem-solvers"

export function PositiveNegativeZero() {
  const [number, setNumber] = useState("")
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState("")

  const handleCheck = () => {
    setError("")
    if (!number) {
      setError("Please enter a number")
      return
    }

    const num = Number.parseFloat(number)
    if (isNaN(num)) {
      setError("Please enter a valid number")
      return
    }

    setResult(checkIsNumberPositiveNegativeOrZero(num))
  }

  const getResultColor = () => {
    if (result === "Positive")
      return "bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-200"
    if (result === "Negative")
      return "bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-200"
    return "bg-gray-50 dark:bg-gray-950 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-200"
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Positive, Negative, or Zero</CardTitle>
        <CardDescription>Check if a number is positive, negative, or zero</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Enter a Number</label>
          <Input
            type="number"
            placeholder="Enter any number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            step="any"
            onKeyPress={(e) => e.key === "Enter" && handleCheck()}
          />
        </div>

        {error && <div className="text-red-500 text-sm">{error}</div>}

        <Button onClick={handleCheck} className="w-full">
          Check Number
        </Button>

        {result && (
          <div className={`mt-6 p-4 rounded-lg border ${getResultColor()}`}>
            <p className="text-sm font-medium">Classification</p>
            <p className="text-3xl font-bold">{result}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
