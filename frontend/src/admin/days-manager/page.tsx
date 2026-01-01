import { DaysManager } from "@/components/Admin/DaysManager/DaysManager";
import { getAllDays } from "../../../actions/day-actions";

const DaysManagerPage = async() => {
    const days = await getAllDays();
  return <DaysManager days={days}  />;
};

export default DaysManagerPage;
