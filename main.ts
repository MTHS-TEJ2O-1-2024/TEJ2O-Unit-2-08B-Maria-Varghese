/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Maria
 * Created on: Sep 2024
 * This program makes RGB LED scrolls through the colors it can procuce
*/

//setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

//turn on the LED
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.showString('red')
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)

    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.showString('green')
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)

    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString('blue')
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)

    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.showString('yellow')
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)

    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString('cyan')
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)

    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString('purple')
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)

    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString('white')
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)

})

