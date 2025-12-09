"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function MultiplicationTable() {
  const [num, setNum] = useState(5)
  const [output, setOutput] = useState<string[]>([])

  const generateTable = () => {
    const result: string[] = []
    result.push(`Multiplication Table of ${num}`)
    result.push("".padEnd(30, "-"))
    for (let i = 1; i <= 10; i++) {
      result.push(`${num} x ${i.toString().padEnd(2)} = ${(num * i).toString()}`)
    }
    setOutput(result)
  }

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-lg font-semibold">Multiplication Table</h3>

      <div className="space-y-2">
        <label className="text-sm font-medium">Number:</label>
        <Input
          type="number"
          value={num}
          onChange={(e) => setNum(Math.max(1, Number.parseInt(e.target.value) || 1))}
          min="1"
          max="100"
        />
      </div>

      <Button onClick={generateTable} className="w-full">
        Generate Table
      </Button>

      {output.length > 0 && (
        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded font-mono text-sm whitespace-pre-wrap break-all">
          {output.join("\n")}
        </div>
      )}
    </Card>
  )
}
