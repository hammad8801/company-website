# WhatsApp release design review — 2026-09-07

Verdict: KEEP the single server-side notification flow; temporary text mode is
test-only, not a substitute for an approved production template.

## Outcome and honest product boundary

The team needs each website enquiry, including its originating page, on its
WhatsApp number. The visitor stays on the website. Submission acceptance must
not be described as proof that the team received or read the message.

## Composition and authority

- One browser form, one serverless endpoint, one Meta request per valid enquiry.
- Meta owns message acceptance and delivery status. Vercel owns runtime secrets.
- Git main owns source; Vercel production tracks main. No duplicate lead database.
- No queue, retry loop, automatic fallback, customer acknowledgement, BSP, or
  migration of the team's existing WhatsApp Business number.
- One optional test mode adds one operator-confirmed expiry timestamp. Missing
  or expired timestamps reject before sending. This is an operational assertion,
  not an independent verification of the Meta service window.

## Live findings and complexity trend

1. Snapshot `a3517866b1b129664f52bf4aad928ac0efc5f6dd`, deployment
   `dpl_FYze38cSecm5K6MmaBgcquHWHmW9`: production contact test at 21:41 IST
   failed with Meta `132001`. Vercel production logs and WhatsApp Manager showed
   the exact lead template still in review. No additional sender could fix this.
2. Snapshot `b78dbc7dcdfc3d6b27db40f4099eada06edbbe37`, deployment
   `dpl_zDy7KGETx8Crqqzg4rk6THnYU9Pu`: text test at 21:45 IST returned an ID,
   then Meta's test webhook at 21:45:38 reported `failed`, code `131047`.
   Message ID: `wamid.HBgMOTE4Nzk5MDEwMzMwFQIAERgSMkFGOUY0MTAwNjdGQjUxQTNCAA==`.
   Receiver had not opened the service window. One explicit test-mode flag was
   added; a bounded expiry now prevents this known closed-window false success.

These are two independently observed delivery rounds, not three. Earlier
successful sample messages are not evidence that full enquiry delivery works.
The recurring pressure is the provider's messaging admission rules, not a need
for more delivery infrastructure. Stop adding compensating layers.

## Alternatives and decision

- Remove text mode and wait for template approval: simplest permanent design,
  but cannot satisfy the requested immediate test while approval is pending.
- Collapse to the existing template-only flow after approval: chosen end state;
  one notification authority, no recipient daily-window operation.
- Replace with a WhatsApp redirect: violates the explicit website-only submission
  requirement. Adding a BSP does not remove Meta's admission rules.
- Keep a strictly temporary, explicitly selected text mode: acceptable only for
  the user's test; require a real inbound message from the configured receiver
  and a conservative expiry. No automatic retry or fallback is warranted.

Delete text mode and its two test settings after template testing is complete.
Switching the mode to template requires only configuration and redeployment;
removing the mode later is a small code change, with no data migration.

## Falsification and current research

Question recorded for review: would an HTTP success and message ID prove
delivery? If not, any promise of confirmed receipt must be rejected.

Meta's [official Cloud API collection](https://www.postman.com/meta/whatsapp-business-platform/documentation/wlk6lh4/whatsapp-cloud-api)
was accessed on 2026-09-07. It distinguishes message IDs from webhook status
tracking and documents temporary user-token expiry. The live `131047` webhook
directly disproved acceptance-as-delivery for Graph API v25.0. This review
therefore retains only a submitted/accepted UI promise and a separate live
delivery verification requirement.

## Residual risks and unfinished evidence

- Actual full-data receipt remains unproven until the receiver opens the test
  conversation and a fresh message is confirmed delivered or seen on the phone.
- Temporary token expiry and template approval remain external dependencies.
- No durable lead inbox or delivery-retry guarantee is offered by this design.
- Rate limiting is not yet configured: Vercel's live firewall read returned no
  active or draft custom rules. Treat this as controlled testing, not a completed
  unattended launch. Avoid assuming process-local counters are global limits.
- Browser-supplied source metadata is useful attribution, not trusted evidence.
- Loss of an HTTP response can lead to a manual duplicate; automatic retries are
  deliberately absent. Provider logs must not contain submitted personal data.

Before a permanent launch: approve the template, replace the temporary token,
configure endpoint abuse protection, and verify actual delivery. Do not expand
the system with a database/webhook processor merely to mask an unavailable test
window; durable lead handling is a separate product decision if required.
