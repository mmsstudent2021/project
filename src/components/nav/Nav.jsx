import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { useLogoutMutation } from "../../store/service/endpoints/auth.endpoint";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const nav = useNavigate();
  const [logoutFun] = useLogoutMutation();
  const handleLogout = async () => {
    localStorage.removeItem("token");
    await logoutFun();
    nav("/");
    toast.success("Logout Successfully");
  };
  return (
    <div className="w-full h-20 px-52 flex mx-auto items-center border-b bg-white">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-xl font-semibold">MMS</h1>
        <div className="flex justify-center items-center gap-5">
          <button onClick={handleLogout}>Logout</button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Nav;
