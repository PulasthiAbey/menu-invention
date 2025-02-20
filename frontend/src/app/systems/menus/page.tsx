"use client";

import { useState } from "react";
import { Widgets, ExpandMore } from "@mui/icons-material";
import {
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { TreeMenu } from "@/components/ui";
import { ExpandedState, TreeNode } from "@/types";
import { MenuForm } from "@/components/layout";

const sampleMenu = [
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
          { name: "Menus", children: [{ name: "Menu Registration" }] },
          {
            name: "API List",
            children: [{ name: "API Registration" }, { name: "API Edit" }],
          },
        ],
      },
      {
        name: "Users & Groups",
        children: [
          { name: "Users", children: [{ name: "User Account Registration" }] },
          { name: "Groups", children: [{ name: "User Group Registration" }] },
        ],
      },
      { name: "사용자승인", children: [{ name: "사용자승인 상세" }] },
    ],
  },
];

export default function Menus() {
  const [selectedMenu, setSelectedMenu] = useState("system-management");
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const expandAllNodes = (nodes: TreeNode[]): { [key: string]: boolean } => {
    const newExpanded: { [key: string]: boolean } = {};

    const traverse = (items: TreeNode[]) => {
      items.forEach((item) => {
        newExpanded[item.name] = true;
        if (item.children) traverse(item.children);
      });
    };

    traverse(nodes);
    return newExpanded;
  };

  const handleExpandAll = () => {
    setExpanded(expandAllNodes(sampleMenu));
  };

  const handleCollapseAll = () => {
    setExpanded({});
  };

  return (
    <div className="px-8">
      <div className="flex items-center space-x-4 pb-5">
        <div className="w-16 h-16 flex items-center justify-center bg-blue_prime_600 rounded-full text-white shadow-lg">
          <Widgets sx={{ fontSize: 30 }} />
        </div>
        <h1 className="text-2xl font-bold">Menus</h1>
      </div>

      <FormControl
        fullWidth
        variant="outlined"
        className="mb-4 p-4 py-6 mt-4 w-[45%] max-w-md"
      >
        <InputLabel>Menu</InputLabel>
        <Select
          value={selectedMenu}
          onChange={(e) => setSelectedMenu(e.target.value)}
          IconComponent={ExpandMore}
          className="bg-gray-100 rounded-2xl"
          sx={{ "& fieldset": { border: "none" } }}
        >
          <MenuItem value="system-management">System Management</MenuItem>
          <MenuItem value="user-settings">User Settings</MenuItem>
          <MenuItem value="reports">Reports</MenuItem>
        </Select>
      </FormControl>

      <div className="grid grid-cols-2 gap-6">
        {/* Left Column: Button Controls and Tree View */}
        <div>
          <div className="flex space-x-4 px-4">
            <Button
              variant="contained"
              className="bg-blue_gray_800 text-white rounded-3xl hover:bg-white hover:text-black"
              onClick={handleExpandAll}
            >
              Expand All
            </Button>
            <Button
              variant="outlined"
              className="border border-blue_gray_800 rounded-3xl text-blue_gray_900 hover:bg-blue_gray_800 hover:text-white"
              onClick={handleCollapseAll}
            >
              Collapse All
            </Button>
          </div>

          <div className="mt-5">
            <TreeMenu
              nodes={sampleMenu}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          </div>
        </div>

        {/* Right Column: Menu Form */}
        <div>
          <MenuForm />
        </div>
      </div>
    </div>
  );
}
