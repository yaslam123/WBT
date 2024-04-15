import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="mt-auto bg-[#274A80] text-white">
            <div className="container">
                <div className="grid gap-y-10 gap-x-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-[100px]">
                    <div className="relative">
                        <img src="/Logo Galmudug.png" alt="plurk" className="footer_logo" />
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3 font-bold">
                            <li className="mb-3 text-lg font-extrabold text-white dark:text-white">Quick Menu</li>
                            <li>
                                <Link href="/" className="inline-block transition hover:scale-110 hover:text-primary">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-us" className="inline-block transition hover:scale-110 hover:text-primary">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/News" className="inline-block transition hover:scale-110 hover:text-primary">
                                    News & Events
                                </Link>
                            </li>
                            <li>
                                <Link href="/orgStracture" className="inline-block transition hover:scale-110 hover:text-primary">
                                    Org Structure
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="inline-block transition hover:scale-110 hover:text-primary">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/Resources" className="inline-block transition hover:scale-110 hover:text-primary">
                                    Resources
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul className="flex flex-col gap-3 font-bold">
                            <li className="mb-3 text-lg font-extrabold text-white dark:text-white">Legal</li>
                            <li>
                                <Link href="/terms-conditions" className="inline-block transition hover:scale-110 hover:text-primary">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="inline-block transition hover:scale-110 hover:text-primary">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="inline-block transition hover:scale-110 hover:text-primary">
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3 font-bold">
                            <li className="mb-3 text-lg font-extrabold text-white dark:text-white">Information</li>

                            <li className="text-[24px] leading-normal">Dhusamareeb, Galmudug</li>
                            <li>
                                <a href="info@mohadm.gm.so" className="inline-block transition hover:scale-110 hover:text-primary">
                                    info@mohadm.gm.so
                                </a>
                            </li>
                            <li>
                                <a href="tel:+(617) 254-2333" className="inline-block transition hover:scale-110 hover:text-primary">
                                    +(617) 254-2333
                                </a>
                            </li>
                        </ul>
                        <ul className="mt-[2rem] flex items-center gap-8">
                            <li>
                                <Link href="https://www.facebook.com/WTKHBGalmudug">
                                    <FaFacebookF className="text-[24px] transition hover:scale-110 hover:text-primary" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.facebook.com/WTKHBGalmudug">
                                    <FaInstagram className="text-[24px] transition hover:scale-110 hover:text-primary" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://twitter.com/MoEWRGalmudug?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3AMoEWRGalmudug%7Ctwcon%5Es2">
                                    <FaXTwitter className="text-[24px] transition hover:scale-110 hover:text-primary" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-[#2e5796] py-5">
                <div className="container">
                    <div className="items-center justify-between text-center font-bold dark:text-white md:flex">
                        <div>
                            <span className="text-[lightgray]">{new Date().getFullYear() + ' '}©</span>
                            <Link href="/" className="text-white transition hover:text-primary">
                                Ministry of Energy and Water Resources - Galmudug
                            </Link>
                        </div>
                        <div>
                            <span className="text-[lightgray]">Need help? Visit the </span>
                            <Link href="/contact-us" className="text-white transition hover:text-primary">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
