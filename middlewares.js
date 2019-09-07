import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Atube";
  res.locals.routes = routes;
  res.locals.user = {
    isauthenticated: true,
    id: 5
  };
  next();
};
