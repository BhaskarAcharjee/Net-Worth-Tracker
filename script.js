function switchTab(tabName) {
    // Load content based on the selected tab
    const contentDiv = document.getElementById('content');
    let content = '';

    switch (tabName) {
        case 'dashboard':
            content = '<h2>Dashboard</h2>';
            break;
        case 'incomeExpense':
            content = '<h2>Income/Expense</h2>';
            break;
        case 'assetsLiabilities':
            content = '<h2>Assets/Liabilities</h2>';
            break;
        case 'debtsLends':
            content = '<h2>Debts/Lends</h2>';
            break;
        case 'trading':
            content = '<h2>Trading</h2>';
            break;
        case 'analysis':
            content = '<h2>Analysis</h2>';
            break;
        case 'settings':
            content = '<h2>Settings</h2>';
            break;
    }

    contentDiv.innerHTML = content;
}
