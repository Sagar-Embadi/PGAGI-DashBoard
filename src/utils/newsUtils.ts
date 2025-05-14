export const getSourceName = (url: string): string => {
  try {
    const host = new URL(url).hostname;
    return host.replace(/^www\./, '');
  } catch {
    return 'Unknown Source';
  }
};
