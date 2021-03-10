import { DependencyList, EffectCallback } from "react";
import { DebounceOptions } from "./types";
export default function useDebounceEffect<E extends EffectCallback>(effect: E, options?: Partial<DebounceOptions>, deps?: DependencyList): void;
