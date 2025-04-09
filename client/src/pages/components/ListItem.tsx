import { Link } from "react-router-dom";
import Button from "./Button";

interface ListItemProps {
  id: number;
  name: string;
  description: string;
  onClick: (id: number) => void;
  isActive: boolean;
}

const ListItem = (props: ListItemProps) => {
  return (
    <li className={props.isActive ? "list-item active" : "list-item"}>
      <Link to={`/${props.id}`}>
        <div className="list-item-actions">
          <div>
            ID: <b>{props.id}</b>
          </div>
          <Button
            onClick={props.onClick}
            id={props.id}
            disabled={props.isActive}
          >
            {props.isActive ? "Active" : "Set Active"}
          </Button>
        </div>
        <div>{props.name}</div>
        <div className="list-item__description">{props.description}</div>
      </Link>
    </li>
  );
};

export default ListItem;
