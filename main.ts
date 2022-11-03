let X2point = 0
let Xpoint = 0
let Ypont = 0
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
let Y2point = 0
basic.forever(function () {
    basic.showString("" + (input.lightLevel()))
    Y2point += 4
    Ypont = Y2point
    Xpoint = 128 - Math.round(input.lightLevel() / 2)
    X2point = 128
    LCD1IN8.DrawLine(
    Xpoint,
    Ypont,
    X2point,
    Y2point,
    20083,
    DOT_PIXEL.DOT_PIXEL_4,
    LINE_STYLE.LINE_SOLID
    )
    LCD1IN8.LCD_Display()
})
