const chart3Data = [
{ label: "Tang", value: 133, id: "Tang"},
{ label: "Song", value: 429, id: "Song"},
{ label: "Liao", value: 9, id: "Liao"},
{ label: "Jin", value: 43, id: "Jin"},
{ label: "Yuan", value: 164, id: "Yuan"},
{ label: "Ming", value: 508, id: "Ming"},
{ label: "Qing", value: 232, id: "Qing"}
];// Chart 3 Data
const chart1Data = [
{ label: "Tang", value: 53953 },
{ label: "5 Dynasties", value: 1984 },
{ label: "Song", value: 79644 },
{ label: "Liao", value: 339 },
{ label: "Jin", value: 792 },
{ label: "Yuan", value: 25163 },
{ label: "Ming", value: 222194 },
{ label: "Qing", value: 230463 },
{ label: "Minguo", value: 4681 }
];// Chart 1 Data 
const chart2Data = [
{ label: "Number of Persons 人數", value: 649533 },
{ label: "Social Associations 社會關係", value: 188365 },
{ label: "Biographical Addresses 地址", value: 448799 },
{ label: "Alternate Names 別名", value: 202437 },
{ label: "Kin Relationships 親屬關係", value: 543846 },
{ label: "Entry into Office 入仕", value: 260287 },
{ label: "Office Postings 任官", value: 1979566 },
{ label: "Social Distinction 社會區分", value: 64264 },
{ label: "Texts 著作", value: 58288 }
];// Chart 2 Data
const chart4Data = [
{ label: "Tang", gender: "女", value: 4248 },
{ label: "Tang", gender: "男", value: 49705 },
{ label: "5 Dynasties", gender: "男", value: 1871 },
{ label: "5 Dynasties", gender: "女", value: 113 },
{ label: "Song", gender: "女", value: 4515 },
{ label: "Song", gender: "男", value: 75129 },
{ label: "Liao", gender: "男", value: 254 },
{ label: "Liao", gender: "女", value: 85 },
{ label: "Jin", gender: "男", value: 738 },
{ label: "Jin", gender: "女", value: 54 },
{ label: "Yuan", gender: "女", value: 861 },
{ label: "Yuan", gender: "男", value: 24302 },
{ label: "Ming", gender: "女", value: 36444 },
{ label: "Ming", gender: "男", value: 185750 },
{ label: "Qing", gender: "女", value: 8372 },
{ label: "Qing", gender: "男", value: 222091 },
{ label: "Minguo", gender: "女", value: 22 },
{ label: "Minguo", gender: "男", value: 4659 }
];//Chart 4 Data























  
  
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
  const chart2Margin = { top: 0, right: 20, bottom: 30, left: 180 }
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
    .domain([0, d3.max(chart3Data, d => d.value) + 50])
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
  
  
  // 创建图表3的坐标轴
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

// 初始化选中的柱状图ID
let selectedBarId = 'Tang'

// 创建图表3的柱状图
chart3Svg.selectAll("rect")
  .data(chart3Data)
  .enter()
  .append("rect")
  .attr("x", d => chart3XScale(d.label))
  .attr("y", d => chart3YScale(d.value))
  .attr("width", chart3XScale.bandwidth())
  .attr("height", d => chart3Height - chart3YScale(d.value))
  .attr("fill", d => d.id === selectedBarId ? "#5C0000" : "#8E6D4B") // 根据选中状态设置颜色
  .attr("fill-opacity", d => d.id === selectedBarId ? 0.8 : 0.5)
  .attr("stroke", "#946B45")
  .attr("stroke-width", 1)
  .on("mouseover", function (event, d) {
    if (d.id !== selectedBarId) { // 如果不是选中的柱状图
      d3.select(this)
        .attr("filter", "url(#shadow)")
        .attr("fill", "#5C0000")
        .attr("fill-opacity", 0.7)
    }
  })
  .on("mouseout", function (event, d) {
    if (d.id === selectedBarId) { // 如果是选中的柱状图，保持高亮
      d3.select(this)
        .attr("filter", "none")
        .attr("fill", "#5C0000")
        .attr("fill-opacity", 0.8)
    } else { // 其他柱状图恢复原色
      d3.select(this)
        .attr("filter", "none")
        .attr("fill", "#8E6D4B")
        .attr("fill-opacity", 0.5)
    }
  })
  .on("click", function (event, d) {
    selectedBarId = d.id // 更新选中的柱状图ID
    updateChart(selectedBarId) // 更新子图
    // 更新所有柱状图的颜色
    chart3Svg.selectAll("rect")
      .attr("fill", d => d.id === selectedBarId ? "#5C0000" : "#8E6D4B")
      .attr("fill-opacity", d => d.id === selectedBarId ? 0.8 : 0.5)
  })

