# Espruino ESP32

[espruino npm](https://www.npmjs.com/package/espruino)

`
npm install -g espruino
`

[esptool.py](https://github.com/espressif/esptool)

`
$ pip install esptool
`
```
$ esptool.py                                       	\
        --chip esp32                                	\
        --port /dev/tty.SLAB_USBtoUART                  \
        --baud 921600                               	\
        --after hard_reset write_flash                  \
        -z                                          	\
        --flash_mode dio                            	\
        --flash_freq 40m                            	\
        --flash_size detect                         	\
        0x1000  bootloader.bin                      	\
        0x8000  partitions_espruino.bin                 \
        0x10000 espruino_esp32.bin
```

get port list:
`
$ espruino --list
`

connect: 
`
$ espruino -p /dev/tty.SLAB_USBtoUART -b 115200
`

upload code:
`
$ espruino -p /dev/tty.SLAB_USBtoUART -b 115200 -m blink/index.js
`

with save:
`
$ espruino -p /dev/tty.SLAB_USBtoUART -b 115200 blink/index.js -e "save()"
`


![esp32](https://raw.githubusercontent.com/Belvedersky/espruino-esp32/master/esp32_devkit_v1.png)
### ESP32 Features⇠

- 240 MHz dual core Tensilica LX6 microcontroller

- Built-in Wifi and Bluetooth (classic and BLE)
- 2.2V to 3.6V operating voltage
- 32 GPIO pins:
	- 3x UARTs, including hardware flow control
	- 3x SPI
 	- 2x I2S
	- 12x ADC input channels
	- 2x DAC
	- 2x I2C
	- PWM/timer input/output available on every GPIO pin
	- Supports external SPI flash up to 16 MB
	- SD-card interface support
- Sensors: Ultra-low noise analog amplifier, Hall sensor, 10x capacitive touch interface, 32 kHz crystal oscillator
