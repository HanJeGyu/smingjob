import 'webrtc-adapter';
import { DisplayBuffer } from 'realtime-text';
import { ThunkDispatch } from 'redux-thunk';
import { State } from '../reducers';
import Mesh from './Mesh';
export interface ConnectOpts {
    jid: string;
    password: string;
    resource: string;
    wsURL: string;
}
export interface RoomConfig {
    password?: string;
}
export default class SignalingClient {
    xmpp: any;
    jingle: any;
    mesh: Mesh;
    dispatch: ThunkDispatch<State, void, any>;
    getState: () => State;
    rttBuffers: Map<string, DisplayBuffer>;
    logToConsole: any;
    terminating: boolean;
    constructor(dispatch: ThunkDispatch<State, void, any>, getState: () => State, opts: ConnectOpts);
    connect(): void;
    disconnect(): void;
    joinRoom(roomAddress: string, password?: string, autoJoinCall?: boolean): void;
    destroyRoom(roomAddress: string): Promise<void>;
    sendRoomPresence(roomAddress: string, opts?: object): void;
    sendAllRoomsPresence(opts?: object): void;
    sendAllCallsSpeakingUpdate(speaking: boolean): void;
    lockRoom(roomAddress: string, password: string): Promise<void>;
    unlockRoom(roomAddress: string): Promise<void>;
    private fetchRoomConfig;
    private checkLockStatus;
    private processMessage;
}
