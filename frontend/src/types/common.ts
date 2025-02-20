export interface TreeNode {
  name: string;
  children?: TreeNode[];
  showAddButton?: boolean;
}

export type ExpandedState = { [key: string]: boolean };

export type FormData = {
  menuId: string;
  depth: string;
  parentData: string;
  name: string;
};
