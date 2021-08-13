import { environment } from "src/environments/environment";

export const LOCAL_STORAGE = {
    ACCESS_TOKEN: 'FAM_BUDGET_ACCESS_TOKEN',
    REFRESH_TOKEN: 'FAM_BUDGET_REFRESH_TOKEN',
    IDENTITY_TOKEN: 'FAM_BUDGET_IDENTITY_TOKEN',
    ROLE: 'FAM_BUDGET_ROLE',
    ID: 'FAM_BUDGET_ID'
};

export const ROLE = {
    PRIMARY_USER: 'PRIMARY_USER',
    SECONDARY_USER: 'SECONDARY_USER',
};

export let USER_DATA = {
    email:  '',
    name:  '',
    accountNumber: '',
    userId: '',
    role: ''
}
export function setUser(data: { idToken: string; accessToken: string; accountNumber: any }) {
    localStorage.setItem(LOCAL_STORAGE.IDENTITY_TOKEN, data.idToken);
    localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, data.accessToken);
    localStorage.setItem(LOCAL_STORAGE.ID, data.accountNumber)
    // localStorage.setItem(LOCAL_STORAGE.REFRESH_TOKEN, data.refreshToken);
    const payLoad = data.accessToken.split('.')[1];
    let group = JSON.parse(base64Decode(payLoad))['cognito:groups'].toString();

    if (group.includes(environment.primaryUserGroup)) {
        localStorage.setItem(LOCAL_STORAGE.ROLE, ROLE.PRIMARY_USER);
    } else if (group.includes(environment.secondaryUserGroup)) {
        localStorage.setItem(LOCAL_STORAGE.ROLE, ROLE.SECONDARY_USER);
    }

    getUserDetails()
    console.log("SET USER DATA", USER_DATA)
    return 
}

function getIdToken() {
    return localStorage.getItem(LOCAL_STORAGE.IDENTITY_TOKEN)
}

function getAccessToken() {
    return localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN)
}

export function getUserDetails(): void {
    const IdToken = getIdToken();
    const payLoad = IdToken!.split('.')[1];
    const userData = JSON.parse(base64Decode(payLoad));

    USER_DATA.accountNumber = localStorage.getItem(LOCAL_STORAGE.ID)!
    USER_DATA.email = userData.email || ''
    USER_DATA.name = userData.name || ''
    USER_DATA.userId = userData["cognito:username"]
    USER_DATA.role = localStorage.getItem(LOCAL_STORAGE.ROLE)!
}

export function isPrimaryUser() {
    const accessToken = getAccessToken();
    if (accessToken !== null) {
        const payLoad = accessToken.split('.')[1];
        let group = JSON.parse(base64Decode(payLoad))['cognito:groups'].toString();
        if (group.includes(environment.primaryUserGroup)) {
            // localStorage.setItem(LOCAL_STORAGE.ROLE, ROLE.PRIMARY_USER);
            return true;
        }
    }
    return false;
}

export function isSecondaryUser() {
    const accessToken = getAccessToken();
    if (accessToken !== null) {
        const payLoad = accessToken.split('.')[1];
        let group = JSON.parse(base64Decode(payLoad))['cognito:groups'].toString();
        if (group.includes(environment.secondaryUserGroup)) {
        //     localStorage.setItem(LOCAL_STORAGE.ROLE, ROLE.SECONDARY_USER);
            return true;
        }
    }
    return false;
}

export function isAuthenticated(): boolean {
    const accessToken = getAccessToken();
    if (accessToken !== null) {
        return true;
    }
    return false;
}

export function base64Decode(input: string) {
    const bufferObj = Buffer.from(input, "base64");
    const decodedString = bufferObj.toString("utf8");
    return decodedString;
}

export function base64Encode(input: string) {
    const encodedString = Buffer.from(input).toString('base64');
    return encodedString;
}
