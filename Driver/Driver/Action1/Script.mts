'Datatable.AddSheet "Module"
'Datatable.ImportSheet "C:\Users\Admin\Desktop\Capgemini Study Material\Keyboard_driven_framework\Organizer\organizer.xlsx",1,"Module"
Services.StartTransaction "trans1"
mrowcount = Datatable.GetSheet("Action1").GetRowCount
'msgbox "success"
For i = 1 To mrowcount step 1 	
	Datatable.SetCurrentRow(i)
	Modexe = Datatable("ModuleExe","Action1")
	'msgbox modexe

If Modexe="Y" Then
	Modid = Datatable("ModuleID","Action1")
	msgbox Modid
	trowcount = Datatable.GetSheet("Action2").GetRowCount
	'msgbox trowcount
	
For j=1 To trowcount step 1
	Datatable.SetCurrentRow(j)
	
If Modid=Datatable("ModuleID","Action2") and Datatable("TestCaseExe","Action2")="Y" then
	tcaseid = Datatable("TestCaseID","Action2")
	msgbox tcaseid
	tsrowcount = Datatable.GetSheet("Action3").GetRowCount
	msgbox tsrowcount
	
For k=1 To tsrowcount step 1
	Datatable.SetCurrentRow(k)
	
If tcaseid = Datatable("TestCaseID","Action3") Then
	keyword = Datatable("Keyword","Action3")
	msgbox keyword
	
	Select Case  (Keyword)
		case "ln"
		Call Login("john","hp")
		Case "ca"
		Call CloseApp()
		Case "oo"
		Call OpenOrder()
		Case "uo"
		Call UpdateOrder()
		
		Case "lnd"
		drowcount = Datatable.GetSheet("Action4").GetRowCount
For l=1 To  drowcount step 1
		Datatable.SetCurrentRow(l)
		Call Login(Datatable("username","Action4"),Datatable("password","Action4"))
		
		Call CloseApp()
			
		Next
		
		Case "ood"
		orrowcount = Datatable.GetSheet("Action4").GetRowCount
For m = 1 To orrowcount Step 1
		Datatable.SetCurrentRow(m)
			Call OpenOrder(datatable("orderno","Action4"))
		Next
			
	End Select
		
End If
	
Next
		
End If

Next

End If

Next

 Services.EndTransaction "trans1"
 
 
 @@ hightlight id_;_2054095400_;_script infofile_;_ZIP::ssf28.xml_;_
 @@ hightlight id_;_1898484104_;_script infofile_;_ZIP::ssf43.xml_;_
 @@ hightlight id_;_1919958848_;_script infofile_;_ZIP::ssf31.xml_;_

