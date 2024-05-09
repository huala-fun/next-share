import toast from "react-hot-toast";

// path：src/utils/request.ts
const request = async (url: string, config: any) => {
  try {
    const res = await fetch(url, config);
    if (!res.ok) {
    //   toast.success("接口请求异常");
      // 服务器异常返回
      throw Error("接口请求异常");
    }
    toast.success("接口请求异常");
    return res.json();
  } catch (error) {
    toast.success("接口请求异常");
    return await Promise.reject(error);
  }
};

// GET请求
export const get = (url: string) => {
  return request(url, { method: "GET" });
};

// POST请求
export const post = (url: string, data: any) => {
  return request(url, {
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
  });
};
