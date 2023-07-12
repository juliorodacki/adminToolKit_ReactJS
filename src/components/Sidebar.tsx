import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import 'simplebar';

type sidebarProps = {
    toggleSidebar: boolean;
};
function Sidebar(props: sidebarProps) {
    const { toggleSidebar } = props;
    return (
        <aside className={`sidebar ${toggleSidebar ? 'expanded' : 'collapsed'}`}>
            {/* Sidebar Header Starts */}
            <Link to='/'>
                <div className='sidebar-header'>
                    <div className='sidebar-logo-icon'>
                        <img src='./images/logo-small.svg' alt='logo' className='h-[45px]' />
                    </div>
                    <div className='sidebar-logo-text'>
                        <h1 className='flex text-xl'>
                            <span className='font-bold text-slate-800 dark:text-slate-200'> Admin </span>
                            <span className='font-semibold text-primary-500'>Toolkit</span>
                        </h1>
                        <p className='whitespace-nowrap text-xs text-slate-400'>Simple &amp; Customizable</p>
                    </div>
                </div>
            </Link>
            {/* Sidebar Header Ends */}
            {/* Sidebar Menu Starts */}
            <ul className='sidebar-content' data-simplebar>
                {/* Dashboard */}
                <li>
                    <Link to='' className='sidebar-menu active'>
                        <span className='sidebar-menu-icon'>
                            <Icon.Home />
                        </span>
                        <span className='sidebar-menu-text'>Dashboard</span>
                        <span className='sidebar-menu-arrow'>
                            <Icon.ChevronRight />
                        </span>
                    </Link>
                    <ul className='sidebar-submenu'>
                        <li>
                            <Link to='/' className='sidebar-submenu-item active'>
                                Analytics
                            </Link>
                        </li>
                        <li>
                            <Link to='./ecommerce.html' className='sidebar-submenu-item'>
                                Ecommerce
                            </Link>
                        </li>
                    </ul>
                </li>
                <div className='sidebar-menu-header'>Applications</div>
                {/* Email */}
                <li>
                    <Link to='./email.html' className='sidebar-menu'>
                        <span className='sidebar-menu-icon'>
                            <Icon.Mail />
                        </span>
                        <span className='sidebar-menu-text'>Email</span>
                    </Link>
                </li>
                {/* Chat */}
                <li>
                    <Link to='./chat.html' className='sidebar-menu'>
                        <span className='sidebar-menu-icon'>
                            <Icon.MessageSquare />
                        </span>
                        <span className='sidebar-menu-text'>Chat</span>
                    </Link>
                </li>
                {/* Calendar */}
                <li>
                    <Link to='./calendar.html' className='sidebar-menu'>
                        <span className='sidebar-menu-icon'>
                            <Icon.Calendar />
                        </span>
                        <span className='sidebar-menu-text'>Calendar</span>
                    </Link>
                </li>
                {/* Invoice */}
                <li>
                    <Link to='' className='sidebar-menu'>
                        <span className='sidebar-menu-icon'>
                            <Icon.FileText />
                        </span>
                        <span className='sidebar-menu-text'>Invoice</span>
                        <span className='sidebar-menu-arrow'>
                            <Icon.ChevronRight />
                        </span>
                    </Link>
                    <ul className='sidebar-submenu'>
                        <li>
                            <Link to='./invoice-create.html' className='sidebar-submenu-item'>
                                {' '}
                                Create{' '}
                            </Link>
                        </li>
                        <li>
                            <Link to='./invoice-details.html' className='sidebar-submenu-item'>
                                {' '}
                                Details{' '}
                            </Link>
                        </li>
                    </ul>
                </li>
                {/* ecommnerce */}
                <li>
                    <Link to='' className='sidebar-menu'>
                        <span className='sidebar-menu-icon'>
                            <Icon.ShoppingBag />
                        </span>
                        <span className='sidebar-menu-text'>Ecommerce</span>
                        <span className='sidebar-menu-arrow'>
                            <Icon.ChevronRight />
                        </span>
                    </Link>
                    <ul className='sidebar-submenu'>
                        <li>
                            <Link to='./product-list.html' className='sidebar-submenu-item'>
                                {' '}
                                Product List{' '}
                            </Link>
                        </li>
                        <li>
                            <Link to='./product-edit.html' className='sidebar-submenu-item'>
                                {' '}
                                Product Edit{' '}
                            </Link>
                        </li>
                        <li>
                            <Link to='./order-list.html' className='sidebar-submenu-item'>
                                {' '}
                                Order List{' '}
                            </Link>
                        </li>
                        <li>
                            <Link to='./order-details.html' className='sidebar-submenu-item'>
                                {' '}
                                Order Details{' '}
                            </Link>
                        </li>
                        <li>
                            <Link to='./customer-list.html' className='sidebar-submenu-item'>
                                {' '}
                                Customer List{' '}
                            </Link>
                        </li>
                    </ul>
                </li>
                {/* Users */}
                <li>
                    <Link to='' className='sidebar-menu'>
                        <span className='sidebar-menu-icon'>
                            <Icon.Users />
                        </span>
                        <span className='sidebar-menu-text'>Users</span>
                        <span className='sidebar-menu-arrow'>
                            <Icon.ChevronRight />
                        </span>
                    </Link>
                    <ul className='sidebar-submenu'>
                        <li>
                            <Link to='./user-list.html' className='sidebar-submenu-item'>
                                List
                            </Link>
                        </li>
                        <li>
                            <Link to='./profile.html' className='sidebar-submenu-item'>
                                {' '}
                                Profile{' '}
                            </Link>
                        </li>
                    </ul>
                </li>
                {/*  Commponents  */}
                <div className='sidebar-menu-header'>Components</div>
                {/* Common  */}
                <li>
                    <Link to='' className='sidebar-menu'>
                        <span className='sidebar-menu-icon'>
                            <Icon.Box />
                        </span>
                        <span className='sidebar-menu-text'>Common</span>
                        <span className='sidebar-menu-arrow'>
                            <Icon.ChevronRight />
                        </span>
                    </Link>
                    <ul className='sidebar-submenu'>
                        <li>
                            <Link to='./accordion.html' className='sidebar-submenu-item'>
                                {' '}
                                Accordion{' '}
                            </Link>
                        </li>
                        <li>
                            <Link to='./alert.html' className='sidebar-submenu-item'>
                                Alert
                            </Link>
                        </li>
                        <li>
                            <Link to='./avatar.html' className='sidebar-submenu-item'>
                                Avatar
                            </Link>
                        </li>
                        <li>
                            <Link to='./badge.html' className='sidebar-submenu-item'>
                                Badge
                            </Link>
                        </li>
                        <li>
                            <Link to='./button.html' className='sidebar-submenu-item'>
                                Button
                            </Link>
                        </li>
                        <li>
                            <Link to='./card.html' className='sidebar-submenu-item'>
                                Card
                            </Link>
                        </li>
                        <li>
                            <Link to='./carousel.html' className='sidebar-submenu-item'>
                                {' '}
                                Carousel{' '}
                            </Link>
                        </li>
                        <li>
                            <Link to='./drawer.html' className='sidebar-submenu-item'>
                                Drawer
                            </Link>
                        </li>
                        <li>
                            <Link to='./dropdown.html' className='sidebar-submenu-item'>
                                {' '}
                                Dropdown{' '}
                            </Link>
                        </li>
                        <li>
                            <Link to='./list-group.html' className='sidebar-submenu-item'>
                                {' '}
                                List Group{' '}
                            </Link>
                        </li>
                        <li>
                            <Link to='./modal.html' className='sidebar-submenu-item'>
                                Modal
                            </Link>
                        </li>
                        <li>
                            <Link to='./pagination.html' className='sidebar-submenu-item'>
                                {' '}
                                Pagination{' '}
                            </Link>
                        </li>
                        <li>
                            <Link to='./progress-bar.html' className='sidebar-submenu-item'>
                                {' '}
                                Progress{' '}
                            </Link>
                        </li>
                        <li>
                            <Link to='./spinner.html' className='sidebar-submenu-item'>
                                {' '}
                                Spinner{' '}
                            </Link>
                        </li>
                        <li>
                            <Link to='./tabs.html' className='sidebar-submenu-item'>
                                Tab
                            </Link>
                        </li>
                        <li>
                            <Link to='./toast.html' className='sidebar-submenu-item'>
                                Toast
                            </Link>
                        </li>
                        <li>
                            <Link to='./tooltip.html' className='sidebar-submenu-item'>
                                {' '}
                                Tooltip{' '}
                            </Link>
                        </li>
                    </ul>
                </li>
                {/* Forms  */}
                <li>
                    <Link to='' className='sidebar-menu'>
                        <span className='sidebar-menu-icon'>
                            <Icon.Edit />
                        </span>
                        <span className='sidebar-menu-text'>Forms</span>
                        <span className='sidebar-menu-arrow'>
                            <Icon.ChevronRight />
                        </span>
                    </Link>
                    <ul className='sidebar-submenu'>
                        <li>
                            <Link to='./input.html' className='sidebar-submenu-item'>
                                Input
                            </Link>
                        </li>
                        <li>
                            <Link to='./input-group.html' className='sidebar-submenu-item'>
                                {' '}
                                Input Group{' '}
                            </Link>
                        </li>
                        <li>
                            <Link to='./textarea.html' className='sidebar-submenu-item'>
                                {' '}
                                Textarea{' '}
                            </Link>
                        </li>
                        <li>
                            <Link to='./checkbox.html' className='sidebar-submenu-item'>
                                {' '}
                                Checkbox{' '}
                            </Link>
                        </li>
                        <li>
                            <Link to='./radio.html' className='sidebar-submenu-item'>
                                Radio
                            </Link>
                        </li>
                        <li>
                            <Link to='./toggle.html' className='sidebar-submenu-item'>
                                Toggle
                            </Link>
                        </li>
                        <li>
                            <Link to='./select.html' className='sidebar-submenu-item'>
                                Select
                            </Link>
                        </li>
                        <li>
                            <Link to='./datepicker.html' className='sidebar-submenu-item'>
                                {' '}
                                Datepicker{' '}
                            </Link>
                        </li>
                        <li>
                            <Link to='./editor.html' className='sidebar-submenu-item'>
                                Editor
                            </Link>
                        </li>
                        <li>
                            <Link to='./uploader.html' className='sidebar-submenu-item'>
                                {' '}
                                Uploader{' '}
                            </Link>
                        </li>
                        <li>
                            <Link to='./form-layout.html' className='sidebar-submenu-item'>
                                Layout
                            </Link>
                        </li>
                        <li>
                            <Link to='./form-validation.html' className='sidebar-submenu-item'>
                                {' '}
                                Validation{' '}
                            </Link>
                        </li>
                    </ul>
                </li>
                {/* Tables  */}
                <li>
                    <Link to='' className='sidebar-menu'>
                        <span className='sidebar-menu-icon'>
                            <Icon.List />
                        </span>
                        <span className='sidebar-menu-text'>Tables</span>
                        <span className='sidebar-menu-arrow'>
                            <Icon.ChevronRight />
                        </span>
                    </Link>
                    <ul className='sidebar-submenu'>
                        <li>
                            <Link to='./basic-table.html' className='sidebar-submenu-item'>
                                {' '}
                                Basic Table{' '}
                            </Link>
                        </li>
                        <li>
                            <Link to='./data-table.html' className='sidebar-submenu-item'>
                                {' '}
                                Data Table{' '}
                            </Link>
                        </li>
                    </ul>
                </li>
                {/* Charts  */}
                <li>
                    <Link to='./chart.html' className='sidebar-menu'>
                        <span className='sidebar-menu-icon'>
                            <Icon.PieChart />
                        </span>
                        <span className='sidebar-menu-text'>Charts</span>
                    </Link>
                </li>
                {/* Icons*/}
                <li>
                    <Link to='./icons.html' className='sidebar-menu'>
                        <span className='sidebar-menu-icon'>
                            <Icon.Italic />
                        </span>
                        <span className='sidebar-menu-text'>Icons</span>
                    </Link>
                </li>
                {/* Typography*/}
                <li>
                    <Link to='./typography.html' className='sidebar-menu'>
                        <span className='sidebar-menu-icon'>
                            <Icon.Type />
                        </span>
                        <span className='sidebar-menu-text'>Typography</span>
                    </Link>
                </li>
                {/*  Pages  */}
                <div className='sidebar-menu-header'>Pages</div>
                {/* Authentication  */}
                <li>
                    <Link to='' className='sidebar-menu'>
                        <span className='sidebar-menu-icon'>
                            <Icon.Lock />
                        </span>
                        <span className='sidebar-menu-text'>Authentication</span>
                        <span className='sidebar-menu-arrow'>
                            <Icon.ChevronRight />
                        </span>
                    </Link>
                    <ul className='sidebar-submenu'>
                        <li>
                            <Link to='./login.html' className='sidebar-submenu-item'>
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to='./register.html' className='sidebar-submenu-item'>
                                {' '}
                                Register{' '}
                            </Link>
                        </li>
                        <li>
                            <Link to='./recover-password.html' className='sidebar-submenu-item'>
                                {' '}
                                Forgot Password{' '}
                            </Link>
                        </li>
                        <li>
                            <Link to='./reset-password.html' className='sidebar-submenu-item'>
                                {' '}
                                Reset Password{' '}
                            </Link>
                        </li>
                    </ul>
                </li>
                {/* Miscellaneous  */}
                <li>
                    <Link to='' className='sidebar-menu'>
                        <span className='sidebar-menu-icon'>
                            <Icon.Grid />
                        </span>
                        <span className='sidebar-menu-text'>Miscellaneous</span>
                        <span className='sidebar-menu-arrow'>
                            <Icon.ChevronRight />
                        </span>
                    </Link>
                    <ul className='sidebar-submenu'>
                        <li>
                            <Link to='./starter.html' className='sidebar-submenu-item'>
                                {' '}
                                Starter Page{' '}
                            </Link>
                        </li>
                        <li>
                            <Link to='./comming-soon.html' className='sidebar-submenu-item'>
                                {' '}
                                Coming Soon{' '}
                            </Link>
                        </li>
                        <li>
                            <Link to='./maintenance.html' className='sidebar-submenu-item'>
                                {' '}
                                Maintenance{' '}
                            </Link>
                        </li>
                        <li>
                            <Link to='./404-error.html' className='sidebar-submenu-item'>
                                {' '}
                                Error 404{' '}
                            </Link>
                        </li>
                        <li>
                            <Link to='./500-error.html' className='sidebar-submenu-item'>
                                {' '}
                                Error 500{' '}
                            </Link>
                        </li>
                        <li>
                            <Link to='./not-authorized.html' className='sidebar-submenu-item'>
                                {' '}
                                Not Authorized{' '}
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
            {/* Sidebar Menu Ends */}
        </aside>
    );
}

export default Sidebar;
