import {dashboard, expenses, transactions, incomes, assets, liabilities, investment, analytics} from '../utils/Icons'

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: "View Transactions",
        icon: transactions,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Incomes",
        icon: incomes,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Expenses",
        icon: expenses,
        link: "/dashboard",
    },
    {
        id: 5,
        title: "Assets",
        icon: assets,
        link: "/dashboard",
    },
    {
        id: 6,
        title: "Investments & Trading",
        icon: investment,
        link: "/dashboard",
    },
    {
        id: 7,
        title: "Liabilities",
        icon: liabilities,
        link: "/dashboard",
    },
    {
        id: 8,
        title: "Analytics",
        icon: analytics,
        link: "/dashboard",
    },
]