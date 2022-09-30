let strip = neopixel.create(DigitalPin.P4, 10, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showRainbow(1, 360)
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 3; index++) {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(1000)
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            basic.pause(1000)
        }
    }
})
