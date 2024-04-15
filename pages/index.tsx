import Testimonial from '../components/Testimonial';
import { useState } from 'react';
import CounterComponent from '../components/CounterComponent';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import LogoSlider from '../components/LogoSlider';
import BlogSlider from '../components/BlogSlider';
import { FiBook } from 'react-icons/fi';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import { LuLeaf } from 'react-icons/lu';
import Head from 'next/head';

const Index = (props: any) => {
    const [activeTab, setActiveTab] = useState<string>('all');
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div className="overflow-x-hidden">
            <Head>
                <title>WBT - Wasaaradda Tamarta & Kheyraadka Biyaha Galmudug </title>
                <meta name="WBT" content="WBT Galmudug" />
            </Head>
            <section className="hotel-resort-banner relative">
                <div className="h-[750px] lg:h-[828px]">
                    <img src="/landing.jpg" className="h-full w-full object-cover" alt="" />
                </div>
                <div
                    className="absolute inset-0 z-[1] opacity-70"
                    style={{ background: 'linear-gradient(90deg, rgba(8, 17, 31, 0.95) 57.29%, rgba(8, 17, 31, 0.4) 100%)' }}
                ></div>
                <div className="absolute inset-x-0 top-1/3 z-[1] -translate-y-1/2 text-white sm:top-1/2">
                    <div className="container">
                        <div className="max-w-[765px] text-center ltr:md:text-left rtl:md:text-right">
                            <h2 className="text-4xl font-black !text-white sm:text-5xl md:text-[70px] md:leading-[88px]">
                                Wasaaradda Tamarta & Kheyraadka Biyaha <br /> ee Galmudug{' '}
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-white/[55%] to-transparent py-14 dark:bg-none">
                <div className="container">
                    <div className="flex flex-col items-center gap-5 lg:flex-row" data-aos="fade-up" data-aos-duration="1000">
                        <div className="grid flex-1 grid-cols-1 items-center gap-10 md:grid-cols-2">
                            <div className="space-y-4 text-center ltr:md:text-left rtl:md:text-right">
                                <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right xl:w-[95%]">
                                    <h4 className="">About The Ministry</h4>
                                    <p className="mt-5 ">
                                        The Ministry of Energy and Water Resources of Galmudg State has the mandate to oversee the State's Energy sector, set
                                        policies, and strategic frameworks, approve tariffs for the electricity services, and build the technical capacity of
                                        electricity service providers in Galmudug in consultation with stakeholders through open and transparent processes.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img src="/Logo Galmudug.png" className="mx-auto" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white py-14 dark:bg-gray-dark lg:py-[100px]">
                <h3 id="mp" className="mb-10 text-center text-4xl font-extrabold text-black dark:text-white lg:mb-14">
                    The Ministry's Partners
                </h3>
                <LogoSlider />
            </section>
            <section id="services" className="bg-gradient-to-b from-white/[55%] to-transparent py-14 dark:bg-none">
                <div className="container">
                    <div className="heading text-left">
                        <h4 className="text-center">Services</h4>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="group rounded-3xl border-2 border-[#f8f8f8] bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                                style={{
                                    boxShadow: '-20px 30px 70px rgba(219, 222, 225, 0.4)',
                                }}
                            >
                                <div
                                    className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition group-hover:bg-black"
                                    style={{
                                        boxShadow: '0px 15px 30px rgba(39, 74, 128, 0.4)',
                                    }}
                                >
                                    <FiBook style={{ color: 'white', fontSize: '26px' }} />
                                </div>
                                <Link href="/#" className="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black">
                                    Policy Development
                                </Link>
                                <p className="mb-10 text-lg font-semibold transition line-clamp-3 dark:group-hover:text-black">
                                    Policy Development focuses on crafting and refining sustainable policies for energy and water resources to ensure equitable
                                    access and promote national growth, guided by stakeholder engagement and global best practices.
                                </p>
                                <Link
                                    href="/#"
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark"
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-black transition group-hover:text-white dark:text-white"
                                    >
                                        <path
                                            d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="group rounded-3xl border-2 border-[#f8f8f8] bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                                style={{
                                    boxShadow: '-20px 30px 70px rgba(219, 222, 225, 0.4)',
                                }}
                            >
                                <div
                                    className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition group-hover:bg-black"
                                    style={{
                                        boxShadow: '0px 15px 30px rgba(39, 74, 128, 0.4)',
                                    }}
                                >
                                    <HiOutlineSquares2X2 style={{ color: 'white', fontSize: '26px' }} />
                                </div>
                                <Link href="/#" className="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black">
                                    Institutional Building
                                </Link>
                                <p className="mb-10 text-lg font-semibold transition line-clamp-3 dark:group-hover:text-black">
                                    Institutional Building strengthens the capacity of energy and water sector organizations through training, technical
                                    support, and resources, ensuring efficient and effective management and conservation efforts.
                                </p>
                                <Link
                                    href="/#"
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark"
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-black transition group-hover:text-white dark:text-white"
                                    >
                                        <path
                                            d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="group rounded-3xl border-2 border-[#f8f8f8] bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                                style={{
                                    boxShadow: '-20px 30px 70px rgba(219, 222, 225, 0.4)',
                                }}
                            >
                                <div
                                    className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition group-hover:bg-black"
                                    style={{
                                        boxShadow: '0px 15px 30px rgba(39, 74, 128, 0.4)',
                                    }}
                                >
                                    <LuLeaf style={{ color: 'white', fontSize: '26px' }} />
                                </div>
                                <Link href="/#" className="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black">
                                    State Development
                                </Link>
                                <p className="mb-10 text-lg font-semibold transition line-clamp-3 dark:group-hover:text-black">
                                    State Development leverages policy and institutional strengths to enhance national prosperity, focusing on strategic
                                    planning and equitable distribution of energy and water resources across regions.
                                </p>
                                <Link
                                    href="/#"
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark"
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-black transition group-hover:text-white dark:text-white"
                                    >
                                        <path
                                            d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-dark">
                <BlogSlider title1="Projects" title2="Our Upcoming Projects" />
            </section>
        </div>
    );
};

export default Index;
