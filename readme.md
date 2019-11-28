# Espruino esp32

https://www.npmjs.com/package/espruino
npm install -g espruino

upload firmware:
need esptool
$ pip install esptool
$ esptool.py                                        \
        --chip esp32                                \
        --port /dev/tty.SLAB_USBtoUART              \
        --baud 921600                               \
        --after hard_reset write_flash              \
        -z                                          \
        --flash_mode dio                            \
        --flash_freq 40m                            \
        --flash_size detect                         \
        0x1000  bootloader.bin                      \
        0x8000  partitions_espruino.bin             \
        0x10000 espruino_esp32.bin


get port list:
$ espruino --list
connect: 
$ espruino -p /dev/tty.SLAB_USBtoUART -b 115200
upload code:
$ espruino -p /dev/tty.SLAB_USBtoUART -b 115200 -m blink/index.js  
with save: 
$ espruino -p /dev/tty.SLAB_USBtoUART -b 115200 blink/index.js -e "save()"

