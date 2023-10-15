# URL : Uniform Resource Locator 

https : //www.sonustar.dev/

https :// -> protocol : hypertext Transfer Protocol Secure 
Domain = www.sonustar.dev/

Paths : www.sonustar/
Nested Path : www.sonustar/contact-us

Paths : www.sonustar/about?userId=1&a=2 
?userId=1&a=2 = after question mark rest are the Query parameters .

url works in key value pair : 

eg : https://www.youtube.com/results?search_query=tic+tac+toe+

key : search_query
value : tic+tac+toe+

key ko acces karne k lia req.query."key_value" eg : for above req.query.search_query

----------------------------------------------------------------------

# HTTP Methods :

- HTTP GET : when you want to get some data from the server .

   http get request ----------------------> Server 
            client  <---------------------- 
                       200 response 

- HTTP POST : when you want to send and mutate the data in the server .

 eg : when you enter a data in a sign up form and send the data to the  server .

 - HTTP PUT : Server mai koi file upload karna .
 - HTTP PATCH : server per mera already mera data haa mujjhe kuch changes karna haa !! uslia 
 - HTTP DELETE : I want to delete the data from the server !!

 ------------------------------------------------------------------------