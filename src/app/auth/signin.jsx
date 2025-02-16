import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#333]">
      <SignIn appearance={{ baseTheme: "dark" }} />
    </div>
  );
};

export default SignInPage;
