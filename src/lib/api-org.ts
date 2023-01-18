import axios from "axios";
import Papa from "papaparse";

import { TreeNode } from "@/lib/model";

export default{
    list: async (): Promise<TreeNode[]> => {
    return axios.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vQOlpVb0YTz0GV3LHdiAg49T1Pz4umi5tGb64sJ0aNH8_If16mohnOAUzOmN55tbvXM6xBo1TvcbPqH/pub?output=csv",
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