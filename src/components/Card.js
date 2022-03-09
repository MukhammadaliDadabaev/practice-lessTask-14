import Avatar from "./Avatar";
import UserInfo from "./UserInfo";


const Card = ({user}) => {

	const name = `${user.first_name} ${user.last_name}`;

  return (
    <div>
      <div key={user.id} id={`user-${user.id}`} className="card">
       <Avatar name={name} url={user.avatar} />
       <UserInfo name={name} email={user.email} />
      </div>
    </div>
  );
};

export default Card;
