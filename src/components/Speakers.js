import { useState } from "react";
import { data } from "../../SpeakerData";
import Header from "./Header";
import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";

function Speakers({ showSessions, setShowSessions, theme, setTheme }) {
  return (
    <>
      <SpeakersToolbar
        showSessions={showSessions}
        setShowSessions={setShowSessions}
        theme={theme}
        setTheme={setTheme}
      />
      <SpeakersList data={data} />
    </>
  );
}

export default Speakers;
