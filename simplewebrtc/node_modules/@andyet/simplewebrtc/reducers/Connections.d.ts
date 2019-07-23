import { AnyAction } from 'redux';
import { PeerConnection } from '../Definitions';
export interface PeerConnectionState {
    [key: string]: PeerConnection;
}
export default function (state: PeerConnectionState | undefined, action: AnyAction): PeerConnectionState;
