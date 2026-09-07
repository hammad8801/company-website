# React + TypeScript + Vite

## WhatsApp Cloud API contact flow

The WhatsApp contact button posts to `POST /api/contact`. The serverless function sends one
approved WhatsApp template to the team's configured recipient, never to the customer.
The visitor stays on the website and sees a confirmation dialog after Meta accepts the message.
Source page/listing metadata stays hidden on the form and is included in the notification.
The email button opens the visitor's email app with the enquiry pre-filled.
Copy `.env.example` to `.env.local` for local
Vercel development and configure the same values in the Vercel project for
production. Never expose `WHATSAPP_ACCESS_TOKEN` through a `VITE_` variable.

The team's recipient is `+91 87990 10330`; its existing WhatsApp Business app does
not need migration or Coexistence. Use a separate Cloud API sender phone number.
For testing, Meta's test sender can send only to verified test recipients: verify
the team's number separately (the previously verified number was `+91 78620 40233`).
Real form delivery requires the approved lead template and a valid server-side token.
A sample Meta test message only checks connectivity, not the full form flow.

Temporary testing while the lead template is in review: set
`WHATSAPP_DELIVERY_MODE=text` and have the team's verified receiver send a WhatsApp
message to the test sender first. Free-form delivery requires that receiver's
24-hour service window to remain open. Website visitors do not open this window
by submitting the web form. This is not an unattended production configuration.
After confirming the inbound team message, set `WHATSAPP_TEST_WINDOW_EXPIRES_AT`
to an ISO timestamp before that message's 24-hour window expires, then redeploy.
Without a valid future expiry (at most 24 hours ahead), text mode rejects submissions
before calling Meta. Do not extend this timestamp without a fresh inbound message.
Set the mode back to `template` after approval and redeploy. Temporary Meta tokens
also expire; replace with an appropriate server-side production token before a
permanent launch. Never treat an accepted message ID as proof of delivery.

Create and approve this template in WhatsApp Manager with the exact variable
order below (names can be changed through environment variables):

`new_website_lead` body:

```text
New website enquiry received by Nexora Solution.
Customer name: {{1}}
Customer email address: {{2}}
Company name: {{3}}
Contact phone number: {{4}}
Submitted project requirement: {{5}}
Enquiry source details: {{6}}
Source page URL: {{7}}
Contact button used: {{8}}
Please review this enquiry and follow up with the customer using the contact details above.
```

`WHATSAPP_ACK_TEMPLATE_NAME` is no longer used. No customer acknowledgement is sent.
Meta accepting a message is not proof of delivery; check delivery status separately.

Run through Vercel's local runtime when testing the API route:

```bash
vercel dev --listen 0.0.0.0:3000
```

Before production, add a Vercel Firewall rate-limit for `POST /api/contact` and
confirm that the consent text and privacy policy match the approved WhatsApp use
case.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
