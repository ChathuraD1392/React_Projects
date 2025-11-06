import { useState } from "react";

interface Props {
  id: number;
  question: string;
  answer: string;
}

const Container = ({ id, question, answer }: Props) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const handleClick = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
  };
  return (
    <>
      <div className="accordion" key={id}>
        <div className="question" onClick={() => handleClick(id)}>
          <h4>{selectedId === id && selectedId ? "-" : "+"}</h4>
          <h4>{question}</h4>
        </div>
        {selectedId === id ? (
          <div className="answer">
            <hr />
            <p>{answer}</p>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Container;
