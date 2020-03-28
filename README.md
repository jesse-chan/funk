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
>#### [jf_intFill](#jf_intFill)
>#### [jf_floatFill](#jf_floatFill)


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

<h4 id="jf_intFill" style="color:red;font-size:20px">Function :</h4>
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



<h4 id="jf_floatFill" style="color:red;font-size:20px">Function :</h4>
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



    
### License
Code released under [the MIT license](./LICENSE)    
