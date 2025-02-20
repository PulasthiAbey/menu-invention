"use client";
import { TreeMenu } from "@/components/ui";
import { Widgets, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import {
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

export default function Menus() {
  const [selectedMenu, setSelectedMenu] = useState("system-management");

  const handleExpandAll = () => {
    console.log("Expand all clicked");
  };

  const handleCollapseAll = () => {
    console.log("Collapse all clicked");
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
        <div>
          <div className="flex space-x-4 px-4">
            <Button
              variant="contained"
              className="bg-blue_gray_800 hover:bg-white hover:text-black text-white rounded-3xl min-w-[140px] py-2"
              onClick={handleExpandAll}
            >
              Expand All
            </Button>
            <Button
              variant="outlined"
              className="hover:bg-blue_gray_800 hover:text-white text-black rounded-3xl border border-blue_gray_800 min-w-[140px] py-2"
              onClick={handleCollapseAll}
            >
              Collapse All
            </Button>
          </div>

          <div className="mt-5">
            <TreeMenu />
          </div>
        </div>
        <div>
          <></>
        </div>
      </div>
    </div>
  );
}
