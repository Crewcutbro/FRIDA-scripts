
import frida
import sys


# python3 dropper_pid.py <script_name> <package_name>
#
# starts app named <package_name> and
# attaches the script at startup


scriptname = sys.argv[1]
fd = open(scriptname, "r")
procname = sys.argv[2]

def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)

device = frida.get_usb_device()
pid = device.spawn([procname])
session = device.attach(pid)
script = session.create_script(fd.read())
fd.close()
script.on('message', on_message)
script.load()
device.resume(pid)
sys.stdin.read()