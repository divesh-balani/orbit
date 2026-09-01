Simple workflow:

  For code changes (no release):
  git add -A
  git commit -m "your message"
  git push origin main
  Vercel auto-deploys on every push to main. The Windows check CI also runs to catch compile errors.

  For a desktop release (DMG + EXE):
  git add -A
  git commit -m "release v0.x.x"
  git tag v0.x.x
  git push origin main --tags
  This triggers the GitHub Actions release workflow which builds both the macOS DMG and Windows EXE, then creates a GitHub Release with both files attached.

  Version to use: bump it in apps/desktop/src-tauri/tauri.conf.json (the version field) before tagging, so the app reports the correct version. The tag and the config version should match.