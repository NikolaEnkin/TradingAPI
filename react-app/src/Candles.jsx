import { useEffect, useRef } from "react";
import { createChart, CandlestickSeries } from "lightweight-charts";

export default function Candles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // 1️⃣ Create the chart
    const chart = createChart(el, {
      width: el.clientWidth,
      height: 520,
      layout: {
        background: { type: "solid", color: "#0b0f19" },
        textColor: "#d1d4dc",
      },
      grid: {
        vertLines: { color: "#1f2a3a" },
        horzLines: { color: "#1f2a3a" },
      },
      timeScale: { timeVisible: true },
    });

    // 2️⃣ Create the candlestick series
    const series = chart.addSeries(CandlestickSeries);

    // 3️⃣ FETCH DATA FROM DJANGO
    async function loadCandles() {
      const res = await fetch("http://localhost:8000/api/candles/");
      const data = await res.json();
      series.setData(data);
      chart.timeScale().fitContent();
    }

    loadCandles();

    // 4️⃣ Handle resize
    const onResize = () => chart.applyOptions({ width: el.clientWidth });
    window.addEventListener("resize", onResize);

    // 5️⃣ Cleanup
    return () => {
      window.removeEventListener("resize", onResize);
      chart.remove();
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%" }} />;
}
