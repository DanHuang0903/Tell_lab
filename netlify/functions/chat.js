exports.handler = async function (event) {
    try {
      if (event.httpMethod !== "POST") {
        return {
          statusCode: 405,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ error: "Method Not Allowed" }),
        };
      }
  
      const { model, messages } = JSON.parse(event.body || "{}");
  
      if (!process.env.OPENAI_API_KEY) {
        return {
          statusCode: 500,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ error: "Missing OPENAI_API_KEY" }),
        };
      }
  
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: model || "gpt-4o-mini",
          messages: messages || [],
        }),
      });
  
      const data = await response.json();
  
      console.log("OpenAI status:", response.status);
      console.log("OpenAI response:", JSON.stringify(data));
  
      return {
        statusCode: response.status,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
    } catch (error) {
      console.error("Function error:", error);
  
      return {
        statusCode: 500,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          error: error.message || "Server error",
        }),
      };
    }
  };