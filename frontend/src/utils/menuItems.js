import {
  dashboard,
  expenses,
  transactions,
  incomes,
  assets,
  liabilities,
  investment,
  analytics,
  debts,
} from "../utils/Icons";

export const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: dashboard,
    link: "/dashboard",
    active: true, // Set active to true for the default active menu item
  },
  {
    id: 2,
    title: "View Transactions",
    icon: transactions,
    link: "/transactions",
    active: false,
  },
  {
    id: 3,
    title: "Incomes",
    icon: incomes,
    link: "/income",
    active: false,
  },
  {
    id: 4,
    title: "Expenses",
    icon: expenses,
    link: "/assets",
    active: false,
  },
  {
    id: 5,
    title: "Assets",
    icon: assets,
    link: "/dashboard",
    active: false,
  },
  {
    id: 6,
    title: "Investment & Trading",
    icon: investment,
    link: "/investment-trading",
    active: false,
  },
  {
    id: 7,
    title: "Liabilities",
    icon: liabilities,
    link: "/liabilities",
    active: false,
  },
  {
    id: 8,
    title: "Debts & Lends",
    icon: debts,
    link: "/debts-lends",
    active: false,
  },
  {
    id: 9,
    title: "Analytics",
    icon: analytics,
    link: "/analytics",
    active: false,
  },
];
