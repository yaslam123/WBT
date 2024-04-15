import Link from 'next/link';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import BlogSlider from '../components/BlogSlider';
import Faq from '../components/Faq';
import LogoSlider from '../components/LogoSlider';
import Testimonial from '../components/Testimonial';

const org_stracture = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const faqs: any = [
        {
            id: 1,
            question: 'Do you offer a free trial?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 2,
            question: 'How do I create an account?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 3,
            question: 'What protections does Strategic Systems use to protect our data?',
            answer: "For now it is limited to 100MB per instance. We'll offer expansion options soon.",
        },
        {
            id: 4,
            question: 'What type of support is included with this Service?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 5,
            question: 'Do you have premium plans for products?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 6,
            question: 'Who else is using plurk SaaS tool?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ];

    const feedbacks = [
        {
            id: 1,
            name: 'Allan Branch',
            role: 'CEO of Lifted',
            thumbnail: '/assets/images/modern-saas/client-1.png',
            message:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        },
    ];

    const blogs = [
        {
            id: 1,
            thumbnail: '/assets/images/modern-saas/design.png',
            title: '3 experiments to improve your mobile app funnel',
            excerpt: 'Funnels don’t just provide you with conversion numbers, they provide you with insight into how your users behave.',
            description: '',
            date: 'Dec 15, 2022',
            tag: 'Design',
        },
        {
            id: 2,
            thumbnail: '/assets/images/modern-saas/marketing.png',
            title: 'What’s growth hacking? 8 great books to learn more about it',
            excerpt: 'The use of resource-light and cost-effective digital marketing tactics to help grow and retain an active user base, sell products and...',
            description: '',
            date: 'Dec 25, 2022',
            tag: 'Marketing',
        },
        {
            id: 3,
            thumbnail: '/assets/images/modern-saas/integration.png',
            title: '6 new interesting mobile apps to grow your audience on',
            excerpt: 'Before I get into the advice, here’s a bit about my background and experience with growing audiences for creative work.',
            description: '',
            date: 'Nov 06, 2022',
            tag: 'Integration',
        },
    ];

    return (
        <div>
            <Head>
                <title>WBT - Wasaaradda Tamarta & Kheyraadka Biyaha Galmudug </title>
                <meta name="WBT" content="WBT Galmudug" />
            </Head>
            <div className="overflow-x-hidden">
                <section className="bg-black bg-[url(/assets/images/modern-saas/banner-bg.png)] bg-cover bg-top bg-no-repeat pt-[82px] lg:pt-[106px]">
                    <div className="container lg:pt-7">
                        <div className="relative">
                            {/* <div className="pt-14 pb-8 text-center text-white lg:py-20 ltr:lg:text-left rtl:lg:text-right">
                                <h2 className="text-transform: text-3xl font-extrabold uppercase leading-normal sm:text-5xl	lg:text-[70px] lg:leading-[90px]"></h2>
                            </div> */}
                        </div>
                    </div>
                </section>
                <section className="-mt-48 bg-gradient-to-b from-white/[55%] to-transparent pt-72 pb-12 dark:bg-none lg:pb-24">
                    <div className="bg-gray-200 bg-secondary text-center">
                        <div className="heading">
                            {/* <h6 className=" !text-secondary">Our Specialties</h6> */}
                            <h4 className="py-2 !text-white">Our Key Officials</h4>
                        </div>
                    </div>
                    <div className="container grid gap-5">
                        <div className="bg-gray-200 flex flex-col items-center justify-center text-center">
                            <div className="group rounded-[32px] border-2 border-transparent bg-transparent shadow-md duration-200 hover:border-secondary hover:bg-secondary/20 dark:border-white/[0.1] dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary lg:w-[60%]">
                                <Link href="#" className="mx-auto flex h-[auto] w-[auto] items-center justify-center pt-5">
                                    <img
                                        src="/assets/images/Org structure/Wasirka.jpeg"
                                        className="h-[300px] w-[400px] rounded-full border-[1px] border-transparent border-secondary"
                                        alt=""
                                    />
                                </Link>
                                <h5 className="mt-8 text-[22px] font-bold leading-6 text-black dark:text-white dark:group-hover:text-black ">
                                    Abdulkadir shire Warsame (Galbeyte)
                                </h5>
                                <h5 className="mt-2 text-[22px] font-extrabold leading-6 text-secondary dark:text-white dark:group-hover:text-black ">
                                    Minister
                                </h5>
                                <p className="mt-4 px-5 text-lg font-semibold dark:group-hover:text-black">
                                    We provide a general medical check - up & consultation of our best doctors team. We provide a general medical check - up &
                                    consultation of our best doctors team.
                                </p>
                                <Link
                                    href="#"
                                    className="mx-auto mt-8 mb-5 flex w-[30%] items-center justify-center rounded-[90px] bg-secondary p-[5px] transition group-hover:bg-black dark:bg-gray-dark"
                                >
                                    <span className="p-2 font-bold text-white">Read More</span>
                                </Link>
                            </div>
                        </div>
                        {/*  */}
                        <div className="bg-gray-200 grid grid-cols-1 gap-20 pt-5 md:grid-cols-1 lg:grid-cols-2">
                            <div className="bg-gray-200 flex flex-col items-center justify-center text-center">
                                <div className="group rounded-[32px] border-2 border-transparent bg-transparent shadow-md duration-200 hover:border-secondary hover:bg-secondary/20 dark:border-white/[0.1] dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary">
                                    <Link href="#" className="mx-auto flex h-[auto] w-[auto] items-center justify-center pt-5">
                                        <img
                                            src="/assets/images/Org structure/wasir ku xigenka.jpeg"
                                            className="h-[230px] w-[230px] rounded-full border-[1px] border-transparent border-secondary"
                                            alt=""
                                        />
                                    </Link>
                                    <h5 className="mt-8 text-[22px] font-bold leading-6 text-black dark:text-white dark:group-hover:text-black ">
                                        Ahmad Mohamed Faarah
                                    </h5>
                                    <h5 className="mt-2 text-[22px] font-extrabold leading-6 text-secondary dark:text-white dark:group-hover:text-black ">
                                        Deputy Minister
                                    </h5>
                                    <p className="mt-4 px-5 text-lg font-semibold dark:group-hover:text-black">
                                        We provide a general medical check - up & consultation of our best doctors team. We provide a general medical check - up
                                        & consultation of our best doctors team.
                                    </p>
                                    <Link
                                        href="#"
                                        className="mx-auto mt-8 mb-5 flex w-[30%] items-center justify-center rounded-[90px] bg-secondary p-[5px] transition group-hover:bg-black dark:bg-gray-dark"
                                    >
                                        <span className="p-2 font-bold text-white">Read More</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="bg-gray-200 flex flex-col items-center justify-center text-center">
                                <div className="group rounded-[32px] border-2 border-transparent bg-transparent shadow-md duration-200 hover:border-secondary hover:bg-secondary/20 dark:border-white/[0.1] dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary ">
                                    <Link href="#" className="mx-auto flex h-[auto] w-[auto] items-center justify-center pt-5">
                                        <img
                                            src="/assets/images/Org structure/wasir dowlaha.jpeg"
                                            className="h-[230px] w-[230px] rounded-full border-[1px] border-transparent border-secondary"
                                            alt=""
                                        />
                                    </Link>
                                    <h5 className="mt-8 text-[22px] font-bold leading-6 text-black dark:text-white dark:group-hover:text-black ">
                                        Sharif Mohamud Ali
                                    </h5>
                                    <h5 className="mt-2 text-[22px] font-extrabold leading-6 text-secondary dark:text-white dark:group-hover:text-black ">
                                        State Minister
                                    </h5>
                                    <p className="mt-4 px-5 text-lg font-semibold dark:group-hover:text-black">
                                        We provide a general medical check - up & consultation of our best doctors team. We provide a general medical check - up
                                        & consultation of our best doctors team.
                                    </p>
                                    <Link
                                        href="#"
                                        className="mx-auto mt-8 mb-5 flex w-[30%] items-center justify-center rounded-[90px] bg-secondary p-[5px] transition group-hover:bg-black dark:bg-gray-dark"
                                    >
                                        <span className="p-2 font-bold text-white">Read More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className="bg-gray-200 flex flex-col items-center justify-center text-center">
                            <div className="group rounded-[32px] border-2 border-transparent bg-transparent shadow-md duration-200 hover:border-secondary hover:bg-secondary/20 dark:border-white/[0.1] dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary lg:w-[60%]">
                                <Link href="#" className="mx-auto flex h-[auto] w-[auto] items-center justify-center pt-5">
                                    <img
                                        src="/assets/images/Org structure/agasimaha guud.jpeg"
                                        className="h-[300px] w-[400px] rounded-full border-[1px] border-transparent border-secondary"
                                        alt=""
                                    />
                                </Link>
                                <h5 className="mt-8 text-[22px] font-bold leading-6 text-black dark:text-white dark:group-hover:text-black ">
                                    Ibrahim Abdulkadir Mohamed
                                </h5>
                                <h5 className="mt-2 text-[22px] font-extrabold leading-6 text-secondary dark:text-white dark:group-hover:text-black ">
                                    Director General
                                </h5>
                                <p className="mt-4 px-5 text-lg font-semibold dark:group-hover:text-black">
                                    We provide a general medical check - up & consultation of our best doctors team. We provide a general medical check - up &
                                    consultation of our best doctors team.
                                </p>
                                <Link
                                    href="#"
                                    className="mx-auto mt-8 mb-5 flex w-[30%] items-center justify-center rounded-[90px] bg-secondary p-[5px] transition group-hover:bg-black dark:bg-gray-dark"
                                >
                                    <span className="p-2 font-bold text-white">Read More</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white pt-20 pb-12 dark:bg-gray-dark lg:pb-24">
                    <div className="">
                        <div className="bg-gray-200 text-center">
                            <div className="heading">
                                {/* <h6 className="!text-secondary">Our Specialties</h6> */}
                                <h4>Organizational Chart</h4>
                            </div>
                            <div className="">
                                <h1 id="header_1" className="level-1_1 rectangle">
                                    Minister
                                </h1>
                                <h1 id="header_1" className="level-1_1 rectangle">
                                    Deputy Minister
                                </h1>
                                <h1 id="header_1" className="level-1 rectangle">
                                    Director General
                                </h1>
                                <ol className="level-2-wrapper">
                                    <li>
                                        <h2 id="head2" className="level-2 rectangle">
                                            Admin/Finance & <br /> HR Department Director
                                        </h2>
                                        <ol className="level-3-wrapper">
                                            <li>
                                                <h3 id="head3" className="level-3 rectangle">
                                                    Human resource <br />
                                                    Management Officer
                                                </h3>
                                            </li>
                                            <li>
                                                <h3 id="head3" className="level-3 rectangle">
                                                    Finance Officer
                                                </h3>
                                            </li>
                                            <li>
                                                <h3 id="head3" className="level-3 rectangle">
                                                    Procurement Officer
                                                </h3>
                                            </li>
                                            <li>
                                                <h3 id="head3" className="level-3 rectangle">
                                                    Information, communication and technology (ICT) Officer
                                                </h3>
                                            </li>
                                        </ol>
                                    </li>
                                    {/*  */}
                                    <li>
                                        <h2 id="head2" className="level-2 rectangle">
                                            Policy & Planning <br /> Department Director
                                        </h2>
                                        <ol className="level-3-wrapper">
                                            <li>
                                                <h3 id="head3" className="level-3 rectangle">
                                                    Planning Officer
                                                </h3>
                                            </li>
                                            <li>
                                                <h3 id="head3" className="level-3 rectangle">
                                                    Development Projects Officer
                                                </h3>
                                            </li>
                                            <li>
                                                <h3 id="head3" className="level-3 rectangle">
                                                    Statistics Officer
                                                </h3>
                                            </li>
                                            <li>
                                                <h3 id="head3" className="level-3 rectangle">
                                                    Policy and Legislation Officer
                                                </h3>
                                            </li>
                                            <li>
                                                <h3 id="head3" className="level-3 rectangle">
                                                    M&E Officer
                                                </h3>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <h2 id="head2" className="level-2 rectangle">
                                            Water Resources <br /> Department Director
                                        </h2>
                                        <ol className="level-3-wrapper">
                                            <li>
                                                <h3 id="head3" className="level-3 rectangle">
                                                    Water preservation practices & awareness Officer.
                                                </h3>
                                            </li>
                                            <li>
                                                <h3 id="head3" className="level-3 rectangle">
                                                    Rural and Urban Water Supply Officer
                                                </h3>
                                            </li>
                                            <li>
                                                <h3 id="head3" className="level-3 rectangle">
                                                    Hydro-study and design Officer
                                                </h3>
                                            </li>
                                            <li>
                                                <h3 id="head3" className="level-3 rectangle">
                                                    Rehabilitation &maintenance Officer
                                                </h3>
                                            </li>
                                            <li>
                                                <h3 id="head3" className="level-3 rectangle">
                                                    Water quality control/lab Officer
                                                </h3>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <h2 id="head2" className="level-2 rectangle">
                                            Energy Department <br /> Director
                                        </h2>
                                        <ol className="level-3-wrapper">
                                            <li>
                                                <h3 id="head3" className="level-3 rectangle">
                                                    Electrical Power Officer
                                                </h3>
                                            </li>
                                            <li>
                                                <h3 id="head3" className="level-3 rectangle">
                                                    Transmission Officer
                                                </h3>
                                            </li>
                                            <li>
                                                <h3 id="head3" className="level-3 rectangle">
                                                    Solar & Wind Energy Officer
                                                </h3>
                                            </li>
                                            <li>
                                                <h3 id="head3" className="level-3 rectangle">
                                                    Hydro power Officer
                                                </h3>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <h2 id="head2" className="level-2_1 rectangle">
                                            Regional Coordination <br /> Department Director Director
                                        </h2>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default org_stracture;
