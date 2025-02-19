import { useState } from "react";

interface TreeNode {
  name: string;
  children?: TreeNode[];
}

const sampleMenu: TreeNode[] = [
  {
    name: "System Management",
    children: [
      {
        name: "Systems",
        children: [
          { name: "System Code" },
          { name: "Properties" },
          { name: "Menus" },
        ],
      },
    ],
  },
];

export default function TreeMenu() {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (name: string) => {
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const renderTree = (nodes: TreeNode[]) =>
    nodes.map((node) => (
      <div key={node.name} className="pl-4">
        <div
          className="cursor-pointer"
          onClick={() => node.children && toggleExpand(node.name)}
        >
          {node.children ? (expanded[node.name] ? "📂" : "📁") : "📄"}{" "}
          {node.name}
        </div>
        {expanded[node.name] && node.children && (
          <div>{renderTree(node.children)}</div>
        )}
      </div>
    ));

  return <div className="p-4">{renderTree(sampleMenu)}</div>;
}
