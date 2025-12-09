"use client";
import { Badge } from "@/components/ui/badge";
import { MaxOfThreeNumbers } from "./Promblems/Day02/MaxOfThreeNumbers";
import { PositiveNegativeZero } from "./Promblems/Day02/PositiveNegativeZero";
import { ElectricityBill } from "./Promblems/Day02/ElectricityBill";
import { VowelConsonant } from "./Promblems/Day02/VowelConsonant";
import { LeapYear } from "./Promblems/Day02/LeapYear";
import { CharacterType } from "./Promblems/Day02/CharacterType";
import { IncomeTax } from "./Promblems/Day02/IncomeTax";
import { SolutionViewer } from "./solution-viewer";
import { LeftAlignedIncreasingTriangle } from "./Promblems/Day03/Patterns/left-aligned-increasing-triangle";
import { LeftAlignedDecreasingTriangle } from "./Promblems/Day03/Patterns/left-aligned-decreasing-triangle";
import { RightAlignedIncreasingTriangle } from "./Promblems/Day03/Patterns/right-aligned-increasing-triangle";
import { RightAlignedDecreasingTriangle } from "./Promblems/Day03/Patterns/right-aligned-decreasing-triangle";
import { CenteredPyramid } from "./Promblems/Day03/Patterns/centered-pyramid";
import { InvertedPyramid } from "./Promblems/Day03/Patterns/inverted-pyramid";
import { HollowPyramid } from "./Promblems/Day03/Patterns/hollow-pyramid";
import { HollowInvertedPyramid } from "./Promblems/Day03/Patterns/hollow-intervted-pyramid";
import { HollowSquare } from "./Promblems/Day03/Patterns/hollow-square";
import { BinaryTriangle } from "./Promblems/Day03/Patterns/binary-triangle";
import { ButterflyPattern } from "./Promblems/Day03/Patterns/butterfly-pattern";
import { DiamondPattern } from "./Promblems/Day03/Patterns/dimond-pattern";
import { MultiplicationTable } from "./Promblems/Day03/Patterns/multiplication-table";
import { MultiplicationTableUptoN } from "./Promblems/Day03/Patterns/multiplication-table-upto-n";

interface ProblemVisualizerProps {
  problemId: string;
  problemName: string;
  difficulty: "Easy" | "Medium" | "Hard";
  solution: string;
}

const difficultColor = {
  Easy: "bg-green-100 text-green-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Hard: "bg-red-100 text-red-800",
};

export function ProblemVisualizer({
  problemId,
  problemName,
  difficulty,
  solution,
}: ProblemVisualizerProps) {
  const renderProblem = () => {
    switch (problemId) {
      case "max-of-three":
        return <MaxOfThreeNumbers />;
      case "positive-negative-zero":
        return <PositiveNegativeZero />;
      case "electricity-bill":
        return <ElectricityBill />;
      case "vowel-consonant":
        return <VowelConsonant />;
      case "leap-year":
        return <LeapYear />;
      case "character-type":
        return <CharacterType />;
      case "income-tax":
        return <IncomeTax />;
      case "left-aligned-increasing-triangle":
        return <LeftAlignedIncreasingTriangle />;
      case "left-aligned-decreasing-triangle":
        return <LeftAlignedDecreasingTriangle />;
      case "right-aligned-increasing-triangle":
        return <RightAlignedIncreasingTriangle />;
      case "right-aligned-decreasing-triangle":
        return <RightAlignedDecreasingTriangle />;
      case "centered-pyramid":
        return <CenteredPyramid />;
      case "inverted-pyramid":
        return <InvertedPyramid />;
      case "hollow-pyramid":
        return <HollowPyramid />;
      case "hollow-inverted-pyramid":
        return <HollowInvertedPyramid />;
      case "hollow-square":
        return <HollowSquare />;
      case "binary-triangle":
        return <BinaryTriangle />;
      case "butterfly-pattern":
        return <ButterflyPattern />;
      case "diamond-pattern":
        return <DiamondPattern />;
      case "multiplication-table":
        return <MultiplicationTable />;
      case "multiplication-table-up-to-n":
        return <MultiplicationTableUptoN />;

      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{problemName}</h2>
          <Badge className={difficultColor[difficulty]}>{difficulty}</Badge>
        </div>
      </div>
      {renderProblem()}
      <SolutionViewer solution={solution} problemName={problemName} />
    </div>
  );
}
