Lab 5 - zonej - 660892754
NodeJS, Twitter API, Writing to a file

This lab uses nodejs and the nTwitter and FS modules to read tweets from the twitter streaming API to writed them to a file as json objects so that the file can be used to read into a twitter feed using ajax or getJSON functions. 


Using NodeJS is much different than using just a traditional server. I have much more control over the data that is served and what happens when there is a connection to the server. Writing data to a file is as simple as importing the 'FS' library into nodejs since there is a multitude of events to add. Since it NodeJS is event driven it allows for many events to be launched simultaneously. Using nTwitter made it easy to connect to the twitter API and stream the tweets in real time. When writing the tweets to the file I had to be sure to add the commas in between the data objects as well as add the square brackets so that the data can be read by ajax or getJSON functions. The hardest part about the lab was figuring out how to limit the number of tweets that get written. Currently it is set to 1000 and will then close the file. The server logs output of how many tweets were saved by printing numbers in increments of 10 to the console.


REFERENCES:
FS documentation
	http://nodejs.org/api/fs.html