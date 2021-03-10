import {
    DependencyList, useEffect,
} from "react"
import useDebounceState from "./useDebounceState"
import { DebounceOptions } from "./types"
import { Procedure } from "../types"

export default function useDebounceCallback<F extends Procedure>(
    callback: F,
    options?: Partial<DebounceOptions>,
    deps?: DependencyList,
): F {
    const [debounceCallback, setDebounceCallback] = useDebounceState<F>(() => callback, options)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setDebounceCallback(() => callback), deps)
    useEffect(() => setDebounceCallback.cancel, [setDebounceCallback])
    return debounceCallback
}
