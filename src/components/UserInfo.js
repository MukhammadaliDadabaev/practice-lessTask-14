import "./UserInfo.css";

const UserInfo = ({ name, email }) => {

const mailto = `mailto:${email}`;

  return (
    <div className="card-info">
      <h2>{name}</h2>
      <h3>
        <a href={mailto}>{name}</a>
      </h3>
    </div>
  );
};
export default UserInfo;
