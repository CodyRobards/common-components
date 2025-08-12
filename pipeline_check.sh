#!/bin/bash

# Exit on error
set -e

# Define colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

# Helper function to print a step header
print_step() {
    echo -e "\n${YELLOW}>>> $1 <<<${NC}\n"
}

# Define directories
PACKAGE_DIR="apps/package"
TESTBED_DIR="apps/testbed"

# Step 1: Compile the project
print_step "Step 1: Compile the project"
npm ci
npm run build

# Step 2: Lint the project
print_step "Step 2: Run Linter"
npm run lint

# Step 3: Run Jest tests
print_step "Step 3: Run Jest tests"
npm run test:jest

# Step 4: Run Cypress tests
print_step "Step 4: Run Cypress tests"
npx cypress install
npm run test:cypress

# Step 5: Simulate Publish Job
print_step "Step 5: Simulate Publish Job"
cd $PACKAGE_DIR

if [ "$(git rev-parse --abbrev-ref HEAD)" != "main" ]; then
    echo -e "${GREEN}Non-main branch detected. Packing and validating the package...${NC}"
    npm pack
    tar -tf $(npm pack | tail -n 1) || exit 1
    echo -e "${GREEN}Package validation completed. Ready for main branch merge.${NC}"
else
    echo -e "${GREEN}Main branch detected. Make sure that your changes work on a separate branch first before submitting a merge request. DO NOT PUSH CHANGES UP FROM MAIN BRANCH UNLESS YOU ARE TROUBLESHOOTING SOMETHING FOR IT!${NC}"
fi

cd ../../

# Step 6: Simulate Website Build
print_step "Step 6: Build the Website"
cd $TESTBED_DIR
npm install
npm run build

cd ../../

if [ -d "public" ]; then
    echo -e "${GREEN}Public directory already exists. Skipping creation.${NC}"
else
    echo "Creating public directory."
    echo -e "${GREEN}Creating public directory.${NC}"
    mkdir public
    cp -R apps/testbed/dist/. public/.
fi

cd ../../

# Success
print_step "Pipeline simulation completed successfully!"
