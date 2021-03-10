import { DependencyList, EffectCallback } from "react";
import { ThrottleOptions } from "./types";
export default function useThrottleEffect<E extends EffectCallback>(effect: E, options?: Partial<ThrottleOptions>, deps?: DependencyList): void;
