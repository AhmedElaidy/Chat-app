import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

export default function LogoutButton() {
  const { isLoading, logout } = useLogout();
  return (
    <div className="mt-auto">
      {!isLoading ? (
        <BiLogOut
          className="w-6 h-6 text-white cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner text-white"></span>
      )}
    </div>
  );
}
