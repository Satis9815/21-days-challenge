"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function MultiplicationTableUptoN() {
  const [num, setNum] = useState(3)
  const [output, setOutput] = useState<string[]>([])

  const generateTables = () => {
    const result: string[] = []
    for (let i = 1; i <= num; i++) {
      result.push(`\nMultiplication Table of ${i}`)
      result.push("".padEnd(30, "-"))
      for (let j = 1; j <= 10; j++) {
        result.push(`${i} x ${j.toString().padEnd(2)} = ${(i * j).toString()}`)
      }
    }
    setOutput(result)
  }

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-lg font-semibold">Multiplication Tables Up to N</h3>

      <div className="space-y-2">
        <label className="text-sm font-medium">Up to Number:</label>
        <Input
          type="number"
          value={num}
          onChange={(e) => setNum(Math.max(1, Number.parseInt(e.target.value) || 1))}
          min="1"
          max="20"
        />
      </div>

      <Button onClick={generateTables} className="w-full">
        Generate Tables
      </Button>

      {output.length > 0 && (
        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded font-mono text-sm whitespace-pre-wrap break-all max-h-96 overflow-y-auto">
          {output.join("\n")}
        </div>
      )}
    </Card>
  )
}
