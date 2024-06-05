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
    <div className="gap-2 relative">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full w-full bg-white"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <IoSearchSharp className="w-6 h-6 outline-none bg-white text-sky-500 absolute right-4 top-3" />
    </div>
  );
}
