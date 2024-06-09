import React from "react";
import "../App.css";
import "./MiddleEarth.css";

import lordOfTheRings from "../assets/bookId";

const { VITE_AUTH_TOKEN } = import.meta.env

function MiddleEarth() {
  const [chapters, setChapters] = React.useState([]);
  const [hasRead, setHasRead] = React.useState([]);

    React.useEffect(() => {
      async function fetchChapters() {
        const response = await fetch(`https://the-one-api.dev/v2/chapter`, {
          headers: { Authorization: `Bearer ${VITE_AUTH_TOKEN}` },
        });
        const chaptersResponse = await response.json();
        const { docs: chapters } = chaptersResponse
        setChapters(chapters);
      }

      fetchChapters();
    }, []);

function handleCompletedChapter(clickedChapter) {
  if (hasRead.includes(clickedChapter)) {
    return
  }
  console.log('Selected chapter', clickedChapter)
  const hasReadClone = [...hasRead] // 1. structured clone creates new objects different from 'chapters' array above (unlinked)
  hasReadClone.push(clickedChapter) // 2. add clicked chapter with same obj reference as 'chapters' above (linked)
  setHasRead(hasReadClone) // 3. setting state with new references to read chapters apart from latest clicked one (2.)
  console.log('read', hasReadClone)

  // const readIdsClone = [...readIds]
  // readIdsClone.push(clickedChapter._id);
  // setReadIds(readIdsClone)
}



    return (
      <>
        <h1>Book Tracker</h1>

        <div>{hasRead.map(chapter => chapter.chapterName).join(', ')}</div>
        <div className="container">
          {chapters.map((chapter, idx) => {
            return (
              <div className={`chapter-div${hasRead.includes(chapter) ? ' read' : ''}`} id={chapter.book.includes("1582") ? "fellowship" : chapter.book.includes("1583") ? "two-towers" : chapter.book.includes("1584") ? "return-of-the-king" : ""} key={idx}
              onClick={() => handleCompletedChapter(chapter)}>
                {chapter.chapterName}
                <img></img>
              </div>
            );
          })}
        </div>
      </>
    );
  }


export default MiddleEarth;
