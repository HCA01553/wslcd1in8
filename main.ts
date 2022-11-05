let X2point = 0
let M = 0
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
let Y2point = 0
let Ypoint = 0
let Xpoint = 80
Ypoint = 69
let r = 50
let Pi = 3.14159
basic.forever(function () {
    M = input.compassHeading()
    M = M * (Pi / 180)
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
    DOT_PIXEL.DOT_PIXEL_1
    )
    LCD1IN8.DrawLine(
    Xpoint,
    Ypoint,
    X2point,
    Y2point,
    65535,
    DOT_PIXEL.DOT_PIXEL_1,
    LINE_STYLE.LINE_SOLID
    )
    Y2point = Ypoint + r * Math.cos(M)
    X2point = Xpoint + r * Math.sin(M)
    X2point = Math.round(X2point)
    Y2point = Math.round(Y2point)
    LCD1IN8.DrawLine(
    Xpoint,
    Ypoint,
    X2point,
    Y2point,
    0,
    DOT_PIXEL.DOT_PIXEL_1,
    LINE_STYLE.LINE_SOLID
    )
    LCD1IN8.LCD_Display()
})
