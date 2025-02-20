export interface TreeNode {
  name: string;
  children?: TreeNode[];
  showAddButton?: boolean;
}

export type ExpandedState = { [key: string]: boolean };
