/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProblemVisualizer } from "@/components/problem-visualizer"
import { MarkdownPreviewer } from "@/components/markdown-previewer"
import { AssignmentsSection } from "@/components/assignments-section"
import { BookOpen, Code2, Loader2 } from "lucide-react"
import { getAllDays } from "../../actions/day-actions"

export default function Home() {
  const [problemsData, setProblemsData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedDay, setSelectedDay] = useState("")
  const [selectedProblem, setSelectedProblem] = useState("")
  const [activeTab, setActiveTab] = useState<"problems" | "assignments">("problems")

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const data = await getAllDays()
        setProblemsData(data)
        if (data.length > 0) {
          setSelectedDay(data[0]._id)
          if (data[0].problems && data[0].problems.length > 0) {
            setSelectedProblem(data[0].problems[0]._id)
          }
        }
      } catch (error) {
        console.error("Error fetching problems data:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const currentDay = problemsData.find((d) => d._id === selectedDay)
  const currentProblem = currentDay?.problems?.find((p: any) => p._id === selectedProblem)

  const handleDaySelect = (dayId: string) => {
    setSelectedDay(dayId)
    const day = problemsData.find((d) => d._id === dayId)
    if (day && day.problems && day.problems.length > 0) {
      setSelectedProblem(day.problems[0]._id)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading problems...</p>
        </div>
      </div>
    )
  }

  if (problemsData.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold mb-2">No Problems Found</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Please seed the database with initial data from the admin panel.
          </p>
          <Button asChild>
            <a href="/admin">Go to Admin Panel</a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen  from-background to-muted">
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
          <TabsList className="grid  grid-cols-2 mb-6 w-full">
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
                        key={day._id}
                        variant={selectedDay === day._id ? "default" : "outline"}
                        onClick={() => handleDaySelect(day._id)}
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
                      {currentDay.problems?.map((problem: any) => (
                        <Button
                          key={problem._id}
                          variant={selectedProblem === problem._id ? "default" : "outline"}
                          onClick={() => setSelectedProblem(problem._id)}
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
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                : problem.difficulty === "Medium"
                                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                  : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                            }`}
                          >
                            {problem.difficulty[0].toUpperCase()}
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
                        problemId={currentProblem._id}
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
