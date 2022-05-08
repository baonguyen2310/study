console.log("hello D3.js");
const groupli = d3.selectAll("li").text("Heelo D3.js!");
const ul = d3.select("ul").selectAll("li");

const dataset = [12, 31, 22, 16, 25, 29, 15];



ul.style("color", "pink");


d3.select("ul").selectAll("li")
      .data(dataset)
      .enter()
      .append("li")
      .attr("class", "bar")
      .style("height", (d) => (d*10 + "px"));

const w = 500;
const h = 100;


const svg= d3.select('body')
	.append('svg')
	.attr('width', w)
	.attr('height', h);

svg.selectAll('rect')
	.data(dataset)				//Mỗi phần tử data chạy 1 lần
	.enter()
	.append('rect')
	.attr('width', 25)
	.attr('height', (d) => d*3)
	.attr('x', (d, i) => i*30)
	.attr('y', (d) => h - d*3)
	.attr('fill', 'navy')
	.attr('class', 'bar')

svg.selectAll('text')
	.data(dataset)
	.enter()
	.append('text')
	.attr('x', (d, i) => i*30)
	.attr('y', (d) => h - d*3 -3)
	.text((d) => d)
	.attr('fill', 'red')
	.attr('font-size', '25px')
	.style('font-size', '1em')

svg.selectAll('title')
	.data(dataset)
	.enter()
	.append('title')
	.attr('x', (d, i) => i*30)
	.attr('y', (d, i) => h)
	.text((d) => d)


//Dataset2
 const dataset2 = [
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w2 = 300;
    const h2 = 300;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset2, (d) => d[0])])
                     .range([padding, w2 - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset2, (d) => d[1])])
                     .range([h2 - padding, padding]);

    const svg2 = d3.select("body")
                  .append("svg")
                  .attr("width", w2)
                  .attr("height", h2)
                  .attr('class', 'svg2')

    svg2.selectAll("circle")
       .data(dataset2)
       .enter()
       .append("circle")
      .attr('cx', (d) => xScale(d[0]))
      .attr('cy', (d) => yScale(d[1]))
      .attr('r', 5)

    svg2.selectAll("text")
       .data(dataset2)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + ", "+ d[1]))
      .attr('x', (d) => xScale(d[0]+ 10))
      .attr('y', (d) => yScale(d[1]))

  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  svg2.append("g") //group element
  		.attr('transform', 'translate(0, ' + (h2 - padding) + ' )') //Do position nằm ở h không thể thấy
  		.call(xAxis); 	//translate x, y

  svg2.append("g")
  		.attr('transform', 'translate(' + padding + ' , 0)')
  		.call(yAxis);
