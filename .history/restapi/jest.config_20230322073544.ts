export default {
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    roots: [
        "./",
        "./tests/"
    ],
    collectCoverage: true,
    collectCoverageFrom:["api.ts"]
}