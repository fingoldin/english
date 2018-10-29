function checkVisible(elm)
{
        var rect = elm.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function newComment()
{

}

function onscrollCallback()
{
        var lis = document.getElementById("comments-list").getElementsByTagName("LI");

        for(var i = 0; i < lis.length; i++)
        {
                if(checkVisible(lis[i]))
                        lis[i].classList.remove("comment-li-loading");
                else
                        lis[i].classList.add("comment-li-loading");
        }
}

function toggleInfo(e)
{
        e.classList.toggle("hidden-info-disabled");
}

