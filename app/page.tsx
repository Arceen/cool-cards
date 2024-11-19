import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import LoginForm from "@/components/loginForm/LoginForm";
import Sources from "@/components/sources/Sources";
import Topbar from "@/components/topbar/Topbar";

export default function Login() {
  return (
    <div className="min-h-screen h-screen w-full">
      <Topbar />
      <Header />
      <div className="flex justify-between items-center container gap-[120px]">
        <Sources/> 
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
}
