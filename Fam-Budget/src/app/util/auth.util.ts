import { environment } from "src/environments/environment";

export const LOCAL_STORAGE = {
    ACCESS_TOKEN: 'FAM_BUDGET_ACCESS_TOKEN',
    REFRESH_TOKEN: 'FAM_BUDGET_REFRESH_TOKEN',
    IDENTITY_TOKEN: 'FAM_BUDGET_IDENTITY_TOKEN',
    ROLE: 'FAM_BUDGET_ROLE',
};

export const ROLE = {
    PRIMARY_USER: 'PRIMARY_USER',
    SECONDARY_USER: 'SECONDARY_USER',
};


export function setUser(data: { idToken: string; accessToken: string }) {
    localStorage.setItem(LOCAL_STORAGE.IDENTITY_TOKEN, data.idToken);
    localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, data.accessToken);
    // localStorage.setItem(LOCAL_STORAGE.REFRESH_TOKEN, data.refreshToken);
    const payLoad = data.accessToken.split('.')[1];
    let group = JSON.parse(base64Decode(payLoad))['cognito:groups'].toString();

    console.log(group)
    if (group.includes(environment.primaryUserGroup)) {
        localStorage.setItem(LOCAL_STORAGE.ROLE, ROLE.PRIMARY_USER);
    } else if (group.includes(environment.secondaryUserGroup)) {
        localStorage.setItem(LOCAL_STORAGE.ROLE, ROLE.SECONDARY_USER);
    }
}

function getIdToken() {
    return localStorage.getItem(LOCAL_STORAGE.IDENTITY_TOKEN)
}

function getAccessToken() {
    return localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN)
}

export function getUserDetails(): any {
    const IdToken = getIdToken();
    const payLoad = IdToken!.split('.')[1];
    console.log(JSON.parse(payLoad))
    const userData = JSON.parse(payLoad);
    const user = {
        email: userData.email || '',
        name: userData.name || ''
    };
    console.log(user)
    return  user;
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
