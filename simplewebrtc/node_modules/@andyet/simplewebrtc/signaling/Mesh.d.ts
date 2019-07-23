import { ThunkDispatch } from 'redux-thunk';
import { Media } from '../Definitions';
import { State } from '../reducers';
import SignalingClient from './Client';
export default class Mesh {
    jingle: any;
    dispatch: ThunkDispatch<State, void, any>;
    getState: () => State;
    constructor(client: SignalingClient);
    updateICEServers(): void;
    updateConnections(): void;
    plugin(): () => void;
    notifyPeers(media: Media, action: string): void;
}
