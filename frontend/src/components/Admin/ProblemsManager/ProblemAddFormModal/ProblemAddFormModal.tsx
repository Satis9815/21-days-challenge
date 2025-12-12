/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputField } from "@/components/shared/common/InputField/InputField";
import Modal from "@/components/shared/common/Modal/Modal";
import { TextareaField } from "@/components/shared/common/TextareaField/TextareaField";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface ProblemAddFormModalProps {
  openProblemAddFormModal: boolean;
  setOpenProblemAddFormModal: any;
}
const ProblemAddFormModal = ({
  openProblemAddFormModal,
  setOpenProblemAddFormModal,
}: ProblemAddFormModalProps) => {
  return (
    <Modal
      isOpen={openProblemAddFormModal}
      onClose={() => setOpenProblemAddFormModal(false)}
      title="Add a new problem"
      description="Fill all the fields to add a new problem."
    >
      <form className="p-4 space-y-4">
        <InputField name="problemName" type="text" placeholder="Problem Name" />
        <TextareaField
          name="problemDescription"
          placeholder="Problem Description"
        />
        <InputField name="category" type="text" placeholder="Category" />
        <Select>
          <SelectTrigger>
            <SelectValue defaultValue={"Easy"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Easy">Easy</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Hard">Hard</SelectItem>
          </SelectContent>
        </Select>
        <TextareaField
          name="solotionCode"
          placeholder="Solution Code"
          rows={8}
        />
        <div className="flex gap-2">
          <Button className="bg-green-600 hover:bg-green-700">Save</Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </form>
    </Modal>
  );
};

export default ProblemAddFormModal;
