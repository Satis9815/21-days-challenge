"use client"

import { Card } from "@/components/ui/card"
import Markdown from "react-markdown"

interface MarkdownPreviewerProps {
  content: string
  title: string
}

export function MarkdownPreviewer({ content }: MarkdownPreviewerProps) {
  return (
    <Card className="p-6  from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800">
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <Markdown
          components={{
            h1: ({  ...props }) => (
              <h1 className="text-3xl font-bold mb-4 text-blue-900 dark:text-blue-100" {...props} />
            ),
            h2: ({  ...props }) => (
              <h2 className="text-xl font-semibold mb-3 mt-4 text-blue-800 dark:text-blue-200" {...props} />
            ),
            p: ({  ...props }) => (
              <p className="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed" {...props} />
            ),
            ul: ({  ...props }) => (
              <ul className="list-disc list-inside mb-3 space-y-1 text-gray-700 dark:text-gray-300" {...props} />
            ),
            li: ({  ...props }) => <li className="ml-2" {...props} />,
          }}
        >
          {content}
        </Markdown>
      </div>
    </Card>
  )
}
