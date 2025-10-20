# Microsense Data Streaming

```template
loops.everyInterval(1000, function () {
    serial.writeLine("micro:bit Temperature: " + input.temperature() + "C")
    serial.writeLine("micro:bit Light Level: " + input.lightLevel())
})
```

## Introduction

This tutorial will cover sending micro:bit temperature and light level data 
to the computer through a USB connection.


## The Serial blocks

The ``||serial:write line||`` block is what allows sending live data over USB.
We can use an ``||loops:every||`` block to send data every second.

## Creating a Data Message

To make our data readable, we need to attach labels.
We use the ``||text:join||`` block to combine a label with the sensor reading.

## Forward Education Sensors

To stream data from Forward Education micro:bit accessories
simply load the appropriate Forward Education extension
and use the associated sensor blocks.

## Wrapping Up

Click next to complete the tutorial and edit the sample program.
Or download it to your micro:bit right away. It will work as is.
