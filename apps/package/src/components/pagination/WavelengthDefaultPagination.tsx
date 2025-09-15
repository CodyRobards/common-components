import { useState, useMemo, CSSProperties } from "react";
import WavelengthButtonPagination from "./WavelengthButtonPagination";
import WavelengthVariationPagination from "./WavelengthVariationPagination";

interface PaginationProps {
  totalPages: number;
  boundaryCount?: number;
  siblingCount?: number;
  currentPageNumber: number;
  style?: "text" | "contained" | "outlined" | "circular";
  onPageChange: (page: number) => void;
}

export const range = (start: number, end: number): number[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
};

// for dropdown menu
export function ascendingRange(start: number, end: number): number[] {
  const result: number[] = [];

  for (let i = start; i < end; i++) {
    if (i !== start) {
      result.push(i);
    }
  }

  return result;
}

export function DefaultPagination({ totalPages, currentPageNumber, siblingCount = 1, boundaryCount = 1, style, onPageChange }: PaginationProps) {
  const [current, setCurrent] = useState<number>(currentPageNumber);
  const startPages = range(1, Math.min(boundaryCount, totalPages));
  const endPages = range(Math.max(totalPages - boundaryCount + 1, boundaryCount + 1), totalPages);
  const siblingsStart = Math.max(Math.min(current - siblingCount, totalPages - boundaryCount - siblingCount * 2 - 1), boundaryCount + 2);
  const siblingsEnd = Math.min(Math.max(current + siblingCount, boundaryCount + siblingCount * 2 + 2), endPages.length > 0 ? endPages[0] - 2 : totalPages - 1);
  const firstEllipseList = ascendingRange(1, siblingsStart);
  const secondEllipseList = ascendingRange(siblingsEnd, totalPages);

  const itemList = useMemo(() => {
    return [
      ...startPages,
      ...(siblingsStart > boundaryCount + 2 ? ["..."] : boundaryCount + 1 < totalPages - boundaryCount ? [boundaryCount + 1] : []),
      ...range(siblingsStart, siblingsEnd),
      ...(siblingsEnd < totalPages - boundaryCount - 1 ? ["..."] : totalPages - boundaryCount > boundaryCount ? [totalPages - boundaryCount] : []),
      ...endPages,
    ];
  }, [current, totalPages, boundaryCount, siblingCount]);

  const handleChangePage = (value: number | string) => {
    if (typeof value === "number") {
      setCurrent(value);
      onPageChange(value);
    }
  };
  if (style === "circular") {
    return (
      <WavelengthButtonPagination
        totalPages={totalPages}
        current={current}
        handleChangePage={handleChangePage}
        itemList={itemList}
        firstEllipseList={firstEllipseList}
        secondEllipseList={secondEllipseList}
      />
    );
  } else if (style === "text") {
    return (
      <WavelengthVariationPagination
        totalPages={totalPages}
        current={current}
        variant="text"
        handleChangePage={handleChangePage}
        itemList={itemList}
        firstEllipseList={firstEllipseList}
        secondEllipseList={secondEllipseList}
      />
    );
  } else if (style === "outlined") {
    return (
      <WavelengthVariationPagination
        totalPages={totalPages}
        current={current}
        variant="outlined"
        handleChangePage={handleChangePage}
        itemList={itemList}
        firstEllipseList={firstEllipseList}
        secondEllipseList={secondEllipseList}
      />
    );
  } else if (style === "contained") {
    return (
      <WavelengthVariationPagination
        totalPages={totalPages}
        current={current}
        variant="contained"
        handleChangePage={handleChangePage}
        itemList={itemList}
        firstEllipseList={firstEllipseList}
        secondEllipseList={secondEllipseList}
      />
    );
  } else {
    return (
      <WavelengthVariationPagination
        totalPages={totalPages}
        current={current}
        handleChangePage={handleChangePage}
        itemList={itemList}
        firstEllipseList={firstEllipseList}
        secondEllipseList={secondEllipseList}
      />
    );
  }
}

DefaultPagination.displayName = "DefaultPagination";

export default DefaultPagination;
