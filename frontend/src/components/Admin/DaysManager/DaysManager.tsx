"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";
import DayAddFormModal from "./DayAddFormModal/DayAddFormModal";
import DayInfoCard from "./DayInfoCard/DayInfoCard";
import { DeleteModal } from "@/components/shared/common/Modal/DeleteModal/DeleteModal";

interface Day {
  _id: string;
  title: string;
  description: string;
  markdown: string;
  problems: unknown[];
}

export function DaysManager({ days }: { days: Day[] }) {
  const [openDayAddForm, setOpenDayAddForm] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

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
          {days.map((day) => (
            <DayInfoCard
              key={day._id}
              title={day.title}
              description={day.description}
              problemsCount={day.problems.length}
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
