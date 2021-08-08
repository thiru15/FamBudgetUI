export const LOCAL_STORAGE = {
    ACCESS_TOKEN: 'ACCESS_TOKEN',
    REFRESH_TOKEN: 'REFRESH_TOKEN',
    IDENTITY_TOKEN: 'IDENTITY_TOKEN',
    ROLE: 'ROLE',
};

export const ROLE = {
    PRIMARY_USER: 'PRIMARY_USER',
    SECONDARY_USER: 'SECONDARY_USER',
};

export function setUser(data: { accessToken: any; idToken: any; refreshToken: any; is_primary : number; }) {
    for (var item in localStorage) {
        //   if (item.split('.').slice(-1)[0] == 'accessToken') {
        //     localStorage[item] = data.accessToken;
        //   } else if (item.split('.').slice(-1)[0] == 'idToken') {
        //     localStorage[item] = data.idToken;
        //   } else if (item.split('.').slice(-1)[0] == 'refreshToken') {
        //     localStorage[item] = data.refreshToken;
        //   }
        console.log(item)
    }
    if (data.is_primary === 1) {
        localStorage.setItem(LOCAL_STORAGE.ROLE, ROLE.PRIMARY_USER);
    } else {
        localStorage.setItem(LOCAL_STORAGE.ROLE, ROLE.SECONDARY_USER);
    }
}

function getIdToken() {
    for (var item in localStorage) {
        if (item.split('.').slice(-1)[0] == 'idToken') {
            return localStorage[item];
        }
    }
    return null;
}

function getAccessToken() {
    for (var item in localStorage) {
        if (item.split('.').slice(-1)[0] == 'accessToken') {
            return localStorage[item];
        }
    }
    return null;
}

export function getUserDetails(): any {
    const IdToken = getIdToken();
    const payLoad = IdToken.split('.')[1];
    const userData = JSON.parse(payLoad);
    // const user = {
    //     email: userData.email,
    // };
    return  "";
}

export function isPrimaryUser() {
    const accessToken = getAccessToken();
    if (accessToken !== null) {
        const payLoad = accessToken.split('.')[1];
        // let group = JSON.parse(base64Decode(payLoad))['cognito:groups'].toString();
        // if (group.includes(environment.adminGroupName)) {
            return true;
        // }
    }
    return false;
}

export function isSecondaryUser() {
    const accessToken = getAccessToken();
    console.log('entering ')
    if (accessToken !== null) {
        const payLoad = accessToken.split('.')[1];
        // let group = JSON.parse(base64Decode(payLoad))['cognito:groups'].toString();
        // if (group.includes(environment.userGroupName)) {
            return true;
        // }
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