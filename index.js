// Список курсов
let courses = [{
        name: "Courses in England",
        prices: [0, 100]
    },
    {
        name: "Courses in Germany",
        prices: [500, null]
    },
    {
        name: "Courses in Italy",
        prices: [100, 200]
    },
    {
        name: "Courses in Russia",
        prices: [null, 400]
    },
    {
        name: "Courses in China",
        prices: [50, 250]
    },
    {
        name: "Courses in USA",
        prices: [200, null]
    },
    {
        name: "Courses in Kazakhstan",
        prices: [56, 324]
    },
    {
        name: "Courses in France",
        prices: [null, null]
    },
]

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200]
let requiredRange2 = [50, 350]
let requiredRange3 = [200, null]
let requiredRange4 = [null, null]


function filterRange(range) {
        if (range[0] && !range[1]) {
            return courses.filter(item => item.prices[0] >= range[0])
        }
        else if (!range[0] && range[1]) {
            return courses.filter(item => item.prices[1] && item.prices[1] <= range[1])
        }
        else if (range[0] && range[1]) {
            return courses.filter(item => item.prices[0] >= range[0] && item.prices[1] && item.prices[1] <= range[1])
        }
        return courses.filter(item => item)
}


console.log('requiredRange1 [null, 200]', filterRange(requiredRange1)) // (совпадающие значения)
console.log('requiredRange2 [100, 350]', filterRange(requiredRange2)) // (совпадающие значения)
console.log('requiredRange3 [200, null]', filterRange(requiredRange3)) // (совпадающие значения)
console.log('requiredRange4 [null, null]', filterRange(requiredRange4)) // (совпадающие значения)
