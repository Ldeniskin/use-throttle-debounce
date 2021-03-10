import {
    ReducerState,
    Reducer,
    useReducer,
} from "react"
import { DebounceOptions, DebounceReducer } from "./types"
import useDebounceCallback from "./useDebounceCallback"
import { Procedure } from "../types"

function useDebounceReducer<S = unknown, A = unknown, T = unknown>(
    options: Partial<DebounceOptions> | undefined,
    reducer: Reducer<S, A>,
    initializerArg: T,
    initializer: (arg: T) => ReducerState<Reducer<S, A>>,
): DebounceReducer<S, A>
function useDebounceReducer<S = unknown, A = unknown>(
    options: Partial<DebounceOptions> | undefined,
    reducer: Reducer<S, A>,
    initializerArg: ReducerState<Reducer<S, A>>,
): DebounceReducer<S, A>
function useDebounceReducer<S = unknown, A = unknown, T = unknown>(
    options: Partial<DebounceOptions> | undefined,
    reducer: Reducer<S, A>,
    initializerArg: ReducerState<Reducer<S, A>> | T,
    initializer?: unknown,
): DebounceReducer<S, A> {
    const [value, dispatch] = useReducer(reducer, initializerArg, (initializer || undefined) as () => ReducerState<Reducer<S, A>>)
    const debouncedDispatch = useDebounceCallback(dispatch as Procedure, options)
    return [value, debouncedDispatch]
}

export default useDebounceReducer
