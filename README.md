# PRIM

### Step 1
npm install .

### Step 2 
npm run dev

---

### Production Release
npx vite build

### Hosting on GitHub Pages

1. Create a `.github/workflows` directory in your project root.
2. Add a `deploy.yml` file in the `.github/workflows` directory with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'

    - name: Install dependencies
      run: npm install

    - name: Build project
      run: npm run build

    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

3. Commit and push your changes to the `main` branch.
4. Go to your repository settings on GitHub.
5. Under the "Pages" section, set the source to the `gh-pages` branch.

Your project should now be hosted on GitHub Pages.



