import { useState } from "react";
import { data } from "../../SpeakerData";
import Speaker from "./Speaker";

function SpeakersList({ showSessions }) {
  const [speakerData, setSpeakerData] = useState(data);

  function onFavoriteToggle(id) {
    console.log("ID:", id);
    const speakersRecPrevious = speakerData.find(function (rec) {
      return rec.id === id;
    });

    const speakersRecUpdated = {
      ...speakersRecPrevious,
      favorite: !speakersRecPrevious.favorite,
    };

    const speakersDataUpdated = speakerData.map(function (rec) {
      return rec.id === id ? speakersDataUpdated : rec;
    });

    setSpeakerData(speakersDataUpdated);
  }

  return (
    <div className='container speakers=list'>
      <div className='row'>
        {speakerData.map((speaker) => {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              showSessions={showSessions}
              onFavoriteToggle={() => {
                onFavoriteToggle(speaker.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SpeakersList;
