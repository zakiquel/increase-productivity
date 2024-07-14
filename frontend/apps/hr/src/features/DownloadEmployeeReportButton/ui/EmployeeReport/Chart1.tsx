import { Image } from "@react-pdf/renderer";
import { Chart } from "chart.js/auto";
import { useEffect, useState } from "react";

export function Chart1() {
  const [imgSrc, setImgSrc] = useState<string>("");

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 550;
    canvas.height = 360;
    document.body.appendChild(canvas);

    const chart = new Chart(canvas, {
      type: "radar",
      data: {
        labels: [
          "Ценность 1",
          "Ценность 2",
          "Ценность 3",
          "Ценность 4",
          "Ценность 5",
          "Ценность 6",
        ],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 13, 15, 12, 13],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
            labels: {
              font: {
                size: 28,
              },
            },
          },
          title: {
            align: "start",
            text: "Общий показатель по ценностям",
            display: true,
            padding: 16,
            font: {
              size: 40,
            },
          },
        },
        scales: {
          r: {
            pointLabels: {
              font: {
                size: 28,
              },
            },
            ticks: {
              display: false,
            },
          },
        },
        animation: false,
      },
    });

    setImgSrc(chart.toBase64Image());
    chart.destroy();
    setTimeout(() => {
      document.body.removeChild(canvas);
    }, 0);
  }, []);

  return <Image src={imgSrc} />;
}
