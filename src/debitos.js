export default {
  "/rest/servicoContribuinteController/pesquisarDebitos": {
    post: {
      summary: "Retorna todos os débitos do contribuinte",
      description: "",
      tags: ["Débitos"],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/dataCCP",
            },
          },
        },
      },
      responses: {
        200: {
          description: "OK",
          content: {
            "application/json": {
              schema: { type: "object" },
            },
          },
        },
      },
    },
  },
};
