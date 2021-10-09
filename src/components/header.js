/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from '../assets/logo.png'
import logo1 from '../assets/logo1.png'
const navigation = [
    { name: 'About Us', href: '#', current: false },
    { name: 'Sectors', href: '#', current: false },
    { name: 'News & Media', href: '#', current: false },
    { name: 'Associate With Us', href: '#', current: false },
    { name: ' Contact Us', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {
    return (
        <Disclosure as="nav" className="bg-gray-800 sticky-top">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block lg:hidden h-8 w-auto"
                                        src={logo1}
                                        alt="Workflow"
                                    />
                                    <img
                                        className="hidden lg:block h-8 w-auto"
                                        src={logo1}
                                        alt="Workflow"
                                    />
                                    <span className="text-xs p-2 text-blue-200">TECHTON  LORDS <p className="text-xs"> CONSTRUCTION</p></span>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                {/* < header className="desktop-menu" >

                                    <div className="main-menu-wrapper">
                                        <ul className="main-menu">
                                            <li>
                                                <a className="mega">
                                                    About Us <i className="fa fa-sort-desc" aria-hidden="true"></i>
                                                </a>
                                                <div className="mega-menu">
                                                    <div className="inner-info">
                                                        <div className="inner-left">
                                                            <div className="inner-links">
                                                                <ul className="mega-inner-wraper">
                                                                    <li>
                                                                        <a href="https://www.tataprojects.com/about-us/who-we-are" className=""
                                                                            data-img="https://www.tataprojects.com/images/tata-images/Who-we-meg-min.jpg"
                                                                            data-alt="Who we are">
                                                                            Who we are
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://www.tataprojects.com/about-us/board-of-directors" className=""
                                                                            data-img="https://www.tataprojects.com/images/tata-images/bod-meg.jpg"
                                                                            data-alt="Board of Directors">
                                                                            Board of Directors
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://www.tataprojects.com/investor" className=""
                                                                            data-img="https://www.tataprojects.com/images/tata-images/Investor-meg-min.jpg"
                                                                            data-alt="investment solutions by energy services company">
                                                                            Investor relations
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="innerinfo">
                                                                <h4> About Us </h4>
                                                                <p className="overview-copy"> Tata Projects is one of the fastest growing and most
                                                                    admired industrial infrastructure companies in India. It has expertise in
                                                                    executing large and complex urban and industrial infrastructure projects. </p>
                                                            </div>
                                                        </div>
                                                        <div className="inner-right">
                                                            <img src="https://www.tataprojects.com/images/tata-images/Investor-meg-min.jpg"
                                                                alt="investment solutions by energy services company" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a className="mega">
                                                    Sectors <i className="fa fa-sort-desc" aria-hidden="true"></i>
                                                </a>
                                                <div className="mega-menu">
                                                    <div className="inner-info">
                                                        <div className="inner-left">
                                                            <div className="inner-links">
                                                                <ul className="mega-inner-wraper">
                                                                    <li>
                                                                        <a href="https://www.tataprojects.com/sectors/power" className=""
                                                                            data-img="https://www.tataprojects.com/images/tata-images/Power-meg-min.jpg"
                                                                            data-alt="">
                                                                            Power
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://www.tataprojects.com/sectors/water" className=""
                                                                            data-img="https://www.tataprojects.com/images/tata-images/Water-meg-min.jpg"
                                                                            data-alt="Water">
                                                                            Water
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://www.tataprojects.com/sectors/metals-and-minerals" className=""
                                                                            data-img="https://www.tataprojects.com/images/tata-images/Metals-meg-min.jpg"
                                                                            data-alt="Metals &amp; Minerals">
                                                                            Metals &amp; Minerals
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://www.tataprojects.com/sectors/oil-gas" className=""
                                                                            data-img="https://www.tataprojects.com/images/tata-images/Oil-Gas-meg-min.jpg"
                                                                            data-alt="Oil &amp; Gas">
                                                                            Oil &amp; Gas
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://www.tataprojects.com/sectors/space-and-nuclear" className=""
                                                                            data-img="https://www.tataprojects.com/images/tata-images/Space-meg-min.jpg"
                                                                            data-alt="Space &amp; Nuclear">
                                                                            Space &amp; Nuclear
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://www.tataprojects.com/sectors/transportation" className=""
                                                                            data-img="https://www.tataprojects.com/images/tata-images/Transportation-new-meg.jpg"
                                                                            data-alt="Transportation">
                                                                            Transportation
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://www.tataprojects.com/sectors/urban-infrastructure" className=""
                                                                            data-img="https://www.tataprojects.com/images/tata-images/Urban-meg-min.jpg"
                                                                            data-alt="Urban Infrastructure">
                                                                            Urban Infrastructure
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://www.tataprojects.com/sectors/industrial" className=""
                                                                            data-img="https://www.tataprojects.com/images/tata-images/Industrial-meg-min.jpg"
                                                                            data-alt="Industrial">
                                                                            Industrial
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="innerinfo">
                                                                <h4> Sectors </h4>
                                                                <p className="overview-copy"> We provide end-to-end services in different sectors like
                                                                    power, water, metals &amp; minerals, space &amp; nuclear, transportation, urban
                                                                    infrastructure, and industrial. </p>
                                                            </div>
                                                        </div>
                                                        <div className="inner-right">
                                                            <img src="https://www.tataprojects.com/images/tata-images/Metals-meg-min.jpg"
                                                                alt="Metals &amp; Minerals" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a className="mega">
                                                    Offerings <i className="fa fa-sort-desc" aria-hidden="true"></i>
                                                </a>
                                                <div className="mega-menu">
                                                    <div className="inner-info">
                                                        <div className="inner-left">
                                                            <div className="inner-links">
                                                                <ul className="mega-inner-wraper">
                                                                    <li>
                                                                        <a href="https://www.tataprojects.com/offerings/engineering" className=""
                                                                            data-img="https://www.tataprojects.com/images/tata-images/Engineering-meg-min.jpg"
                                                                            data-alt="Leading Engineering Company in India">
                                                                            Engineering
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://www.tataprojects.com/offerings/construction" className=""
                                                                            data-img="https://www.tataprojects.com/images/tata-images/Construction-meg-min.jpg"
                                                                            data-alt="Construction">
                                                                            Construction
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://www.tataprojects.com/offerings/procurement" className=""
                                                                            data-img="https://www.tataprojects.com/images/tata-images/Procurement-meg.jpg"
                                                                            data-alt="procurement management services in india">
                                                                            Procurement
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://www.tataprojects.com/offerings/quality" className=""
                                                                            data-img="https://www.tataprojects.com/images/tata-images/Quality-Service-new-meg.jpg"
                                                                            data-alt="Quality services">
                                                                            Quality services
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://www.tataprojects.com/offerings/investments" className=""
                                                                            data-img="https://www.tataprojects.com/images/tata-images/Investments-meg-min.jpg"
                                                                            data-alt="Investments">
                                                                            Investments
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://www.tataprojects.com/offerings/operation-and-renovation-and-maintenance"
                                                                            className=""
                                                                            data-img="https://www.tataprojects.com/images/tata-images/Operation-meg-min.jpg"
                                                                            data-alt="Operation and Renovation &amp; Maintenance">
                                                                            Operation and Renovation &amp; Maintenance
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="innerinfo">
                                                                <h4> Offerings </h4>
                                                                <p className="overview-copy"> Tata Projects is one of the fastest growing companies in
                                                                    India. With rich experience and world wide operations, we offer Engineering,
                                                                    Construction, Procurement, Investments, Operations, Renovations, Maintenance
                                                                    &amp; Quality services to its clients. </p>
                                                            </div>
                                                        </div>
                                                        <div className="inner-right">
                                                            <img src="https://www.tataprojects.com/images/tata-images/xEngineering-meg-min.jpg.pagespeed.ic.ANn1TZjF_H.webp"
                                                                alt="Leading Engineering Company in India" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a className="mega">
                                                    News &amp; Media <i className="fa fa-sort-desc" aria-hidden="true"></i>
                                                </a>
                                                <div className="mega-menu">
                                                    <div className="inner-info">
                                                        <div className="inner-left">
                                                            <div className="inner-links">
                                                                <ul className="mega-inner-wraper">
                                                                    <li>
                                                                        <a href="https://www.tataprojects.com/press-releases" className=""
                                                                            data-img="https://www.tataprojects.com/images/tata-images/news-media-mega.png"
                                                                            data-alt="Press Releases">
                                                                            Press Releases
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://www.tataprojects.com/news" className=""
                                                                            data-img="https://www.tataprojects.com/images/tata-images/news-media-mega.png"
                                                                            data-alt="News &amp; Media">
                                                                            News
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://www.tataprojects.com/awards" className=""
                                                                            data-img="https://www.tataprojects.com/images/tata-images/news-media-mega.png"
                                                                            data-alt="Awards">
                                                                            Awards
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="innerinfo">
                                                                <h4> News and Media </h4>
                                                                <p className="overview-copy"> Find out what is new at TPL and stay updated with new,
                                                                    awards and Press Release. </p>
                                                                <div className="mega-news-2-box-wrap">
                                                                    <div className="mega-news-2-box-inn">
                                                                        <div className="media-item">
                                                                            <img src="https://www.tataprojects.com/images/xNaresh.png.pagespeed.ic.iBhhwlQPqZ.webp"
                                                                                className="med-home-pro" />
                                                                            <p className="media-item-copy"><b>Naresh Sharma</b><br />
                                                                                <a href="mailto:nareshsharma@tataprojects.com">nareshsharma@tataprojects.com</a>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mega-news-2-box-inn">
                                                                        <div className="media-item">
                                                                            <img src="https://www.tataprojects.com/images/xsandeep.png.pagespeed.ic.A0HKsRuk-g.webp"
                                                                                className="med-home-pro" />
                                                                            <p className="media-item-copy"><b>Sandeep Menezes</b><br />
                                                                                <a
                                                                                    href="mailto:sandeepmenezes@tataprojects.com">sandeepmenezes@tataprojects.com</a>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="inner-right">
                                                            <img src="https://www.tataprojects.com/images/tata-images/news-media-mega.png"
                                                                alt="Press Releases" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a className="mega">
                                                    Associate With Us <i className="fa fa-sort-desc" aria-hidden="true"></i>
                                                </a>
                                                <div className="mega-menu">
                                                    <div className="inner-info">
                                                        <div className="inner-left">
                                                            <div className="inner-links">
                                                                <ul className="mega-inner-wraper">
                                                                    <li>
                                                                        <a href="https://www.tataprojects.com/careers" className=""
                                                                            data-img="https://www.tataprojects.com/images/tata-images/Careers-meg.jpg"
                                                                            data-alt="Tata Projects - Careers">
                                                                            Careers
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://www.tataprojects.com/partner-with-us" className=""
                                                                            data-img="https://www.tataprojects.com/images/tata-images/Partner-meg-min.jpg"
                                                                            data-alt="Partner With us">
                                                                            Partner With Us
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="innerinfo">
                                                                <h4> Associate With Us </h4>
                                                                <p className="overview-copy"> True to its philosophy of “Simplify. Create”, Tata
                                                                    Projects constantly focuses on simplifying its processes from time to time and
                                                                    thus creates value for the stakeholders. By utilizing global purchasing and
                                                                    supply management, we have brought immense value </p>
                                                            </div>
                                                        </div>
                                                        <div className="inner-right">
                                                            <img src="https://www.tataprojects.com/images/tata-images/xPartner-meg-min.jpg.pagespeed.ic.UzunC9ktMq.webp"
                                                                alt="Associate With Us" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="https://www.tataprojects.com/touching-lives" className="mega">
                                                    Touching Lives </a>
                                                <div className="mega-menu">
                                                    <div className="inner-info">
                                                        <div className="inner-left">
                                                            <div className="innerinfo">
                                                                <h4> Touching Lives </h4>
                                                                <p className="overview-copy"> At Tata Projects we believe in giving back to the
                                                                    community through our Green Thumb initiatives. Our approach is genuine
                                                                    upliftment, not generosity. Through initiatives we try to support our community
                                                                    through Skill Development, Education, Water &amp; Sanitati </p>
                                                            </div>
                                                        </div>
                                                        <div className="inner-right">
                                                            <img src="https://www.tataprojects.com/images/tata-images/xtouch-mega.png.pagespeed.ic.7KosvH4FxM.webp"
                                                                alt="Touching Lives" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="https://www.tataprojects.com/contact-us" className="mega">
                                                    Contact Us </a>
                                                <div className="mega-menu">
                                                    <div className="inner-info">
                                                        <div className="inner-left">
                                                            <div className="innerinfo">
                                                                <h4> Contact us </h4>
                                                                <p className="overview-copy"> We would love to hear from you and we are always available
                                                                    for you. Drop us a line through email, ring to us for quick clarity. All your
                                                                    queries will be answered by our team. </p>
                                                            </div>
                                                        </div>
                                                        <div className="inner-right">
                                                            <img src="https://www.tataprojects.com/images/tata-images/xContact-Us-meg-min.jpg.pagespeed.ic.bpQt-MgNOK.webp"
                                                                alt="Tata Projects Leading Engineering Company - Contact Us" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>


                                </header> */}


                                
                            </div>

                        </div>
                    </div>
                    
                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )
            }



        </Disclosure >
    )
}


export default Header