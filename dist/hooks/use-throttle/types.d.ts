import { throttle } from "throttle-debounce";
import { Dispatch, SetStateAction } from "react";
export interface ThrottleOptions {
    delay: number;
    noTrailing: boolean;
    debounceMode?: boolean;
}
export declare type ThrottleState<T> = [T, throttle<Dispatch<SetStateAction<T>>>];
export declare type ThrottleReducer<S, A> = [S, Dispatch<A>];
