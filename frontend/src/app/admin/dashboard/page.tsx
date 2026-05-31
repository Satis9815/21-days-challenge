/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, BarChart3, BookOpen, Code2 } from "lucide-react"
import { getAllDays } from "../../../../actions/day-actions"
import { getAllUsers } from "../../../../actions/user-action"
import { DaysStatsCard } from "@/components/Admin/Dashboard/DaysStatsCard"
import { ProblemsGrid } from "@/components/Admin/Dashboard/ProblemsGrid"

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true)
  const [daysData, setDaysData] = useState<any[]>([])
  const [usersCount, setUsersCount] = useState(0)
  const [totalProblems, setTotalProblems] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [daysResult, usersResult] = await Promise.all([getAllDays(), getAllUsers()])

        if (daysResult) {
          setDaysData(daysResult)
          const problemCount = daysResult.reduce((acc: number, day: any) => acc + (day.problems?.length || 0), 0)
          setTotalProblems(problemCount)
        }

        if (usersResult?.users) {
          setUsersCount(usersResult.users.length)
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center  from-background to-muted">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen from-background to-muted">


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Statistics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-6  from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Days</p>
                <p className="text-3xl font-bold text-primary">{daysData.length}</p>
              </div>
              <BookOpen className="w-10 h-10 text-primary/30" />
            </div>
          </Card>

          <Card className="p-6  from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Problems</p>
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">{totalProblems}</p>
              </div>
              <Code2 className="w-10 h-10 text-purple-600/30 dark:text-purple-400/30" />
            </div>
          </Card>

          <Card className="p-6  from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Users</p>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">{usersCount}</p>
              </div>
              <BarChart3 className="w-10 h-10 text-green-600/30 dark:text-green-400/30" />
            </div>
          </Card>

          <Card className="p-6  from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Problems/Day</p>
                <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                  {daysData.length > 0 ? (totalProblems / daysData.length).toFixed(1) : 0}
                </p>
              </div>
              <BarChart3 className="w-10 h-10 text-orange-600/30 dark:text-orange-400/30" />
            </div>
          </Card>
        </div>

        {/* Days Overview */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Days Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {daysData.map((day) => (
              <DaysStatsCard key={day._id} day={day} />
            ))}
          </div>
        </div>

        {/* Problems Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-4">All Problems by Category</h2>
          <ProblemsGrid days={daysData} />
        </div>
      </div>
    </div>
  )
}
