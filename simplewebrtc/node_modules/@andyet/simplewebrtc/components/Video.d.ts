import * as React from 'react';
import { Media } from '../Definitions';
/**
 * @param media Media object wrapper, see `Media` interface below.
 */
export interface VideoProps {
    media: Media;
}
/**
 * @description
 * Local and remote video tracks can be played with the `<Video/>` component.
 *
 * The provided `media` property can include `remoteDisabled` and `localDisabled` fields. If either of those properties are `true`, video playback will be paused.
 *
 * @public
 *
 * @example
 * <Video media={getMediaTrack(store, 'some-media-id')} />
 */
declare class Video extends React.Component<VideoProps, any> {
    private video;
    componentDidMount(): void;
    componentDidUpdate(prev: VideoProps): void;
    setup(): void;
    render(): JSX.Element | null;
}
export default Video;
