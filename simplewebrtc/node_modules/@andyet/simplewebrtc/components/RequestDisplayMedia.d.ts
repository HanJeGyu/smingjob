import * as React from 'react';
export interface RequestDisplayMediaProps {
    share?: boolean;
    extensionId?: string;
    addLocalScreen?: (track: MediaStreamTrack, stream: MediaStream) => void;
    shareLocalScreen?: (id: string) => void;
    render?: (getDisplayMedia: () => void, extension: RequestDisplayMediaExtensionProps) => React.ReactNode;
}
export interface RequestDisplayMediaExtensionProps {
    available: boolean;
    extensionId?: string;
    extensionRequired: boolean;
    extensionInstalled: boolean;
    extensionInstalling?: boolean;
    listenForInstallation?: (interval?: number) => void;
    ready: boolean;
}
export interface RequestDisplayMediaState {
    extensionRequired: boolean;
    extensionInstalled: boolean;
    extensionInstalling?: boolean;
}
/**
 * @description
 *
 * @public
 *
 */
export declare class RequestDisplayMedia extends React.Component<RequestDisplayMediaProps, RequestDisplayMediaState> {
    private installCheckInterval;
    constructor(props: RequestDisplayMediaProps);
    componentDidMount(): void;
    getDisplayMedia(): Promise<void>;
    listenForInstallation(interval?: number): Promise<void>;
    render(): {} | null | undefined;
}
declare const _default: import("react-redux").ConnectedComponentClass<typeof RequestDisplayMedia, Pick<RequestDisplayMediaProps, never> & RequestDisplayMediaProps>;
export default _default;
