"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { maxOfThreeNumber } from "@/lib/problem-solvers"

export function MaxOfThreeNumbers() {
  const [x, setX] = useState("")
  const [y, setY] = useState("")
  const [z, setZ] = useState("")
  const [result, setResult] = useState<number | null>(null)
  const [error, setError] = useState("")

  const handleSolve = () => {
    setError("")
    if (!x || !y || !z) {
      setError("Please fill in all fields")
      return
    }

    const numX = Number.parseFloat(x)
    const numY = Number.parseFloat(y)
    const numZ = Number.parseFloat(z)

    if (isNaN(numX) || isNaN(numY) || isNaN(numZ)) {
      setError("Please enter valid numbers")
      return
    }

    setResult(maxOfThreeNumber(numX, numY, numZ))
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Maximum of Three Numbers</CardTitle>
        <CardDescription>Find the largest among three numbers</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          <div className="space-y-2">
            <label className="text-sm font-medium">Number 1 (X)</label>
            <Input
              type="number"
              placeholder="Enter first number"
              value={x}
              onChange={(e) => setX(e.target.value)}
              step="any"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Number 2 (Y)</label>
            <Input
              type="number"
              placeholder="Enter second number"
              value={y}
              onChange={(e) => setY(e.target.value)}
              step="any"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Number 3 (Z)</label>
            <Input
              type="number"
              placeholder="Enter third number"
              value={z}
              onChange={(e) => setZ(e.target.value)}
              step="any"
            />
          </div>
        </div>

        {error && <div className="text-red-500 text-sm">{error}</div>}

        <Button onClick={handleSolve} className="w-full">
          Find Maximum
        </Button>

        {result !== null && (
          <div className="mt-6 p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
            <p className="text-sm text-green-700 dark:text-green-200">Maximum Value</p>
            <p className="text-3xl font-bold text-green-600 dark:text-green-300">{result}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
