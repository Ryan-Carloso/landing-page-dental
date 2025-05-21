import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 px-4 md:px-6">
        <div className="flex items-center gap-2 mt-4">
          <span className="font-medium text-sky-500">White Shining</span>
          <span className="font-medium">© {new Date().getFullYear()}</span>
        </div>
        <nav className="flex flex-wrap gap-4 sm:gap-6 items-center justify-center">
          <Link href="/privacidade" className="text-sm hover:underline underline-offset-4">
            Política de Privacidade
          </Link>
          <Link href="/termos" className="text-sm hover:underline underline-offset-4">
            Termos de Uso
          </Link>

          <a 
            href="https://www.instagram.com/white_shining.pt/profilecard/?igsh=MTRzOXVjeWo3d3ZnNA%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex text-gray-800 items-center gap-2 text-xs md:text-sm text-muted-foreground hover:text-foreground"
          >
            <Instagram size={16} /> White Shining
          </a>
        </nav>
        
        <div className="w-full flex justify-center mt-2 mb-2">
          <a 
            href="https://www.linkedin.com/in/ryancarlos/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex mb-6 items-center gap-1 text-[10px] text-gray-500 hover:text-gray-700"
          >
            <Linkedin size={10} /> <span>Want a website like this? Contact me on LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}