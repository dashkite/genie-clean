import FS from "node:fs/promises"
import * as Genie from "@dashkite/genie"

# bootstrap it here
Genie.on "clean", ->
  try await FS.rm "build", recursive: true