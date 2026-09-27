import { MdDelete } from "react-icons/md";
import type { TechDataType } from "../../Type/Type";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

export interface YourStackCardProps {
  stack: TechDataType;
  addedToStack: TechDataType[];
  setAddedToStack: Dispatch<SetStateAction<TechDataType[]>>;
}

export default function YourStackCard({
  stack,
  setAddedToStack,
}: YourStackCardProps) {
  const handleDeleteOne = (): void => {
    setAddedToStack((previousStack) =>
      previousStack.filter(
        (selectedTech) => selectedTech.id !== stack.id,
      ),
    );

    toast.error(`${stack.name} removed from your stack.`);
  };

  return (
    <div className="flex items-center gap-4 border-b border-gray-100 p-4">
      <img
        className="h-10 w-10 object-contain"
        src={stack.logo}
        alt={`${stack.name} logo`}
      />

      <div className="w-full">
        <h3 className="text-base font-bold">
          {stack.name}
        </h3>

        <p className="text-xs text-gray-500">
          {stack.category}
        </p>
      </div>

      <button
        onClick={handleDeleteOne}
        className="text-2xl text-red-400 transition hover:text-red-600"
        aria-label={`Remove ${stack.name}`}
      >
        <MdDelete />
      </button>
    </div>
  );
}