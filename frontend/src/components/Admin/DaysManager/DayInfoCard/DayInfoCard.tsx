import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Edit2, Eye, Trash2 } from "lucide-react";
import React from "react";

interface DayInfoCardProps {
  title: string;
  description: string;
  problemsCount: number;
}

const DayInfoCard = ({
  title,
  description,
  problemsCount = 11,
}: DayInfoCardProps) => {
  return (
    <Card className="p-4 hover:border-blue-400 transition">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="mt-2 flex gap-2">
            <Badge variant="secondary">{problemsCount} Problems</Badge>
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

export default DayInfoCard;
