//After getting and splitting the class names for the post div,
//this is the index of the country flag.
const flag_index = 1;

/*
*	Blocks amrican flag
*/
const blocked_flags = 
[
	"flag-us"
]

chrome.storage.sync.get(["enabled"], function(val) {
	remove_posts(val["enabled"]);
});

function remove_posts(enabled)
{
	if(enabled == 1)
	{
		var thread_container = document.getElementById("thread-container");
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
			
			if(posts_blocked > 0)
			{
				console.log(`BB9K: Blocked ${posts_blocked} posts.`);
			}
		}
	}
}