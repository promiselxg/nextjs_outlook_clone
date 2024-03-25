"use client";
import { useAccount } from "@/context/AuthContext";
import { ID, account } from "@/lib/appwrite";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AiOutlineGithub } from "react-icons/ai";

const LoginPage = () => {
  const { user } = useAccount();
  const router = useRouter();

  // const login = async (email, password) => {
  //   try {
  //     const session = await account.createEmailPasswordSession(email, password);
  //     setLoggedInUser(await account.get());
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  // const register = async () => {
  //   await account.create(ID.unique(), email, password, name);
  //   login(email, password);
  // };
  const loginWithGithub = async (e) => {
    e.preventDefault();
    try {
      const response = await account.createOAuth2Session(
        "github",
        "https://outlookapp-clone.vercel.app/mail", //success
        "https://outlookapp-clone.vercel.app" //failure
      );
      console.log(response);
    } catch (error) {
      throw error;
    }
  };

  const loginWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await account.createOAuth2Session(
        "google",
        "https://outlookapp-clone.vercel.app/mail", //success
        "https://outlookapp-clone.vercel.app/" //failure
      );
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (user) {
      router.push("/mail");
    }
  }, [router, user]);

  return (
    <div className="w-full bg-[#141414] flex h-screen items-center justify-center flex-col ">
      <div className="w-1/2 mx-auto flex justify-center flex-col items-center gap-y-5">
        <div className="flex h-fit bg-[#0a0a0a] w-1/2">
          <button
            className="btn w-full justify-center p-5 rounded-[10px] font-bold text-white bg-[#6e5494] border-none flex items-center gap-2"
            onClick={loginWithGithub}
          >
            <AiOutlineGithub className="text-[24px]" />
            Login with Github
          </button>
        </div>
        <div className="flex h-fit bg-[#0a0a0a] w-1/2">
          <button
            className="btn w-full justify-center p-5 rounded-[10px] font-bold text-white bg-[green] border-none flex items-center gap-2"
            onClick={loginWithGoogle}
          >
            <AiOutlineGithub className="text-[24px]" />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
