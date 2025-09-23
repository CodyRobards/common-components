#!/bin/bash

set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m'

ROOT_DIR="$(pwd)"
WEB_DIR="apps/packages/web-components"
REACT_DIR="apps/packages/react-components"

print_step() {
    echo -e "\n${YELLOW}>>> $1 <<<${NC}\n"
}

cleanup_tarball() {
    local tarball_path="$1"
    if [ -f "$tarball_path" ]; then
        rm -f "$tarball_path"
    fi
}

check_react_dependency_range() {
    local web_version="$1"
    local react_range
    react_range=$(node -p "require('${REACT_DIR}/package.json').dependencies['@wavelengthusaf/web-components']")

    if ! npx --yes semver "$web_version" -r "$react_range" >/dev/null 2>&1; then
        echo -e "${RED}React dependency range '${react_range}' does not include web components version ${web_version}.${NC}"
        exit 1
    fi
}

pack_workspace() {
    local workspace_dir="$1"
    local workspace_name
    workspace_name=$(basename "$workspace_dir")

    print_step "Packing ${workspace_name}"

    pushd "$workspace_dir" >/dev/null
    local tarball
    tarball=$(npm pack)
    tar -tf "$tarball" >/dev/null
    local tarball_path="${workspace_dir}/${tarball}"
    popd >/dev/null

    echo -e "${GREEN}Packed ${workspace_name} -> ${tarball}${NC}"

    if [ "$workspace_dir" = "$WEB_DIR" ]; then
        local web_version
        web_version=$(node -p "require('${workspace_dir}/package.json').version")
        check_react_dependency_range "$web_version"
    fi

    cleanup_tarball "$tarball_path"
}

print_step "Install workspace dependencies"
npm ci

print_step "Build package workspaces"
npm run build:packages

print_step "Run lint checks"
npm run lint

print_step "Run unit tests"
npm run test

pack_workspace "$WEB_DIR"
pack_workspace "$REACT_DIR"

print_step "Build Storybook"
npm run build-storybook --workspace common-components-testbed

print_step "Pipeline simulation completed successfully!"
