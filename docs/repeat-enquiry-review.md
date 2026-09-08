# Repeat enquiry review - 2026-09-08

Verdict: SIMPLIFY. A returning visitor must be able to submit another requirement
without losing the existing lead history. Success means the enquiry was saved;
it does not mean an email reached an inbox.

Current inventory: one website endpoint, Frappe Lead plus its Notes, one
new-lead Notification and Frappe Email Queue. No application queue or retry loop.
Observed boundary: Frappe rejects a repeated email with HTTP 409. Earlier
delivery and acknowledgement tests passed; this is a new duplicate-input case,
not evidence of three independent architecture audit rounds.

Alternatives: allow duplicate leads (violates requested one-lead history);
read/replace all lead notes (can overwrite concurrent staff edits); append a
native Comment linked to the exact existing lead (chosen). Keep new-lead creation
unchanged. Only a definite 409 permits an exact-email lookup and one append.
Never retry a timed-out create or append. Never overwrite customer identity,
sales status, ownership, existing notes or the prior preference field.

Falsification question: can a native Comment be inserted independently, retain
its Lead reference, and trigger a New notification with a document-field
recipient? If the site cannot do this, do not deploy this design. Live schema
confirms Comment has reference_doctype/reference_name, subject, comment_email,
comment_by and content. Live tests must confirm notification delivery.

Repeat enquiry preference and attribution belong to the new comment. Its fixed
subject identifies the server-selected Email/WhatsApp channel. Customer text is
escaped and cannot change that subject. Email delivery remains in Frappe with a
New Comment notification; do not change Lead notifications to fire on every Save.
No new application credentials, queue, locks, schema fields, or retry framework.

Residual risks: anonymous email is not proof of identity, so append only unverified
enquiry content and return no existing private details. Refuse ambiguous matches.
Rate limiting/email verification and exactly-once lost-response handling remain
outside this patch; do not imply they exist. Two concurrent enquiries append
independent comments rather than replacing a shared notes array.

Sources checked 2026-09-08: Frappe REST API and Notifications documentation:
https://docs.frappe.io/framework/user/en/api/rest
https://docs.frappe.io/framework/notifications
https://docs.frappe.io/framework/user/en/api/document
