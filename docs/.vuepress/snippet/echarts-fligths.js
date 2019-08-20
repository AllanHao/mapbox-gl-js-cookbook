import echarts from 'echarts';
import 'echarts-gl';
import * as mapboxgl from 'mapbox-gl';
import { json } from 'd3-fetch'

window.mapboxgl = mapboxgl
mapboxgl.accessToken =
    'pk.eyJ1IjoiZXZlbmluZ21lIiwiYSI6ImNqcWdoczh3MTBidDUzeXBja2xjMGEwajQifQ._-5b0zEhnspUIF_5Z4eLXQ';

export default function addFlightLayer (id) {
    var myChart = echarts.init(document.getElementById(id));
    json('https://osgis.cn/data/flights.json').then(data => {
        function getAirportCoord (idx) {
            return [data.airports[idx][3], data.airports[idx][4]];
        }
        var filter_routes = data.routes.filter(word => word[0] == 3 || word[0] == 4 || word[0] == 5)
        var routes = filter_routes.map(function (airline) {
            return [
                getAirportCoord(airline[1]),
                getAirportCoord(airline[2])
            ];
        });

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '货物运送轨迹流线',
                subtext: '数据纯属虚构',
                left: 'center',
                textStyle: {
                    color: '#fff'
                },
                subtextStyle: {
                    color: '#fff'
                }
            },
            mapbox3D: {
                style: 'http://120.27.63.12:8080/conf/styles/sprite-kye/style_darkblue.json',
                postEffect: {
                    enable: true
                },
                center: [114.46, 36.92],
                zoom: 3,
            },
            series: [{
                type: 'lines3D',

                coordinateSystem: 'mapbox3D',

                effect: {
                    show: true,
                    trailWidth: 1,
                    trailOpacity: 0.5,
                    trailLength: 0.2,
                    constantSpeed: 2
                },

                blendMode: 'lighter',

                lineStyle: {
                    width: 0.2,
                    opacity: 0.05
                },

                data: routes
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    })
}
