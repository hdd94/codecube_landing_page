import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-200 py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col justify-between items-center">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <Link href="/" className="text-xl font-bold">
                            <img src="/codecube-logo.png" alt="Logo" className="h-10 w-auto"/>
                        </Link>
                    </div>
                    <div className="flex space-x-6 pt-2">
                        <a href="https://github.com" className="hover:text-blue-600">
                            <Github className="w-6 h-6"/>
                        </a>
                        <a href="https://linkedin.com" className="hover:text-blue-600">
                            <Linkedin className="w-6 h-6"/>
                        </a>
                    </div>
                </div>
                <div className="text-center mt-8 text-gray-600">
                    © 2025 CodeCube. All rights reserved.
                </div>
            </div>
        </footer>
    )
}