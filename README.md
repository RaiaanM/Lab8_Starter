# Lab8_Starter

A1)
I would put the automated tests in the GitHub action that runs whenever code is pushed. This is because on every push, I would want to know whether my code is functioning properly, and it makes sense for this portion of the pipeline to be automated.

A2)
No, checking if a function returns the correct output would be done in Unit Tests

A3)
No, because you would want to use end-to-end testing to make sure that the message is properly sent and received.

A4)
Yes, using an end-to-end test makes sense because it's an isolated function of the message feature (as the message feature involves presumably many different components of the project).
