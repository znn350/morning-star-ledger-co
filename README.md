# Morning Star Ledger Co.

A Vercel-ready Next.js marketing site for a bookkeeping business, designed around a celestial-professional brand direction and a single-page conversion flow.

## Stack

- Next.js 16 with the App Router
- TypeScript
- Tailwind CSS 4

## Local Development

Use the Node install in `C:\Program Files\nodejs` if it is not on your `PATH`.

```powershell
$env:Path='C:\Program Files\nodejs;' + $env:Path
npm run dev
```

Open `http://localhost:3000`.

## Configuration

Copy `.env.example` to `.env.local` and replace the placeholder values:

```env
NEXT_PUBLIC_SITE_URL=https://your-live-domain.com
NEXT_PUBLIC_BOOKING_URL=https://your-booking-link.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@yourdomain.com
NEXT_PUBLIC_CONTACT_PHONE=(555) 555-5555
```

The main business copy and section content live in `src/content/site.ts`.

## Quality Checks

```powershell
$env:Path='C:\Program Files\nodejs;' + $env:Path
npm run lint
npm run build
```

## GitHub And Vercel

Suggested repo name: `morning-star-ledger-co`

Suggested first push flow after creating the GitHub repo:

```powershell
& 'C:\Program Files\Git\cmd\git.exe' init -b main
& 'C:\Program Files\Git\cmd\git.exe' add .
& 'C:\Program Files\Git\cmd\git.exe' commit -m "Initial Morning Star Ledger Co. site"
& 'C:\Program Files\Git\cmd\git.exe' remote add origin <your-github-repo-url>
& 'C:\Program Files\Git\cmd\git.exe' push -u origin main
```

After the repo is on GitHub, import it into Vercel and add the same environment variables there.
