const qodQuote = $("#qodQuote");
const qodAuthor = $("#qodAuthor");
async function getQuote() {
  $.ajax({
    url: "https://quotes.rest/qod.json?category=inspire",
    method: "GET"
  }).then(data => {
    console.log(data);
    console.log(data.contents.quotes[0].quote);
    console.log(data.contents.quotes[0].author);
    qodQuote.text(`"${data.contents.quotes[0].quote}"`);
    qodAuthor.text(data.contents.quotes[0].author);
  });
}

getQuote();
