---
name: design-system-parade-development
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

<!-- TYPEUI_SH_MANAGED_START -->

# PARADE Development

## Mission
Deliver implementation-ready design-system guidance for PARADE Development that can be applied consistently across documentation site interfaces.

## Brand
- Product/brand: PARADE Development
- URL: https://paradegroup.ru/
- Audience: developers and technical teams
- Product surface: documentation site

## Style Foundations
- Visual style: structured, accessible, implementation-first
- Main font style: `font.family.primary=TT-Hoves-Pro-Trial`, `font.family.stack=TT-Hoves-Pro-Trial, Arial, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=normal`
- Typography scale: `font.size.xs=10px`, `font.size.sm=11px`, `font.size.md=12px`, `font.size.lg=13.33px`, `font.size.xl=14px`, `font.size.2xl=15px`, `font.size.3xl=16px`, `font.size.4xl=18px`
- Color palette: `color.surface.base=#000000`, `color.text.secondary=#e2decf`, `color.text.tertiary=#c5ad6f`, `color.text.inverse=#1e1e1d`, `color.surface.raised=#c5ac6d`, `color.surface.strong=#e1ddd6`
- Spacing scale: `space.1=7px`, `space.2=12px`, `space.3=12.59px`, `space.4=13.77px`, `space.5=16px`, `space.6=16.52px`, `space.7=20px`, `space.8=24px`
- Radius/shadow/motion tokens: `radius.xs=50px` | `motion.duration.instant=200ms`, `motion.duration.fast=300ms`, `motion.duration.normal=500ms`, `motion.duration.slow=600ms`, `motion.duration.slower=1200ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
concise, confident, implementation-focused

## Rules: Do
- Use semantic tokens, not raw hex values in component guidance.
- Every component must define required states: default, hover, focus-visible, active, disabled, loading, error.
- Responsive behavior and edge-case handling should be specified for every component family.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and tokens.
3. Define component anatomy, variants, and interactions.
4. Add accessibility acceptance criteria.
5. Add anti-patterns and migration notes.
6. End with QA checklist.

## Required Output Structure
- Context and goals
- Design tokens and foundations
- Component-level rules (anatomy, variants, states, responsive behavior)
- Accessibility requirements and testable acceptance criteria
- Content and tone standards with examples
- Anti-patterns and prohibited implementations
- QA checklist

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Prefer system consistency over local visual exceptions.

<!-- TYPEUI_SH_MANAGED_END -->
