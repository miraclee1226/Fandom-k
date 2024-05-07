import dispatcher from "./dispatcher";

const getDonationsData = async ({ pageSize = 4, cursor = "" }) => {
  const result = await dispatcher({
    method: "get",
    url: "/donations",
    params: {
      pageSize,
      cursor,
    },
  });

  return result;
};

export default getDonationsData;
