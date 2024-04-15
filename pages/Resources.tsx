import Link from 'next/link';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Testimonial from '../components/Testimonial';
import { useState } from 'react';
import LogoSlider from '../components/LogoSlider';
import { FaRegFilePdf } from 'react-icons/fa6';
import Head from 'next/head';

const Resources = () => {
    const [activeTab, setActiveTab] = useState<string>('all');
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    const feedbacks = [
        {
            id: 1,
            name: 'Allan Branch',
            role: 'CEO of Lifted',
            thumbnail: '/assets/images/testimonial2.png',
            message:
                'An amazing services. We have a great business relationship with this agency, They help bring our vision to life in a way that makes sense. SEO work execute really well. great & phenomenal experience.',
        },
    ];

    return (
        <div>
            <Head>
                <title>WBT - Wasaaradda Tamarta & Kheyraadka Biyaha Galmudug </title>
                <meta name="WBT" content="WBT Galmudug" />
            </Head>
            <section className="relative">
                <div className="h-[130px] w-full bg-black/90 md:h-[150px] lg:h-[180px]"></div>
            </section>

            <section className="relative mt-12 pb-12 lg:pb-24">
                <div className="container">
                    <div className="flex flex-col items-center gap-5 lg:flex-row" data-aos="fade-up" data-aos-duration="1000">
                        <div className="grid flex-1 grid-cols-1 items-center gap-10 md:grid-cols-5">
                            {/*  */}
                            <div className="col-span-3 space-y-4 text-center ltr:md:text-left rtl:md:text-right">
                                <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right xl:w-[95%]">
                                    <h4 className="">Resources</h4>
                                    <p className="mt-10 text-[22px] font-bold leading-[35px]">
                                        The Ministry of Energy and Water Resources of Galmudg State has the mandate to oversee the State's Energy sector, set
                                        policies, and strategic frameworks, approve tariffs for the electricity services, and build the technical capacity of
                                        electricity service providers in Galmudug in consultation with stakeholders through open and transparent processes.
                                    </p>
                                </div>

                                <div className="grid gap-x-7 gap-y-12" data-aos={isRtl ? 'fade-left' : 'fade-right'} data-aos-duration="1000">
                                    <div className="mt-20 flex flex-col items-center rounded-3xl border-2 border-[#BBC0D0]/50 bg-secondary p-7 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                                        <div className="flex items-center space-x-4">
                                            <div>
                                                <FaRegFilePdf style={{ color: 'white', fontSize: '40px' }} />
                                            </div>
                                            <div className="text-[20px] font-semibold ">
                                                <h3 className="!text-white">Sharciga Guud ee biyaha</h3>
                                            </div>
                                        </div>
                                        <div className="mt-5">
                                            <a
                                                href="/docs/sharciga Guud ee  biyaha.pdf"
                                                download
                                                className="btn bg-white p-3 text-[12px] text-black hover:bg-primary"
                                            >
                                                {' '}
                                                Download
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center rounded-3xl border-2 border-[#BBC0D0]/50 bg-secondary p-7 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                                        <div className="flex items-center space-x-4">
                                            <div>
                                                <FaRegFilePdf style={{ color: 'white', fontSize: '40px' }} />
                                            </div>
                                            <div className="text-[20px] font-semibold text-white">
                                                <h3>
                                                    Progressive Report <br /> on Completed Water Sites
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="mt-5">
                                            <a
                                                href="/docs/Progressive Report on Completed Water Sites  (1)_230429_211459.pdf"
                                                download
                                                className="btn bg-white p-3 text-[12px] text-black hover:bg-primary"
                                            >
                                                {' '}
                                                Download
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}

                            <div className="col-span-2 ">
                                <div
                                    className="flex flex-col rounded-3xl border-2 border-[#BBC0D0]/50 bg-transparent p-6 px-4 transition"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                >
                                    <div className="mb-8">
                                        <h3 className="text-center text-[22px] font-black text-black dark:text-white">TAKE ACTION</h3>
                                    </div>
                                    <ul className="text-md space-y-7 pb-7 font-bold">
                                        <li className="flex items-center justify-between rounded-2xl bg-white text-black transition hover:scale-105 hover:bg-secondary hover:text-white">
                                            <a href="/#services" className="flex h-full w-full items-center justify-between p-3">
                                                <p className="">Services</p>
                                            </a>
                                        </li>

                                        <li className="flex items-center justify-between rounded-2xl bg-white text-black transition hover:scale-105 hover:bg-secondary hover:text-white">
                                            <a href="/blog" className="flex h-full w-full items-center justify-between p-3">
                                                <p className="">Projects</p>
                                            </a>
                                        </li>

                                        <li className="flex items-center justify-between rounded-2xl bg-white text-black transition hover:scale-105 hover:bg-secondary hover:text-white">
                                            <a href="/News" className="flex h-full w-full items-center justify-between p-3">
                                                <p className="">News & Events</p>
                                            </a>
                                        </li>

                                        <li className="flex items-center justify-between rounded-2xl bg-white text-black transition hover:scale-105 hover:bg-secondary hover:text-white">
                                            <a href="/faq" className="flex h-full w-full items-center justify-between p-3">
                                                <p className="">FAQ's</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resources;
