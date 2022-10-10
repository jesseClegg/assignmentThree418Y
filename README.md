# Front End Deploy ReadMe
#softwareEngineering

* The Following project can be found on GitHub here: [GitHub - jesseClegg/assignmentThree418Y](https://github.com/jesseClegg/assignmentThree418Y)
***
* The Project consists of a React app styled using bootstrap with a row and column layout that matches the specified deliverable from the assignment document.
***
* Image For the profile picture is hosted on AWS S3 at the url of: https://s3forninad.s3.amazonaws.com/jeffreyDahmer.jpg
***
* The Server Hosting this App is an AWS EC2 instance that is running Ubuntu for the OS.  
***
* This react app can be reached at the following public DNS URL: ec2-3-86-88-82.compute-1.amazonaws.com:8080
***
* The public IPv4 address is  3.86.88.82:8080

	-> note: be sure to access on port 8080, this has been appended to the URL already. 
	-> note: I have also deliberately not included any personal photos or information just for the sake of privacy.
***
* Pm2 is implemented to maintain serving of the application even after the terminal is closed.
***
* An instance of express.js has been implemented and installed onto the EC2 server, although the instructions as to what was required for this part of the assignment  were unclear to me. None the less, it has been created, started, backed up to the GitHub repository, and deployed to the running EC2 instance.