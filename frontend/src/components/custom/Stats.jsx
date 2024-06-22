import useData from "@/hooks/useData";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const Stats = () => {
  const {
    month,
    result: { stats: data },
  } = useData();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Statistics - {months[month - 1]}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="text-left">
          <p>Total Sale: {data?.data[0].totalSaleAmount || "Fetching..."}</p>
          <p>Total sold item: {data?.data[0].noOfSold || "Fetching..."}</p>
          <p>
            Total not sold item: {data?.data[0].noOfNotSold || "Fetching..."}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Stats;
