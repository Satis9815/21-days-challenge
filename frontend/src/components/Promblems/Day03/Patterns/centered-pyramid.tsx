"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function CenteredPyramid() {
  const [rows, setRows] = useState(5)
  const [output, setOutput] = useState<string[]>([])

  const generatePattern = () => {
    const result: string[] = []
    for (let i = 1; i <= rows; i++) {
      let star = ""
      let spaces = ""
      for (let s = 1; s <= rows - i; s++) {
        spaces += " "
      }
      for (let j = 1; j <= 2 * i - 1; j++) {
        star += "*"
      }
      result.push(spaces + star)
    }
    setOutput(result)
  }

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-lg font-semibold">Centered Pyramid</h3>

      <div className="space-y-2">
        <label className="text-sm font-medium">Number of Rows:</label>
        <Input
          type="number"
          value={rows}
          onChange={(e) => setRows(Math.max(1, Number.parseInt(e.target.value) || 1))}
          min="1"
          max="20"
        />
      </div>

      <Button onClick={generatePattern} className="w-full">
        Generate Pattern
      </Button>

      {output.length > 0 && (
        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded font-mono text-sm whitespace-pre-wrap break-all">
          {output.join("\n")}
        </div>
      )}
    </Card>
  )
}
