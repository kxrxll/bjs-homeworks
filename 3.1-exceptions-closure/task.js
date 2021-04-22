const parseCount = function (value) {
    const result = Number.parseInt(value);
    if (isNaN(result)) throw new Error("Невалидное значение");
    return result;
}

const validateCount = function (value) {
    try {
        parseCount(value)
    } catch(err) {
        return err;
    }
    return parseCount(value);
}

class Triangle {
    constructor(a, b, c) {
        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        const perimetersHalf = this.getPerimeter() / 2;
        return +(Math.sqrt( perimetersHalf * (perimetersHalf - this.a) * (perimetersHalf - this.b) * (perimetersHalf - this.c)).toFixed(3));
    }
}

const getTriangle = function (a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return {
            getPerimeter: function(){return "Ошибка! Треугольник не существует"},
            getArea: function(){return "Ошибка! Треугольник не существует"}
        }
    }
}