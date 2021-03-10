import { DebounceOptions, DebounceState } from "./types";
declare function useDebounceState<T>(initialValue: T, options?: Partial<DebounceOptions>): DebounceState<T>;
declare function useDebounceState<T>(initialValue: () => T, options?: Partial<DebounceOptions>): DebounceState<T>;
export default useDebounceState;
