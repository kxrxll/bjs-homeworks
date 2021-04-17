class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name,
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state *= 1.5;
    }
    set state(newState){
        if (newState < 0) {
            this.state = 0;
        } else if (newState > 100) {
            this.state = 100;
        } else {
            this._state = newState;
        }
    }
    get state(){
        return this._state;
    }

}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount),
        this.type = "magazine"
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount),
            this.author = author;
            this.type = "book"
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel"
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type ="fantastic"
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type ="detective"
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        let searchItem = null;
        for (let i = 0 ; i < this.books.length ; i++) {
            if (this.books[i][type] === value) {
                searchItem = this.books[i];
            }
        }
        return searchItem;
    }
    giveBookByName(bookName) {
        let item = this.findBookBy("name", bookName);
        this.books.splice(this.books.indexOf(item), 1);
        return item;
    }
}

class StudentLog {
    constructor(name) {
        this.name = name;
    }
    getName(){
        return this.name;
    }
    addGrade(grade, subject) {
        if (this.hasOwnProperty([subject]) === false) {
            this[subject] = [];
        }
        if (grade > 5 || grade < 1 || isNaN(grade)) {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
            return this[subject].length;
        }
        this[subject].push(grade);
        return this[subject].length;
    }
    getAverageBySubject(subject) {
        let overall = 0;
        for (let i = 0 ; i < this[subject].length ; i++) {
            overall += this[subject][i];
        }
        return overall / this[subject].length;
    }
    getTotalAverage() {
        let sum = 0;
        let counter = 0;
        for (const property in this) {
            if (property !== 'name') {
                sum += this.getAverageBySubject(property);
                counter ++;
            }
        }
        return sum / counter;
    }
}
