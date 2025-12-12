// getDatoCmsToken.ts

export const getDatoCmsToken = (): string => {
  const hostname = window.location.hostname;

  switch (hostname) {
    case 'ror.troymanning.com':
    case 'troymanning.com':
    case 'ror.localhost':
    case 'localhost':
      return import.meta.env.VITE_DATOCMS_ROR_TOKEN ?? '';

    case 'java.troymanning.com':
    case 'java.localhost':
      return import.meta.env.VITE_DATOCMS_JAVA_TOKEN ?? '';

    case 'frontend.troymanning.com':
    case 'frontend.localhost':
      return import.meta.env.VITE_DATOCMS_FRONTEND_TOKEN ?? '';

    case 'node.troymanning.com':
    case 'node.localhost':
      return import.meta.env.VITE_DATOCMS_NODE_TOKEN ?? '';

    default:
      throw new Error(`No DatoCMS token configured for hostname: ${hostname}`);
  }
};
