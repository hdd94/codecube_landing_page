import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-white font-bold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-white">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-gray-300 hover:text-white">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-white">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/blog" className="text-gray-300 hover:text-white">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/docs" className="text-gray-300 hover:text-white">
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link href="/help" className="text-gray-300 hover:text-white">
                                    Help Center
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy" className="text-gray-300 hover:text-white">
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-gray-300 hover:text-white">
                                    Terms
                                </Link>
                            </li>
                            <li>
                                <Link href="/security" className="text-gray-300 hover:text-white">
                                    Security
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-4">Social</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-gray-300 hover:text-white">
                                    Twitter
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 hover:text-white">
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 hover:text-white">
                                    Facebook
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8">
                    <p className="text-center text-gray-400">
                        © {new Date().getFullYear()} Your Company. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

