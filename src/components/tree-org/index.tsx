import { useState } from "react";

import { TreeNode } from "@/lib/model";
import Card from "../card";

interface TreeOrgProps {
  data: TreeNode[] | TreeNode
}

const TreeOrg = ({ data }: TreeOrgProps) => {
  const dataArray = Array.isArray(data) ? data : [data];
  const [showNested, setShowNested] = useState(false);
  const handleClick = () => {
    setShowNested(!showNested)
  }

  return (
    <>
      {dataArray.map((parent) => {
        return (
          <li key={parent.id}>
            <Card {...parent} onToggle={handleClick} />
            {!showNested && parent.children.length > 0 && <ul> {parent.children && <TreeOrg data={parent.children} />}</ul>}
            {!!showNested && ""}
          </li>
        );
      })}
    </>
  );
};

export default TreeOrg;
