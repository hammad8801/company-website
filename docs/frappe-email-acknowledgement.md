# Website email acknowledgement

The contact API creates ERPNext `Lead` with `custom_website_communication`
set to `Email` or `WhatsApp`. Frappe owns email delivery; the website does not
make a second SMTP/API request or wait for email delivery.

Production Frappe configuration:
- Custom Field: `Lead-custom_website_communication`, Select, blank/Email/WhatsApp,
  no default and no-copy enabled.
- Notification: `Nexora Website Email Acknowledgement`, enabled, Email, New Lead.
- Condition: `doc.custom_website_communication == "Email" and doc.email_id`.
- Recipient: Lead `email_id`; no CC/BCC, attachments or internal document link.
- Sender account: `Nexorasolution` (`info.nexorasolution@gmail.com`).
- Subject: `We received your enquiry | Nexora Solution`.

Existing leads and later edits do not trigger this New-only notification.
Repeat website submissions append a Comment to the same exact-email Lead instead
of replacing its fields/notes. `Nexora Repeat Enquiry Email Acknowledgement` is
a separate New Comment notification: reference_doctype=Lead, comment_type=Comment,
subject exactly `Nexora Website Enquiry - Email`, owner equal to the website API
user. It sends only to comment_email. The fixed subject is server-selected, not
derived from customer message text. WhatsApp repeat comments do not trigger it.
The latest enquiry's preference is in its comment; the original Lead preference
is intentionally not overwritten by an unauthenticated website submission.
WhatsApp preference does not send an acknowledgement. Check Frappe Email Queue
for sending failures; a website success dialog confirms lead creation, not inbox
delivery. This configuration must be provisioned before deploying to another site.

The preference is retained in Notes too for continuity with earlier enquiries.
Credentials remain in Vercel server environment variables, not this repository.

## Internal lead alerts

Two separate production Email Notifications notify the team for either preferred
channel. Customer acknowledgement rules above remain unchanged.

- `Nexora Internal New Lead Alert`: New Lead; condition
  `doc.owner == "info.nexorasolution@gmail.com" and doc.custom_website_communication in ("Email", "WhatsApp")`.
- `Nexora Internal Repeat Enquiry Alert`: New Comment; condition
  `doc.reference_doctype == "Lead" and doc.comment_type == "Comment" and doc.subject in ("Nexora Website Enquiry - Email", "Nexora Website Enquiry - WhatsApp") and doc.owner == "info.nexorasolution@gmail.com"`.
- Both use sender `Nexorasolution`. One recipient row has only CC
  `info.nexorasolution+leads@gmail.com` (the existing business Gmail inbox).
  No customer recipient field, role recipients, BCC, or attachments.
- Templates include the saved enquiry note/content, preferred channel, source
  metadata, CRM link, and `https://wa.me/<digits>` link. Repeats use the latest
  Comment phone, not the original Lead phone. The repeat phone is extracted from
  the server-generated `<strong>Submitted phone:</strong> ` note label; update
  the notification template if that format changes.
- The contact form defaults to India (+91), with an explicit international option.
  The API normalizes ten-digit Indian mobile numbers to +91 (including cached
  forms), preserves explicit +/00 international prefixes, and rejects ambiguous
  unprefixed international numbers. Both new Lead fields and repeat Comment notes
  receive the normalized number. Templates remove punctuation from that number.
  Old saved notes/emails are not rewritten. Opening the link
  does not send a message; staff must check the preference and send manually.
- These are queued emails, not native mobile push. Enable Gmail notifications
  for the business mailbox; scheduler, Gmail and device settings affect timing.
- Configuration lives in Frappe, so no website redeployment is needed.

Verification on 2026-09-08 created labelled test Leads
`CRM-LEAD-2026-00011` and `CRM-LEAD-2026-00012`, with repeat Comments.
The final new and repeat tests on `00012` queued only the internal recipient
(`coc4ivbfbg` and `6ofifa42vv`). Rendered source metadata and distinct WhatsApp
targets `12025550100` / `12025550101` were checked without contacting those numbers.
Both queues subsequently reached `Sent` automatically (no Send Now action).
This confirms SMTP handoff, not the recipient phone's notification or inbox placement.
