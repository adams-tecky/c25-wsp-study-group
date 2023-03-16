class Book {
  id: number;
  title: string;
  genre: string;
  author: string;
  isRead: boolean;
  readDate: Date | null;
  constructor(titleInput: string, genreInput: string, authorInput: string) {
    this.id = new Date().getTime();
    this.title = titleInput;
    this.genre = genreInput;
    this.author = authorInput;
    this.isRead = false;
    this.readDate = null;
  }
}

class BookList {
  numRead: number;
  numNotRead: number;
  nextBook: Book | null;
  currBook: Book | null;
  lastBook: Book | null;
  bookArray: Array<Book>;

  constructor(booksInput?: Array<Book> | Book) {
    if (booksInput) {
      if (Array.isArray(booksInput)) {
        this.numRead = 0;
        this.numNotRead = booksInput.length;
        if (booksInput.length > 1) {
          this.nextBook = booksInput[1];
        } else {
          this.nextBook = null;
        }

        this.currBook = booksInput[0];
        this.lastBook = null;
        this.bookArray = booksInput;
      } else {
        this.numRead = 0;
        this.numNotRead = 1;
        this.nextBook = null;
        this.currBook = booksInput;
        this.lastBook = null;
        this.bookArray = [booksInput];
      }
    } else {
      this.numRead = 0;
      this.numNotRead = 0;
      this.nextBook = null;
      this.currBook = null;
      this.lastBook = null;
      this.bookArray = [];
    }
  }

  add(book: Book) {
    this.bookArray.push(book);
    
    if(!this.currBook){
        this.currBook = book
    }else if(!this.nextBook ){
        this.nextBook = book
    }

    this.numNotRead++
  }

  finishCurrentBook() {
    if (this.bookArray.length < 1) {
      console.log("there is no current book,please add new book to list");
      // return
    } else {
      if (this.currBook) {
        this.currBook.isRead = true;
        this.currBook.readDate = new Date();
        this.lastBook = this.currBook;
        this.numNotRead--;
        this.numRead++;

        if (this.nextBook) {
          this.currBook = this.nextBook;
          if (this.bookArray[this.numRead + 1])
            this.nextBook = this.bookArray[this.numRead + 1];
          else this.nextBook = null;
        }else{
            this.currBook = null
        }
      }
    }

    // console.log("the latest book list is",this.bookArray)
  }
}


let BookA = new Book('Cooking Mama','Cook','Nintendo')
let BookB = new Book('Harry Potter','Novel','JK')

let List1 = new BookList(BookA)

console.log("=======================")
// List1.add(BookA)
// List1.add(BookB)

console.log(List1)
console.log("=======================")
List1.finishCurrentBook()
console.log(List1)