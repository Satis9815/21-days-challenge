"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Modal from "@/components/shared/common/Modal/Modal";
import { InputField } from "@/components/shared/common/InputField/InputField";
import { TextareaField } from "@/components/shared/common/TextareaField/TextareaField";
import { Button } from "@/components/ui/button";
import { DayFormData, daySchema } from "./day.schema";
import { createDay } from "../../../../../actions/day-actions";

interface DayAddFormModalProps {
  openDayAddForm: boolean;
  setOpenDayAddForm: (value: boolean) => void;
}

const DayAddFormModal = ({
  openDayAddForm,
  setOpenDayAddForm,
}: DayAddFormModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DayFormData>({
    resolver: zodResolver(daySchema),
  });

  const onSubmit = async (data: DayFormData) => {
    await createDay(data);
    reset();
    setOpenDayAddForm(false);
  };

  return (
    <Modal
      isOpen={openDayAddForm}
      onClose={() => setOpenDayAddForm(false)}
      title="Add a New Day"
      description="Fill all the fields to add a new day"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <InputField
          label="Title"
          type="text"
          placeholder="Day Title"
          name="title"
          register={register}
          error={errors.title?.message}
        />

        <TextareaField
          label="Description"
          placeholder="Day Description"
          name="description"
          register={register}
          error={errors.description?.message}
        />

        <TextareaField
          label="Markdown"
          placeholder="Markdown Content"
          rows={6}
          name="markdown"
          register={register}
          error={errors.markdown?.message}
        />

        <div className="flex gap-2">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Save"}
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={() => setOpenDayAddForm(false)}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default DayAddFormModal;
