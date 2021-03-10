import { DependencyList } from "react";
import { ThrottleOptions } from "./types";
import { Procedure } from "../types";
export default function useThrottleCallback<F extends Procedure>(callback: F, options?: Partial<ThrottleOptions>, deps?: DependencyList): F;
