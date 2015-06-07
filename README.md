# personal-cron
Cron jobs for meself 

## Server Configuration
I hade to follow [this](https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-ubuntu-12-04?comment=551) tutorial and install `google-chrome` on the server.

	$ cd ~
	$ apt-get install default-jre
	$ apt-get install xvfb
	$ apt-get install unzip
	$ apt-get install libxss1 libappindicator1 libindicator7
	$ wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
	$ dpkg -i google-chrome*.deb

	Install any other required dependencies for google-chrome