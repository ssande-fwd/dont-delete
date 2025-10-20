loops.everyInterval(1000, function () {
    serial.writeLine("micro:bit Temperature: " + input.temperature() + "C")
    serial.writeLine("micro:bit Light Level: " + input.lightLevel())
})
