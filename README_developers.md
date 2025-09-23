# How to contribute to this package

### Pre-requisites

1. Have Developer/Maintainer/Owner status as a Project Member on the GitLab for Common Components.

2. Be a Maintainer/Owner for the `@wavelengthusaf/components` npm package.

## Instructions

1. After cloning the repo from GitLab, run the command `git checkout -b <branch>`. If you are working a ticket, make sure that you name your branch after the corresponding ticket number.

1. After making a new branch, run the `super_build.sh` script. Once the script finishes, all node modules should be installed and built, and the directories linked to each other. You are now ready to start developing!

1. Building the React component package (`npm run build:react`) will now automatically build the Web Components workspace first so that `@wavelengthusaf/web-components` type declarations are always available. You no longer need to manually run the Web Components build before compiling React components from a clean checkout.

1. For building new components, It is recommended to copy an existing component, and changing the necessary code to match the design you are working with. The same goes for the webpage; copy an existing webpage and change it to your needs.

1. When you are ready to push changes to your branch, run the `pipeline_check.sh` script to ensure that your changes will pass the pipeline. If any of the stages fails, go back and fix any issues and then run the script again.

1. Once the locally-run pipeline is passing, follow the [dual-package release workflow](docs/dual-publish/release-workflow.md) to determine which workspaces need new versions:

   - `@wavelengthusaf/web-components` (located in `apps/packages/web-components`)
   - `@wavelengthusaf/components` (located in `apps/packages/react-components`)

   Run `npm version <major|minor|patch>` inside **each** workspace directory that needs a release. The workflow guide contains detailed guidance about when to bump one package versus coordinating both, along with semantic-versioning examples.

1. Update release documentation for every workspace that is shipping:

   - Add entries to both package READMEs: [`apps/packages/web-components/README.md`](apps/packages/web-components/README.md) and [`apps/packages/react-components/README.md`](apps/packages/react-components/README.md).
   - Update the Storybook version badge in [`apps/testbed/src/stories/Configure.mdx`](apps/testbed/src/stories/Configure.mdx) so it matches the React package version that will be published.
   - Verify that the published npm pages reflect the new versions after release: [`@wavelengthusaf/web-components`](https://www.npmjs.com/package/@wavelengthusaf/web-components) and [`@wavelengthusaf/components`](https://www.npmjs.com/package/@wavelengthusaf/components).

   Refer back to the release workflow for the full coordinated checklist, including Storybook validation steps.

1. Now your ready to push your changes to your branch. Enter the following commands:

   1. `git add -A` This will add all untracked files to be ready for commit.
   2. `git commit -m <your message here>` This will commit all track files to be ready for the push. Make sure you add a message of what your changes are.
   3. `git push -u origin <branch>` Run this command only if this is the first time pushing up your changes on this branch! For all further pushes, run `git push`.

1. Now that your new version of the package is ready to be pushed up and merged into main, you may now submit a merge request on GitLab. Make sure that you assign the request to yourself and to assign one of the Common Components reps as a reviewer. Have them review your changes and if they are good, have them approve the merge request. Common Components reps have the Owner role on the GitLab, which means they are the only ones who can approve of merge requests.

1. Go to `https://www.npmjs.com/package/@wavelengthusaf/components` to confirm that the package has been updated with your new changes.

1. If the release required publishing both packages, repeat the npm verification step for `https://www.npmjs.com/package/@wavelengthusaf/web-components`.

1. Go back to your VS Code and run `git checkout main`, followed by `git pull`. Once you've pulled the changes down, switch back to your existing branch using `git checkout <branch>`, and then run `git merge main`. If there are any merge conflicts, make sure you resolve them at this step. If you have uncommitted files before the merge, make sure you run `git stash` before switching to the `main` branch. After merging, run `git stash apply` and fix any merge conflicts.

## References

- `https://pauloe-me.medium.com/typescript-npm-package-publishing-a-beginners-guide-40b95908e69c`
- `https://www.freecodecamp.org/news/how-to-create-and-publish-your-first-npm-package/`
