const BASE_URL = "https://api.jobboxthai.com/api/";

const fetchAPI = async (endpoint, options = {}) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${"2878fc07f8b25970490b33ffd04b63b23e392b97456ce89270a89d2bc022b72d88cf328e647c56a5b0164afb407fa34ca009b9ac29c6305bf597be08b8621952ffc17fbf44a09c0dacb053bc08f00f53efc9d94620865abf16f1ae68c7076498e9807e2fac3d2d4ab42bf91cb8732d3a7870d7c19a46ca6124909090190e084d"}`,
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers,
    ...options,
  });

  const data = await response.json();
  return data;
};

export default fetchAPI;
