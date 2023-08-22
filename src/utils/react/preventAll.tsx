import { preventDefault } from "./preventDefault";
import { stopPropagation } from "./stopPropagation";

export function preventAll<T extends (e: any) => void>(
    fn: T
): (e: React.SyntheticEvent<any>) => void {
    return preventDefault(stopPropagation(fn));
}