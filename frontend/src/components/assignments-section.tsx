"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Clock, AlertCircle } from "lucide-react"

interface Assignment {
  id: string
  title: string
  description: string
  dueDate: string
  status: "pending" | "submitted" | "completed"
  difficulty: "Easy" | "Medium" | "Hard"
}

const assignments: Assignment[] = [
  {
    id: "assign-1",
    title: "Complete Day 01 Problems",
    description: "Solve all conditional logic problems from Day 01",
    dueDate: "2025-01-15",
    status: "pending",
    difficulty: "Easy",
  },
  {
    id: "assign-2",
    title: "Pattern Programs - Part 1",
    description: "Master all triangle patterns from Day 04",
    dueDate: "2025-01-20",
    status: "pending",
    difficulty: "Medium",
  },
  {
    id: "assign-3",
    title: "Advanced Pyramid Patterns",
    description: "Complete hollow pyramid and complex patterns",
    dueDate: "2025-01-25",
    status: "pending",
    difficulty: "Hard",
  },
]

const statusIcon = {
  pending: <Clock className="w-4 h-4 text-yellow-600" />,
  submitted: <AlertCircle className="w-4 h-4 text-blue-600" />,
  completed: <CheckCircle2 className="w-4 h-4 text-green-600" />,
}

const statusColor = {
  pending: "bg-yellow-100 text-yellow-800",
  submitted: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
}

const difficultyColor = {
  Easy: "bg-green-100 text-green-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Hard: "bg-red-100 text-red-800",
}

export function AssignmentsSection() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Assignments</h2>
      <div className="space-y-4">
        {assignments.map((assignment) => (
          <Card key={assignment.id} className="p-4 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {statusIcon[assignment.status]}
                  <h3 className="font-semibold text-lg">{assignment.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">{assignment.description}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge className={difficultyColor[assignment.difficulty]}>{assignment.difficulty}</Badge>
                  <Badge className={statusColor[assignment.status]}>{assignment.status}</Badge>
                  <span className="text-xs text-gray-500">Due: {assignment.dueDate}</span>
                </div>
              </div>
              <Button variant="outline" size="sm">
                {assignment.status === "completed" ? "Completed" : "Start"}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  )
}
