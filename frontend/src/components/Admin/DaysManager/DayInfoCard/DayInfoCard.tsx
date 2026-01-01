import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Edit2, Eye, Trash2 } from "lucide-react";
import { Day } from "../DaysManager";

interface DayInfoCardProps {
  day: Day;
  onEdit: (day: Day) => void;
  onView: (day: Day) => void;
  onDelete: (day: Day) => void;
}

const DayInfoCard = ({ day, onDelete, onEdit, onView }: DayInfoCardProps) => {
  return (
    <Card className="p-4 hover:border-blue-400 transition">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{day.title}</h3>
          <p className="text-sm text-muted-foreground">{day.description}</p>
          <div className="mt-2 flex gap-2">
            <Badge variant="secondary">{day.problems.length} Problems</Badge>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => onEdit(day)}>
            <Edit2 className="w-4 h-4" />
          </Button>

          <Button variant="secondary" size="sm" onClick={() => onView(day)}>
            <Eye className="w-4 h-4" />
          </Button>

          <Button variant="destructive" size="sm" onClick={() => onDelete(day)}>
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DayInfoCard;
