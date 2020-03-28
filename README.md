# Funk

A web tool function kits.
Funk contains several usual functions you may use under web enviromment. 

Dependency
---
* jQuery 3.x

API documentation
---
### System/Environment
>#### [jf_client](#jf_client)

### String Format
>#### [jf_intFill](#jf_intfill)
>#### [jf_floatFill](#jf_floatfill)

### Debug
>#### [jf_dbgCheck](#jf_dbgcheck)
>#### [jf_dbgDump](#jf_dbgdump)
>#### [jf_dbgReset](#jf_dbgreset)

---

### System/Environment


<h4 id="jf_client" style="color:red;font-size:20px">Function :</h4>

###jf_client(ua)
    
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



### String Format


<h4 id="jf_intfill" style="color:red;font-size:20px">Function :</h4>
jf_intFill(num, len, stuff = ' ', dir = true)
    
<h4 style="color:blue;">Description</h4>
output formatted string of integer
<h4 style="color:blue;">Arguments</h4>

>num(string|number) : number to be formatted   
>len(integer) : output string length   
>stuff : char to be filled if the length is less than len  
>dir ; true for leading filled|false for trail filled  

<h4 style="color:blue;">Returns</h4>

> formatted string, won't change if the original length greater than len



<h4 id="jf_floatfill" style="color:red;font-size:20px">Function :</h4>
jf_floatFill(num, len, deciaml = 0, stuff = ' ', dir = true)
    
<h4 style="color:blue;">Description</h4>
output formatted string of float
<h4 style="color:blue;">Arguments</h4>

>num(string|number) : number to be formatted   
>len(integer) : total length of output string   
>decimal(integer) : counts of decimal, fill 0 if length is less than decimal   
>stuff : char to be filled if the length is less than len  
>dir ; true for leading fill|false for trail fill  

<h4 style="color:blue;">Returns</h4>

> formatted string, won't change if the original length greater than len



### Debug


<h4 id="jf_dbgcheck" style="color:red;font-size:20px">Function :</h4>
jf_dbgCheck(tag, mute = false)
    
<h4 style="color:blue;">Description</h4>
print current timestamp with tag and the interval from last checked point
<h4 style="color:blue;">Arguments</h4>

>tag(string) : tag name   
>mute(bool) : put data into array without printing to console.   

<h4 style="color:blue;">Returns</h4>

> N/A



<h4 id="jf_dbgdump" style="color:red;font-size:20px">Function :</h4>
jf_dbgDump()
    
<h4 style="color:blue;">Description</h4>
Dump data to console from the beginning
<h4 style="color:blue;">Arguments</h4>

>N/A   

<h4 style="color:blue;">Returns</h4>

> N/A



<h4 id="jf_dbgreset" style="color:red;font-size:20px">Function :</h4>
jf_dbgReset()
    
<h4 style="color:blue;">Description</h4>
clear checked history
<h4 style="color:blue;">Arguments</h4>

> N/A   

<h4 style="color:blue;">Returns</h4>

> N/A


    
### License
Code released under [the MIT license](./LICENSE)    
