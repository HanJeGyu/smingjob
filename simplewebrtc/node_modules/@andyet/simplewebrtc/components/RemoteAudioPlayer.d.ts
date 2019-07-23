import * as React from 'react';
import { Media } from '../Definitions';
export interface AudioSource {
    media: Media;
    volumeLimit: number;
}
export interface RemoteAudioPlayerProps {
    audioSources?: AudioSource[];
    globalVolumeLimit?: number;
    outputDevice?: string;
}
/**
 * @description
 * The remote audio player component will play all enabled remote audio tracks. Only one instance needs to be used.
 *
 * @public
 *
 * @example
 * <div>
 *   {/* We can always keep the audio player around *\/}
 *   <RemoteAudioPlayer />
 *   <Connected>
 *     <p>Main app UI</p>
 *   </Connected>
 * </div>
 */
export declare class RemoteAudioPlayer extends React.Component<RemoteAudioPlayerProps, any> {
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponentClass<typeof RemoteAudioPlayer, Pick<RemoteAudioPlayerProps, never> & RemoteAudioPlayerProps>;
export default _default;
