LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
let Xpoint = 20
let Ypont = [
2,
4,
6,
8,
10,
12
]
basic.forever(function () {
    LCD1IN8.DrawRectangle(
    10,
    9,
    150,
    117,
    0,
    DRAW_FILL.DRAW_EMPTY,
    DOT_PIXEL.DOT_PIXEL_1
    )
    basic.showString("" + (input.lightLevel()))
    basic.showString("")
    LCD1IN8.DrawPoint(
    Xpoint,
    input.lightLevel(),
    39638,
    DOT_PIXEL.DOT_PIXEL_4
    )
    LCD1IN8.LCD_Display()
    Xpoint += 20
    if (150 < Xpoint) {
        Xpoint = 20
        LCD1IN8.LCD_Clear()
    }
})
