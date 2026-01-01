import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Edit2, Eye, Trash2 } from "lucide-react";
import { Problem } from "../ProblemsManager";

interface ProblemInfoCardProps {
  problem: Problem;
  onEdit: (p: Problem) => void;
  onView: (p: Problem) => void;
  onDelete: (p: Problem) => void;
}

const ProblemInfoCard = ({ problem, onEdit, onView, onDelete }: ProblemInfoCardProps) => {
  return (
    <Card className="p-4">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold">{problem.name}</h3>
          <p className="text-sm text-muted-foreground">
            {problem.description}
          </p>

          <div className="mt-2 flex gap-2">
            <Badge>{problem.category}</Badge>
            <Badge variant="secondary">{problem.difficulty}</Badge>
          </div>
        </div>

        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={() => onEdit(problem)}>
            <Edit2 className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="secondary" onClick={() => onView(problem)}>
            <Eye className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="destructive" onClick={() => onDelete(problem)}>
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProblemInfoCard;
