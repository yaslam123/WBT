import { useSelector } from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';
import { IRootState } from '../store';

const Projects = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <Head>
                <title>WBT - Wasaaradda Tamarta & Kheyraadka Biyaha Galmudug </title>
                <meta name="WBT" content="WBT Galmudug" />
            </Head>
            <div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <div className="container">
                        <div className="items-center justify-between py-10 md:flex md:h-[400px] md:py-0">
                            <div className="heading relative mb-0 text-center ltr:md:text-left rtl:md:text-right">
                                <h6>Projects</h6>
                                <h4 className="!text-white">Our Upcoming Projects</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-gradient-to-t from-white/70 to-transparent py-14 dark:bg-none md:py-[100px]">
                <div className="bg-gray-200 container text-left">
                    <div className="heading">
                        {/* <h6 className=" !text-secondary">Our Specialties</h6> */}
                        <h4 className="!text-secondary">Energy Sector</h4>
                    </div>
                </div>
                <div className="container">
                    <div className="grid gap-x-[30px] gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/Projects" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                <img src="/assets/images/project img/project1.jpeg" alt="blog-1" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="font-extrabold text-secondary dark:text-secondary">SESRP Project</h6>
                                    <h5 className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                        This Project aim to empower individuals and communities on thier journey of rcovery.
                                    </h5>
                                    <p className="line-clamp-4">
                                        The state of Galmudg, The Ministry of Energy and Water Resources is implementing the State's Electricity Sector Recovery
                                        Project. The Project Development Objective is to increase access to lower cost and cleaner electricity supply in the
                                        project areas and to Re-establish the electricity supply industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/Projects" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                <img src="/assets/images/project img/project2.jpeg" alt="blog-1" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="font-extrabold text-secondary dark:text-secondary">ASCENT Project</h6>
                                    <h5 className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                        The Project Development is to increase access to clean energy through private sector participation in Galmudug
                                    </h5>
                                    <p className="line-clamp-4">
                                        The State of Galmudug is preparing the Accelerating Sustainable and Clean Energy Access Transformation (ASCENT) project
                                        to be financed by International Development Association (IDA) to the tune of US$100 Million.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/Projects" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                <img src="/assets/images/project img/project3.jpg" alt="blog-1" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="font-extrabold text-secondary dark:text-secondary">HAREACT Project</h6>
                                    <h5 className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                        The principal objective is to improve energy services in Somalia’s urban and rural communities.
                                    </h5>
                                    <p className="line-clamp-4">
                                        The Federal Government of Somalia is implementing Households Access to Renewable Energy and advancing cooking
                                        technologies project with a grant funding from African Development Bank.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/Projects" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                <img src="/assets/images/project img/project4.jpeg" alt="blog-1" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="font-extrabold text-secondary dark:text-secondary">TA Project</h6>
                                    <h5 className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                        The overall objective of this project derives from an acknowledgment of the acute fiscal constraints facing the FGS, the
                                        skills shortage, and institutional weaknesses.
                                    </h5>
                                    <p className="line-clamp-4">
                                        The intervention is structured to build human and institutional capacity, and knowledge management, including the
                                        development of capacity building framework, building the capacity of an initial core set of personnel as trainer of
                                        trainees and involving them in the formalisation of the Somalia electricity sector.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/Projects" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                <img src="/assets/images/project img/project5.jpg" alt="Projects-1" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="font-extrabold text-secondary dark:text-secondary">SEAP Project</h6>
                                    <h5 className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                        The Project Development Objective of the Somali Electricity Sector Recovery Project is to expand access to electricity
                                        in targeted urban, peri-urban, and rural communities.
                                    </h5>
                                    <p className="line-clamp-4">
                                        The Ministry of Energy and Water Resources of the State of Galmudug Implemented Galmudug Electricity Access Project
                                        (SEAP) with grant Funding received from the World Bank.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-t from-white/70 to-transparent py-14 dark:bg-none md:py-[100px]">
                <div className="bg-gray-200 container text-left">
                    <div className="heading">
                        {/* <h6 className=" !text-secondary">Our Specialties</h6> */}
                        <h4 className="!text-secondary">Water Sector</h4>
                    </div>
                </div>
                <div className="container">
                    <div className="grid gap-x-[30px] gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/Projects" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                <img src="/assets/images/project img/IWRM-GEF-Project.jpg" alt="blog-1" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="font-extrabold text-secondary dark:text-secondary">IWRM-GEF Project</h6>
                                    <h5 className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                        National water resource management policy establishing clear national.
                                    </h5>
                                    <p className="line-clamp-4">
                                        Water scarcity is a serious threat to Galmudug and is hindering the country’s economic and social development.1
                                        Throughout Galmudug, trends of reduced surface water and groundwater reserves and increased occurrences of droughts and
                                        floods have been observed and are predicted to worsen.2 In response, the proposed LDCF-financed project directly
                                        supports integrated water resources development and management for over 350,000 agro-pastoralists across Galmudug.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/Projects" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                <img src="/assets/images/project img/IWRM-SIDA project.jpg" alt="blog-1" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="font-extrabold text-secondary dark:text-secondary">IWRM-SIDA Project</h6>
                                    <h5 className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                        Within the integrated approach to promoting sustainable and resilient development in Galmudug.
                                    </h5>
                                    <p className="line-clamp-4">
                                        UNDP Galmuudg and the Swedish International Development Agency (SIDA) have signed an agreement to build the capacity of
                                        the State of galmudug(FGS) and the Federal Member States (FMS) with an overarching focus on promoting resilience of the
                                        water-stressed, ecologically-fragile, and disaster vulnerable communities in the country.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/Projects" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                <img src="/assets/images/project img/CReWr Project.jpg" alt="blog-1" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="font-extrabold text-secondary dark:text-secondary">CReWr Project</h6>
                                    <h5 className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                        Institution building the federal member states of Hirshabelle and Jubaland in collaboration with federal institutions
                                        have each specifically monitored the implement-station of two priority actions on climate resilient WRM of regional
                                        strategic water action plans.
                                    </h5>
                                    <p className="line-clamp-4">
                                        The direct target group of the project are water authorities and further sectoral institutions at federal state and
                                        national levels with their national levels with their management and technical personnel as well as local stakeholders
                                        like clan or water user group representatives who can serve as multipliers for the management and utilisations of the
                                        water resources in the Juba and Shabelle basins.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/Projects" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                <img src="/assets/images/project img/HoA GW4R.jpg" alt="blog-1" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="font-extrabold text-secondary dark:text-secondary">HoA GW4R Project</h6>
                                    <h5 className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                        The proposed project structure (Components 1-3) is strongly rooted in the need for solutions to build.
                                    </h5>
                                    <p className="line-clamp-4">
                                        Climate resilience of borderland communities, through interventions across scales (at the local, sub-national, national,
                                        and regional level). Components remain technically the same for all participating countries, but differ in terms of
                                        their scope, targets, and investments required in each country (see Annex 1 and 2).
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/Projects" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                <img src="/assets/images/project img/abrar.jpeg" alt="blog-1" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="font-extrabold text-secondary dark:text-secondary">Ground Water Project</h6>
                                    <h5 className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                        The project is intended to increase sustainable access and management of groundwater as a key contributing factor to
                                        enhanced climate resilience of targeted communities.
                                    </h5>
                                    <p className="line-clamp-4">
                                        The Department of Energy in the Ministry of Energy and Water Resources in Somalia plays a crucial role in the
                                        development, regulation, and management of the energy sector in the country. This department is responsible for
                                        overseeing the various aspects of the energy industry, both renewable and non-renewable, with a focus on ensuring access
                                        to reliable and sustainable energy sources for the Somali population.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                                <Link href="/Projects" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                                <img src="/assets/images/project img/Project_barwaqo.png" alt="blog-1" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="font-extrabold text-secondary dark:text-secondary">Biyoole Project</h6>
                                    <h5 className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                        Water for Agro-pastoral Productivity and Resilience.
                                    </h5>
                                    <p className="line-clamp-4">
                                        The biyoole Project focuses primarily on: i) improving access to multiple-use water resources (for human consumption,
                                        livestock and small-scale irrigation) in dry lands of Somalia; ii) strengthening capacity of communities and local,
                                        state and national-level institutions; iii) supporting community-led investments in sustainable land management; iv)
                                        promoting the uptake of productivity-enhancing innovations among target rural communities; thereby v) strengthening the
                                        adaptive capacity of rural communities in Somalia and their resilience to the impacts of Climate Change.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
