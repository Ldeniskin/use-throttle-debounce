import { DependencyList } from "react";
import { ThrottleOptions } from "./types";
export default function useThrottleMemo<T>(memoize: () => T, options?: Partial<ThrottleOptions>, deps?: DependencyList): T;
