def on_button_pressed_a():
    global retardo
    retardo += 30
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global retardo
    retardo -=  30
input.on_button_pressed(Button.B, on_button_pressed_b)

retardo = 0
retardo = 500

def on_forever():
    global retardo
    for i in range(10):
        led.toggle(int(i / 2), 0)
        pause(retardo)

    for i in range(10):
        led.toggle(int(i / 2), int(i / 2))
        pause(retardo)

basic.forever(on_forever)
