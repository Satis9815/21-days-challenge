"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

import DayAddFormModal from "./DayAddFormModal/DayAddFormModal";
import DayInfoCard from "./DayInfoCard/DayInfoCard";
import { DeleteModal } from "@/components/shared/common/Modal/DeleteModal/DeleteModal";
import { deleteDay } from "../../../../actions/day-actions";

export interface Day {
  _id: string;
  title: string;
  description: string;
  markdown: string;
  problems: unknown[];
}

export function DaysManager({ days }: { days: Day[] }) {
  const [openDayForm, setOpenDayForm] = useState(false);
  const [mode, setMode] = useState<"add" | "edit" | "view">("add");
  const [selectedDay, setSelectedDay] = useState<Day | null>(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteDayData, setDeleteDayData] = useState<Day | null>(null);
  const [loading, setLoading] = useState(false);

  const handleDeleteButtonClicked = (day: Day) => {
    setDeleteDayData(day);
    setOpenDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (!deleteDayData) return;

    try {
      setLoading(true);
      await deleteDay(deleteDayData._id);
      setOpenDeleteModal(false);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setMode("add");
    setSelectedDay(null);
    setOpenDayForm(true);
  };

  const handleEdit = (day: Day) => {
    setMode("edit");
    setSelectedDay(day);
    setOpenDayForm(true);
  };

  const handleView = (day: Day) => {
    setMode("view");
    setSelectedDay(day);
    setOpenDayForm(true);
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Manage Days</h2>
          <Button className="gap-2" onClick={handleAdd}>
            <Plus className="w-4 h-4" />
            Add Day
          </Button>
        </div>

        <div className="grid gap-4">
          {days.map((day) => (
            <DayInfoCard
              key={day._id}
              day={day}
              onEdit={handleEdit}
              onView={handleView}
              onDelete={handleDeleteButtonClicked}
            />
          ))}
        </div>
      </div>

      <DeleteModal
        isOpen={openDeleteModal}
        title="Delete Day"
        description="Are you sure you want to delete this day? This action cannot be undone."
        onClose={() => setOpenDeleteModal(false)}
        onConfirm={handleDeleteConfirm}
        loading={loading}
      />

      <DayAddFormModal
        open={openDayForm}
        onClose={() => setOpenDayForm(false)}
        mode={mode}
        day={selectedDay}
      />
    </>
  );
}
