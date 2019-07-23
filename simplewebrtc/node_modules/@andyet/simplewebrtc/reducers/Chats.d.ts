import { AnyAction } from 'redux';
import { Chat } from '../Definitions';
export interface ChatState {
    [key: string]: Chat;
}
export default function (state: ChatState | undefined, action: AnyAction): ChatState;
