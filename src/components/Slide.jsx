import React, { useEffect } from "react";
import * as d3 from 'd3';
import { sliderTop } from 'd3-simple-slider';
import '../css/slider.css';

const Slide = () => {
  const div = document.createElement('div');
  const slider = sliderTop()
    .min(0)
    .max(23)
    .step(1)
    .ticks(25)
    .width(325)
    .displayValue(false)
    .on('onchange', (val) => {
      //d3.select('#value').text(val);
    });

  useEffect(() => {
    const group2 = d3
    .select("div#slider2")
    .append("svg")
    .attr("width", 370)
    .attr("height", 50)
    .append("g")
    .attr("transform", "translate(25,35)");
  
    group2.call(slider);
  }, []);
  return (
    <>
      <div 
        id="slider2"
      ></div>
    </>
  );
};

export default Slide;
