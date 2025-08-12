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

# Step 1: Uninstall all installation and build files
print_step "Step 1: Uninstall all installation and build files"
rm -rf node_modules
echo -e "${GREEN}node_modules uninstalled.${NC}"
rm -rf dist
echo -e "${GREEN}dist directories uninstalled.${NC}"
rm -rf public
echo -e "${GREEN}public directories uninstalled.${NC}"

# Step 2: Reinstall Node Modules
print_step "Step 2: Reinstall Node Modules"
npm install

# Step 3: Re-build apps/package directory
print_step "Step 3: Re-build apps/package directory"
npm run build:package

# Step 4: Re-link the package >> testbed
print_step "Step 4: Re-link the package to testbed"
cd ${PACKAGE_DIR}
npm link
cd -
cd ${TESTBED_DIR}
npm link @wavelengthusaf/components
cd -

# Step 5: Re-build apps/testbed directory
print_step "Step 5: Re-build apps/testbed directory"
npm run build:testbed

print_step "./super_build.sh completed successfully!"
