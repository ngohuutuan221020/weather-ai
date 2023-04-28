const getBasePath = () => {
  let base_url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : `https://weather-ai.onrender.com`;
      // : `https://${process.env.VERCEL_URL}`;
  return base_url;
};
export default getBasePath;
