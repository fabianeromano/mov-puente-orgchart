import TreeOrg from "@/components/tree-org";
import data from "../data/data.json"


export default function Home() {
  const datos:any= data

  return (
    <div className="genealogy-body genealogy-scroll">
        <div className="genealogy-tree">
            <ul>
              <TreeOrg data={datos}/>
            </ul>
        </div>
    </div>
  )
}
