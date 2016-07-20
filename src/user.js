import API from "./API";

let User = {
	findRecent() {
		return API.fetch("activeUsers");
	}
};

export default User;