import API from "./API";

let Post = {
	findAll() {
		return API.fetch("posts");
	}
};

export default Post;