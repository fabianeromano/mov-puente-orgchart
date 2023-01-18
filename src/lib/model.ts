export interface TreeNode {
    id: number,
    rol: string,
    name: string,
    parentId: number,
    children: TreeNode[]
}