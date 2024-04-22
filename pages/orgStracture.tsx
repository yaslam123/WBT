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
                <section className="bg-secondary pt-[82px] lg:pt-[106px]">
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
                                <p className="text-md mt-4 px-5 text-justify font-semibold dark:group-hover:text-black">
                                    Dear Citizens <br /> I am honored to serve as the Minister of Energy and Water Resources of Galmudug. Our ministry is
                                    dedicated to ensuring the efficient management and utilization of our energy and water resources for the benefit of all. We
                                    strive to provide sustainable and reliable access to these essential resources, while promoting responsible practices and
                                    environmental stewardship. Through strategic planning and collaboration with relevant stakeholders, we aim to develop and
                                    implement policies that support the growth and diversification of our energy sector. This includes the exploration and
                                    development of renewable energy sources, such as solar, wind, and hydroelectric power, to decrease our reliance on fossil
                                    fuels and mitigate the impact of climate change. In the water sector, our focus is on enhancing water resource management,
                                    improving infrastructure, and ensuring equitable access to clean water for all communities. We are committed to promoting
                                    efficient water use, conservation measures, and the protection of water sources to meet the growing demands of our
                                    population. As Minister, I am dedicated to fostering transparency, accountability, and inclusivity in our ministry's
                                    operations. I encourage open dialogue, collaboration, and active engagement from citizens, industry professionals, and other
                                    stakeholders to ensure that our policies and initiatives align with the needs and aspirations of our society. I am confident
                                    that together, we can build a future where energy and water resources are managed sustainably, promoting economic growth,
                                    social development, and environmental preservation. Thank you for your trust and support as we work towards a prosperous and
                                    sustainable Galmudug. <br /> Sincerely, Abdulkadir Shire Warsame(Galbeyte)
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
                                    <p className="mt-4 px-5 text-justify text-lg font-semibold dark:group-hover:text-black">
                                        Dear Fellow Citizens, <br /> I am honored to serve as the Deputy Minister of Energy and Water Resources of Galmudug. In
                                        this role, I am committed to supporting the Minister in achieving our ministry's mandate of efficient energy and water
                                        resource management. One of my key responsibilities is to ensure the implementation of policies and initiatives that
                                        promote energy efficiency and conservation. By encouraging the adoption of energy-efficient technologies and practices,
                                        we can reduce energy consumption, lower costs, and minimize our environmental footprint. In the water sector, I am
                                        dedicated to improving access to clean water for all communities, especially in underserved areas. We will work towards
                                        enhancing water infrastructure, implementing water conservation measures, and promoting awareness about the importance
                                        of water resource management. I believe that collaboration with stakeholders, including citizens, industry
                                        professionals, and non-governmental organizations, is vital for the success of our initiatives. I encourage you to
                                        actively engage with our ministry, share your ideas, and contribute to the development of sustainable solutions for our
                                        energy and water challenges. Together, we can create a brighter and more sustainable future for Galmudug. <br /> Warm
                                        regards, Ahmed
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
                                    <p className="mt-4 px-5 text-justify text-lg font-semibold dark:group-hover:text-black">
                                        Esteemed Citizens of Galmudug <br /> I extend my warmest greetings as the State Minister of Energy and Water Resources.
                                        In this role, I am committed to ensuring that the services and resources provided by our ministry are accessible to all
                                        members of our diverse society. One of my key mandates is to promote inclusivity and equity in the management of energy
                                        and water resources. We will work towards ensuring that every citizen, regardless of their background or geographical
                                        location, has fair and equitable access to these essential resources. I am also dedicated to fostering partnerships with
                                        local communities, non-profit organizations, and international agencies to address the challenges we face in the energy
                                        and water sectors. By working together, we can develop innovative solutions, leverage expertise, and secure the
                                        necessary resources to achieve our goals. Transparency and accountability are fundamental to our ministry's operations.
                                        I am committed to ensuring that our activities are conducted in an open and transparent manner, with regular
                                        communication and engagement with citizens. Your feedback and input are invaluable in shaping our policies and
                                        initiatives. Together, let us build a sustainable and prosperous future for Galmudug, where energy and water resources
                                        are managed equitably, and every citizen can thrive. <br /> Warm regards, Sharif Mohamud Ali
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
                                <p className="mt-4 px-5 text-justify text-lg font-semibold dark:group-hover:text-black">
                                    Dear Colleagues and Stakeholders <br /> As the Director General of the Ministry of Energy and Water Resources, I am honored
                                    to lead a team of dedicated professionals who are committed to achieving our ministry's mandates. My primary responsibility
                                    is to oversee the day-to-day operations of the ministry, ensuring that our policies and programs are implemented effectively
                                    and efficiently. I am focused on fostering a culture of excellence, innovation, and collaboration within our ministry and
                                    among our stakeholders. We are dedicated to optimizing the management and utilization of our energy and water resources.
                                    Through strategic planning, capacity building, and the adoption of best practices, we aim to enhance the resilience and
                                    sustainability of our energy and water sectors. Furthermore, I am committed to promoting a conducive environment for
                                    investment and private sector participation. By creating a favorable regulatory framework and providing support to
                                    investors, we can attract the necessary capital and expertise to drive the growth and development of our energy and water
                                    infrastructure. I believe that the success of our ministry lies in the collective efforts of our team and the collaboration
                                    with our stakeholders. I encourage open communication, constructive feedback, and active engagement from all parties to
                                    ensure that our initiatives align with the needs and aspirations of our society. Together, let us work towards a future
                                    where energy and water resources are harnessed efficiently, benefiting all citizens of Galmudug state Somalia. <br />{' '}
                                    Sincerely, Ibrahim Abdulkadir Mohamed
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
