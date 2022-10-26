function light_numbers (num: number) {
    if (num < 6) {
        x = num - 1
        y = 0
    } else if (num >= 6 && num < 10) {
        x = 4
        y = num - 5
    } else if (num >= 10 && num < 14) {
        x = 13 - num
        y = 4
    } else if (num >= 14 && num < 17) {
        x = 0
        y = 17 - num
    } else if (num >= 17 && num < 20) {
        x = num - 16
        y = 1
    } else if (num >= 20 && num < 22) {
        x = 3
        y = num - 18
    } else if (num >= 22 && num < 24) {
        x = 24 - num
        y = 3
    } else if (num >= 24 && num < 26) {
        x = num - 23
        y = 2
    }
    led.plot(x, y)
}
let a = 0
let y = 0
let x = 0
let num = 0
led.plot(0, 0)
num = 0
basic.forever(function () {
    a += 1
    num += 1
    light_numbers(a)
    basic.pause(100)
})
