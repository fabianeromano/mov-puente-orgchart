import apiOrg from "@/components/api-org";
import TreeOrg from "@/components/tree-org";
import { TreeNode } from "@/lib/model";
import data from "../data/data.json"


export default function Home() {

const datosorg = async ()=>{
    const organigrama = await apiOrg.list()    
    return organigrama
  }

const dat = datosorg();
console.log(dat);


const datos:any= data;

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

