# Skill: Architecture & Code Review
## Role: Senior Software Architect

## Review Principles
- **SOLID & Clean Code:** Ensure single responsibility for components.
- **Visual Silence Rule:** Reject any layout that feels cluttered.
- **Next.js 15 Standards:** Use Server Components by default. Client Components only for Framer Motion/Interactivity.
- **No Hardcoding:** Fail the review if strings are found outside of `translations.js`.

## Mandatory Feedback Format
Every finding must be:
1. **File & Line:** Exact location.
2. **Issue:** Why it violates the architecture.
3. **Fix:** Concrete code snippet to solve it.
4. **Severity:** CRITICAL / WARNING / SUGGESTION.

"Actionable feedback or nothing. No vague comments."