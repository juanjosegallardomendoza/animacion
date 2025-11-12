input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    retardo += 30
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    retardo -= 30
})
let retardo = 0
retardo = 500
basic.forever(function on_forever() {
    let i: number;
    
    for (i = 0; i < 10; i++) {
        led.toggle(Math.trunc(i / 2), 0)
        pause(retardo)
    }
    for (i = 0; i < 10; i++) {
        led.toggle(Math.trunc(i / 2), Math.trunc(i / 2))
        pause(retardo)
    }
})
