let M = 0
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
let Y2point = 0
let Ypont = 0
basic.forever(function () {
    M = input.compassHeading()
    basic.showString("" + (M))
    LCD1IN8.DrawCircle(
    80,
    60,
    50,
    0,
    DRAW_FILL.DRAW_EMPTY,
    DOT_PIXEL.DOT_PIXEL_1
    )
    LCD1IN8.DrawPoint(
    80,
    60,
    0,
    DOT_PIXEL.DOT_PIXEL_1
    )
    LCD1IN8.LCD_Display()
    LCD1IN8.DrawLine(
    80,
    60,
    119,
    78,
    0,
    DOT_PIXEL.DOT_PIXEL_1,
    LINE_STYLE.LINE_SOLID
    )
})
