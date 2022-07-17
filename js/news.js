
    var pace = 5000; //Pace show

//News and links
const news = [
  {
    news: "Lorem ipsum dolor sit amexa  adipiscing elit. ",
    link: "https://www.lipsum.com/news1"
  },
  {
    news: "Mauris in euismod lacus, in elementum mauris nec sem sagittis",
     link: "https://www.lipsum.com/news1"
  },
    {
    news: "Fusce egestas orci elit, sed maximus dolor vestibulum nec.",
     link: "https://www.lipsum.com/news1"
  },
    {
    news: "In tincidunt ullamcorper justo, nec venenatis sapien dictum et. ",
    link: "https://www.lipsum.com/news1"
  },
];



const shownews = news.map((key) => key.news);
const newslink = news.map((key) => key.link);

//Show News and links
function allnews() {
  for (let i = 0; i < news.length; i++) {
    setTimeout(function () {
      $("#text").fadeOut("slow", function () {
        $("#text").html("<a href=" + newslink[i] + ">" + shownews[i] + "</a>");
      });
      $("#text").fadeIn();
    }, pace * i);
}
  }
allnews();
