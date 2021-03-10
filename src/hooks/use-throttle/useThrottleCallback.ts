import {
    DependencyList, useEffect,
} from "react"
import { ThrottleOptions } from "./types"
import useThrottleState from "./useThrottleState"
import { Procedure } from "../types"

export default function useThrottleCallback<F extends Procedure>(
    callback: F,
    options?: Partial<ThrottleOptions>,
    deps?: DependencyList,
): F {
    const [throttleCallback, setThrottleCallback] = useThrottleState(() => callback, options)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setThrottleCallback(() => callback), deps)
    useEffect(() => setThrottleCallback.cancel, [setThrottleCallback.cancel])
    return throttleCallback
}
