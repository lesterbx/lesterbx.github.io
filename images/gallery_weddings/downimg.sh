homelink='http://bethhelmstetter.com/wp-content/uploads/2015/01/'
for image in $(cat images.txt); do
	url=$(echo $homelink$(echo $image | cut -f 1-8 -d'-')-100x100.png)
	wget $url
done