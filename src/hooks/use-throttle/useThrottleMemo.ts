import {
    DependencyList, useState,
} from "react"
import { ThrottleOptions } from "./types"
import useThrottleEffect from "./useThrottleEffect"

export default function useThrottleMemo<T>(memoize: () => T, options?: Partial<ThrottleOptions>, deps?: DependencyList): T {
    const [throttleMemo, setThrottleMemo] = useState(memoize)
    useThrottleEffect(() => setThrottleMemo(memoize()), options, deps)
    return throttleMemo
}
