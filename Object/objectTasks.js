// const books = {
//     title: "take me home",
//     description: "is about a girl",
//     numberOfPages: 218,
//     author: "adewale",
//     reading: true
// }
// console.log(books)
const books = {
    title: "take me home",
    description: "is about a girl",
    numberOfPages: 218,
    author: "adewale",
    reading: false,
    toggleReadingStatus: function(){
        if (books.reading ===true)
            books.reading =false
            else {
                books.reading = true
            }
    }
}
 books.toggleReadingStatus()
console.log(books.reading)