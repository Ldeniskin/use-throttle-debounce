import { ReducerState, Reducer } from "react";
import { DebounceOptions, DebounceReducer } from "./types";
declare function useDebounceReducer<S = unknown, A = unknown, T = unknown>(options: Partial<DebounceOptions> | undefined, reducer: Reducer<S, A>, initializerArg: T, initializer: (arg: T) => ReducerState<Reducer<S, A>>): DebounceReducer<S, A>;
declare function useDebounceReducer<S = unknown, A = unknown>(options: Partial<DebounceOptions> | undefined, reducer: Reducer<S, A>, initializerArg: ReducerState<Reducer<S, A>>): DebounceReducer<S, A>;
export default useDebounceReducer;
