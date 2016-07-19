let ui = {
	renderPosts(posts) {
		let elements = posts.map((post) => {
			let { title, author } = post;
			return articleTemplate(title, author);
		});

		let target = document.querySelector(".container");
		target.innerHTML = elements.join("");
	}
};

function articleTemplate(title, author) {
	let template = 
	`<article class="post">
		<h2 class="post-title">${title}</h2>
		<p class="post-meta">${author}</p>
	</article>`;
	return template;
}




export default ui;