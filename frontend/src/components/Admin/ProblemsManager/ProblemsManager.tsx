"use client";

import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import ProblemInfoCard from "./ProblemInfoCard/ProblemInfoCard";
import { useState } from "react";
import ProblemAddFormModal from "./ProblemAddFormModal/ProblemAddFormModal";
import { DeleteModal } from "@/components/shared/common/Modal/DeleteModal/DeleteModal";

interface ProblemDataInterface {
  id: number;
  name: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  solution: string;
}

const dummyProblemsData: ProblemDataInterface[] = [
  {
    id: 1,
    name: "Print Numbers 1 to N",
    description: "Print all numbers from 1 to N",
    difficulty: "Easy",
    category: "Loops",
    solution: `function printOneToN(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += i + "\\n";
  }
  return result;
}

// Alternative: using Array
function printOneToNArray(num) {
  return Array.from({length: num}, (_, i) => i + 1).join("\\n");
}

// Example: printOneToN(5) outputs:
// 1
// 2
// 3
// 4
// 5`,
  },
  {
    id: 2,
    name: "Print N to 1 (Reverse)",
    description: "Print all numbers from N to 1 in reverse",
    difficulty: "Easy",
    category: "Loops",
    solution: `function printNToOne(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += (num - (i - 1)) + "\\n";
  }
  return result;
}

// Alternative: simpler approach
function printNToOneSimple(num) {
  let result = "";
  for (let i = num; i >= 1; i--) {
    result += i + "\\n";
  }
  return result;
}

// Example: printNToOne(5) outputs:
// 5
// 4
// 3
// 2
// 1`,
  },
  {
    id: 3,
    name: "Print Even Numbers 1 to N",
    description: "Print all even numbers between 1 and N",
    difficulty: "Easy",
    category: "Loops",
    solution: `function printEvenNumbers(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      result += i + "\\n";
    }
  }
  return result;
}

// More optimized
function printEvenNumbersOptimized(num) {
  let result = "";
  for (let i = 2; i <= num; i += 2) {
    result += i + "\\n";
  }
  return result;
}

// Example: printEvenNumbers(10) outputs:
// 2
// 4
// 6
// 8
// 10`,
  },
];

export function ProblemsManager() {
  const [openProblemAddFormModal, setOpenProblemAddFormModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(true);

  const handleDelete = () => {
    console.log("Deleting...");
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Manage Problems</h2>
          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue defaultValue={"Day-01"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Day-01</SelectItem>
                <SelectItem value="2">Day-02</SelectItem>
                <SelectItem value="3">Day-03</SelectItem>
              </SelectContent>
            </Select>
            <Button
              className="gap-2"
              onClick={() => setOpenProblemAddFormModal(true)}
            >
              <Plus className="w-4 h-4" />
              Add Problem
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          {dummyProblemsData.map((problem) => (
            <ProblemInfoCard
              category={problem.category}
              description={problem.description}
              difficulty={"Easy"}
              name={problem.name}
              key={problem.id}
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
      <ProblemAddFormModal
        openProblemAddFormModal={openProblemAddFormModal}
        setOpenProblemAddFormModal={setOpenProblemAddFormModal}
      />
    </>
  );
}
