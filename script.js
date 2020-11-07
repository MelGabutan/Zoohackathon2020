function alertTraitor()
{
	alert("Traitor Found!");
}

function nextChar()
{
	// var pan = document.getElementById("panels").children;
	// pan[0].nextElementSibling
	var first = document.getElementById("pan1");
	var second = document.getElementById("content");
	var third = document.getElementById("pan3");
	var fourth = document.getElementById("myJourney2");
	// if(isInViewport(first))
		fourth.scrollIntoView({behavior: "smooth"});
	// else if(isInViewport(second))
	// 	third.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
	// else if(isInViewport(third))
	// 	fourth.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
	
}

function prevChar()
{
// 	var pan = document.getElementById("panels").children;
// 	pan[0].nextElementSibling
	var first = document.getElementById("pan1");
	var second = document.getElementById("content");
	var third = document.getElementById("pan3");
	var fourth = document.getElementById("myJourney2");

	first.scrollIntoView({behavior: "smooth"});

	// for(div of pan)
	// {
	// 	if(isInViewport(div))
	// 	{
	// 		div.previousElementSibling?.scrollIntoView();
	// 	}
	// }
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}