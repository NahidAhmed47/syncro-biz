import { BsFillDatabaseFill } from "react-icons/bs";
const dashboardRoute = [
    {
        id: '1',
        routeName: 'Overview',
        href: '/overview',
        icon: <BsFillDatabaseFill className="w-5 h-5"/>,
    },
    {
        id: '2',
        routeName: 'Sales Analysis',
        href: '/sales',
        icon: <BsFillDatabaseFill className="w-5 h-5"/>,
    },
    {
        id: '3',
        routeName: 'Manage Orders',
        href: '/orders',
        icon: <BsFillDatabaseFill className="w-5 h-5"/>,
    },
    {
        id: '4',
        routeName: 'Suppliers',
        href: '/suppliers',
        icon: <BsFillDatabaseFill className="w-5 h-5"/>,
    },
    {
        id: '5',
        routeName: 'Employees',
        href: '/employees',
        icon: <BsFillDatabaseFill className="w-5 h-5"/>,
    },
    {
        id: '6',
        routeName: 'Stocks Report',
        href: '/stocks',
        icon: <BsFillDatabaseFill className="w-5 h-5"/>,
    },
    {
        id: '7',
        routeName: 'Expenses Analysis',
        href: '/expenses',
        icon: <BsFillDatabaseFill className="w-5 h-5"/>,
    },
    {
        id: '8',
        routeName: "Today's Report",
        href: '/today-report',
        icon: <BsFillDatabaseFill className="w-5 h-5"/>,
    },
    {
        id: '9',
        routeName: "Messages",
        href: '/messages',
        icon: <BsFillDatabaseFill className="w-5 h-5"/>,
    }
]

export default dashboardRoute;