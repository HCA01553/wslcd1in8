LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
let Count = 0
let Ypont = [
2,
4,
6,
8,
10,
12
]
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        Count += 1
        LCD1IN8.DrawPoint(
        Count * 10,
        70,
        39638,
        DOT_PIXEL.DOT_PIXEL_3
        )
        LCD1IN8.DrawPoint(
        Count * 4,
        70,
        39638,
        DOT_PIXEL.DOT_PIXEL_4
        )
    }
    LCD1IN8.DrawRectangle(
    10,
    9,
    150,
    117,
    0,
    DRAW_FILL.DRAW_EMPTY,
    DOT_PIXEL.DOT_PIXEL_3
    )
    LCD1IN8.LCD_Display()
})
