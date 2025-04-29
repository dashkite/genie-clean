import M from "@dashkite/masonry"

export default ( genie ) ->

  genie.on "clean", M.clean "build"
