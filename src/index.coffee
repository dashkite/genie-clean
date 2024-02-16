import M from "@dashkite/masonry"

export default ( genie ) ->

  # TODO possibly make the build target configurable
  genie.on "clean", M.clean "build"
