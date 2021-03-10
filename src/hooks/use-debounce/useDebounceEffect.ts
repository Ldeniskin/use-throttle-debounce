import { DependencyList, EffectCallback, useEffect } from "react"
import { DebounceOptions } from "./types"
import useDebounceCallback from "./useDebounceCallback"

export default function useDebounceEffect<E extends EffectCallback>(effect: E, options?: Partial<DebounceOptions>, deps?: DependencyList): void {
    const debouncedEffect = useDebounceCallback(effect, options, deps)
    useEffect(debouncedEffect, [debouncedEffect])
}
