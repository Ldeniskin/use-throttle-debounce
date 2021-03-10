import {
    useMemo,
    useState,
} from "react"
import { throttle } from "throttle-debounce"
import { ThrottleOptions, ThrottleState } from "./types"
import { throttleDefaultOptions } from "./const"

function useThrottleState<T>(
    initialValue: () => T,
    options?: Partial<ThrottleOptions>,
): ThrottleState<T>
function useThrottleState<T>(
    initialValue: T,
    options?: Partial<ThrottleOptions>,
): ThrottleState<T>
function useThrottleState<T>(
    initialValue: T | (() => T),
    options?: Partial<ThrottleOptions>,
): ThrottleState<T> {
    const [value, setValue] = useState(initialValue)
    const setThrottledState = useMemo(() => throttle(
        options?.delay ?? throttleDefaultOptions.delay,
        options?.noTrailing ?? throttleDefaultOptions.noTrailing,
        setValue,
        options?.debounceMode,
    ), [options?.debounceMode, options?.delay, options?.noTrailing])
    return [value, setThrottledState]
}

export default useThrottleState
