import { useState, ChangeEvent, FormEvent } from "react";

type CreateFormData = {
  name: string;
  description: string;
  inviteLink: string;
  ownerId: string;
  rating: number;
  membercount: number;
};

type DeleteFormData = {
  id: string; // Use string since form inputs return strings even for numbers
};

function AdminPage() {
  // State to hold form data
  const [createFormData, setCreateFormData] = useState<CreateFormData>({
    name: "",
    description: "",
    inviteLink: "",
    ownerId: "",
    rating: 0,
    membercount: 0,
  });

  const [deleteFormData, setDeleteFormData] = useState<DeleteFormData>({
    id: "",
  });

  // Handle form input changes for create form
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCreateFormData({
      ...createFormData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form input changes for delete form
  const handleDeleteChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDeleteFormData({
      ...deleteFormData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission for creating a server
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); // Prevent form from refreshing the page

    try {
      const response = await fetch("/api/servers/addserver", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(createFormData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Handle form submission for deleting a server
  const deleteHandleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `/api/servers/deleteserver/${deleteFormData.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Deleted successfully:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-row">
      {/* Create Server Form */}
      <div className="w-full mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
        <h1 className="text-2xl font-bold mb-4 text-center">Create Server</h1>
        <form className="space-y-2" onSubmit={handleSubmit}>
          <label className="block">
            <span className="text-gray-700">Name:</span>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="text"
              name="name"
              value={createFormData.name}
              onChange={handleChange}
              placeholder="Enter the name"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Description:</span>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="text"
              name="description"
              value={createFormData.description}
              onChange={handleChange}
              placeholder="Enter the description"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Invite Link:</span>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="text"
              name="inviteLink"
              value={createFormData.inviteLink}
              onChange={handleChange}
              placeholder="Enter the invite link"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Owner ID:</span>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="text"
              name="ownerId"
              value={createFormData.ownerId}
              onChange={handleChange}
              placeholder="Enter the owner ID"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Rating:</span>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="number"
              name="rating"
              value={createFormData.rating}
              onChange={handleChange}
              placeholder="Enter the rating"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Membercount:</span>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="number"
              name="membercount"
              value={createFormData.membercount}
              onChange={handleChange}
              placeholder="Enter the member count"
            />
          </label>
          <button
            className="w-full bg-green-500 text-white py-2 rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            type="submit"
          >
            Create
          </button>
        </form>
      </div>

      {/* Delete Server Form */}
      <div className="w-full mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
        <h1 className="text-2xl font-bold mb-4 text-center">Delete Server</h1>
        <form className="space-y-2" onSubmit={deleteHandleSubmit}>
          <label className="block">
            <span className="text-gray-700">Server ID:</span>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="text"
              name="id"
              value={deleteFormData.id}
              onChange={handleDeleteChange}
              placeholder="Enter the server ID"
            />
          </label>

          <button
            className="w-full bg-red-400 text-white py-2 rounded-md shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-green-400"
            type="submit"
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminPage;
