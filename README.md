# 🐪 algo-ambling-template

A template repo for chipping away at algorithm problems on a regular basis.

Scaffolds a problem with one command, runs the right tests on its own, keeps an
index of what you've solved. The point is that nothing stands between "I feel
like solving something" and actually solving it — no half hour of wrangling
folders and configs first.

What's in the box: a task generator, Vitest, an auto-built `INDEX.md`, git hooks
and CI. Vanilla JS, no build step, five dependencies and every one of them dev.

---

## 🚀 Getting started

Hit **"Use this template"** on GitHub, or skip GitHub entirely:

```bash
npx degit raqiq-coder/algo-ambling-template my-algo
cd my-algo
npm install
```

You'll want **Node 22+** — that's what CI runs on.

`npm install` also installs the git hooks (via `prepare`). Skip it and the hooks
stay dormant: commits sail through with no checks at all.

### First things first

The repo is yours now; the template has done its job. Three things worth doing:

1. **Fix up `package.json`** — `name` and `description` are hand-me-downs.
2. **Delete the demo task.** `solutions/arrays/two-sum` is there as a worked
   example of filled-in frontmatter and a written-up solution. Read it, then:
   `rm -rf solutions/arrays/two-sum && npm run index`.
3. **Skim [Make it yours](#-make-it-yours).** Commit types and difficulty levels
   live in the scripts rather than in a config, and bending them to taste takes
   about a minute.

Then `npm run new-task arrays two-sum` and off you go.

---

## 🗂 Layout

```
solutions/            problems, grouped by topic
  arrays/
    two-sum/
      README.md        statement, idea, complexity + frontmatter for the index
      solution.js      the solution
      solution.test.js tests
scripts/
  new-task.js         task generator
  build-index.js      builds INDEX.md from frontmatter
  check-commit-msg.js commit message validator
.husky/               pre-commit, commit-msg
.github/workflows/    CI
INDEX.md              generated — hands off
```

A topic (`arrays`, `dp`, `graphs`…) is just a folder under `solutions/`. It
springs into existence with your first task there; nothing to register anywhere.

---

## 🔄 The life of a task

**1. Scaffold it**

```bash
npm run new-task <topic> <task-name>
npm run new-task dp coin-change
```

Both arguments are kebab-case (`a-z`, `0-9`, hyphens). If the folder already
exists the script bails out and overwrites nothing.

You get `solutions/dp/coin-change/` with three files. The function name is
derived from the task name: `coin-change` → `coinChange`. Note that the
generated test passes straight away — the stub returns `undefined` and the test
expects exactly that. A green run at this point proves nothing.

**2. Solve it**

Write up the statement in `README.md`, then the solution and the tests.

**3. Run the tests**

```bash
npx vitest solutions/dp/coin-change    # just this one
npx vitest                             # watch mode, everything
npm test                               # one-shot, everything, same as CI
```

**4. Commit it**

```bash
git add solutions/dp/coin-change
git commit -m "solve(dp): coin-change"
```

The hook formats, runs the affected tests and refreshes `INDEX.md` for you.

---

## 📋 Frontmatter

The header in a task's `README.md` is the one and only source of truth for
`INDEX.md`.

| Field        | Values                           | Default     | What it does                     |
| ------------ | -------------------------------- | ----------- | -------------------------------- |
| `title`      | string                           | folder name | Name shown in the index          |
| `difficulty` | `easy` · `medium` · `hard`       | `easy`      | 🟢🟡🔴 icon and sort order       |
| `tags`       | list                             | `[]`        | Tags column                      |
| `source`     | string, e.g. `leetcode-1`        | —           | Where it came from; not indexed  |
| `status`     | `todo` · `optimizing` · `solved` | `todo`      | ✅🔧🕓 status icon               |
| `date`       | `YYYY-MM-DD`                     | —           | When you started it; not indexed |

```yaml
---
title: Coin Change
difficulty: medium
tags: [dp, arrays]
source: leetcode-322
status: solved
date: 2026-07-17
---
```

`source` and `date` never reach the index — they just live alongside the task.

A typo in a value won't break the build and won't warn you either: an unknown
`difficulty` quietly sinks to the bottom of the list, an unknown `status` renders
as bare text instead of an icon. A row that looks odd in the index is usually a
typo in frontmatter.

---

## 📇 INDEX.md

Built from the frontmatter of every `solutions/**/README.md`. Sorted by
difficulty, then topic, then title, with counters up top.

```bash
npm run index
```

Don't hand-edit it — it gets overwritten. Edit the task's frontmatter instead.

You rarely need to run this: `pre-commit` does it for you. It's handy when you've
been editing frontmatter outside of a commit.

---

## ✍️ Commits

Format: `type(topic): description`

| Type       | When                                  |
| ---------- | ------------------------------------- |
| `solve`    | solved a new problem                  |
| `optimize` | improved one you'd already solved     |
| `note`     | notes, write-up in the README         |
| `refactor` | shuffling things, no behaviour change |
| `infra`    | CI, hooks, scripts, configs           |

```
solve(arrays): two-sum
optimize(dp): coin-change — got it down to O(n)
note(graphs): bfs — worked out why it's a queue and not a stack
infra: run vitest --changed in pre-commit
```

`topic` is required everywhere except `infra`, where it's optional.

Enforced by the `commit-msg` hook: get it wrong and the commit doesn't happen.
Don't like the format? It isn't sacred — see [Make it yours](#-make-it-yours).

---

## 🪝 Hooks

Installed automatically by `npm install`.

**pre-commit**

1. `lint-staged` — Prettier over the staged files, formatted results go back into
   the index.
2. `vitest related --run` on the staged files — only the affected tests, so it
   stays quick.
3. `npm run index` + `git add INDEX.md` — the index always rides along.

**commit-msg** — validates the message format.

Escape hatch: `git commit --no-verify`. CI will run the full set regardless.

---

## 🤖 CI

Runs on push and PR whenever `solutions/**`, `scripts/**` or the manifests moved.

1. `npx vitest run` — every test.
2. Checks `INDEX.md` isn't stale: rebuilds it and fails if anything differs.

That second step exists for exactly one situation: you committed with
`--no-verify` and forgot the index.

---

## ⌨️ Commands

| Command                           | What it does            |
| --------------------------------- | ----------------------- |
| `npm run new-task <topic> <task>` | Scaffold a task         |
| `npm test`                        | Every test, one shot    |
| `npx vitest`                      | Watch mode              |
| `npx vitest <path>`               | Tests for a single task |
| `npm run index`                   | Rebuild `INDEX.md`      |
| `npm run format`                  | Prettier over the repo  |
| `npm run format:check`            | Check without writing   |

---

## 💅 Formatting

Prettier; settings in `.prettierrc` (2 spaces, double quotes, semicolons, 80
columns). You never call it by hand — `pre-commit` runs it over staged files via
`lint-staged`.

What's exempt lives in `.prettierignore`:

- **`INDEX.md`** — leave this line alone unless you have a reason. Prettier pads
  markdown tables to align the columns; `build-index.js` emits them unaligned.
  Let Prettier near the index and the hook reformats it, CI rebuilds it with the
  generator, spots the difference and fails — on every single commit. To drop the
  exemption you'd first have to teach the generator to align its table.

---

## 🔧 Make it yours

The rules deliberately live in script code rather than a config: there are fewer
of them than there would be knobs, and reading them beats reading docs about
them.

**Commit types** — `scripts/check-commit-msg.js`. Two places to change: the
`PATTERN` regex and the help text below it. Forgetting the second is easy, and
then the hook rejects your commit while printing help that contradicts itself.

**Difficulty levels and statuses** — `scripts/build-index.js`: `DIFF_ORDER` (sort
order), `DIFF_ICON` and `STATUS_ICON`. Adding a level means adding it to all
three; frontmatter values aren't validated anywhere else.

**Index columns** — same file: `tasks.push({...})` gathers the fields, `rows`
renders each line. To surface `source` or `date`, add them in both places plus
the table header.

**New-task templates** — `scripts/new-task.js`, the `solution`, `test` and
`readme` strings. Bear in mind Prettier will go over the generated files anyway,
so fighting it over indentation in the templates is a losing game — easier to
write them in its style from the start.

**Node version on CI** — `.github/workflows/tests.yml`.

**Turn the hooks off entirely** — delete `.husky/` and the `prepare` script from
`package.json`. Tests and the index still work by hand, and CI keeps catching
what you forget.
