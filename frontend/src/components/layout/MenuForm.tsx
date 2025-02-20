"use client";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { FormData } from "@/types";

export default function MenuForm() {
  const [formData, setFormData] = useState<FormData>({
    menuId: "56320ee9-6af6-11ed-a7ba-f220afe5e4a9",
    depth: "3",
    parentData: "Systems",
    name: "System Code",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 p-6 bg-white rounded-2xl shadow-lg max-w-md mx-auto"
    >
      <TextField
        label="Menu ID"
        name="menuId"
        value={formData.menuId}
        InputProps={{ readOnly: true }}
        className="bg-gray-100 rounded-lg"
        fullWidth
      />
      <TextField
        label="Depth"
        name="depth"
        value={formData.depth}
        InputProps={{ readOnly: true }}
        className="bg-gray-100 rounded-lg"
        fullWidth
      />
      <TextField
        label="Parent Data"
        name="parentData"
        value={formData.parentData}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="rounded-full text-lg font-semibold py-3"
        fullWidth
      >
        Save
      </Button>
    </form>
  );
}
