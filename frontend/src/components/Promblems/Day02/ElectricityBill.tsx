"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { calculateElectricityBill } from "@/lib/problem-solvers"

export function ElectricityBill() {
  const [units, setUnits] = useState("")
  const [result, setResult] = useState<number | null>(null)
  const [error, setError] = useState("")

  const handleCalculate = () => {
    setError("")
    if (!units) {
      setError("Please enter units consumed")
      return
    }

    const numUnits = Number.parseFloat(units)
    if (isNaN(numUnits) || numUnits < 0) {
      setError("Please enter a valid non-negative number")
      return
    }

    try {
      setResult(calculateElectricityBill(numUnits))
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Electricity Bill Calculator</CardTitle>
        <CardDescription>Calculate electricity bill based on units consumed</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg text-sm">
          <p className="font-medium mb-2">Pricing Structure:</p>
          <ul className="space-y-1 text-gray-600 dark:text-gray-300">
            <li>0-20 units: ₹4 per unit</li>
            <li>21-30 units: ₹6.5 per unit</li>
            <li>31-50 units: ₹8 per unit</li>
            <li>{">50 units: ₹10 per unit"}</li>
          </ul>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Units Consumed</label>
          <Input
            type="number"
            placeholder="Enter units consumed"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            step="0.01"
            min="0"
          />
        </div>

        {error && <div className="text-red-500 text-sm">{error}</div>}

        <Button onClick={handleCalculate} className="w-full">
          Calculate Bill
        </Button>

        {result !== null && (
          <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-950 rounded-lg border border-purple-200 dark:border-purple-800">
            <p className="text-sm text-purple-700 dark:text-purple-200">Total Bill</p>
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-300">₹{result.toFixed(2)}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
