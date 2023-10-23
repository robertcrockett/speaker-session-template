import { Suspense, useState } from "react";
import { data } from "../../SpeakerData";
import Speaker from "./Speaker";

function SpeakersList({ showSessions }) {
  const [speakerData, setSpeakerData] = useState(data);

  function onFavoriteToggle(id) {
    // Obtain the original speaker record using the passed in key
    const speakerRecOriginal = speakerData.find(function (rec) {
      return rec.id === id;
    });

    // Spread the properties of the original record and update the favorite property
    const speakerRecUpdated = {
      ...speakerRecOriginal,
      favorite: !speakerRecOriginal.favorite,
    };

    // Map the speaker data, when the changed record is identified, update that record. Otherwise use the original record
    const speakersDataUpdated = speakerData.map(function (rec) {
      return rec.id === id ? speakerRecUpdated : rec;
    });

    // Set the new updated speaker data
    setSpeakerData(speakersDataUpdated);
  }

  return (
    <div className='container speakers=list'>
      <Suspense fallback>
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
      </Suspense>
    </div>
  );
}

export default SpeakersList;
