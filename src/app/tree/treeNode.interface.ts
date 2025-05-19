export interface TreeNode {
  id: number;
  title: string;
  children: TreeNode[];
  is_deleted: boolean;
  isExpanded?: boolean;
}
