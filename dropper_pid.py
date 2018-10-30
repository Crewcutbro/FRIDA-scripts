
import frida
import sys

# python3 dropper_pid.py <script_name> <pid_number>
#
# attaches the script to a running process at <pid_number>


scriptname = sys.argv[1]
fd = open(scriptname, "r")
pid = sys.argv[2]

def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)

device = frida.get_usb_device()
session = device.attach(int(pid))
script = session.create_script(fd.read())
fd.close()
script.on('message', on_message)
script.load()
sys.stdin.read()