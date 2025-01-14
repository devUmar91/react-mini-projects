import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

type Props = {
  onCancel?: () => void; // Optional cancel handler
};

const NoteForm = ({ onCancel }: Props) => {
  const [formData, setFormData] = useState({
    title: "",
    tags: "",
    body: "",
  });

  const predefinedTags = ["Work", "Personal", "Urgent", "Ideas", "Tasks"];

  const Navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,[name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Create a Note</h2>

        <div className="flex flex-wrap gap-4">
          <div className="flex-1">
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-2 outline-none block w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter title"
              required
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="tags"
              className="block text-lg font-medium text-gray-700"
            >
              Tags
            </label>
            <select
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="mt-2 outline-none block w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="" disabled>
                Select a tag
              </option>
              {predefinedTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Body */}
        <div>
          <label
            htmlFor="body"
            className="block text-lg font-medium text-gray-700"
          >
            Body
          </label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            rows={8}
            className="mt-2 block outline-none w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Write your note here..."
            required
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => Navigate(-1)}
            className="bg-gray-500 text-white py-3 px-6 rounded-lg hover:bg-gray-600 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
};
export default NoteForm;