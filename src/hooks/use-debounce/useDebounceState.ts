import {
    useMemo,
    useState,
} from "react"
import { debounce } from "throttle-debounce"
import { DebounceOptions, DebounceState } from "./types"
import { debounceDefaultOptions } from "./const"

function useDebounceState<T>(initialValue: T, options?: Partial<DebounceOptions>): DebounceState<T>
function useDebounceState<T>(initialValue: () => T, options?: Partial<DebounceOptions>): DebounceState<T>
function useDebounceState<T>(initialValue: T | (() => T), options?: Partial<DebounceOptions>): DebounceState<T> {
    const [value, setValue] = useState(initialValue)
    const debouncedSetValue = useMemo(() => debounce(
        options?.delay ?? debounceDefaultOptions.delay,
        options?.atBegin ?? debounceDefaultOptions.atBegin,
        setValue,
    ), [options?.delay, options?.atBegin, setValue])
    return [value, debouncedSetValue]
}

export default useDebounceState
