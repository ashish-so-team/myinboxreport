import next from "eslint-config-next"

const config = [...next, { ignores: [".next/", "out/"] }]

export default config
