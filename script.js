const chart2Data = [
{ label: "Number of Persons 人數", value: 535181 },
{ label: "Social Associations 社會關係", value: 186534 },
{ label: "Biographical Addresses 地址", value: 323736 },
{ label: "Alternate Names 別名", value: 180535 },
{ label: "Kin Relationships 親屬關係", value: 537328 },
{ label: "Entry into Office 入仕", value: 162621 },
{ label: "Office Postings 任官", value: 393176 },
{ label: "Social Distinction 社會區分", value: 59786 },
{ label: "Texts 著作", value: 56813 }
];// Chart 2 Data
const chart1Data = [
{ label: "Tang", value: 53895 },
{ label: "5 Dynasties", value: 1909 },
{ label: "Song", value: 74360 },
{ label: "Liao", value: 339 },
{ label: "Jin", value: 706 },
{ label: "Yuan", value: 24706 },
{ label: "Ming", value: 221089 },
{ label: "Qing", value: 123244 },
{ label: "Minguo", value: 4682 }
];// Chart 1 Data 


const chart3Data = [
  { label: "Tang", value: 111, id: "Tang" },
  { label: "Song", value: 336, id: "Song" },
  { label: "Liao", value: 8, id: "Liao" },
  { label: "Jin", value: 38, id: "Jin" },
  { label: "Yuan", value: 153, id: "Yuan" },
  { label: "Ming", value: 469, id: "Ming" },
  { label: "Qing", value: 201, id: "Qing" }
]// Chart 3 Data
  
  
  
  
  
  
  //Do not modify the variable names of chart1Data and chart2Data, 
  //as well as the comments for '//Chart 1 Data' and '//Chart 2 Data', 
  //otherwise there may be issues during the update process
  
  // Create Chart 1  
  const chart1Container = d3.select("#chart1")
  const chart1Margin = { top: 15, right: 30, bottom: 40, left: 60 }
  const chart1Width = chart1Container.attr("width") - chart1Margin.left - chart1Margin.right
  const chart1Height = chart1Container.attr("height") - chart1Margin.top - chart1Margin.bottom
  
  const chart1Svg = chart1Container.append("g")
    .attr("transform", `translate(${chart1Margin.left}, ${chart1Margin.top})`)
  
  // Create Chart 2  
  const chart2Container = d3.select("#chart2")
  const chart2Margin = { top: 0, right: 20, bottom: 30, left: 140 }
  const chart2Width = chart2Container.attr("width") - chart2Margin.left - chart2Margin.right
  const chart2Height = chart2Container.attr("height") - chart2Margin.top - chart2Margin.bottom
  
  const chart2Svg = chart2Container.append("g")
    .attr("transform", `translate(${chart2Margin.left}, ${chart2Margin.top})`)
  
  // Create Chart 3  
  const chart3Container = d3.select("#chart3")
  const chart3Margin = { top: 15, right: 30, bottom: 40, left: 60 }
  const chart3Width = chart3Container.attr("width") - chart3Margin.left - chart3Margin.right
  const chart3Height = chart3Container.attr("height") - chart3Margin.top - chart3Margin.bottom
  
  const chart3Svg = chart3Container.append("g")
    .attr("transform", `translate(${chart3Margin.left}, ${chart3Margin.top})`)
  
  // const chart3Container = d3.select(".container")
  //   .append("div")
  //   .attr("class", "chart-container");
  
  // const chart3Svg = chart3Container
  //   .append("svg")
  //   .attr("width", 570)
  //   .attr("height", 600);
  
  
  
  
  // Scales for Chart 1  
  const chart1XScale = d3.scaleBand()
    .domain(chart1Data.map(d => d.label))
    .range([0, chart1Width])
    .padding(0.2)
  
  const chart1YScale = d3.scaleLinear()
    .domain([0, d3.max(chart1Data, d => d.value)])
    .range([chart1Height, 0])
  
  
  // Scales for Chart 2  
  const chart2XScale = d3.scaleLinear()
    .domain([0, d3.max(chart2Data, d => d.value)])
    .range([0, chart2Width])
  
  const chart2YScale = d3.scaleBand()
    .domain(chart2Data.map(d => d.label))
    .range([0, chart2Height])
    .padding(0.2)
  
  
  // Scales for Chart 3  
  const chart3XScale = d3.scaleBand()
    .domain(chart3Data.map(d => d.label))
    .range([0, chart3Width])
    .padding(0.2)
  
  const chart3YScale = d3.scaleLinear()
    .domain([0, d3.max(chart3Data, d => d.value)])
    .range([chart3Height, 0])
  
  
  // 创建chart1坐标轴
  const chart1XAxis = d3.axisBottom(chart1XScale)
  chart1Svg.append("g")
    .attr("transform", `translate(0, ${chart1Height})`)
    .call(chart1XAxis)
    .selectAll("text")
    .attr("transform", "rotate(-25)")  // 旋转标签文本  
    .style("text-anchor", "end")
    .attr("dx", "1em")  // 调整标签位置  
    .attr("dy", "1em")  // 调整标签位置  
    .attr("fill", "rgba(137, 110, 80, 100)")
    .style("font-family", "Times New Roman")
    .style("font-size", "13px")
    .style("font-weight", "bold")
  
  
  const chart1YAxis = d3.axisLeft(chart1YScale).ticks(8)
  chart1Svg.append("g")
    .call(chart1YAxis)
  
  // Create Chart 1 bars  
  chart1Svg.selectAll("rect")
    .data(chart1Data)
    .enter()
    .append("rect")
    .attr("x", d => chart1XScale(d.label))
    .attr("y", d => chart1YScale(d.value))
    .attr("width", chart1XScale.bandwidth())
    .attr("height", d => chart1Height - chart1YScale(d.value))
    .attr("fill", "#8E6D4B")
    .attr("fill-opacity", 0.5)
    .attr("stroke", "#946B45")
    .attr("stroke-width", 1)
    .on("mouseover", function () {
      d3.select(this)
        .attr("filter", "url(#shadow)")
        .attr("fill", "#5C0000")
      // .attr("fill-opacity", 0.5);  
    })
    .on("mouseout", function () {
      d3.select(this)
        .attr("filter", "none")
        .attr("fill", "#8E6D4B")
        .attr("fill-opacity", 0.5)
    })
  
  
  // 创建chart2坐标轴
  const chart2XAxis = d3.axisBottom(chart2XScale).ticks(5)
  
  chart2Svg.append("g")
    .attr("transform", `translate(0, ${chart2Height})`)
    .call(chart2XAxis)
  
  const chart2YAxis = d3.axisLeft(chart2YScale)
  
  chart2Svg.append("g")
    .call(chart2YAxis)
    .selectAll("text")
    .attr("transform", "rotate(0)")  // 旋转标签文本  
    .style("text-anchor", "end")
    .attr("dx", "0em")  // 调整标签位置  
    .attr("dy", "0.2em")  // 调整标签位置  
    .attr("fill", "rgba(137, 110, 80, 100)")
    .style("font-family", "Times New Roman")
    .style("font-size", "13px")
    .style("font-weight", "bold")
  
  // Create Chart 2 bars  
  chart2Svg.selectAll("rect")
    .data(chart2Data)
    .enter()
    .append("rect")
    .attr("x", 0)
    .attr("y", d => chart2YScale(d.label))
    .attr("width", d => chart2XScale(d.value))
    .attr("height", chart2YScale.bandwidth())
    .attr("fill", "#8E6D4B")
    .attr("fill-opacity", 0.5)
    .attr("stroke", "#946B45")
    .attr("stroke-width", 1)
    .on("mouseover", function () {
      d3.select(this)
        .attr("filter", "url(#shadow)")
        .attr("fill", "#5C0000")
        .attr("fill-opacity", 0.5)
    })
    .on("mouseout", function () {
      d3.select(this)
        .attr("filter", "none")
        .attr("fill", "#8E6D4B")
        .attr("fill-opacity", 0.5)
    })
  
  // Add labels to Chart 1 bars  
  chart1Svg.selectAll(".bar-label")
    .data(chart1Data)
    .enter()
    .append("text")
    .classed("bar-label", true)  // 设置类名
    .text(d => d.value)
    .attr("x", d => chart1XScale(d.label) + chart1XScale.bandwidth() / 2)
    .attr("y", d => chart1YScale(d.value) - 5)
    .attr("font-family", "Times New Roman")
    .attr("font-weight", "bold")
    .attr("font-size", 10)
    .attr("fill", "#896E50")
    .attr("text-anchor", "middle")
  
  
  // Add labels to Chart 2 bars  
  chart2Svg.selectAll(".bar-label")
    .data(chart2Data)
    .enter()
    .append("text")
    .classed("bar-label", true)  // 设置类名
    .text(d => d.value)
    .attr("x", d => chart2XScale(d.value) + 19)
    .attr("y", d => chart2YScale(d.label) + chart2YScale.bandwidth() / 1.5)
    .attr("font-family", "Times New Roman")
    .attr("font-weight", "bold")
    .attr("font-size", 10)
    .attr("fill", "#896E50")
    .attr("text-anchor", "middle")
  
  
  // 创建chart3坐标轴
  const chart3XAxis = d3.axisBottom(chart3XScale)
  chart3Svg.append("g")
    .attr("transform", `translate(0, ${chart3Height})`)
    .call(chart3XAxis)
    .selectAll("text")
    .attr("transform", "rotate(-25)")
    .style("text-anchor", "end")
    .attr("dx", "1em")
    .attr("dy", "1em")
    .attr("fill", "rgba(137, 110, 80, 100)")
    .style("font-family", "Times New Roman")
    .style("font-size", "13px")
    .style("font-weight", "bold")
  
  const chart3YAxis = d3.axisLeft(chart3YScale).ticks(8)
  chart3Svg.append("g")
    .call(chart3YAxis)
  
  // Create Chart 3 bars  
  chart3Svg.selectAll("rect")
    .data(chart3Data)
    .enter()
    .append("rect")
    .attr("x", d => chart3XScale(d.label))
    .attr("y", d => chart3YScale(d.value))
    .attr("width", chart3XScale.bandwidth())
    .attr("height", d => chart3Height - chart3YScale(d.value))
    .attr("fill", "#8E6D4B")
    .attr("fill-opacity", 0.5)
    .attr("stroke", "#946B45")
    .attr("stroke-width", 1)
    .on("mouseover", function () {
      d3.select(this)
        .attr("filter", "url(#shadow)")
        .attr("fill", "#5C0000")
        .attr("fill-opacity", 0.5)
    })
    .on("mouseout", function () {
      d3.select(this)
        .attr("filter", "none")
        .attr("fill", "#8E6D4B")
        .attr("fill-opacity", 0.5)
    })
  
  chart3Svg.selectAll(".bar-label")
    .data(chart3Data)
    .enter()
    .append("text")
    .text(d => d.value) // 显示柱状的数值
    .attr("x", d => chart3XScale(d.label) + chart3XScale.bandwidth() / 2)
    .attr("y", d => chart3YScale(d.value) - 10) // 将文本显示在柱状上方
    .attr("font-family", "Times New Roman")
    .attr("font-weight", "bold")
    .attr("font-size", 10)
    .attr("fill", "#896E50")
    .attr("text-anchor", "middle")
  
  
  
  const chartImageContainer = d3.select("#image-container") // 图像容器的选择器
  
  chart3Svg.selectAll("rect")
    .on("click", function (event, d) {
      const selectedImageId = d.id // 获取柱状的标识符
      const imagePath = `./images/${selectedImageId}.svg` // 构建图像路径
  
      // 更新图像容器中的图像
      chartImageContainer.attr("src", imagePath)
    })
  
  