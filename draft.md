
# TO-DO :
[ ] implement React Routing DOM 
[ ] Implement Edit option for transactions
[ ] Create a Invesment (Stock, Crypto, other invesment) tab
[ ] Implement Profile Settings & Customizations
[ ] When First Time user Signup, all datas are usually empty so write a text such as there is no data to display or add something..etc
--- progress ---
[P] Added User Authentication & Login-Signup
[P] Setup Asset & Libilities frontend & Backend
[P] Create a actual dashboard of net worth (assets-liabilities) & savings (income-expense)
[P] Improve Charts in Analytics tab
--- fixed ---
[X] Deploy in Production Server
[X] Implement Edit option for bank accounts
[X] Expense & Income first 4 items show then show more transactions (clicking that will show others Tranactions)
[X] In Transactions tab all transactions will show (with filter and search)

# Issues :
[ ] Fix Mobile Responsiveness
[ ] Login/Signup?forgotPage off scrollable
[-] Multiple instances of components in the background when navigating between different pages (Login, signup, forgot password) >> use react-router-dom
--- fixed ---
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

# Cash Inventory Json Format :
{
    "user" : userID (fetched),  
    "denomination10" : 0,
    "denomination100" : 0,
    "denomination20" : 0,
    "denomination200" : 0,
    "denomination2000" : 0,
    "denomination5" : 0,
    "denomination50" : 0,
    "denomination500" : 0
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
