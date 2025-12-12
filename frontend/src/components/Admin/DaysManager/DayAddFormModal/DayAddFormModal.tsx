/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputField } from "@/components/shared/common/InputField/InputField";
import Modal from "@/components/shared/common/Modal/Modal";
import { TextareaField } from "@/components/shared/common/TextareaField/TextareaField";
import { Button } from "@/components/ui/button";
interface DayAddFormModalProps {
  openDayAddForm: boolean;
  setOpenDayAddForm: any;
}
const DayAddFormModal = ({
  openDayAddForm,
  setOpenDayAddForm,
}: DayAddFormModalProps) => {
  return (
    <Modal isOpen={openDayAddForm} onClose={() => setOpenDayAddForm(false)} title="Add a New Day" description="Fill all the fields to add a new day ">
      <form className="space-y-6">
        <InputField name="title" type="text" placeholder="Day Title" />
        <TextareaField name="description" placeholder="Day Description" />
        <TextareaField
          name="markdown"
          placeholder="Markdown Content"
          rows={6}
        />
        <div className="flex gap-2">
          <Button type="submit" className="bg-green-600 hover:bg-green-700">
            Save
          </Button>
          <Button type="button" variant="outline" onClick={()=>setOpenDayAddForm(false)}>
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default DayAddFormModal;
