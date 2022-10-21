import "../CSS/Skills.css";
import Tag from "./Tag";
function Skills() {
  return (
    <div>
      <div className="mainSkills" id="target3">
        <h1 className="thick">My Skills</h1>
        <div className="technical">
          <h3>Technical Skills</h3>
          <Tag skill="Welcoming"></Tag>
          <Tag></Tag>
          <Tag></Tag>
          <Tag></Tag>
          <Tag></Tag>
          <Tag></Tag>
          <Tag></Tag>
          <Tag></Tag>
          <Tag></Tag>
        </div>
        <div className="soft">
          <h3>Soft Skills:</h3>
          <Tag></Tag>
          <Tag></Tag>
          <Tag></Tag>
          <Tag></Tag>
          <Tag></Tag>
          <Tag></Tag>
          <Tag></Tag>
          <Tag></Tag>
          <Tag></Tag>
          <Tag></Tag>
          <Tag></Tag>
        </div>
      </div>
    </div>
  );
}

export default Skills;
