import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';

type headerProps = {
    toggleSidebarHandlerClick: () => void;
};

function Header(props: headerProps) {
    const { toggleSidebarHandlerClick } = props;
    return (
        <header className='header'>
            <div className='container-fluid flex items-center justify-between'>
                {/* Sidebar Toggle & Search Starts */}
                <div className='flex items-center space-x-6 overflow-visible'>
                    <button className='sidebar-toggle' onClick={toggleSidebarHandlerClick}>
                        <span className='flex space-x-4'>
                            <svg
                                stroke='currentColor'
                                fill='none'
                                strokeWidth={0}
                                viewBox='0 0 24 24'
                                height={22}
                                width={22}
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M4 6h16M4 12h8m-8 6h16'
                                />
                            </svg>
                        </span>
                    </button>
                    {/* Mobile Search Starts */}
                    <div className='sm:hidden'>
                        <button
                            type='button'
                            data-trigger='search-modal'
                            className='flex items-center justify-center rounded-full text-slate-500 transition-colors duration-150 hover:text-primary-500 focus:text-primary-500 dark:text-slate-400 dark:hover:text-slate-300'
                        >
                            <Icon.Search width={22} height={22} data-feather='search' />
                        </button>
                    </div>
                    {/* Mobile Search Ends */}
                    {/* Searchbar Start */}
                    <button
                        type='button'
                        data-trigger='search-modal'
                        className='group hidden h-10 w-72 items-center overflow-hidden rounded-primary bg-slate-100 px-3 shadow-sm dark:border-transparent dark:bg-slate-700 sm:flex'
                    >
                        <Icon.Search className='text-slate-400' width='1em' height='1em' />
                        <span className='ml-2 text-sm text-slate-400'>Search</span>
                    </button>
                    {/* Searchbar Ends */}
                </div>
                {/* Sidebar Toggle & Search Ends */}
                {/* Header Options Starts */}
                <div className='flex items-center'>
                    {/* Language Dropdown Starts */}
                    <div className='dropdown' data-strategy='absolute'>
                        <div className='dropdown-toggle px-3'>
                            <button
                                type='button'
                                className='inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-700 focus:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:text-slate-300'
                            >
                                <span className='fi fi-gb' />
                                <span className='hidden font-medium md:inline-block'>English</span>
                                <span className='inline-block font-medium md:hidden'>EN</span>
                            </button>
                        </div>
                        <div className='dropdown-content mt-3 w-40'>
                            <ul className='dropdown-list'>
                                <li className='dropdown-list-item'>
                                    <button className='dropdown-btn' type='button'>
                                        <span className='fi fi-gb' />
                                        <span className=''>English</span>
                                    </button>
                                </li>
                                <li className='dropdown-list-item'>
                                    <button className='dropdown-btn' type='button'>
                                        <span className='fi fi-de' />
                                        <span className=''>German</span>
                                    </button>
                                </li>
                                <li className='dropdown-list-item'>
                                    <button className='dropdown-btn' type='button'>
                                        <span className='fi fi-gf' />
                                        <span className=''>French</span>
                                    </button>
                                </li>
                                <li className='dropdown-list-item'>
                                    <button className='dropdown-btn' type='button'>
                                        <span className='fi fi-sa' />
                                        <span className=''>Arabic</span>
                                    </button>
                                </li>
                                <li className='dropdown-list-item'>
                                    <button className='dropdown-btn' type='button'>
                                        <span className='fi fi-cn' />
                                        <span className=''>Chinese</span>
                                    </button>
                                </li>
                                <li className='dropdown-list-item'>
                                    <button className='dropdown-btn' type='button'>
                                        <span className='fi fi-bd' />
                                        <span className=''>Bangla</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Language Dropdown Ends */}
                    {/* Dark Mood Toggle Starts */}
                    <div className='dropdown' data-strategy='absolute' id='theme-switcher-dropdown'>
                        <button
                            className='dropdown-toggle px-3 text-slate-500 hover:text-slate-700 focus:text-primary-500 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:text-primary-500'
                            type='button'
                        >
                            <Icon.Moon className='hidden dark:block' width={24} height={24} />
                            <Icon.Sun className='block dark:hidden' width={24} height={24} />
                        </button>
                        <div className='dropdown-content mt-3 w-36'>
                            <ul className='dropdown-list'>
                                <li className='dropdown-list-item'>
                                    <button type='button' className='dropdown-btn' data-theme-mode='light'>
                                        <Icon.Sun width={16} height={16} />
                                        <span>Light</span>
                                    </button>
                                </li>
                                <li className='dropdown-list-item'>
                                    <button type='button' className='dropdown-btn' data-theme-mode='dark'>
                                        <Icon.Moon width={16} height={16} />
                                        <span>Dark</span>
                                    </button>
                                </li>
                                <li className='dropdown-list-item'>
                                    <button type='button' className='dropdown-btn' data-theme-mode='system'>
                                        <Icon.Monitor width={16} height={16} />
                                        <span>System</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Dark Mood Toggle Ends */}
                    {/* Notification Dropdown Starts */}
                    <div className='dropdown -mt-0.5' data-strategy='absolute'>
                        <div className='dropdown-toggle px-3'>
                            <button className='relative mt-1 flex items-center justify-center rounded-full text-slate-500 transition-colors duration-150 hover:text-slate-700 focus:text-primary-500 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:text-primary-500'>
                                <Icon.Bell width={24} height={24} />
                                <span className='absolute -right-1 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-danger-500 text-[11px] text-slate-200'>
                                    5
                                </span>
                            </button>
                        </div>
                        <div className='dropdown-content mt-3 w-[17.5rem] divide-y dark:divide-slate-700 sm:w-80'>
                            <div className='flex items-center justify-between px-4 py-4'>
                                <h6 className='text-slate-800 dark:text-slate-300'>Notifications</h6>
                                <button className='text-xs font-medium text-slate-600 hover:text-primary-500 dark:text-slate-300'>
                                    Clear All
                                </button>
                            </div>
                            <div className='h-80 w-full' data-simplebar>
                                <ul>
                                    <li className='flex cursor-pointer gap-4 px-4 py-3 transition-colors duration-150 hover:bg-slate-100/70 dark:hover:bg-slate-700'>
                                        <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500'>
                                            <Icon.AlertCircle width={20} height={20} />
                                        </div>
                                        <div>
                                            <h6 className='text-sm font-normal'>New order received</h6>
                                            <p className='text-xs text-slate-400'>Order #1234 has been placed</p>
                                            <p className='mt-1 flex items-center gap-1 text-xs text-slate-400'>
                                                <Icon.Clock width='1em' height='1em' />
                                                <span>2 min ago</span>
                                            </p>
                                        </div>
                                    </li>
                                    <li className='flex cursor-pointer gap-4 px-4 py-3 transition-colors duration-150 hover:bg-slate-100/70 dark:hover:bg-slate-700'>
                                        <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-500'>
                                            <Icon.AlertTriangle width={20} height={20} />
                                        </div>
                                        <div>
                                            <h6 className='text-sm font-normal'>High CPU usage</h6>
                                            <p className='text-xs text-slate-400'>CPU usage is at 92%</p>
                                            <p className='mt-1 flex items-center gap-1 text-xs text-slate-400'>
                                                <Icon.Clock width='1em' height='1em' />
                                                <span>5 min ago</span>
                                            </p>
                                        </div>
                                    </li>
                                    <li className='flex cursor-pointer gap-4 px-4 py-3 transition-colors duration-150 hover:bg-slate-100/70 dark:hover:bg-slate-700'>
                                        <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-500'>
                                            <Icon.CheckCircle width={20} height={20} />
                                        </div>
                                        <div>
                                            <h6 className='text-sm font-normal'>Your order has been shipped</h6>
                                            <p className='text-xs text-slate-400'>Order #1234 has been shipped</p>
                                            <p className='mt-1 flex items-center gap-1 text-xs text-slate-400'>
                                                <Icon.Clock width='1em' height='1em' />
                                                <span>10 min ago</span>
                                            </p>
                                        </div>
                                    </li>
                                    <li className='flex cursor-pointer gap-4 px-4 py-3 transition-colors duration-150 hover:bg-slate-100/70 dark:hover:bg-slate-700'>
                                        <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-danger-100 text-danger-500'>
                                            <Icon.XCircle width={20} height={20} />
                                        </div>
                                        <div>
                                            <h6 className='text-sm font-normal'>Something went wrong</h6>
                                            <p className='text-xs text-slate-400'>Order #1234 has been placed</p>
                                            <p className='mt-1 flex items-center gap-1 text-xs text-slate-400'>
                                                <Icon.Clock width='1em' height='1em' />
                                                <span>1 hour ago</span>
                                            </p>
                                        </div>
                                    </li>
                                    <li className='flex cursor-pointer gap-4 px-4 py-3 transition-colors duration-150 hover:bg-slate-100/70 dark:hover:bg-slate-700'>
                                        <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-500'>
                                            <Icon.CheckCircle width={20} height={20} />
                                        </div>
                                        <div>
                                            <h6 className='text-sm font-normal'>Your order has been shipped</h6>
                                            <p className='text-xs text-slate-400'>Order #1234 has been shipped</p>
                                            <p className='mt-1 flex items-center gap-1 text-xs text-slate-400'>
                                                <Icon.Clock width='1em' height='1em' />
                                                <span>10 min ago</span>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='px-4 py-2'>
                                <button className='btn btn-primary-plain btn-sm w-full' type='button'>
                                    <span>View More</span>
                                    <Icon.ArrowRight width='1rem' height='1rem' />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Notification Dropdown Ends */}
                    {/* Profile Dropdown Starts */}
                    <div className='dropdown' data-strategy='absolute'>
                        <div className='dropdown-toggle pl-3'>
                            <button className='group relative flex items-center gap-x-1.5' type='button'>
                                <div className='avatar avatar-circle avatar-indicator avatar-indicator-online'>
                                    <img
                                        className='avatar-img group-focus-within:ring group-focus-within:ring-primary-500'
                                        src='./images/avatar1.png'
                                        alt='Avatar 1'
                                    />
                                </div>
                            </button>
                        </div>
                        <div className='dropdown-content mt-1 w-56 divide-y dark:divide-slate-600'>
                            <div className='px-4 py-3'>
                                <p className='text-sm'>Signed in as</p>
                                <p className='truncate text-sm font-medium'>admin@example.com</p>
                            </div>
                            <div className='py-1'>
                                <Link to='' className='dropdown-link'>
                                    <Icon.User width={18} height={18} className='text-slate-500' />
                                    <span>Profile</span>
                                </Link>
                                <Link to='' className='dropdown-link'>
                                    <Icon.Settings width={18} height={18} className='text-slate-500' />
                                    <span>Settings</span>
                                </Link>
                                <Link to='' className='dropdown-link'>
                                    <Icon.HelpCircle width={18} height={18} className='text-slate-500' />
                                    <span>Support</span>
                                </Link>
                            </div>
                            <div className='py-1'>
                                <form method='POST' action='#'>
                                    <button type='submit' className='dropdown-btn'>
                                        <Icon.LogOut width={18} height={18} className='text-slate-500' />
                                        <span>Sign out</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* Profile Dropdown Ends */}
                </div>
                {/* Header Options Ends */}
            </div>
        </header>
    );
}

export default Header;
