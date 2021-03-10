import { DependencyList } from "react";
import { DebounceOptions } from "./types";
export default function useDebounceMemo<T>(memoize: () => T, options?: Partial<DebounceOptions>, deps?: DependencyList): T;
