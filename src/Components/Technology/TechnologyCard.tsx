import type { Dispatch, SetStateAction } from "react";
import type { TechDataType } from "../../Type/Type";
import { toast } from "react-toastify";

export interface TechnologyCardProps {
  technology: TechDataType;
  addedToStack: TechDataType[];
  setAddedToStack: Dispatch<SetStateAction<TechDataType[]>>;
}

export default function TechnologyCard({
  technology,
  addedToStack,
  setAddedToStack,
}: TechnologyCardProps) {
  const {
    logo,
    name,
    description,
    category,
    level,
    rating,
    badge,
  } = technology;


  const isSelected = addedToStack.some(
    (item) => item.id === technology.id,
  );

  const handleAdd = (): void => {
    const alreadyAdded = addedToStack.some(
      (item) => item.id === technology.id,
    );

// This condition is only for extra safety, as the button is disabled after the first click and prevents duplicate function calls.
    if (alreadyAdded) {
      toast.warning(`"${name}" is already in your stack.`);
      return;
    }

    setAddedToStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(`"${name}" added to your stack.`);
  };

  return (
    <div
      className={`group flex h-full flex-col rounded-2xl border bg-white p-5 m-4 shadow-sm transition duration-300 ${
        isSelected
          ? "border-2 border-pink-500"
          : "border-slate-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
      }`}
    >
      {/* Logo + Badge */}
      <div className="mb-5 flex items-start justify-between">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl p-3">
          <img
            src={logo}
            alt={`${name} logo`}
            className="h-full w-full object-contain transition duration-300 group-hover:scale-110"
          />
        </div>

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
          {badge}
        </span>
      </div>

      {/* Name + Category */}
      <div className="mb-3">
        <div className="mb-2 flex items-center justify-between gap-3">
          <h2 className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-xl font-bold text-transparent">
            {name}
          </h2>

          <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
            {category}
          </span>
        </div>

        <p className="line-clamp-3 text-sm leading-6 text-gray-500">
          {description}
        </p>
      </div>

      {/* Difficulty + Rating */}
      <div className="mt-auto border-t border-gray-200 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="mb-1 text-xs text-gray-500">
              Difficulty
            </p>

            <p className="text-sm font-semibold text-slate-600">
              {level}
            </p>
          </div>

          <div className="text-right">
            <p className="mb-1 text-xs text-gray-400">
              Rating
            </p>

            <div className="flex items-center gap-1">
              <span className="text-yellow-400">★</span>

              <span className="text-sm font-bold text-slate-800">
                {rating}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Add Button */}
      <button
        onClick={handleAdd}
        disabled={isSelected}
        className={`mt-6 w-full rounded-2xl px-4 py-2 font-medium text-white transition ${
          isSelected
            ? "cursor-not-allowed bg-gray-300"
            : "bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-90"
        }`}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}