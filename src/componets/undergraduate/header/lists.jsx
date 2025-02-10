import React from "react";
import Link from "./link";
function List(props) {
  return (
    <li className={props.listClassName}>
      <Link className={props.linkClassName} url={props.url} text={props.text} />
    </li>
  );
}

export default List;
