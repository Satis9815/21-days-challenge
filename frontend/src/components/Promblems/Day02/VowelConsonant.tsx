"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { checkVowelOrConsonant } from "@/lib/problem-solvers"

export function VowelConsonant() {
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

    if (!/[a-zA-Z]/.test(character)) {
      setError("Please enter a letter (a-z or A-Z)")
      return
    }

    setResult(checkVowelOrConsonant(character))
  }

  const getResultColor = () => {
    if (result === "Vowel")
      return "bg-pink-50 dark:bg-pink-950 border-pink-200 dark:border-pink-800 text-pink-700 dark:text-pink-200"
    return "bg-indigo-50 dark:bg-indigo-950 border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-200"
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Vowel or Consonant</CardTitle>
        <CardDescription>Check if a character is a vowel or consonant</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Enter a Character</label>
          <Input
            type="text"
            placeholder="Enter a single letter"
            value={character}
            onChange={(e) => setCharacter(e.target.value.slice(0, 1))}
            maxLength={1}
            onKeyPress={(e) => e.key === "Enter" && handleCheck()}
            className="uppercase"
          />
        </div>

        {error && <div className="text-red-500 text-sm">{error}</div>}

        <Button onClick={handleCheck} className="w-full">
          Check Character
        </Button>

        {result && (
          <div className={`mt-6 p-4 rounded-lg border ${getResultColor()}`}>
            <p className="text-sm font-medium">Classification</p>
            <p className="text-3xl font-bold">{result}</p>
            <p className="text-lg mt-2">{character.toUpperCase()}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
