#!/bin/bash

echo "Docker login: gcr.io"
gcloud auth print-access-token | docker login -u oauth2accesstoken --password-stdin gcr.io

echo "Building and publishing: $APP"
make build-image
make publish-image
