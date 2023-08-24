const chart2Data = [
{ label: "Number of Persons", value: 529560 },
{ label: "Social Associations", value: 185030 },
{ label: "Biographical Addresses", value: 322661 },
{ label: "Alternate Names", value: 173619 },
{ label: "Kin Relationships", value: 532065 },
{ label: "Entry into Office", value: 161261 },
{ label: "Office Postings", value: 312636 },
{ label: "Social Distinction", value: 58372 },
{ label: "Texts", value: 54219 }
];// Chart 2 Data
const chart1Data = [
{ label: "Tang", value: 53886 },
{ label: "5 Dynasties", value: 1791 },
{ label: "Song", value: 74010 },
{ label: "Liao", value: 339 },
{ label: "Jin", value: 704 },
{ label: "Yuan", value: 24692 },
{ label: "Ming", value: 220255 },
{ label: "Qing", value: 119238 },
{ label: "Minguo", value: 4683 }
];// Chart 1 Data 






 
 



// Create Chart 1  
const chart1Container = d3.select("#chart1");  
const chart1Margin = { top: 15, right: 30, bottom: 40, left: 60 };  
const chart1Width = chart1Container.attr("width") - chart1Margin.left - chart1Margin.right;  
const chart1Height = chart1Container.attr("height") - chart1Margin.top - chart1Margin.bottom;  

const chart1Svg = chart1Container.append("g")  
    .attr("transform", `translate(${chart1Margin.left}, ${chart1Margin.top})`);  

// Create Chart 2  
const chart2Container = d3.select("#chart2");  
const chart2Margin = { top: 0, right: 20, bottom: 30, left: 140 };  
const chart2Width = chart2Container.attr("width") - chart2Margin.left - chart2Margin.right;  
const chart2Height = chart2Container.attr("height") - chart2Margin.top - chart2Margin.bottom;  

const chart2Svg = chart2Container.append("g")  
    .attr("transform", `translate(${chart2Margin.left}, ${chart2Margin.top})`);  


    
// Scales for Chart 1  
const chart1XScale = d3.scaleBand()  
    .domain(chart1Data.map(d => d.label))  
    .range([0, chart1Width])  
    .padding(0.2);  

const chart1YScale = d3.scaleLinear()  
    .domain([0, d3.max(chart1Data, d => d.value)])  
    .range([chart1Height, 0]);  

// Scales for Chart 2  
const chart2XScale = d3.scaleLinear()  
    .domain([0, d3.max(chart2Data, d => d.value)])  
    .range([0, chart2Width]);  

    

const chart2YScale = d3.scaleBand()  
    .domain(chart2Data.map(d => d.label))  
    .range([0, chart2Height])  
    .padding(0.2);  

// 创建chart1坐标轴
const chart1XAxis = d3.axisBottom(chart1XScale);
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
    .style("font-weight", "bold");  
        

const chart1YAxis = d3.axisLeft(chart1YScale).ticks(8);
 chart1Svg.append("g")
        .call(chart1YAxis);



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
            .attr("fill-opacity", 0.5);  
    });  

// 创建chart2坐标轴
const chart2XAxis = d3.axisBottom(chart2XScale).ticks(5);

chart2Svg.append("g")
    .attr("transform", `translate(0, ${chart2Height})`)
    .call(chart2XAxis);

const chart2YAxis = d3.axisLeft(chart2YScale);
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
.style("font-weight", "bold");  




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
            .attr("fill-opacity", 0.5);  
    })  
    .on("mouseout", function () {  
        d3.select(this)  
            .attr("filter", "none")  
            .attr("fill", "#8E6D4B")  
            .attr("fill-opacity", 0.5);  
    });  

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
    .attr("text-anchor", "middle");  

    
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
    .attr("text-anchor", "middle");  
