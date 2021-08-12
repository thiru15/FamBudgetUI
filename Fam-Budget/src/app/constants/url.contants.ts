export const API_URL = {
    BASE_URL: 'https://ll2ia2fwd0.execute-api.us-east-1.amazonaws.com/dev/',
    SIGNUP: 'auth/signup',
    LOGIN: 'auth/login',
    
    GET_TRANSACTIONS: 'transaction/getTransaction',
    GET_SECONDARY_USERS: 'secondaryaccount/get/all',
    GET_CARDS: 'card/get',
    GET_MONTHLY_REPORTS: 'reports/getMonthly',
    GET_BALANCE: 'reports/getBalance',
    GET_RECENT_TRANSACTION: 'reports/getRecentTransactions',
    GET_POLICY: 'policy/get',
    GET_DOWNLOADS: 'transaction/download',

    CREATE_TRANSACTION: 'transaction/createTransaction',
    PRIMARY_SIGNUP: 'auth/signup',
    POST_LOGIN: 'auth/login',
    FORGOT_PASSWORD: 'auth/forgotPassword',
    CONFIRM_PASSWORD: 'auth/confirmPassword',
    RESET_TEMPORARY: 'auth/resetTemporaryPassword',
    SECONDARY_SIGNUP: 'secondaryaccount/create',
    SECONDARY_USER_DISABLE: 'secondaryaccount/delete',
    CREATE_CARD: 'card/create',
    CREATE_POLICY: 'policy/create',
    UPDATE_POLICY: 'policy/update',
    UPDATE_KYC_PRIMARY: 'accountHolder/updateKyc',
    DELETE_SECONDARY_USER: 'secondaryaccount/delete'

}





