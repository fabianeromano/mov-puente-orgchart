export function listToTree(arr: Record<string, any>[] = [], childrenSelector: string = 'children', parentIdSelector: string = 'parentId', idSelector: string = 'id') {
    let map: Record<string, any> = {}, node, res = [], i;
    for (i = 0; i < arr.length; i += 1) {
        map[arr[i][idSelector]] = i;
        arr[i][childrenSelector] = [];
    };
    for (i = 0; i < arr.length; i += 1) {
        node = arr[i];
        if (node[parentIdSelector] !== null && node[parentIdSelector] != 0) {
            arr[map[node[parentIdSelector]]][childrenSelector].push(node);
        }
        else {
            res.push(node);
        };
    };
    return res;
};