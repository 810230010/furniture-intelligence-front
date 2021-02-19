<template>
    <div class="summary">
        <h2>庆元家居企业统计</h2>
        <div id="map"></div>

        <div class="layer-2">
            <!--  -->
        </div>
    </div>
</template>

<script>
export default {
  name: 'Summary',
  data() {
      return {
          
      }
  },
  methods:{
	  myEcharts(){
		  // 基于准备好的dom，初始化echarts实例
		  var myChart = this.$echarts.init(document.getElementById('map'));

		  // 指定图表的配置项和数据
		  var option = {
			  title: {
				  text: 'ECharts 入门示例'
			  },
			  tooltip: {},
			  legend: {
				  data:['销量']
			  },
			  xAxis: {
				  data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
			  },
			  yAxis: {},
			  series: [{
				  name: '销量',
				  type: 'bar',
				  data: [5, 20, 36, 10, 10, 20]
			  }]
		  };

		  // 使用刚指定的配置项和数据显示图表。
		  myChart.setOption(option);
		  }
  },
  mounted() {
  	this.myEcharts();
    document.body.style.backgroundColor = '#333333';
  }
}
</script>

<style scoped>
    body {
        background-color: black;
    }
    #map {
        width: 100%;
        height: 200px;
    }
</style>