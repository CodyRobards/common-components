# Dual-package release workflow

This guide explains how to publish coordinated releases for the two npm packages that live in this repository:

- [`@wavelengthusaf/components`](../../apps/packages/react-components/README.md) – the React bindings that ship typed hooks and wrappers around the design system.
- [`@wavelengthusaf/web-components`](../../apps/packages/web-components/README.md) – the underlying custom elements implementation that powers both Storybook demos and the React layer.

The steps below document how to plan version numbers, update documentation, and rely on CI to validate and ship a release.

## 1. Plan the version numbers

Both workspaces follow [semantic versioning](https://semver.org/). Use the tables below to choose the appropriate increment.

### `@wavelengthusaf/web-components`

| Change type | Examples | Version bump |
| --- | --- | --- |
| **Patch** | Bug fixes, stylesheet tweaks, storybook-only changes, or internal refactors that do not alter the public attributes/events of existing elements. | `npm version patch` |
| **Minor** | Adding a new element, exposing a new attribute/event on an existing element, or adding opt-in functionality that is backwards compatible. | `npm version minor` |
| **Major** | Removing or renaming elements/attributes, changing default behaviour in a breaking way, or upgrading frameworks in a way that breaks consumer builds. | `npm version major` |

### `@wavelengthusaf/components`

| Change type | Examples | Version bump |
| --- | --- | --- |
| **Patch** | Updating component styling, documentation updates that do not change exports, or adjusting dependency ranges to pick up a patched web component. | `npm version patch` |
| **Minor** | Shipping a brand-new React wrapper, exposing new props that map to newly added web component capabilities, or adding optional utilities. | `npm version minor` |
| **Major** | Removing or renaming exported components/hooks, changing required props, or dropping support for a major React/TypeScript version. | `npm version major` |

### When to synchronise versions

The packages do not need to share identical version numbers, but their releases are coupled because `@wavelengthusaf/components` consumes the web components package.

Synchronise the versions by releasing both packages together when any of the following are true:

1. The React package must depend on a newly released web component feature. In this case:
   - Bump `@wavelengthusaf/web-components` first.
   - Update the dependency version range in `apps/packages/react-components/package.json`.
   - Bump `@wavelengthusaf/components` (at least a patch) to publish the updated dependency graph.
2. A web component breaking change requires React wrappers to adjust. Release a major version of both packages in lock-step so React consumers cannot install an incompatible combination.
3. Storybook should always reflect the latest published functionality. Whenever you cut a web component release that surfaces in Storybook (new stories, args, etc.), bump the React package as well to keep the Storybook deployment aligned with the React version number shown on the landing page.

If a web component fix does not affect the React layer (for example, a bug only observable when the element is used directly), you may publish `@wavelengthusaf/web-components` by itself. Likewise, purely React-side changes that do not require new web component APIs can ship independently. When publishing only one package, confirm that the dependency range in `@wavelengthusaf/components` still satisfies the intended web component version.

## 2. Update release notes and documentation

Before cutting a release, prepare the written changelog updates so they can ship in the same PR.

1. Edit `apps/packages/web-components/README.md` under the “Release Notes” heading.
   - Add a new sub-heading using the version number (e.g., `### 1.1.0`).
   - Include the release date and a concise, bulleted summary of changes.
2. Edit `apps/packages/react-components/README.md` under its “Release Notes”. Follow the same structure and call out any dependency bumps to `@wavelengthusaf/web-components`.
3. Update Storybook’s landing page version display in [`apps/testbed/src/stories/Configure.mdx`](../../apps/testbed/src/stories/Configure.mdx).
   - When only the React package releases, set the banner to that React version.
   - When a coordinated release ships both packages, use the React version number (because the Storybook build is published from that workspace).
4. If you maintain additional documentation (for example, architecture notes under `docs/dual-publish/`), cross-link any noteworthy changes.

After editing these files, run the same formatting conventions already present in the READMEs (markdown headings, one blank line before lists, etc.).

## 3. Coordinate the Storybook content

Storybook is built from the `apps/testbed` workspace and is published as part of the CI pipeline. To keep the documentation accurate:

1. Verify that all new or updated components have accompanying stories.
2. Rebuild Storybook locally with `npm run build-storybook --workspace common-components-testbed` to confirm that examples render correctly.
3. If a web component change exposes a new attribute or event, update both the web component story and the React wrapper story (if applicable).
4. Ensure the version badge (see step 2.3) reflects the upcoming React release so that the deployed documentation aligns with npm.

## 4. Validate with CI and publish

The repository ships with both a local helper script and a GitLab pipeline that mirrors the publish process:

1. **Local pre-flight** – run [`./pipeline_check.sh`](../../pipeline_check.sh) from the repository root. It installs dependencies, builds the packages, lints, executes Jest tests, packs both packages, and builds the Storybook site.
2. **CI stages** – the [`.gitlab-ci.yml`](../../.gitlab-ci.yml) pipeline performs the same steps and, on `main`, publishes the packages and Storybook:
   - `install_dependencies` installs all workspaces and caches the `node_modules` folders.
   - `build_packages` runs `npm run build:packages` so both `dist/` folders are ready.
   - `deploy_packages` packs both packages on branches and publishes them when running on `main` (requires `NPM_TOKEN`).
   - `storybook_build` builds the `common-components-testbed` Storybook using the freshly built packages.
   - `pages` publishes the Storybook static site when the pipeline runs on `main`.

A merge request is ready to land once the local script passes and the GitLab pipeline succeeds. After merging into `main`, tag the commit if desired and confirm that the npm packages and Storybook deployment reflect the documented versions.

