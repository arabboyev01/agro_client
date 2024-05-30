import { Language } from "@/hooks/language";
import { CChart } from "@coreui/react-chartjs";

const CHartComponent = () => {
  const { lang } = Language("dashboard");
  return (
    <CChart
      type="bar"
      style={{ height: "700px", width: "100%" }}
      data={{
        labels: [
          `${lang("products")}`,
          `${lang("orders")}`,
          `${lang("soils")}`,
          `${lang("sails")}`,
          `${lang("map")}`,
        ],
        datasets: [
          {
            label: lang("statistics"),
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
              "#FF6384",
              "#4BC0C0",
              "#FFCE56",
              "#E7E9ED",
              "#36A2EB",
            ],
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            labels: {
              color: "grey",
            },
          },
        },
        scales: {
          r: {
            grid: {
              color: "grey",
            },
          },
        },
      }}
    />
  );
};

export default CHartComponent;
