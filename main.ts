control.onEvent(EventBusSource.MICROBIT_ID_IO_P2, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        右转PWM()
        动作 = "右转"
    } else {
        停止()
        动作 = "停止"
    }
})
function 右转 () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
}
function 左转 () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function 右转PWM () {
    pins.analogSetPeriod(AnalogPin.P13, 20000)
    pins.analogWritePin(AnalogPin.P13, PWM)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function 直行 () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function 直行PWM () {
    pins.analogSetPeriod(AnalogPin.P13, 20000)
    pins.analogWritePin(AnalogPin.P13, PWM)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.analogSetPeriod(AnalogPin.P15, 20000)
    pins.analogWritePin(AnalogPin.P15, PWM)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function 左转PWM () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.analogSetPeriod(AnalogPin.P15, 20000)
    pins.analogWritePin(AnalogPin.P15, PWM)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
control.onEvent(EventBusSource.MICROBIT_ID_IO_P1, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        停止()
        动作 = "停止"
    } else {
        左转PWM()
        动作 = "左转"
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P2, EventBusValue.MICROBIT_PIN_EVT_FALL, function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        直行PWM()
        动作 = "直行"
    } else {
        左转PWM()
        动作 = "左转"
    }
})
function 停止 () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
control.onEvent(EventBusSource.MICROBIT_ID_IO_P1, EventBusValue.MICROBIT_PIN_EVT_FALL, function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        直行PWM()
        动作 = "直行"
    } else {
        右转PWM()
        动作 = "右转"
    }
})
let 动作 = ""
let PWM = 0
PWM = 350
pins.setEvents(DigitalPin.P1, PinEventType.Edge)
pins.setEvents(DigitalPin.P2, PinEventType.Edge)
basic.forever(function () {
    if (动作 == "左转") {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (动作 == "右转") {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (动作 == "直行") {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
})
