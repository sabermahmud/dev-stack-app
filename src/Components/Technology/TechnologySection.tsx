import { use, type Dispatch, type SetStateAction } from "react";
import type { TechDataType } from "../../Type/Type";
import TechnologyCard from "./TechnologyCard";

export interface TechnologySectionProps {
  techDataPromise: Promise<TechDataType[]>;
  addedToStack: TechDataType[];
  setAddedToStack: Dispatch<SetStateAction<TechDataType[]>>;
}

export default function TechnologySection({
  techDataPromise,
  addedToStack,
  setAddedToStack,
}: TechnologySectionProps) {
  const techData = use(techDataPromise);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {techData.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          addedToStack={addedToStack}
          setAddedToStack={setAddedToStack}
        />
      ))}
    </div>
  );
}