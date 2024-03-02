import type { Commit, UserConfig } from "@commitlint/types"
import { RuleConfigSeverity } from "@commitlint/types"

const tags = [":feat:", ":tada:", ":fix:", ":+1:"]

const customRule = ({ header }: Commit) => {
  console.debug("emoji prefixをつけてください")
  const [head = "", body = ""] = header.split(" ")
  const valid = tags.includes(head) && body.length > 0
  return [valid, "ルール違反です"] as const
}

const config: UserConfig = {
  rules: {
    customRule: [RuleConfigSeverity.Error, "always"],
  },
  plugins: [
    {
      rules: {
        customRule,
      },
    },
  ],
}

export default config
