"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { calculateIncomeTax } from "@/lib/problem-solvers"

export function IncomeTax() {
  const [income, setIncome] = useState("")
  const [result, setResult] = useState<number | null>(null)
  const [error, setError] = useState("")

  const handleCalculate = () => {
    setError("")
    if (!income) {
      setError("Please enter annual income")
      return
    }

    const numIncome = Number.parseFloat(income)
    if (isNaN(numIncome) || numIncome < 0) {
      setError("Please enter a valid non-negative income")
      return
    }

    setResult(calculateIncomeTax(numIncome))
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Income Tax Calculator</CardTitle>
        <CardDescription>Calculate income tax based on slab system</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg text-sm">
          <p className="font-medium mb-2">Tax Slabs:</p>
          <ul className="space-y-1 text-gray-600 dark:text-gray-300">
            <li>₹0 - ₹2,50,000: 0%</li>
            <li>₹2,50,001 - ₹5,00,000: 5%</li>
            <li>₹5,00,001 - ₹10,00,000: 20%</li>
            <li>{">₹10,00,000: 30%"}</li>
          </ul>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Annual Income (₹)</label>
          <Input
            type="number"
            placeholder="Enter annual income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            step="1"
            min="0"
          />
        </div>

        {error && <div className="text-red-500 text-sm">{error}</div>}

        <Button onClick={handleCalculate} className="w-full">
          Calculate Tax
        </Button>

        {result !== null && (
          <div className="mt-6 space-y-3">
            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-blue-700 dark:text-blue-200">Annual Income</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-300">
                ₹{Number.parseFloat(income).toLocaleString("en-IN")}
              </p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg border border-red-200 dark:border-red-800">
              <p className="text-sm text-red-700 dark:text-red-200">Income Tax</p>
              <p className="text-2xl font-bold text-red-600 dark:text-red-300">₹{result.toFixed(2)}</p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-sm text-green-700 dark:text-green-200">Net Income (After Tax)</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-300">
                ₹{(Number.parseFloat(income) - result).toFixed(2)}
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
