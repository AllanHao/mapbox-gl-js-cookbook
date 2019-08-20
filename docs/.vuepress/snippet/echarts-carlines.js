import echarts from 'echarts';
import 'echarts-gl';
import * as mapboxgl from 'mapbox-gl';
import { json } from 'd3-fetch'
import EchartsLayer from 'echartslayer'

window.mapboxgl = mapboxgl
window.echarts = echarts
mapboxgl.accessToken =
    'pk.eyJ1IjoiZXZlbmluZ21lIiwiYSI6ImNqcWdoczh3MTBidDUzeXBja2xjMGEwajQifQ._-5b0zEhnspUIF_5Z4eLXQ';

export default function addLineLayer (map, id) {
    json('https://osgis.cn/data/lines-bus.json').then(data => {
        var hStep = 300 / (data.length - 1);
        var busLines = [].concat.apply([], data.map(function (busLine, idx) {
            var prevPt;
            var points = [];
            for (var i = 0; i < busLine.length; i += 2) {
                var pt = [busLine[i], busLine[i + 1]];
                if (i > 0) {
                    pt = [
                        prevPt[0] + pt[0],
                        prevPt[1] + pt[1]
                    ];
                }
                prevPt = pt;

                points.push([pt[0] / 1e4, pt[1] / 1e4]);
            }
            return {
                coords: points,
                lineStyle: {
                    normal: {
                        color: echarts.color.modifyHSL('#5A94DF', Math.round(hStep * idx))
                    }
                }
            };
        }));

        var echartslayer = new EchartsLayer(map);

        echartslayer.chart.setOption( {
            GLMap: {
                roam: true
            },
            title: {
                text: '公司车辆历史轨迹',
                subtext: '数据纯属虚构',
                left: 'center',
                textStyle: {
                    color: '#fff'
                },
                subtextStyle: {
                    color: '#fff'
                }
            },
            series: [{
                type: 'lines',
                zlevel: 1,
                coordinateSystem: 'GLMap',
                polyline: true,
                data: busLines,
                silent: true,
                lineStyle: {
                    normal: {
                        // color: '#c23531',
                        // color: 'rgb(200, 35, 45)',
                        opacity: 0.2,
                        width: 1
                    }
                },
                progressiveThreshold: 500,
                progressive: 200
            }, {
                type: 'lines',
                zlevel: 1,
                coordinateSystem: 'GLMap',
                polyline: true,
                data: busLines,
                lineStyle: {
                    normal: {
                        width: 0
                    }
                },
                effect: {
                    constantSpeed: 10,
                    show: true,
                    trailLength: 0.1,
                    symbolSize: 3.5
                },
                zlevel: 1
            }]
        });
    })
}