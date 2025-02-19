import logo1 from "../assets/logo/logo1.jpg";

export default function Logo() {
    return (
       <div className="logo w-35 h-24 overflow-hidden">
           <a href="/"><img src={logo1} className="w-full h-full object-cover object-center" alt="logo"/></a>
       </div>
    );
}
