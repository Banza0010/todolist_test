# TASK 4 

Kubernetes on a 3 node cluster with multiple replicas of each pod

## Test strategy

On addition to what is outlined in the original test document, we will include:

- Intergration tests
    - to check communication and intergrations between the instances we have running
    - mainly testing functionality of different components of the application (backend <-> frontend <-> services)

- Performance testing 
    - test the efficency at which different intances communicate and maintain responses 

- Resilience Tests 
    - these tests evaluate an application's ability to recover from failures and continue functioning.



## Test cases

In addition to the test caes outline in the test original test plan we can add :

- checking if different instances of the todolist application can communicate and maintain the same state of data
- test application self recovery and data rention when failures happen - (network issues, node outages, node restarts, fall over etc)
- Test functionality when most clusters have an outage  

