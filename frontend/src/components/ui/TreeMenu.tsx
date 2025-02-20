import { ExpandedState, TreeNode } from "@/types";
import { ExpandMore, AddCircle } from "@mui/icons-material";

interface TreeMenuProps {
  nodes: TreeNode[];
  expanded: { [key: string]: boolean };
  setExpanded: (value: { [key: string]: boolean }) => void;
}

export default function TreeMenu({
  nodes,
  expanded,
  setExpanded,
}: TreeMenuProps) {
  const toggleExpand = (name: string) => {
    setExpanded((prev) => {
      const newState: ExpandedState = { ...prev, [name]: !prev[name] };
      return newState;
    });
  };

  const renderTree = (nodes: TreeNode[], level = 0) =>
    nodes.map((node) => (
      <div key={node.name} className="relative pl-6">
        <div className="flex items-center space-x-2">
          {node.children ? (
            <span
              className="cursor-pointer"
              onClick={() => toggleExpand(node.name)}
            >
              <ExpandMore
                fontSize="small"
                className={expanded[node.name] ? "rotate-180" : ""}
              />
            </span>
          ) : (
            <span className="inline-block w-3" />
          )}

          <span>{node.name}</span>

          {node.showAddButton && (
            <AddCircle
              fontSize="small"
              className="text-blue-600 cursor-pointer"
            />
          )}
        </div>

        {expanded[node.name] && node.children && (
          <div className="pl-4">{renderTree(node.children, level + 1)}</div>
        )}
      </div>
    ));

  return <div className="p-4">{renderTree(nodes)}</div>;
}
