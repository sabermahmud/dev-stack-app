import type { Dispatch, SetStateAction } from "react";
import type { TechDataType } from "../../Type/Type";
import YourStackCard from "./YourStackCard";
import { toast } from "react-toastify";

export interface YourStackProps {
  addedToStack: TechDataType[];
  setAddedToStack: Dispatch<SetStateAction<TechDataType[]>>;
}

export default function YourStack({
  addedToStack,
  setAddedToStack,
}: YourStackProps) {
  const handleRemoveAll = (): void => {
    if (addedToStack.length === 0) {
      return;
    }

    setAddedToStack([]);

    toast.error("All technologies removed from your stack.");
  };

  return (
    <div className="rounded-2xl border-2 border-gray-200 p-4 m-4">
      <h3 className="my-4 text-xl font-bold">
        Your Stack
      </h3>

      <p className="text-sm text-gray-500">
        {addedToStack.length} Technology
        {addedToStack.length !== 1 ? "ies" : "y"} Selected
      </p>

      {addedToStack.length === 0 ? (
        <p className="my-6 rounded-2xl border-2 border-slate-300 p-4 text-gray-500">
          Your stack is empty.
        </p>
      ) : (
        <div>
          {addedToStack.map((stack) => (
            <YourStackCard
              key={stack.id}
              stack={stack}
              addedToStack={addedToStack}
              setAddedToStack={setAddedToStack}
            />
          ))}
        </div>
      )}

      <button
        onClick={handleRemoveAll}
        disabled={addedToStack.length === 0}
        className="mt-4 w-full rounded-xl border-2 border-red-200 p-2 text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Remove All
      </button>
    </div>
  );
}