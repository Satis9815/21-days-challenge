"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronUp, Copy, Check } from "lucide-react"

interface SolutionViewerProps {
  solution: string
  problemName: string
}

export function SolutionViewer({ solution }: SolutionViewerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(solution)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="border-2 border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950">
      <div className="p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between hover:opacity-80 transition-opacity"
        >
          <div className="flex items-center gap-2">
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            )}
            <h3 className="font-semibold text-amber-900 dark:text-amber-100">See Solution</h3>
          </div>
          <span className="text-xs text-amber-700 dark:text-amber-300">Click to expand</span>
        </button>

        {isOpen && (
          <div className="mt-4 space-y-3">
            <div className="bg-white dark:bg-slate-900 rounded border border-amber-200 dark:border-amber-800 p-4">
              <pre className="text-sm font-mono text-gray-800 dark:text-gray-100 overflow-x-auto">
                <code>{solution}</code>
              </pre>
            </div>
            <Button onClick={handleCopy} variant="outline" size="sm" className="w-full bg-transparent">
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Solution
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </Card>
  )
}
