export default {
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    roots: [
        "./",
        "./test/"
    ],
    collectCoverage: true,
    collectCoverageFrom:["api.ts"]
}