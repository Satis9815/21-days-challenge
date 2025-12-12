import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Edit2, Eye, Trash2 } from "lucide-react";

interface ProblemInfoCardProps {
  name: string;
  description: string;
  category: string;
  difficulty: "Easy" | "Medium" | "hard";
}

const ProblemInfoCard = ({
  name,
  description,
  category,
  difficulty,
}: ProblemInfoCardProps) => {
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="mt-2 flex gap-2">
            <Badge>{category}</Badge>
            <Badge
              variant="secondary"
              className={`${
                difficulty === "Easy"
                  ? "bg-green-100 text-green-800"
                  : difficulty === "Medium"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {" "}
              {difficulty}
            </Badge>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Edit2 className="w-4 h-4" />
          </Button>
          <Button variant="secondary" size="sm">
            <Eye className="w-4 h-4" />
          </Button>
          <Button variant="destructive" size="sm">
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProblemInfoCard;
