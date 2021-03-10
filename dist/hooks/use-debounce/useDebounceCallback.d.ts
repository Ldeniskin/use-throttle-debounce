import { DependencyList } from "react";
import { DebounceOptions } from "./types";
import { Procedure } from "../types";
export default function useDebounceCallback<F extends Procedure>(callback: F, options?: Partial<DebounceOptions>, deps?: DependencyList): F;
