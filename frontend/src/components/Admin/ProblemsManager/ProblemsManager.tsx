"use client";

import { useEffect, useState } from "react";
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
import { DeleteModal } from "@/components/shared/common/Modal/DeleteModal/DeleteModal";
import {
  deleteProblem,
  getProblemsByDay,
} from "../../../../actions/problem-actions";
import { getAllDays } from "../../../../actions/day-actions";
import ProblemFormModal from "./ProblemAddFormModal/ProblemAddFormModal";

export interface Problem {
  _id: string;
  name: string;
  description: string;
  category: string;
  difficulty: "Easy" | "Medium" | "Hard";
  solution: string;
}

interface DayOption {
  _id: string;
  date?: string;
  title?: string;
}

export function ProblemsManager() {
  const [dayId, setDayId] = useState<string>("");
  const [days, setDays] = useState<DayOption[]>([]);
  const [problems, setProblems] = useState<Problem[]>([]);
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);
  const [mode, setMode] = useState<"add" | "edit" | "view">("add");
  const [openForm, setOpenForm] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDays = async () => {
      try {
        setLoading(true);
        const allDays = await getAllDays();

        if (allDays && allDays.length > 0) {
          setDays(allDays);
          setDayId(allDays[0]._id);
        } else {
          setDays([]);
          setDayId("");
        }
      } catch (err) {
        console.error("Error fetching days:", err);
        setDays([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDays();
  }, []);

  useEffect(() => {
    const fetchProblems = async () => {
      if (!dayId) {
        setProblems([]);
        return;
      }

      setLoading(true);
      try {
        const probs = await getProblemsByDay(dayId);
        setProblems(probs || []);
      } catch (err) {
        console.error("Error fetching problems:", err);
        setProblems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProblems();
  }, [dayId]);

  const refreshProblems = async () => {
    if (dayId) {
      try {
        const probs = await getProblemsByDay(dayId);
        setProblems(probs || []);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleModalClose = () => {
    setOpenForm(false);
    setSelectedProblem(null);
    setMode("add");
    refreshProblems();
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold">Manage Problems</h2>

        <div className="w-full sm:w-80">
          <Select
            value={dayId}
            onValueChange={setDayId}
            disabled={days.length === 0}
          >
            <SelectTrigger>
              <SelectValue
                placeholder={
                  days.length === 0
                    ? "No days available"
                    : "Select a day to manage problems"
                }
              />
            </SelectTrigger>
            <SelectContent>
              {days.map((day) => (
                <SelectItem key={day._id} value={day._id}>
                  {day.title || day.date || `Day ${day._id.slice(-6)}`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {dayId && (
          <Button
            onClick={() => {
              setMode("add");
              setSelectedProblem(null);
              setOpenForm(true);
            }}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Problem
          </Button>
        )}
      </div>

      {loading ? (
        <div className="text-center py-12">Loading...</div>
      ) : !dayId ? (
        <div className="text-center py-12 text-muted-foreground">
          {days.length === 0
            ? "No days found. Create a day first."
            : "Please select a day to view its problems."}
        </div>
      ) : problems.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          No problems yet for this day.
          <br />
          Click Add Problem to create the first one!
        </div>
      ) : (
        <div className="grid gap-4">
          {problems.map((p) => (
            <ProblemInfoCard
              key={p._id}
              problem={p}
              onEdit={(p) => {
                setMode("edit");
                setSelectedProblem(p);
                setOpenForm(true);
              }}
              onView={(p) => {
                setMode("view");
                setSelectedProblem(p);
                setOpenForm(true);
              }}
              onDelete={(p) => {
                setSelectedProblem(p);
                setOpenDelete(true);
              }}
            />
          ))}
        </div>
      )}

      <DeleteModal
        isOpen={openDelete}
        title="Delete Problem"
        description="This action cannot be undone."
        onClose={() => {
          setOpenDelete(false);
          setSelectedProblem(null);
        }}
        onConfirm={async () => {
          if (selectedProblem && dayId) {
            await deleteProblem(dayId, selectedProblem._id);
            await refreshProblems();
          }
          setOpenDelete(false);
          setSelectedProblem(null);
        }}
        loading={false}
      />

      <ProblemFormModal
        open={openForm}
        onClose={handleModalClose}
        mode={mode}
        dayId={dayId}
        problem={selectedProblem}
      />
    </>
  );
}