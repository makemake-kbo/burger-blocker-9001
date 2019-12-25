//After getting and splitting the class names for the post div,
//this is the index of the country flag.
const flag_index = 1;

//All flags that get blocked. Also included UN
const blocked_flags = 
[
	"flag-gb", "flag-at", "flag-pl", "flag-dk",
	"flag-un", "flag-se", "flag-be", "flag-fr",
	"flag-en", "flag-fi", "flag-eu", "flag-nl",
	"flag-cz"
]


var thread_container = document.getElementById("thread-container");
var index_to_remove = [];
if(thread_container)
{
	var post_array = thread_container.getElementsByClassName("post");
	var remove_posts = [];
	var posts_blocked = 0;

	for (let post of post_array)
	{
		let flag = post.querySelector(".post-header .flag").className.split(" ")[flag_index];
		if(blocked_flags.includes(flag))
		{
			remove_posts.push(post);
			posts_blocked++;
		}
	}
	
	while(remove_posts.length > 0)
	{
		let post = remove_posts.shift();
		post.parentNode.removeChild(post);
	}
	
	console.log(`Blocked ${posts_blocked} posts.`);
}