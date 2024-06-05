import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

export default function Sidebar() {
  return (
    <div className="border-b md:border-r md:border-b-0 border-slate-500 p-4 flex flex-col gap-3">
      <SearchInput />
      <Conversations />
      <LogoutButton className="hidden md:block" />
    </div>
  );
}
