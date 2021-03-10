import { debounce } from "throttle-debounce"
import {
    Dispatch,
    SetStateAction,
} from "react"

export interface DebounceOptions {
    delay: number,
    atBegin: boolean,
}

export type DebounceState<T> = [
    T,
    debounce<Dispatch<SetStateAction<T>>>,
]
export type DebounceReducer<S, A> = [
    S,
    Dispatch<A>
]