// 为图表3的柱状图添加标签
chart3Svg.selectAll(".bar-label")
  .data(chart3Data)
  .enter()
  .append("text")
  .text(d => d.value) // 显示柱状图的数值
  .attr("x", d => chart3XScale(d.label) + chart3XScale.bandwidth() / 2)
  .attr("y", d => chart3YScale(d.value) - 10) // 将文本显示在柱状图上方
  .attr("font-family", "Times New Roman")
  .attr("font-weight", "bold")
  .attr("font-size", 10)
  .attr("fill", "#896E50")
  .attr("text-anchor", "middle")

// 创建子图的函数
function updateChart(selectedBarId) {
  d3.json("chart2Data.json").then(jsonData => {
    const data = jsonData[selectedBarId]; // 获取选定朝代的数据

    const width = 550; // 增加SVG宽度
    const height = 450;
    const margin = { top: 40, right: 50, bottom: 40, left: 250 }; // 增加左边距

    // 清空之前的图表内容
    d3.select("#chart").selectAll("*").remove();

    // 创建SVG图表容器
    const svg = d3.select("#chart")
      .attr("width", width)
      .attr("height", height);

    // 添加虚线边框框住下方图表
    svg.append("rect")
      .attr("x", margin.left - 215)
      .attr("y", margin.top - 35)
      .attr("width", width - margin.left - margin.right + 260)
      .attr("height", height - margin.top - margin.bottom + 50)
      .attr("fill", "none")
      .attr("stroke", "gray")
      .attr("stroke-width", 1)
      .attr("stroke-dasharray", "5,5"); // 使用虚线框框住图表

    // X轴比例尺
    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.count)])
      .range([0, width - margin.left - margin.right]);

    // Y轴比例尺
    const yScale = d3.scaleBand()
      .domain(data.map(d => d.title))
      .range([margin.top, height - margin.bottom])
      .padding(0.1);

    // 绘制X轴
    svg.append("g")
      .attr("transform", `translate(${margin.left+10}, ${margin.top})`)
      .call(d3.axisTop(xScale).ticks(5))
      .call(g => g.selectAll(".tick text")
        .style("font-size", "10")
        .style("font-weight", "normal"))
      .style("font-family", "TimesNewRomanPSMT, Times New Roman")
      .call(g => g.selectAll(".domain").remove())
      .call(g => g.selectAll(".tick line")
        .attr("y2", height - margin.top - margin.bottom)
        .attr("stroke-dasharray", "3,3")
        .attr("stroke", "lightgray"));

    // 绘制Y轴
    svg.append("g")
      .attr("transform", `translate(${margin.left+10}, 0)`)
      .call(d3.axisLeft(yScale).tickSize(0))
      .call(g => g.selectAll(".tick text")
        .style("font-size", "10")
        .style("font-weight", "700")
        .style("fill", "#3A3A3A")
        .style("font-family", "STKaitiSC-Black, Kaiti SC")
        .attr("dy", "-0.2em"))
      .call(g => g.selectAll(".domain").remove());

    // 绘制条形图
    svg.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", margin.left+10)
      .attr("y", d => yScale(d.title))
      .attr("width", d => xScale(d.count))
      .attr("height", yScale.bandwidth() * 0.4)
      .attr("fill", "#D8D8D8")
      .attr("stroke", "#979797")
      .attr("stroke-width", 0.5);

    // 绘制条形图标签
    svg.selectAll(".label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("x", d => margin.left + xScale(d.count) + 15)
      .attr("y", d => yScale(d.title) + yScale.bandwidth() / 2 - 2)
      .text(d => d.count)
      .style("font-size", "10")
      .style("font-weight", "normal")
      .style("font-family", "TimesNewRomanPSMT, Times New Roman");

    // 添加图表标题
    svg.append("text")
      .attr("x", width / 2)
      .attr("y", margin.top / 2)
      .attr("text-anchor", "middle")
      .style("font-size", "13px")
      .style("font-weight", "800")
      .style("fill", "#927251")
      .text("資源人數統計（人）");

    // 高亮Chart 3中选定朝代的柱状图
    chart3Svg.selectAll("rect")
      .attr("fill", d => d.id === selectedBarId ? "#5C0000" : "#8E6D4B")
      .attr("fill-opacity", d => d.id === selectedBarId ? 0.8 : 0.5);

  }).catch(error => {
    console.error("加载JSON文件时出错:", error);
  });
}

// 初始化图表显示为默认的唐朝数据
updateChart(selectedBarId)



// 男女人数统计表
// 绑定到id为chart4的SVG容器
const chart4Container = d3.select("#chart4");
const chart4Margin = {top: 30, right: 30, bottom: 40, left: 60};
const chart4Width = chart4Container.attr("width") - chart4Margin.left - chart4Margin.right;
const chart4Height = chart4Container.attr("height") - chart4Margin.top - chart4Margin.bottom;

const chart4Svg = chart4Container.append("g")
    .attr("transform", `translate(${chart4Margin.left}, ${chart4Margin.top})`);

// 计算每个朝代的总人数
const aggregatedData = chart4Data.reduce((acc, curr) => {
    const {label, value} = curr;
    acc[label] = (acc[label] || 0) + value;
    return acc;
}, {});

