"use client";

import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Modal from "@/components/shared/common/Modal/Modal";
import { InputField } from "@/components/shared/common/InputField/InputField";
import { TextareaField } from "@/components/shared/common/TextareaField/TextareaField";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProblemFormData, problemSchema } from "./problem.schema";
import { Problem } from "../ProblemsManager";
import {
  addProblem,
  updateProblem,
} from "../../../../../actions/problem-actions";
import { ScrollArea } from "@/components/ui/scroll-area";

type Mode = "add" | "edit" | "view";

interface ProblemFormModalProps {
  open: boolean;
  onClose: () => void;
  mode: Mode;
  dayId: string;
  problem?: Problem | null;
}

const ProblemFormModal = ({
  open,
  onClose,
  mode,
  dayId,
  problem,
}: ProblemFormModalProps) => {
  const isView = mode === "view";

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProblemFormData>({
    resolver: zodResolver(problemSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
      difficulty: "Easy",
      solution: "",
    },
  });

  useEffect(() => {
    if (problem) {
      reset({
        name: problem.name || "",
        description: problem.description || "",
        category: problem.category || "",
        difficulty: problem.difficulty || "Easy",
        solution: problem.solution || "",
      });
    } else {
      reset({
        name: "",
        description: "",
        category: "",
        difficulty: "Easy",
        solution: "",
      });
    }
  }, [problem, reset]);

  const onSubmit = async (data: ProblemFormData) => {
    try {
      if (mode === "add") {
        await addProblem(dayId, data);
      } else if (mode === "edit" && problem?._id) {
        await updateProblem(problem._id, data);
      }
      onClose();
      reset();
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  return (
    <Modal
      isOpen={open}
      onClose={onClose}
      title={
        mode === "add"
          ? "Add Problem"
          : mode === "edit"
          ? "Edit Problem"
          : "View Problem"
      }
      description="Problem details"
    >
      <ScrollArea className="max-h-[80vh]">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
          <InputField
            type="text"
            placeholder="Enter problem"
            label="Problem Name"
            register={register}
            name="name"
            disabled={isView}
            error={errors.name?.message}
          />

          <TextareaField
            placeholder="Enter problem description"
            label="Description"
            register={register}
            name="description"
            disabled={isView}
            error={errors.description?.message}
          />

          <InputField
            type="text"
            label="Category"
            placeholder="Enter category"
            register={register}
            name="category"
            disabled={isView}
            error={errors.category?.message}
          />

          <div className="space-y-1">
            <label className="text-sm font-medium">Difficulty</label>
            <Controller
              name="difficulty"
              control={control}
              render={({ field }) => (
                <Select
                  disabled={isView}
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Easy">Easy</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.difficulty && (
              <p className="text-sm text-destructive">
                {errors.difficulty.message}
              </p>
            )}
          </div>

          <TextareaField
            label="Solution Code"
            rows={8}
            placeholder="Enter solution"
            register={register}
            name="solution"
            disabled={isView}
            error={errors.solution?.message}
          />

          {mode !== "view" && (
            <div className="flex gap-2 justify-end">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save"}
              </Button>
            </div>
          )}
        </form>
      </ScrollArea>
    </Modal>
  );
};

export default ProblemFormModal;
