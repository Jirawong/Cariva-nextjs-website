export default async function handler(req, res) {
  if (req.method === "PUT") {
    try {
      const newsId = req.query.newsId;
      const apiUrl = `https://api.jobboxthai.com/api/news-lists/${newsId}`;
      const token =
        "0cd166e344a7735feae0ea477f350489615c6bf80ba5bc375c679f5294424480a036943597d11fb2476830d8103f826130da2e925b4ca51187c89c50ff6d404ce42ec3a23ddf0c00ea7624a0ceebbd49ca84afd24aa0469fee27befa45298ec401fde14d2461505f7afc91677149978d5b42f375def8438d2de13ac25a1fee1f";

      const requestOptions = {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToUpdate),
      };

      const apiResponse = await fetch(apiUrl, requestOptions);
      const responseData = await apiResponse.json();

      res.status(200).json(responseData);
    } catch (error) {
      res.status(500).json({ error: "An error occurred" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
