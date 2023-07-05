import { appendVideoToDomAndPlay, fetchVideo } from "fake-external-lib";
import { useEffect, useState } from "react";

type State =
  | {
      status: "loading";
    }
  | {
      status: "loaded";
    }
  | {
      status: "error";
      error: Error;
    };

export const useLoadAsyncVideo = (src: string) => {
  const [state, setState] = useState<State>({
    status: "loading",
  });

  useEffect(() => {
    setState({ status: "loading" });

    fetchVideo(src)
      .then((blob) => {
        appendVideoToDomAndPlay(blob);

        setState({ status: "loaded" });
      })
      .catch((error) => {
        setState({ status: "error", error });
      });
  }, [src]);

  // @ts-expect-error
  setState({ status: "error" });

  // @ts-expect-error
  setState({ status: "loading", error: new Error("error") });

  // @ts-expect-error
  setState({ status: "loaded", error: new Error("error") });
};
