"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Modal from "@/components/shared/common/Modal/Modal";
import { InputField } from "@/components/shared/common/InputField/InputField";
import { TextareaField } from "@/components/shared/common/TextareaField/TextareaField";
import { Button } from "@/components/ui/button";
import { Day } from "../DaysManager";
import { createDay, updateDay } from "../../../../../actions/day-actions";

type Mode = "add" | "edit" | "view";

interface DayFormModalProps {
  open: boolean;
  onClose: () => void;
  mode: Mode;
  day?: Day | null;
}

interface DayFormData {
  title: string;
  description: string;
  markdown: string;
}

const DayFormModal = ({ open, onClose, mode, day }: DayFormModalProps) => {
  const isView = mode === "view";

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<DayFormData>();

  useEffect(() => {
    if (day) {
      reset({
        title: day.title,
        description: day.description,
        markdown: day.markdown,
      });
    } else {
      reset({ title: "", description: "", markdown: "" });
    }
  }, [day, reset]);

  const onSubmit = async (data: DayFormData) => {
    if (mode === "add") {
      await createDay(data);
    }

    if (mode === "edit" && day) {
      await updateDay(day._id, data);
    }

    onClose();
  };

  return (
    <Modal
      isOpen={open}
      onClose={onClose}
      title={
        mode === "add"
          ? "Add Day"
          : mode === "edit"
          ? "Edit Day"
          : "View Day"
      }
      description="Day details"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
        <InputField
          label="Title"
          type="text"
          placeholder="Day title"
          register={register}
          name="title"
          disabled={isView}
        />

        <TextareaField
          label="Description"
          placeholder="Short description"
          register={register}
          name="description"
          disabled={isView}
        />

        <TextareaField
          label="Markdown Content"
          placeholder="Markdown content"
          rows={8}
          register={register}
          name="markdown"
          disabled={isView}
        />

        {mode !== "view" && (
          <div className="flex gap-2">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        )}
      </form>
    </Modal>
  );
};

export default DayFormModal;
