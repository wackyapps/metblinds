import { cn } from "@/lib/utils";
import { Pagination, PaginationItemType } from "@heroui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PaginationComponent = ({
  total,
  page,
  setPage,
  totalItems,
  limit,
}: {
  total: number;
  page: number;
  setPage: (page: number) => void;
  totalItems: number;
  limit: number;
}) => {
  const renderItem = ({
    ref,
    key,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
  }: any) => {
    if (value === PaginationItemType.PREV) {
      return (
        <button
          key={key}
          className={cn(className, "h-8 w-8 min-w-8 rounded bg-default-200/50")}
          onClick={onPrevious}
        >
          <ChevronLeft />
        </button>
      );
    }
    if (value === PaginationItemType.NEXT) {
      return (
        <button
          key={key}
          className={cn(className, "h-8 w-8 min-w-8 rounded bg-default-200/50")}
          onClick={onNext}
        >
          <ChevronRight />
        </button>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return (
        <button key={key} className={className}>
          ...
        </button>
      );
    }

    // cursor is the default item
    return (
      <button
        key={key}
        ref={ref}
        className={cn(
          className,
          isActive
            ? "bg-[#FFAD33]"
            : "h-8 w-8 min-w-8 rounded bg-default-200/50",
        )}
        onClick={() => setPage(value)}
      >
        {value}
      </button>
    );
  };
  return (
    <div className="flex items-center justify-start gap-4">
      <Pagination
        showControls
        initialPage={page}
        total={total}
        onChange={(page) => setPage(page)}
        renderItem={renderItem}
        color="default"
      />
      <div className="text-sm text-gray-500">
        {limit * (page - 1) + 1} - {Math.min(limit * page, totalItems)} of{" "}
        {totalItems}
      </div>
    </div>
  );
};

export default PaginationComponent;
