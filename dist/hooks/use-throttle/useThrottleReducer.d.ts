import { ReducerState, Reducer } from "react";
import { ThrottleOptions, ThrottleReducer } from "./types";
declare function useThrottleReducer<S = unknown, A = unknown, T = unknown>(options: Partial<ThrottleOptions> | undefined, reducer: Reducer<S, A>, initializerArg: T, initializer: (arg: T) => ReducerState<Reducer<S, A>>): ThrottleReducer<S, A>;
declare function useThrottleReducer<S = unknown, A = unknown>(options: Partial<ThrottleOptions> | undefined, reducer: Reducer<S, A>, initializerArg: ReducerState<Reducer<S, A>>): ThrottleReducer<S, A>;
export default useThrottleReducer;
