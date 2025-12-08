"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { checkCharacterType } from "@/lib/problem-solvers"

export function CharacterType() {
  const [character, setCharacter] = useState("")
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState("")

  const handleCheck = () => {
    setError("")
    if (!character) {
      setError("Please enter a character")
      return
    }

    if (character.length !== 1) {
      setError("Please enter only one character")
      return
    }

    const typeResult = checkCharacterType(character)
    if (typeResult.includes("Please provide")) {
      setError(typeResult)
      return
    }

    setResult(typeResult)
  }

  const getResultColor = () => {
    if (result === "Uppercase Letter")
      return "bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800 text-yellow-700 dark:text-yellow-200"
    if (result === "Lowercase Letter")
      return "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 text-green-700 dark:text-green-200"
    if (result === "Digit")
      return "bg-cyan-50 dark:bg-cyan-950 border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-200"
    return "bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800 text-red-700 dark:text-red-200"
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Character Type Classifier</CardTitle>
        <CardDescription>Identify if character is uppercase, lowercase, digit, or special</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Enter a Character</label>
          <Input
            type="text"
            placeholder="Enter any single character"
            value={character}
            onChange={(e) => setCharacter(e.target.value.slice(0, 1))}
            maxLength={1}
            onKeyPress={(e) => e.key === "Enter" && handleCheck()}
          />
        </div>

        {error && <div className="text-red-500 text-sm">{error}</div>}

        <Button onClick={handleCheck} className="w-full">
          Classify Character
        </Button>

        {result && (
          <div className={`mt-6 p-4 rounded-lg border ${getResultColor()}`}>
            <p className="text-sm font-medium">Character Type</p>
            <p className="text-3xl font-bold">{result}</p>
            <p className="text-lg mt-2 font-mono">&apos;{character}&lsquo;</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
