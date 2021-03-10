import {
    DependencyList, useState,
} from "react"
import { DebounceOptions } from "./types"
import useDebounceEffect from "./useDebounceEffect"

export default function useDebounceMemo<T>(memoize: () => T, options?: Partial<DebounceOptions>, deps?: DependencyList): T {
    const [debounceMemo, setDebounceMemo] = useState(memoize)
    useDebounceEffect(() => setDebounceMemo(memoize()), options, deps)
    return debounceMemo
}
