
# TO-DO :
[ ] implement React Routing DOM 
[ ] Implement Edit option for transactions
[ ] Added User Authentication & Login-Signup
[P] Setup Asset & Libilities frontend & Backend
[P] Create a actual dashboard of net worth (assets-liabilities) & savings (income-expense)
[ ] Create a Invesment (Stock, Crypto, other invesment) tab
[ ] Implement Profile Settings & Customizations
[ ] Deploy in Production Server
[ ] Improve Charts in Analytics tab
[X] Implement Edit option for bank accounts
[X] Expense & Income first 4 items show then show more transactions (clicking that will show others Tranactions)
[X] In Transactions tab all transactions will show (with filter and search)

# Issues :
[ ] Multiple instances of components in the background when navigating between different pages (Login, signup, forgot password) >> use react-router-dom
[X] Sync all calculations
[X] Fix Calculation for Total Value for Individual Cash
[X] Handle Error message (backend error validations not showing)
[X] Cash Inventory Notes negative value & number validations not set

# Income-Expense Json Format :
{
    "title" : "Test Title",
    "amount" : "1000",
    "category" : "Test Category",
    "description" : "Test Description",
    "date" : "10-10-2023"
}

# Expense categories:
Travel & Transport
Recharge & Bill Payments
Education
Entertainment
Food & Drink
Health & Fitness
Investment & Trading
Rent/Debt
Shopping
Home & Utilities
Money Transfer
Uncategorized

# Income categories:
Money Recieved
Investment Profit
Cashback
Gift/Vouchers
Game Money
Freelancing
Uncategorized