# Doctor doctor!
## Author and copywrite owner: Melvin Gruschow, 3/17/2017

### Description:
A web based application utilizing the BetterDoctorsAPI to allow the user to search a condition or illness they might have an return a list of doctors with a short description and contact phone number, whom might be related to the problem they are facing. This is an independent project created for the school Epicodus as an end of week project.

### Install instructions
Download this git repository, and open a powershell prompt, then traverse in PS to the root of the repository.  Run the following commands: "npm init", "npm install", "bower install", "gulp build", "gulp serve".  If by the grace of God these things work for you, you should have been redirected to your default browser and to a new page where you may start interacting with the application.

### Specs:
* User may enter search parameter and receive an output
    - input: "hi"
    - output: list of doctors that might be related to entered phrase


* User may enter an actual disease or condition they might have and receive a list of doctors relevant to said illness/condition.
    - input: "cancer"
    - output: list of cancer specialists in the seattle area


* User may enter a word or phrase that is gibberish, or else unrelated in any way to the medical field, and receive an output telling them to try again
    - input: "asdfsadfasdfasf"
    - output: "Apparently that particular malady doesnt exist, try again."


* User may RE-ENTER search criteria into the search bar and receive a fresh list of doctors, wiping away the previous list
    - input: "cancer"
    - output: cancer related specialists
    - input: "heart burn"
    - output: heart burn related specialists
