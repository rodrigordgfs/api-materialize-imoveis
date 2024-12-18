import imoveis from "./imoveis.route.js";

const routes = async (fastify) => {
  fastify.register(imoveis);
};

export default routes;
