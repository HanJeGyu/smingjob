import * as React from 'react';
/**
 * @param audio If `true`, request audio. An object of media constraints may be used instead.
 * @param video If `true`, request video. An object of media constraints may be used instead.
 * @param auto If `true`, request media immediately when rendered.
 * @param share If `true`, requested media will be immediately marked as shareable with peers.
 */
export interface RequestUserMediaProps {
    audio?: boolean | MediaTrackConstraints;
    video?: boolean | MediaTrackConstraints;
    auto?: boolean;
    share?: boolean;
    mirrored?: boolean;
    screenCapture?: boolean;
    replaceAudio?: string;
    replaceVideo?: string;
    requestingCapture?: boolean;
    requestingCameraCapture?: boolean;
    requestingMicrophoneCapture?: boolean;
    addLocalAudio?: (track: MediaStreamTrack, stream: MediaStream, replace?: string) => void;
    addLocalVideo?: (track: MediaStreamTrack, stream: MediaStream, mirrored?: boolean, replace?: string) => void;
    addLocalScreen?: (track: MediaStreamTrack, stream: MediaStream, replace?: string) => void;
    removeAllMedia?: (kind: 'audio' | 'video') => void;
    shareLocalMedia?: (id: string) => void;
    deviceCaptureRequest?: (camera: boolean, microphone: boolean) => void;
    fetchDevices?: () => void;
    cameraPermissionDenied?: (err?: Error) => void;
    microphonePermissionDenied?: (err?: Error) => void;
    onSuccess?: (trackIds?: UserMediaIds) => void;
    onError?: (err?: Error) => void;
    render?: (getMedia: (additional?: MediaStreamConstraints) => Promise<UserMediaIds>) => React.ReactNode;
}
export interface UserMediaIds {
    audio?: string;
    video?: string;
}
/**
 * @description
 * The `<RequestUserMedia />` component can be used to request user audio and video media.
 *
 * @public
 *
 * @example
 * <div>
 *   {/* Request audio and immediately share *\/}
 *   <RequestUserMedia audio auto share />
 *   {/* Request audio and video, but use custom renderer to trigger it *\/}
 *   <RequestUserMedia audio video share
 *    render={({ getUserMedia }) => (
 *    <button onClick={getUserMedia}>Get Media</button>
 *   )} />
 * </div>
 */
export declare class RequestUserMedia extends React.Component<RequestUserMediaProps> {
    private errorCount;
    constructor(props: RequestUserMediaProps);
    getMedia(additional?: MediaStreamConstraints): Promise<UserMediaIds>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: RequestUserMediaProps): void;
    render(): {} | null | undefined;
}
declare const _default: import("react-redux").ConnectedComponentClass<typeof RequestUserMedia, Pick<RequestUserMediaProps, never> & RequestUserMediaProps>;
export default _default;
