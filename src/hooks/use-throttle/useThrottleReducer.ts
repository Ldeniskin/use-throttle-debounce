import {
    ReducerState,
    Reducer,
    useReducer,
} from "react"
import { ThrottleOptions, ThrottleReducer } from "./types"
import useThrottleCallback from "./useThrottleCallback"
import { Procedure } from "../types"

function useThrottleReducer<S = unknown, A = unknown, T = unknown>(
    options: Partial<ThrottleOptions> | undefined,
    reducer: Reducer<S, A>,
    initializerArg: T,
    initializer: (arg: T) => ReducerState<Reducer<S, A>>,
): ThrottleReducer<S, A>
function useThrottleReducer<S = unknown, A = unknown>(
    options: Partial<ThrottleOptions> | undefined,
    reducer: Reducer<S, A>,
    initializerArg: ReducerState<Reducer<S, A>>,
): ThrottleReducer<S, A>
function useThrottleReducer<S = unknown, A = unknown, T = unknown>(
    options: Partial<ThrottleOptions> | undefined,
    reducer: Reducer<S, A>,
    initializerArg: ReducerState<Reducer<S, A>> | T,
    initializer?: unknown,
): ThrottleReducer<S, A> {
    const [value, dispatch] = useReducer(reducer, initializerArg, (initializer || undefined) as () => ReducerState<Reducer<S, A>>)
    const throttledDispatch = useThrottleCallback(dispatch as Procedure, options)
    return [value, throttledDispatch]
}

export default useThrottleReducer
