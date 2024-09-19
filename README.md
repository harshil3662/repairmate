# Repairmate

## Introduction

It is a platfform to book an appointment with your chosen auto experts if you are suffering any minor or major vehicle problems like engine inspection, tire changing, car paint and wash etc.

All you need to do is book an appointment with your chosen auto center in your preffered time. The auto center will see and accept the order. While doing this, if you want to toe your vehicle, you can also choose a date and a location for the suitability of yours.

On the other hand, you can also host a garage on Repairmate to listing out your auto services, so others can have privilege to experience your auto service. Though, your auto center must be
registered officially and adhere the government protocol.

## Development Tools

- Frontend: ReactJs, React Router, Bootstarp
- Backend: NodeJs, ExpressJs, MongoDb
- Deployment: Docker, Docker Hub, Kubernetes

## Installation

- Clone this project in your suitable project directory by following command.
  
  ```bash
  git clone https://github.com/harshil3662/repairmate.git
  ```
  ```bash
  cd frontend
  ```
  ```bash
  npm install
  ```
- After NodeJs installation, got to the backend directory as following.
  
  ```bash
  cd backend
  ```
  ```bash
  npm install
  ```
- Start npm engine to launch the backend server as below,
  
  ```bash
  cd backend
  ```
  ```bash
  npm start
  ```
- To run the frontend side, follow this command,
  
  ```bash
  cd frontend
  ```
  ```bash
  npm start
  ```

## Deployment with kubernetes

### Prerequisite

- Minikube installation
- Kubernetes installation
- Docker Desktop
- Docker Hub registry

1. Create the frontend docker image:
   
  ```bash
   cd frontend
  ```
  ```bash
  docker build -t frontend-image-name .
  ```
  ```bash
  docker login
  ```
  ```bash
  docker tag frontend-image-name username/repository-name:tag
  ```
  ```bash
  docker push username/repository-name:tag
  ```

2. Create the backend docker image:
   
  ```bash
   cd frontend
  ```
  ```bash
  docker build -t backend-image-name .
  ```
  ```bash
  docker login
  ```
  ```bash
  docker tag backend-image-name username/repository-name:tag
  ```
  ```bash
  docker push username/repository-name:tag
  ```

3. start minikube cluster:
   
  ```bash
  minikube start
  ```

4. Create frontend deployment:
   
  ```bash
  cd configuration
  ```
  ```bash
  kubectl apply -f repairmate-frontend.yaml
  ```

  - you can create and customize your service, config and secret yaml files, but for the frontend, I have created only deployment and service yaml files. There is no need for secret and   
    config yaml files.
    
  ```bash
  kubectl apply -f frontend-service.yaml
  ```

5. Create backend deployment:
    </br>
  - For the backend side, there is a need for secret yaml file due to environment variables for Access and Refresh tokens, Mongodb URL and more. You can add and edit the variables 
    according to your opaque value. You can also create cinfig.yaml file for more configuration but there is no need for this.
    
  ```bash
  kubectl apply -f secret.yaml
  ```
  ```bash
  kubectl apply -f repairmate-backend.yaml
  ```
  ```bash
  kubectl apply -f backend-service.yaml
  ```

6. To access the application, you have to expose the frontend and backend applications using minikube service commands as below.
   
  ```bash
  minikube service frontend
  ```
  ```bash
  minikube service backend
  ```
