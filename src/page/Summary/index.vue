<template>
    <div class="summary">
        <h2>庆元竹木产业创新服务综合体大数据中心</h2>
        <div id="map"></div>

        <div class="layer-2" style="margin-top: 20px">
            <el-row :gutter="20">
				<el-col :span="12">
					<div class="grid-content bg-purple" style="height:400px">
						<h3>综合最新科技动态</h3>
						<p>xxx公司最新认定国家高薪技术企业</p>
						<p>xxx公司最新认定国家高薪技术企业</p>
						<p>xxx公司最新认定国家高薪技术企业</p>
						<p>xxx公司最新认定国家高薪技术企业</p>
						<p>xxx公司最新认定国家高薪技术企业</p>
						<p>xxx公司最新认定国家高薪技术企业</p>
						<p>xxx公司最新认定国家高薪技术企业</p>
					</div>
				</el-col>
				<el-col :span="12">
					<div class="grid-content bg-purple">
						<div class='card' style="border-style: solid">
							<div class='header'>
								<p>创新机构服务体系</p>
							</div>
							<div class='content'>
								<el-row>
									<el-col :span="8">
										创新设计体系
									</el-col>
									<el-col :span="8">
										创新设计体系
									</el-col>
									<el-col :span="8">
										创新设计体系
									</el-col>
								</el-row>
							</div>
						</div>
						<div class='card' style="border-style: solid">
							<div class='header'>
								<p>产业创新生态</p>
							</div>
							<div class='content'>
								<el-row>
									<el-col :span="8">
										服务企业数2222
									</el-col>
									<el-col :span="8">
										服务企业数2222
									</el-col>
									<el-col :span="8">
										服务企业数2222
									</el-col>
								</el-row>
							</div>
						</div>
						<div class='card' style="border-style: solid">
							<div class='header'>
								<p>科技金融服务体系</p>
							</div>
							<div class='content'>
								<el-row>
									<el-col :span="8">
										贷款余额9912931
									</el-col>
									<el-col :span="8">
										贷款余额9912931
									</el-col>
									<el-col :span="8">
										贷款余额9912931
									</el-col>
								</el-row>
							</div>
						</div>
						<div class='card' style="border-style: solid">
							<div class='header'>
								<p>科技成果交易体系</p>
							</div>
							<div class='content'>
								<el-row>
									<el-col :span="8">
										技术交易额9912931
									</el-col>
									<el-col :span="8">
										技术交易额9912931
									</el-col>
									<el-col :span="8">
										技术交易额9912931
									</el-col>
								</el-row>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
        </div>
    </div>
</template>

<script>
import {myjson} from '@/assets/qingyuanxian_test.js'
export default {
  name: 'Summary',
  data() {
      return {
      }
  },
  methods:{
		startMove () {
			// eslint-disable-next-line
			let timer = setTimeout(() => {
				if (this.number === 2) {
				this.number = 0;
				} else {
				this.number += 1;
				}
				this.startMove();
			}, 1000); // 滚动不需要停顿则将1000改成动画持续时间
		},
		myEcharts(){
			// 基于准备好的dom，初始化echarts实例
			var myChart = this.$echarts.init(document.getElementById('map'));

			this.$echarts.registerMap('庆元县', myjson)
			console.log(myjson)
			
			let option = {
				title: {
					text: '各乡镇企业数统计',
					x: 'center'
				},
				//提示框
				tooltip: {
					trigger: 'item',
					formatter: function(data) {
					return data.data.name + '工厂数：' + data.data.value
					}
				},
				//工具箱
				toolbox: {
					show: true,
					orient: 'vertical',
					left: 'right',
					top: 'center',
					// 辅助线标志,分别是启用，删除上一条，删除全部,可设置更多属性
					feature: {
					dataView: { readOnly: false },
					restore: {},
					saveAsImage: {}
					}
				},
				visualMap: {
					show: false,
					min: 0,
					max: 100,
					text: ['少', '多'],
					realtime: false,
					calculable: true,
					inRange: {
					color: ['green', 'red']
					}
				},
			
				series: [
					{
					name: '庆元县',
					type: 'map',
					zoom: 1.0,
					mapType: '庆元县', // 自定义扩展图表类型
					label: {
						show: true
					},
					data: [
						{ name: '官塘乡',value:50 },
						{ name: '江根乡',value:20 },
						{ name: '左溪镇',value:0 },
						{ name: '荷地镇',value:1 },
						{ name: '张村乡',value:50 },
						{ name: '百山祖镇',value:50 },
						{ name: '贤良镇',value:50 },
						{ name: '岭头乡',value:50 },
						{ name: '五大堡乡',value:50 },
						{ name: '安南乡',value:50 },
						{ name: '淤上乡',value:50 },
						{ name: '屏都街道',value:50 },
						{ name: '竹口镇',value:50},
						{ name: '松源街道', value: 0},
						{ name: '黄田镇', value: 0},
						{ name: '隆宫乡', value: 1},
						{ name: '举水乡', value: 0},
						{ name: '龙溪乡', value: 1},
					],
					nameMap: {
						官塘乡: '官塘乡',  //在画图时候起的名字和data的name这个对应
						江根乡: '江根乡',
						左溪镇: '左溪镇',
						荷地镇: '荷地镇',
						张村乡: '张村乡',
						百山祖镇: '百山祖镇',
						贤良镇: '贤良镇',
						岭头乡: '岭头乡',
						五大堡乡: '五大堡乡',
						安南乡: '安南乡',
						淤上乡: '淤上乡',
						屏都街道: '屏都街道',
						竹口镇: '竹口镇',
						松源街道: '松源街道',
						黄田镇: '黄田镇',
						隆宫乡: '隆宫乡',
						举水乡: '举水乡',
						龙溪乡: '龙溪乡'
					}
				},
				
				]
				}

			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);
			}
  },
  mounted() {
  	this.myEcharts();
	this.startMove();
    // document.body.style.backgroundColor = '#333333';
  }
}
</script>

<style scoped>
    body {
        background-color: black;
    }
    #map {
        width: 100%;
		height: 600px;
    }

	.el-row {
    margin-bottom: 6px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .card {
	  margin-top: 20px;
	  height: 100px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
   
  .card.header{
	  height: 30px;
  }

  .card.content{
	  height: 70px;
  }
</style>