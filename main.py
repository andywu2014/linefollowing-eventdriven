def 右转PWM():
    pass

def on_forever():
    if pins.digital_read_pin(DigitalPin.P1) == 1 and pins.digital_read_pin(DigitalPin.P2) == 1:
        pass
    elif pins.digital_read_pin(DigitalPin.P1) == 1 and pins.digital_read_pin(DigitalPin.P2) == 0:
        pass
    elif pins.digital_read_pin(DigitalPin.P1) == 0 and pins.digital_read_pin(DigitalPin.P2) == 1:
        pass
    else:
        pass
basic.forever(on_forever)
