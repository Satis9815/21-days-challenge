/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@/components/ui/card"
import { BookOpen, Code2 } from "lucide-react"

interface DaysStatsCardProps {
  day: {
    _id: string
    title: string
    description: string
    problems: any[]
  }
}

export function DaysStatsCard({ day }: DaysStatsCardProps) {
  const easyCount = day.problems?.filter((p: any) => p.difficulty === "Easy").length || 0
  const mediumCount = day.problems?.filter((p: any) => p.difficulty === "Medium").length || 0
  const hardCount = day.problems?.filter((p: any) => p.difficulty === "Hard").length || 0

  return (
    <Card className="p-6 border-2 border-indigo-200 dark:border-indigo-900 hover:shadow-lg transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1">{day.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{day.description}</p>
        </div>
        <BookOpen className="w-5 h-5 text-indigo-600 flex-shrink-0 ml-2" />
      </div>

      <div className="space-y-3 pt-4 border-t">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground flex items-center gap-2">
            <Code2 className="w-4 h-4" />
            Total Problems
          </span>
          <span className="font-semibold text-primary">{day.problems?.length || 0}</span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="text-center p-2 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <p className="text-xs text-muted-foreground">Easy</p>
            <p className="font-bold text-green-600 dark:text-green-400">{easyCount}</p>
          </div>
          <div className="text-center p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <p className="text-xs text-muted-foreground">Medium</p>
            <p className="font-bold text-yellow-600 dark:text-yellow-400">{mediumCount}</p>
          </div>
          <div className="text-center p-2 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
            <p className="text-xs text-muted-foreground">Hard</p>
            <p className="font-bold text-red-600 dark:text-red-400">{hardCount}</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