// 创建x轴和y轴的比例尺
const chart4XScale = d3.scaleBand()
    .domain([...new Set(chart4Data.map(d => d.label))])  // 去重后的朝代名称
    .range([0, chart4Width])
    .padding(0.3);  // 增加组间的间距

// 根据最大总人数合理设置 y 轴比例
const chart4YScale = d3.scaleLinear()
    .domain([0, d3.max(Object.values(aggregatedData)) + 10])  // 总人数最大值+10，增加一点空间
    .range([chart4Height, 0]);

const colorScale = d3.scaleOrdinal()
    .domain(["男", "女"])
    .range(["#5164AE", "#CC4B48"]);  // 使用不同颜色表示男女

// 创建x轴
const chart4XAxis = d3.axisBottom(chart4XScale);
chart4Svg.append("g")
    .attr("transform", `translate(0, ${chart4Height})`)
    .call(chart4XAxis)
    .selectAll("text")
    .attr("transform", "rotate(-25)")
    .style("text-anchor", "end")
    .attr("dx", "1em")
    .attr("dy", "1em")
    .attr("fill", "rgb(43,41,42)")
    .style("font-family", "Times New Roman")
    .style("font-size", "13px")
    .style("font-weight", "bold");

// 创建y轴
const chart4YAxis = d3.axisLeft(chart4YScale).ticks(8);
chart4Svg.append("g").call(chart4YAxis);

// 绘制柱状图
const shiftRight = 5;
chart4Svg.selectAll("rect")
    .data(chart4Data)
    .enter()
    .append("rect")
    .attr("x", d => chart4XScale(d.label)
        + (d.gender === "男" ? -chart4XScale.bandwidth() / 3 : chart4XScale.bandwidth() / 5)
        + chart4XScale.bandwidth() / 5
        + shiftRight)  // 向右整体移动
    .attr("y", d => chart4YScale(d.value))
    .attr("width", chart4XScale.bandwidth() / 2.5)  // 调整宽度，确保两柱之间的距离
    .attr("height", d => chart4Height - chart4YScale(d.value))
    .attr("fill", d => colorScale(d.gender))
    .attr("fill-opacity", 1)
    .attr("stroke-width", 1)
    .on("mouseover", function (event, d) {
        d3.select(this).attr("fill-opacity", 0.8);

        // 显示男女数量的提示框
        tooltip.style("display", "block")
               .html(`${d.gender}: ${d.value}`)
               .style("left", `${event.pageX + 10}px`)
               .style("top", `${event.pageY - 10}px`);
    })
    .on("mouseout", function () {
        d3.select(this).attr("fill-opacity", 1);

        // 隐藏提示框
        tooltip.style("display", "none");
    });

// 创建一个提示框，用于鼠标悬停时显示男女数量
const tooltip = d3.select("body").append("div")
    .style("position", "absolute")
    .style("background-color", "white")
    .style("border", "1px solid #ddd")
    .style("padding", "5px")
    .style("font-family", "Times New Roman")
    .style("font-size", "12px")
    .style("display", "none");

// 添加朝代的总人数标线和默认的总人数标签
Object.keys(aggregatedData).forEach(label => {
    const totalValue = aggregatedData[label];
    const xPosition = chart4XScale(label) + chart4XScale.bandwidth() / 2;
    const yPosition = chart4YScale(totalValue);

    // 绘制加宽的总人数横线
    chart4Svg.append("line")
        .attr("x1", xPosition - chart4XScale.bandwidth() / 2)
        .attr("x2", xPosition + chart4XScale.bandwidth() / 2)
        .attr("y1", yPosition)
        .attr("y2", yPosition)
        .attr("stroke", "black")
        .attr("stroke-width", 1.5);

    // 添加总人数的默认标签在横线正上方
    chart4Svg.append("text")
        .attr("x", xPosition)
        .attr("y", yPosition - 5)
        .text(totalValue)
        .attr("font-family", "Times New Roman")
        .attr("font-size", 12)
        .attr("fill", "#2b292a")
        .attr("text-anchor", "middle");
});

// 添加图例（Legend）
const legend = chart4Svg.append("g")
    .attr("transform", `translate(${chart4Width - 20}, ${chart4Height / 8})`);  // 设置图例位置为底部

// 图例 - 男
legend.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 15)
    .attr("height", 15)
    .attr("fill", "#5164AE");

legend.append("text")
    .attr("x", 20)
    .attr("y", 12)
    .text("男")
    .attr("font-family", "Times New Roman")
    .attr("font-size", 12)
    .attr("fill", "#000");

// 图例 - 女
legend.append("rect")
    .attr("x", 0)
    .attr("y", 25)
    .attr("width", 15)
    .attr("height", 15)
    .attr("fill", "#CC4B48");

legend.append("text")
    .attr("x", 20)
    .attr("y", 37)
    .text("女")
    .attr("font-family", "Times New Roman")
    .attr("font-size", 12)
    .attr("fill", "#000");
