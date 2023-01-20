import axios from "axios";
import Papa from "papaparse";

import { TreeNode } from "@/lib/model";

export default{
    list: async (): Promise<TreeNode[]> => {
    return axios.get(process.env.NEXT_PUBLIC_CSV_FILE || "",
    {
        responseType: "blob"
    }
    ).then(response =>{
        return new Promise<TreeNode[]>((resolve, reject) =>{
            Papa.parse(response.data,{
                header:true,
                complete: results=> resolve(results.data as TreeNode[]),
                error: (error)=>reject(error.message)
                })
        })
    })
    }
}