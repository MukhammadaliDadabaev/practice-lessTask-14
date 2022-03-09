import Card from "./Card"

const CardGroup = ({users}) => {
  return users.map((user) => {
		return <Card user={user} />;
	});
}
export default CardGroup;
