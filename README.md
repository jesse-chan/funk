
# Funk  
  
A web tool function kits.  
Funk contains several usual functions you may use under web enviromment.   
  
Dependency  
---  
* jQuery 3.x  
  
API documentation  
---  
### System/Environment  
>#### [jf_client](#jf-client)  
  
[test](#test-tt)  
  
### String Format  
>#### [jf_intFill](#jf-intfill)  
>#### [jf_floatFill](#jf-floatfill)  
  
### Debug  
>#### [jf_dbgCheck](#jf-dbgcheck)  
>#### [jf_dbgDump](#jf-dbgdump)  
>#### [jf_dbgReset](#jf-dbgreset)  
  
---  
  
### System/Environment  
  
  
<h4 id="jf-client">Function :</h4>  
jf_client(ua)  
<h4>Description</h4>  
get client device type/os/browser  
<h4>Arguments</h4>  

>ua(string) : navigator.userAgent | request.headers['user-agent']  
  
<h4>Returns</h4>

>{  
>>device(string) : 'desktop|mobile(phone)|mobile(tablet)', 
>>os(string) : 'Windows|MacOS|iOS|Android|Linux|others', 
>>browser(string) : 'Chrome|Firefox|IE|Edge|Safari|Opera|others'    

>}  
  
  
  
### String Format  
  
  
<h4 id="jf-intfill">Function :</h4>  
jf_intFill(num, len, stuff = ' ', dir = true)  
<h4>Description</h4>  
output formatted string of integer  
<h4>Arguments</h4>  

>num(string|number) : number to be formatted 
>len(integer) : output string length >stuff : char to be filled if the length is less than len 
>dir(bool) : true for leading filled|false for trail filled   

<h4>Returns</h4>  

> formatted string(string), won't change if the original length greater than len  
  
  
  
<h4 id="jf-floatfill">Function :</h4>  
jf_floatFill(num, len, deciaml = 0, stuff = ' ', dir = true)  
<h4>Description</h4>  
output formatted string of float  
<h4>Arguments</h4>  

>num(string|number) : number to be formatted 
>len(integer) : total length of output string 
>decimal(integer) : counts of decimal, fill 0 if length is less than decimal 
>stuff(string) : char to be filled if the length is less than len 
>dir(bool) ; true for leading fill|false for trail fill   

<h4>Returns</h4>  

> formatted string(string), won't change if the original length greater than len  
  
  
  
### Debug  
  
  
<h4 id="jf-dbgcheck">Function :</h4>  
jf_dbgCheck(tag, mute = false)  
<h4>Description</h4>  
print current timestamp with tag and the interval from last checked point  
<h4>Arguments</h4>  

>tag(string) : tag name >mute(bool) : put data into array without printing to console.   

<h4>Returns</h4>  

> N/A  
  
  
  
<h4 id="jf-dbgdump">Function :</h4>  
jf_dbgDump()  
<h4>Description</h4>  
dump data to console from the beginning  
<h4>Arguments</h4>  

>N/A   

<h4>Returns</h4>  

> N/A  
  
  
  
<h4 id="jf-dbgreset">Function :</h4>  
jf_dbgReset()      
<h4>Description</h4>  
clear checked history  
<h4>Arguments</h4>  

> N/A   

<h4>Returns</h4>  

> N/A  
  
  
  
  
  ### License  
Code released under [the MIT license](./LICENSE)
