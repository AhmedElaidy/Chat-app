import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useGetConversations from "../../hooks/useGetConversations";
import useShownConversations from "../../zustand/useShownConversations";

export default function SearchInput() {
  const [search, setSearch] = useState("");
  const { allConversations } = useGetConversations();
  const { setShownConversations } = useShownConversations();

  useEffect(() => {
    if (search.trim()) {
      const filteredConversations = allConversations.filter((conversation) => {
        return conversation?.fullName
          .toLowerCase()
          .includes(search.toLocaleLowerCase());
      });
      setShownConversations(filteredConversations);
    } else {
      setShownConversations(allConversations);
    }
  }, [search]);
  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </div>
  );
}
