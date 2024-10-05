```sh
Nginx on Ubuntu 

sudo apt update -y && sudo apt install nginx 
copy my-code /var/www/html

```
[Dcokerfile](https://docs.docker.com/reference/dockerfile/)

-  Whenever you are creating an image you are using `Docker Build`. Build is a key part of your software development life cycle allowing you to package and bundle your code and ship it anywhere.

```sh
docker build -f put-dockefile-name directory-where-you-have-code

# if your code is in pwd
docker build .  

# -t : give name to your newly created image
docker build -f put-dockefile-name -t image-name:version path-directory-where-you-have-code

```

- Amazon ECR is a fully managed Docker container registry service provided by AWS. It allows you to store, manage, and deploy Docker container images securely and reliably. These concepts and components work together to provide a secure, scalable, and reliable Docker container registry service within the AWS, enabling you to efficiently manage and deploy your containerized applications.

- Registry
An Amazon ECR registry is a private repository provided to each AWS account, where you can create one or more repositories. These repositories allow you to store and distribute Docker images, Open Container Initiative (OCI) images

```sh

aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 654654187843.dkr.ecr.ap-south-1.amazonaws.com

docker tag vaman-demo:v1 654654187843.dkr.ecr.ap-south-1.amazonaws.com/sat-aj-demo:latest

docker push 654654187843.dkr.ecr.ap-south-1.amazonaws.com/sat-aj-demo:latest
```

<github-username>/repo-name = <docker-repo-name>/image-name:tag

[ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-cli.html)

- Amazon Elastic Container Service (Amazon ECS) is a fully managed container orchestration service that helps you to more efficiently deploy, manage, and scale containerized applications. It deeply integrates with the AWS environment to provide an easy-to-use solution for running container workloads in the cloud and on premises with advanced security features using Amazon ECS Anywhere.

- A task definition is like a blueprint for your application. Each time you launch a task in Amazon ECS, you specify a task definition. The service then knows which Docker image to use for containers, how many containers to use in the task, and the resource allocation for each container.

[ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/getting-started-fargate.html)

[load balancer](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html)