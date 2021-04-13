input.onButtonPressed(Button.A, function () {
    encMotor.driveIndef(motorChoice.Left, motorDir.fwd, 50)
    encMotor.driveIndef(motorChoice.Right, motorDir.bak, 50)
    basic.pause(5000)
    encMotor.stop()
})
input.onButtonPressed(Button.AB, function () {
    encMotor.driveIndef(motorChoice.Both, motorDir.fwd, 50)
    basic.pause(5000)
    encMotor.stop()
})
input.onButtonPressed(Button.B, function () {
    encMotor.driveIndef(motorChoice.Right, motorDir.fwd, 50)
    encMotor.driveIndef(motorChoice.Left, motorDir.bak, 50)
    basic.pause(5000)
    encMotor.stop()
})
basic.forever(function () {
	
})
