import { useState } from "react";
import "./Accordion.css";
import data from "./data";

const Accordian2 = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isMultipleEnabled, setMultipleEnabled] = useState(false);
  const [multipleIds, setMultipleIds] = useState<number[]>([]);
  const handleSingleSelection = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
  };
  const handleMultipleSelection = (id: number) => {
    let copyMultiple: number[] = [...multipleIds];
    const indexOfCurrentId = copyMultiple.indexOf(id);
    if (indexOfCurrentId === -1) {
      copyMultiple.push(id);
    } else {
      copyMultiple.splice(indexOfCurrentId, 1);
    }
    setMultipleIds(copyMultiple);
  };

  const handleEnableClick = () => {
    setMultipleEnabled(!isMultipleEnabled);
  };

  console.log(multipleIds);
  return (
    <>
      <div className="container">
        <h2 className="topic">React Learning</h2>
        <button className="button" onClick={handleEnableClick}>
          Enable Multiple
        </button>
        {data.map((data) => (
          <div className="accordion" key={data.id}>
            <div
              className="question"
              onClick={
                !isMultipleEnabled
                  ? () => handleSingleSelection(data.id)
                  : () => handleMultipleSelection(data.id)
              }
            >
              <h4>{selectedId === data.id && selectedId ? "-" : "+"}</h4>
              <h4>{data.question}</h4>
            </div>
            {!isMultipleEnabled
              ? selectedId === data.id && (
                  <div className="answer">
                    <hr />
                    <p>{data.answer}</p>
                  </div>
                )
              : multipleIds.indexOf(data.id) !== -1 && (
                  <div className="answer">
                    <hr />
                    <p>{data.answer}</p>
                  </div>
                )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordian2;
