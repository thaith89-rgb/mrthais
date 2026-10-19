import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { Background, ChannelTag, ProgressBar, SourceLine, Subtitles, Transition } from "./components";
import { Chart, Cta, Hook, Points, Stat } from "./scenes";
import type { RenderScene, Source, VideoProps } from "./types";

const SceneBody: React.FC<{ scene: RenderScene; sources: Source[] }> = ({ scene, sources }) => {
  switch (scene.type) {
    case "hook":
      return <Hook scene={scene} />;
    case "stat":
      return <Stat scene={scene} />;
    case "points":
      return <Points scene={scene} durationInFrames={scene.durationInFrames} />;
    case "chart":
      return <Chart scene={scene} />;
    case "cta":
      return <Cta scene={scene} sources={sources} />;
    default:
      return null;
  }
};

export const NewsVideo: React.FC<VideoProps> = ({ scenes, sources }) => {
  let from = 0;
  return (
    <AbsoluteFill>
      <Background />
      {scenes.map((scene, i) => {
        const start = from;
        from += scene.durationInFrames;
        return (
          <Sequence key={i} from={start} durationInFrames={scene.durationInFrames} name={`${i + 1}. ${scene.type}`}>
            {scene.audio && <Audio src={staticFile(scene.audio)} />}
            <Transition duration={scene.durationInFrames}>
              <SceneBody scene={scene} sources={sources} />
              <Subtitles words={scene.words} />
            </Transition>
          </Sequence>
        );
      })}
      <ChannelTag />
      <SourceLine sources={sources} />
      <ProgressBar />
    </AbsoluteFill>
  );
};
