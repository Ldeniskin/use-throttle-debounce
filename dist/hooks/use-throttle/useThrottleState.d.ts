import { ThrottleOptions, ThrottleState } from "./types";
declare function useThrottleState<T>(initialValue: () => T, options?: Partial<ThrottleOptions>): ThrottleState<T>;
declare function useThrottleState<T>(initialValue: T, options?: Partial<ThrottleOptions>): ThrottleState<T>;
export default useThrottleState;
