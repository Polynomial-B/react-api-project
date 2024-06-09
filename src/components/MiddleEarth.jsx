import React from "react";
import "../App.css";
import lordOfTheRings from "../assets/bookId";

function MiddleEarth() {
  const [hasRead, setHasRead] = React.useState([]);
  const [chapter, setChapter] = React.useState([]);



    React.useEffect(() => {
      async function fetchChapter() {
        const response = await fetch(`https://the-one-api.dev/v2/chapter`, {
          headers: { Authorization: "Bearer cnvIvbglprwk70DAWtdb" },
        });
        const chapter = await response.json();
        setChapter(chapter.docs);
      }

      fetchChapter();
    }, []);

function handleCompletedChapter(e) {
  console.log(e.target)
  const newChapterRead = structuredClone(hasRead)
  newChapterRead.push(e)
  setHasRead(newChapterRead)
  // console.log(hasRead)

}



    return (
      <>
        <h1>Book Tracker</h1>
        <div className="container"
        onClick={(e) => handleCompletedChapter(e)}
        >
          {chapter.map(ch => {
            return (
              <div className="chapter-div" id={ch.book.includes("1582") ? "fellowship" : ch.book.includes("1583") ? "two-towers" : ch.book.includes("1584") ? "return-of-the-king" : ""} key={ch._id}>
                {ch.chapterName}
                <img></img>
              </div>
            );
          })}
        </div>
      </>
    );
  }


export default MiddleEarth;
