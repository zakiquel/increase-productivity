import { Image } from "@react-pdf/renderer";
import { Chart } from "chart.js/auto";
import { useEffect, useState } from "react";

export function Chart4() {
  const [imgSrc, setImgSrc] = useState<string>("");

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 550;
    canvas.height = 360;
    document.body.appendChild(canvas);

    const chart = new Chart(canvas, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              font: {
                size: 28,
              },
            },
          },
          title: {
            align: "start",
            text: "Ценность 3",
            display: true,
            padding: 16,
            font: {
              size: 40,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              font: {
                size: 28,
              },
            },
          },
          y: {
            ticks: {
              font: {
                size: 28,
              },
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
