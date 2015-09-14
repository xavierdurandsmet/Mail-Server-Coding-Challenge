# Mail-Server-Coding-Challenge

### The problem

Create a service that accepts the necessary information and sends emails. It should provide an abstraction between two different email service providers. If one of the services goes down, your service can quickly fail over to a different provider without affecting your customers.

### The solution

I created a service (focusing on fullStack) that sends an automated email to the recipient by taking the email and name of recipient,as inputs. It is backed by Mandrill as main povider, and Mandrill, as back-up provider

## Technical Choices

### Front-end

I used AngularJS, as it is the framework I am the most comfortable with at the moment.
There are 2 different states, the first one, is the input box of the recipient (browser/js/informationInputs), the second is the thank you message after the recipient has filled his information (browser/js/thankYou).
The front-end communicates with the back-end via the inputFactory (browser/js/informationInputs), which sends an HTTP post request to the server with the user's info.
The styling css is located in browser/scss/main.scss

### Back-end

I used NodeJS, and ExpressJS in order to use routes, to receive the post request from the front-end (server/app/routes/message.js), and send a mail to the recipient.
I used Mandrill as main mail server, and Mailgun as back-up server (server/app/mailServers/sendEmail.js). The structure is pretty straight-forward : in the Mandrill error handler, Mailgun gets used as mail server to send the mail to the recipient.


### Hosting

The app is hosted on Heroku : https://evening-falls-6933.herokuapp.com/

