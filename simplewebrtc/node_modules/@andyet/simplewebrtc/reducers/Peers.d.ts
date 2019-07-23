import { AnyAction } from 'redux';
import { Peer } from '../Definitions';
export interface PeerState {
    [key: string]: Peer;
}
export default function (state: PeerState | undefined, action: AnyAction): PeerState;
