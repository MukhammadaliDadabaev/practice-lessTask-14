import "./Avatar.css";

const Avatar = ({ name, url }) => {
  return <img className="avatarImg" width={170} alt={name} src={url} />;
};

export default Avatar;
