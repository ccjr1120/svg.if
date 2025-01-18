import { readFileSync } from 'fs'

const msg = readFileSync(process.argv[2], 'utf8')
const pattern =
  /^(revert: )?(feat|f|fix|x|docs|d|dx|style|s|refactor|r|perf|p|test|t|workflow|w|build|b|ci|c|chore|c|types|t|wip|w|init|i)(\(.+\))?: .{1,50}/
if (!pattern.test(msg)) {
  console.error('invalid commit message')
  process.exit(1)
}
