"use client"
import { Badge } from "@/components/ui/badge"
import { MaxOfThreeNumbers } from "./Promblems/Day02/MaxOfThreeNumbers"
import { PositiveNegativeZero } from "./Promblems/Day02/PositiveNegativeZero"
import { ElectricityBill } from "./Promblems/Day02/ElectricityBill"
import { VowelConsonant } from "./Promblems/Day02/VowelConsonant"
import { LeapYear } from "./Promblems/Day02/LeapYear"
import { CharacterType } from "./Promblems/Day02/CharacterType"
import { IncomeTax } from "./Promblems/Day02/IncomeTax"
import { SolutionViewer } from "./solution-viewer"

interface ProblemVisualizerProps {
  problemId: string
  problemName: string
  difficulty: "Easy" | "Medium" | "Hard"
  solution: string
}

const difficultColor = {
  Easy: "bg-green-100 text-green-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Hard: "bg-red-100 text-red-800",
}

export function ProblemVisualizer({ problemId, problemName, difficulty, solution }: ProblemVisualizerProps) {
  const renderProblem = () => {
    switch (problemId) {
      case "max-of-three":
        return <MaxOfThreeNumbers />
      case "positive-negative-zero":
        return <PositiveNegativeZero />
      case "electricity-bill":
        return <ElectricityBill />
      case "vowel-consonant":
        return <VowelConsonant />
      case "leap-year":
        return <LeapYear />
      case "character-type":
        return <CharacterType />
      case "income-tax":
        return <IncomeTax />

      default:
        return null
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{problemName}</h2>
          <Badge className={difficultColor[difficulty]}>{difficulty}</Badge>
        </div>
      </div>
      {renderProblem()}
      <SolutionViewer solution={solution} problemName={problemName} />
    </div>
  )
}
