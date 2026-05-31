/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2 } from "lucide-react"

interface ProblemsGridProps {
  days: any[]
}

export function ProblemsGrid({ days }: ProblemsGridProps) {
  const allProblems = days.flatMap((day) =>
    (day.problems || []).map((problem: any) => ({
      ...problem,
      dayTitle: day.title,
    })),
  )

  // Group problems by difficulty
  const easyProblems = allProblems.filter((p) => p.difficulty === "Easy")
  const mediumProblems = allProblems.filter((p) => p.difficulty === "Medium")
  const hardProblems = allProblems.filter((p) => p.difficulty === "Hard")

  const renderProblemSection = (title: string, problems: any[], color: string) => (
    <div key={title} className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Code2 className="w-5 h-5" />
        <h3 className="text-xl font-bold">{title}</h3>
        <Badge variant="secondary">{problems.length}</Badge>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {problems.map((problem) => (
          <Card
            key={problem._id}
            className={`p-4 border-2 ${
              color === "green"
                ? "border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10"
                : color === "yellow"
                  ? "border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/10"
                  : "border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/10"
            } hover:shadow-md transition-all`}
          >
            <p className="font-semibold text-sm mb-1">{problem.name}</p>
            <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{problem.description}</p>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">{problem.category}</span>
              <span className="text-muted-foreground font-mono text-xs">{problem.dayTitle.split(" - ")[0]}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )

  return (
    <div className="space-y-8">
      {renderProblemSection("Easy Problems", easyProblems, "green")}
      {renderProblemSection("Medium Problems", mediumProblems, "yellow")}
      {renderProblemSection("Hard Problems", hardProblems, "red")}
    </div>
  )
}
