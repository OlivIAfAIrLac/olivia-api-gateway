**Run APi**

1. go to ```/home/ubuntu/actions-runner``` and run 
```
pm2 start ./run.sh --name github-action-runner
```

2. then go to ```/home/ubuntu/actions-runner/backend_olivia/olivia-api-gateway/olivia-api-gateway/``` and run 

```
pm2 start dist/index.js --name olivia-api
```
