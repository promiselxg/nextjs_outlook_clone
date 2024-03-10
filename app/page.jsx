"use client";
import { ID, account } from "@/lib/appwrite";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";

const LoginPage = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const login = async (email, password) => {
    try {
      const session = await account.createEmailPasswordSession(email, password);
      setLoggedInUser(await account.get());
    } catch (error) {
      alert(error);
    }
  };

  const register = async () => {
    await account.create(ID.unique(), email, password, name);
    login(email, password);
  };

  const logout = async () => {
    await account.deleteSession("current");
    setLoggedInUser(null);
  };
  const loginWithGithub = async (e) => {
    e.preventDefault();
    try {
      await account.createOAuth2Session(
        "github",
        "http://localhost:3000/mail", //success
        "http://localhost:3000" //failure
      );
    } catch (error) {
      throw error;
    }
  };

  if (loggedInUser) {
    router.push("/mail");
  }

  return (
    <div className="w-full bg-[#141414] flex h-screen items-center justify-center">
      <div className="flex h-fit bg-[#0a0a0a] w-2/6">
        <button
          className="btn w-full justify-center p-5 rounded-[10px] font-bold text-white bg-[#6e5494] border-none flex items-center gap-2"
          onClick={loginWithGithub}
        >
          <AiOutlineGithub className="text-[24px]" />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
