import { useState } from "react";
import Card from "../card";
import { TreeNode } from "@/lib/model";

const TreeOrg = ({data}:{data:TreeNode[]}) => {
    const [showNested, setShowNested] = useState(false);
    const handleClick = ()=>{
        setShowNested(!showNested)
        
    }
  return (
    <>
      {data.map((parent) => {
          return (
            <li key={parent.id}>
                <Card rol={parent.rol} name={parent.name} children={parent.children} funcion={handleClick}/>
                {!showNested && parent.children.length > 0 && <ul> {parent.children && <TreeOrg data={parent.children} />}</ul>}
                {!!showNested && ""}
            </li>    
        );
    })}
    </>
  );
};

export default TreeOrg;
