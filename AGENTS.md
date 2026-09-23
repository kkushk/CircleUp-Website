# Project Deployment & Environment Memory

## Deployment Workflow
When pushing changes to live production for **CircleUp (circleup.co)**, follow this exact routine:

### 1. Local Mac Setup & Git Sync
- **Local Git repo path**: `~/Downloads/repo-sync`
- **GitHub Repository**: `https://github.com/kkushk/CircleUp-Website.git` (branch: `main`)
- When the user downloads a new export from AI Studio into `~/Downloads/circleup-webiste*.zip` or folder:
  ```bash
  cd ~/Downloads
  # Copy latest unzipped files into repo-sync
  cp -R "<downloaded-folder>/" repo-sync/
  cd repo-sync
  git add .
  git commit -m "<descriptive message>"
  git push origin main
  ```

### 2. DigitalOcean Production Server
- **Server Path**: `/var/www/html/circleup_website` (note: uses underscore `circleup_website`)
- **Deploy Command**:
  ```bash
  cd /var/www/html/circleup_website && git pull origin main && npm run build
  ```
- If process reload is needed:
  ```bash
  pm2 restart all
  ```
- **Live Domain**: `https://circleup.co` (hard refresh: `Cmd + Shift + R`)
