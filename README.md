# Funk

A web tool function kits.
Funk contains several usual functions you may use under web enviromment. 

Dependency
---
* jQuery 3.x

API documentation
---
### System/Environment

<h4 style="color:red;">Function :</h4>
jf_client(ua)
    
<h4 style="color:blue;">Description</h4>
get client device type/os/browser
<h4 style="color:blue;">Arguments</h4>

>ua(string) : navigator.userAgent | request.headers['user-agent']

<h4 style="color:blue;">Returns</h4>

>{  
>>device : 'desktop|mobile(phone)|mobile(tablet)',  
>>os : 'Windows|MacOS|iOS|Android|Linux|others',  
>>browser : 'Chrome|Firefox|IE|Edge|Safari|Opera|others'

>}



    
### License
Code released under [the MIT license](./LICENSE)    
