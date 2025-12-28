"use server";

import { connectDatabase } from "@/db/db";
import Day from "@/db/models/Day";
import { revalidatePath } from "next/cache";

// Get all days with populated problems
export async function getAllDays() {
  try {
    connectDatabase();
    const days = await Day.find({})
      .populate("problems")
      .sort({ createdAt: 1 })
      .lean();
    return JSON.parse(JSON.stringify(days));
  } catch (error) {
    console.error("Error fetching days:", error);
    throw new Error("Failed to fetch days");
  }
}

// Get a single day by ID
export async function getDayById(id: string) {
  try {
    connectDatabase();
    const day = await Day.findById(id).populate("problems").lean();
    return day ? JSON.parse(JSON.stringify(day)) : null;
  } catch (error) {
    console.error("Error fetching day:", error);
    throw new Error("Failed to fetch day");
  }
}

// Create a new day
export async function createDay(data: {
  title: string;
  description: string;
  markdown: string;
}) {
  try {
    connectDatabase();
    const newDay = await Day.create({
      ...data,
      problems: [],
    });
    revalidatePath("/");
    revalidatePath("/admin/problems-manager");
    return JSON.parse(JSON.stringify(newDay));
  } catch (error) {
    console.error("Error creating day:", error);
    throw new Error("Failed to create day");
  }
}

// Update a day
export async function updateDay(id: string, data: Partial<{ title?: string; description?: string; markdown?: string; problems?: string[] }>) {
  try {
    connectDatabase();
    const updatedDay = await Day.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    ).lean();
    revalidatePath("/");
    revalidatePath("/admin/problems-manager");
    return updatedDay ? JSON.parse(JSON.stringify(updatedDay)) : null;
  } catch (error) {
    console.error("Error updating day:", error);
    throw new Error("Failed to update day");
  }
}

// Delete a day
export async function deleteDay(id: string) {
  try {
    connectDatabase();
    await Day.findByIdAndDelete(id);
    revalidatePath("/");
    revalidatePath("/admin/problems-manager");
    return { success: true };
  } catch (error) {
    console.error("Error deleting day:", error);
    throw new Error("Failed to delete day");
  }
}
