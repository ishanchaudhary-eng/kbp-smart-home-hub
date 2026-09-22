# Replace the KBP Mohali logo

## What will change
- Upload the supplied transparent PNG as the website’s new KBP Mohali logo.
- Replace the old group logo in the desktop/mobile navbar, homepage About section, About page, and footer.
- Give every logo placement a navy background matching the website and consistent internal spacing, so the transparent white “MOHALI” lettering remains visible.
- Keep each logo proportional with `object-contain`; remove the stretched/cropped treatment in the large About placements.

## Verification
- Check all old group-logo references are gone.
- Review the homepage and About page at desktop and mobile sizes.
- Confirm the current site build has no errors.

## Technical details
- Store the uploaded PNG through the project asset service and import its pointer where used.
- Reuse the existing semantic `primary` navy color rather than introducing a new hard-coded color.
