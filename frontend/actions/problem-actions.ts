"use server";

import { connectDatabase } from "@/db/db";
import Day from "@/db/models/Day";
import Problem from "@/db/models/Problem";
import { revalidatePath } from "next/cache";

interface IProblemData {
  name: string;
  description: string;
  category: string;
  difficulty: "Easy" | "Medium" | "Hard";
  solution: string;
  [key: string]: unknown;
}

export async function addProblem(dayId: string, problemData: IProblemData) {
  try {
    connectDatabase();

    const newProblem = await Problem.create(problemData);

    await Day.findByIdAndUpdate(dayId, { $push: { problems: newProblem._id } });

    revalidatePath("/");
    revalidatePath("/admin/problems-manager");
    return JSON.parse(JSON.stringify(newProblem));
  } catch (error) {
    console.error("Error adding problem:", error);
    throw new Error("Failed to add problem");
  }
}

export async function updateProblem(
  problemId: string,
  updatedData: Partial<IProblemData>
) {
  try {
    connectDatabase();

    const updatedProblem = await Problem.findByIdAndUpdate(
      problemId,
      { $set: updatedData },
      { new: true }
    ).lean();

    revalidatePath("/");
    revalidatePath("/admin/problems-manager");
    return updatedProblem ? JSON.parse(JSON.stringify(updatedProblem)) : null;
  } catch (error) {
    console.error("Error updating problem:", error);
    throw new Error("Failed to update problem");
  }
}

export async function deleteProblem(dayId: string, problemId: string) {
  try {
    connectDatabase();

    await Day.findByIdAndUpdate(dayId, { $pull: { problems: problemId } });

    await Problem.findByIdAndDelete(problemId);

    revalidatePath("/");
    revalidatePath("/admin/problems-manager");
    return { success: true };
  } catch (error) {
    console.error("Error deleting problem:", error);
    throw new Error("Failed to delete problem");
  }
}

export async function getProblemsByDay(dayId: string) {
  try {
    connectDatabase();
    const day = await Day.findById(dayId).populate("problems").lean();
    return day ? JSON.parse(JSON.stringify(day.problems)) : [];
  } catch (error) {
    console.error("Error fetching problems:", error);
    throw new Error("Failed to fetch problems");
  }
}
