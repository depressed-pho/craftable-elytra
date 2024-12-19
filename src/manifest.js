module.exports = {
    common: {
        name: "Craftable Elytra",
        icon: "craftable-elytra.png",
        min_engine_version: "1.21.51"
    },
    packs: [
        {
            uuid: "a6ec1cd7-459c-4758-904e-5e059746d9cc",
            modules: [
                {
                    description: "Craftable Elytra: server data",
                    type: "data",
                    uuid: "cf8d64f3-fbc3-40b3-b20d-d390ce19329a",
                    include: ["items/**", "recipes/**"]
                }
            ]
        }
    ]
};
