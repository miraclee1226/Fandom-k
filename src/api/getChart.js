import dispatcher from "api/dispatcher";

const getChart = async ({ gender, pageSize = "10", isLoading, error , requestFunc: getChartData }) => {
  const result = await dispatcher({
    method: "get",
    url: "/charts/{gender}",
    params: {
      gender,
      pageSize,
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>error</div>;

  return result;
};

export default getChart;

