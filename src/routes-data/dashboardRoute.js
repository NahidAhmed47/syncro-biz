import { BsGraphUpArrow, BsHouseDoor } from "react-icons/bs";
import { FaChartBar, FaFileSignature, FaIdCard, FaMoneyCheckAlt, FaRegCommentDots, FaRegSun, FaUsers } from "react-icons/fa";
const dashboardRoute = [
    {
        id: '1',
        routeName: 'Home',
        href: '/dashboard',
        icon: <BsHouseDoor className="w-6 h-6 text-white"/>,
    },
    {
        id: '2',
        routeName: 'Sales Analysis',
        href: '/dashboard/sales',
        icon: <BsGraphUpArrow className="w-6 h-6 text-white"/>,
    },
    {
        id: '3',
        routeName: 'Manage Orders',
        href: '/dashboard/orders',
        icon: <FaRegSun className="w-6 h-6 text-white"/>,
    },
    {
        id: '4',
        routeName: "Today's Report",
        href: '/dashboard/today-report',
        icon: <FaFileSignature className="w-6 h-6 text-white"/>,
    },
    {
        id: '5',
        routeName: 'Suppliers',
        href: '/dashboard/suppliers',
        icon: <FaIdCard className="w-6 h-6 text-white"/>,
    },
    {
        id: '6',
        routeName: 'Employees',
        href: '/dashboard/employees',
        icon: <FaUsers className="w-6 h-6 text-white"/>,
    },
    {
        id: '7',
        routeName: 'Stocks Report',
        href: '/dashboard/stocks',
        icon: <FaChartBar className="w-6 h-6 text-white"/>,
    },
    {
        id: '8',
        routeName: 'Expenses Analysis',
        href: '/dashboard/expenses',
        icon: <FaMoneyCheckAlt className="w-6 h-6 text-white"/>,
    },
    
    {
        id: '9',
        routeName: "Messages",
        href: '/dashboard/messages',
        icon: <FaRegCommentDots className="w-6 h-6 text-white"/>,
    }
]

export default dashboardRoute;