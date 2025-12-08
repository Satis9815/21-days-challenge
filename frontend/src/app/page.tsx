"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProblemVisualizer } from "@/components/problem-visualizer"
import { MarkdownPreviewer } from "@/components/markdown-previewer"
import { AssignmentsSection } from "@/components/assignments-section"
import { BookOpen, Code2 } from "lucide-react"
import { problemsData } from "@/data/problems"

export default function Home() {
  const [selectedDay, setSelectedDay] = useState("day-01")
  const [selectedProblem, setSelectedProblem] = useState("max-of-three")
  const [activeTab, setActiveTab] = useState<"problems" | "assignments">("problems")

  const currentDay = problemsData.find((d) => d.id === selectedDay)
  const currentProblem = currentDay?.problems.find((p) => p.id === selectedProblem)

  const handleDaySelect = (dayId: string) => {
    setSelectedDay(dayId)
    const day = problemsData.find((d) => d.id === dayId)
    if (day && day.problems.length > 0) {
      setSelectedProblem(day.problems[0].id)
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-background to-muted">
      <div className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-full mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Problem Solver Hub</h1>
              <p className="text-sm text-muted-foreground">Master DSA & Pattern Programming</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-full mx-auto px-6 py-6">
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "problems" | "assignments")} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="problems">Solve Problems</TabsTrigger>
            {/* <TabsTrigger value="assignments">Assignments</TabsTrigger> */}
          </TabsList>

          <TabsContent value="problems" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-1">
                <Card className="p-4 sticky top-24">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Days
                  </h3>
                  <div className="space-y-2">
                    {problemsData.map((day) => (
                      <Button
                        key={day.id}
                        variant={selectedDay === day.id ? "default" : "outline"}
                        onClick={() => handleDaySelect(day.id)}
                        className="w-full justify-start text-left h-auto py-2"
                        size="sm"
                      >
                        <span className="text-sm font-medium">{day.title.split(" - ")[0]}</span>
                      </Button>
                    ))}
                  </div>
                </Card>
              </div>

              <div className="lg:col-span-4 space-y-6">
                {currentDay && (
                  <Card className="p-4 border-2 border-blue-200 dark:border-blue-900">
                    <div className="flex items-center gap-2 mb-4">
                      <Code2 className="w-5 h-5" />
                      <h2 className="text-xl font-bold">{currentDay.title}</h2>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{currentDay.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {currentDay.problems.map((problem) => (
                        <Button
                          key={problem.id}
                          variant={selectedProblem === problem.id ? "default" : "outline"}
                          onClick={() => setSelectedProblem(problem.id)}
                          className="justify-between h-auto py-3 px-3"
                        >
                          <div className="text-left flex-1">
                            <p className="font-medium text-sm">{problem.name}</p>
                            <p className="text-xs text-muted-foreground">{problem.description}</p>
                          </div>
                          <Badge
                            variant="secondary"
                            className={`ml-2 ${
                              problem.difficulty === "Easy"
                                ? "bg-green-100 text-green-800"
                                : problem.difficulty === "Medium"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                            }`}
                          >
                            {problem.difficulty[0]}
                          </Badge>
                        </Button>
                      ))}
                    </div>
                  </Card>
                )}

                <div className="space-y-4">
                  {currentDay && <MarkdownPreviewer content={currentDay.markdown || ""} title={currentDay.title} />}
                  {currentProblem && (
                    <Card className="p-6 border-2 border-purple-200 dark:border-purple-900">
                      <ProblemVisualizer
                        problemId={currentProblem.id}
                        problemName={currentProblem.name}
                        difficulty={currentProblem.difficulty}
                        solution={currentProblem.solution}
                      />
                    </Card>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="assignments">
            <AssignmentsSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
