import { useState } from "react";
import { ExpandMore, ExpandLess, AddCircle } from "@mui/icons-material";

interface TreeNode {
  name: string;
  children?: TreeNode[];
  showAddButton?: boolean; // Option to show "+" button
}

const sampleMenu: TreeNode[] = [
  {
    name: "System Management",
    children: [
      {
        name: "Systems",
        children: [
          {
            name: "System Code",
            children: [{ name: "Code Registration" }],
            showAddButton: true,
          },
          { name: "Code Registration - 2" },
          { name: "Properties" },
          {
            name: "Menus",
            children: [{ name: "Menu Registration" }],
          },
          {
            name: "API List",
            children: [
              { name: "API Registration" },
              { name: "API Edit" },
            ],
          },
        ],
      },
      {
        name: "Users & Groups",
        children: [
          {
            name: "Users",
            children: [{ name: "User Account Registration" }],
          },
          {
            name: "Groups",
            children: [{ name: "User Group Registration" }],
          },
        ],
      },
      {
        name: "사용자승인",
        children: [{ name: "사용자승인 상세" }],
      },
    ],
  },
];

export default function TreeMenu() {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (name: string) => {
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const renderTree = (nodes: TreeNode[], level = 0) =>
    nodes.map((node) => (
      <div key={node.name} className={`pl-${level * 4} flex flex-col`}>
        {/* Row for Icon + Text */}
        <div className="flex items-center space-x-2">
          {/* Expand/Collapse Button Placeholder (Fixes Alignment) */}
          <span className="w-4 flex justify-center">
            {node.children ? (
              <span
                className="cursor-pointer"
                onClick={() => toggleExpand(node.name)}
              >
                {expanded[node.name] ? (
                  <ExpandLess fontSize="small" />
                ) : (
                  <ExpandMore fontSize="small" />
                )}
              </span>
            ) : null}
          </span>

          {/* Node Name */}
          <span>{node.name}</span>

          {/* Add Button (Optional) */}
          {node.showAddButton && (
            <span className="text-blue-600 cursor-pointer">
              <AddCircle fontSize="small" />
            </span>
          )}
        </div>

        {/* Nested Children (Always inside the same section) */}
        {expanded[node.name] && node.children && (
          <div className="pl-6">{renderTree(node.children, level + 1)}</div>
        )}
      </div>
    ));

  return <div className="p-4">{renderTree(sampleMenu)}</div>;
}
