LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
LCD1IN8.DrawRectangle(
3,
3,
157,
125,
10570,
DRAW_FILL.DRAW_EMPTY,
DOT_PIXEL.DOT_PIXEL_3
)
LCD1IN8.LCD_Display()
let Count = 0
let T1 = [
2,
4,
6,
8,
10,
12
]
basic.forever(function () {
    for (let index = 0; index < T1.length; index++) {
        basic.pause(100)
        basic.showNumber(T1[Count])
    }
    Count += 1
})
