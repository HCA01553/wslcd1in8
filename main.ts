let X2point = 0
let Xpoint = 0
let M = 0
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
let Y2point = 0
let Ypont = 0
basic.forever(function () {
    M = input.lightLevel()
    basic.showString("" + (M))
    Ypont = 128
    Y2point = 128 - Math.round(M / 2)
    Xpoint = Xpoint + 3
    X2point = X2point + 3
    LCD1IN8.DrawLine(
    Xpoint,
    Ypont,
    X2point,
    Y2point,
    56550,
    DOT_PIXEL.DOT_PIXEL_3,
    LINE_STYLE.LINE_SOLID
    )
    LCD1IN8.LCD_Display()
})
