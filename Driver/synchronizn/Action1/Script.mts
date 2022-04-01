systemutil.Run("https://demo.opencart.com/")
Browser("Account Logout").Page("Account Logout").WebButton("Continue").WaitProperty "abs_x", ButtonCon, 10000 @@ script infofile_;_ZIP::ssf11.xml_;_
 @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Your Store").Page("Your Store").Link("My Account").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Your Store").Page("Your Store").Link("Login").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Account Login_2").Page("Account Login").WebEdit("email").Set "alalal@gmail.com" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Account Login_2").Page("Account Login").WebEdit("password").SetSecure "62443c804ef4824af9234351c06d92ad95ef7bcf70f67cb5" @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Account Login_2").Page("Account Login").WebButton("Login").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("My Account").Page("My Account").WebButton("1 item(s) - $100.00").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("My Account").Page("My Account").Link("View Cart").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Shopping Cart").Page("Shopping Cart").Link("My Account").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Shopping Cart").Page("Shopping Cart").Link("Logout").Click @@ script infofile_;_ZIP::ssf10.xml_;_
