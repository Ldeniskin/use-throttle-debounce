import { DependencyList, EffectCallback, useEffect } from "react"
import { ThrottleOptions } from "./types"
import useThrottleCallback from "./useThrottleCallback"

export default function useThrottleEffect<E extends EffectCallback>(effect: E, options?: Partial<ThrottleOptions>, deps?: DependencyList): void {
    const throttledEffect = useThrottleCallback(effect, options, deps)
    useEffect(throttledEffect, [throttledEffect])
}
