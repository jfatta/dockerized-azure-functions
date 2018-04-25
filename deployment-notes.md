# Overview

https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-function-linux-custom-image

# Build Image

docker build --tag jorgefatta/mydockerimage:v1.0.0 .

# Run 

docker run -p 8080:80 -it jorgefatta/mydockerimage:v1.0.0



# Inspect image contents

## Inspect container

https://stackoverflow.com/questions/20813486/exploring-docker-containers-file-system
docker export wizardly_hopper > contents.tar

## Inspect image
sudo docker image save jorgefatta/mydockerimage:v1.0.0 > c:/image.tar


# TO-DO

1. Pptr is running on the container when built including the node_modules inside the js function dir.
    Figure out how to install npm packages from the docker file
1. Write result as pdf directly
1. The fx is being called twice (?)
