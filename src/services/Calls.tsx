export const GiphyCall = async (term?: string) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${
      import.meta.env.VITE_GIPHY_KEY
    }&q=${term}&limit=1`
  ).then((res) => res.json());
  const res = response.data[0]
  return res;
};
