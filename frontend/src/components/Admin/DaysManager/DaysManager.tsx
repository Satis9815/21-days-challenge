"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";
import DayAddFormModal from "./DayAddFormModal/DayAddFormModal";
import DayInfoCard from "./DayInfoCard/DayInfoCard";
import { DeleteModal } from "@/components/shared/common/Modal/DeleteModal/DeleteModal";

const dummyDaysData = [
  {
    id: 1,
    title: "Day 01 - Basic Loops & Number Patterns",
    description: "Master the fundamentals of loops and number operations",
    markdown: `# Day 01 - Basic Loops & Number Patterns
        ## Topics Covered
        - For loops and iterations
        - Number sequences
        - Basic arithmetic operations
        ## Problems
        These problems focus on fundamental loop structures and number handling.`,
    problems: [],
  },
  {
    id: 2,
    title: "Day 02 - Conditional Logic & Classification",
    description: "Master conditional statements and decision-making logic",
    markdown: `# Day 02 - Conditional Logic & Classification
        ## Topics Covered
        - If-else statements
        - Comparison operators
        - Classification logic
        ## Problems
        These problems focus on conditional logic and number/character classification.`,
    problems: [],
  },
  {
    id: 3,
    title: "Day 03 - Pattern Programs",
    description: "Master pattern printing with nested loops",
    markdown: `# Day 03 - Pattern Programs
            ## Topics Covered
            - Nested loops
            - Pattern recognition
            - String manipulation
            - Spacing and formatting

            ## Problems
            These problems strengthen your understanding of loops and pattern generation.`,
    problems: [],
  },
];

export function DaysManager() {
  const [openDayAddForm, setOpenDayAddForm] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(true);

  const handleDelete = () => {
    console.log("Deleting...");
  };
  return (
    <>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Manage Days</h2>
          <Button className="gap-2" onClick={() => setOpenDayAddForm(true)}>
            <Plus className="w-4 h-4" />
            Add Day
          </Button>
        </div>

        <div className="grid gap-4">
          {dummyDaysData.map((day) => (
            <DayInfoCard
              key={day.id}
              title={day.title}
              description={day.description}
              problemsCount={11}
            />
          ))}
        </div>
      </div>

      <DeleteModal
        isOpen={openDeleteModal}
        title="Delete Item"
        description="Are you sure you want to delete this item? This action cannot be undone."
        onClose={() => setOpenDeleteModal(false)}
        onConfirm={handleDelete}
        loading={false}
      />

      <DayAddFormModal
        openDayAddForm={openDayAddForm}
        setOpenDayAddForm={setOpenDayAddForm}
      />
    </>
  );
}
