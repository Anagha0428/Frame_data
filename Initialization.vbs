Dim objuft

Set objuft=CreateObject("QuickTest.Application")
objuft.visible=True
objuft.launch
objuft.Open("C:\Users\Admin\Desktop\Capgemini Study Material\Keyboard_driven_framework\Driver\Driver")
objuft.Test.run
objuft.Test.close
objuft.quit
Set objuft=nothing