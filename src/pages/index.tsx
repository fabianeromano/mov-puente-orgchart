import { useEffect, useState } from "react";

import TreeOrg from "@/components/tree-org";
import apiOrg from "@/lib/api-org";
import { listToTree } from "@/lib/listToTree";
import { TreeNode } from "@/lib/model";

const getTreeData = async () => {
  return await apiOrg.list()
}

export default function Home() {
  const [datos, setDatos] = useState<TreeNode | null>(null);

  useEffect(() => {
    let getData = true;
    getTreeData().then(res => {
      if (getData) {
        const parsedTree = listToTree(res);
        setDatos(parsedTree as unknown as TreeNode)
      }
    })
    return () => {
      getData = false;
    }
  }, [])

  return (
    <div className="genealogy-body genealogy-scroll">
      <div className="genealogy-tree">
        <ul>
          {datos && <TreeOrg data={datos} />}
        </ul>
      </div>
    </div>
  )
}