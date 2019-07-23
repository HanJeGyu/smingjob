import { AnyAction } from 'redux';
import { Call } from '../Definitions';
export interface CallState {
    [key: string]: Call;
}
export default function (state: CallState | undefined, action: AnyAction): CallState;
