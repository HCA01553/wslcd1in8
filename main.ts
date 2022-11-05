let M = 0
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
let Y2point = 0
let Ypoint = 0
let Xpoint = 80
Ypoint = 60
let r = 50
basic.forever(function () {
    M = input.compassHeading()
    M = 180
    basic.showString("" + (M))
    LCD1IN8.DrawCircle(
    Xpoint,
    Ypoint,
    r,
    0,
    DRAW_FILL.DRAW_EMPTY,
    DOT_PIXEL.DOT_PIXEL_1
    )
    LCD1IN8.DrawPoint(
    Xpoint,
    Ypoint,
    0,
    DOT_PIXEL.DOT_PIXEL_3
    )
    LCD1IN8.DrawPoint(
    Xpoint + r * Math.cos(M),
    Ypoint + r * Math.sin(M),
    0,
    DOT_PIXEL.DOT_PIXEL_4
    )
    LCD1IN8.LCD_Display()
    LCD1IN8.DrawLine(
    Xpoint,
    Ypoint,
    Xpoint + r * Math.cos(M),
    Ypoint + r * Math.sin(M),
    0,
    DOT_PIXEL.DOT_PIXEL_1,
    LINE_STYLE.LINE_SOLID
    )
    LCD1IN8.LCD_Display()
})
