class sharedService {
    isUserLoggedIn = false;
    loggedInStatus = 'pending';
    headerTitle = 'Home';
    constructor() {
    }
    setLoggedInUserStatus = (status) => {
        this.isUserLoggedIn = status;
        if (status)
            this.loggedInStatus = 'LoggedIn';
        else
            this.loggedInStatus = 'Not loggedIn'
    }
    getLoggedInUserStatus = () => {
        return this.loggedInStatus;
    }
}
export default new sharedService();