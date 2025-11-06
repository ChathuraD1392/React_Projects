import "./Accordion.css";
import Container from "./Container";
import data from "./data";

const Accordiaon = () => {
  return (
    <>
      <div className="container">
        <h2 className="topic">React Learning</h2>
        {data.map((data) => (
          <Container
            id={data.id}
            question={data.question}
            answer={data.answer}
          />
        ))}
      </div>
    </>
  );
};

export default Accordiaon;
