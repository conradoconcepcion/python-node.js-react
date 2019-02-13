module.exports = ("chartyear",
    {
        "type": "serial",
        "categoryField": "category",
        "maxSelectedSeries": 20,
        "mouseWheelScrollEnabled": true,
        "mouseWheelZoomEnabled": true,
        "plotAreaBorderColor": "#1A191C",
        "startDuration": 1,
        "backgroundColor": "#1A191C",
        "borderColor": "#1A191C",
        "color": "#FFFFFF",
        "fontSize": 10,
        "theme": "dark",
        "categoryAxis": {
          "axisAlpha": 1,
          "axisThickness": 2,
          "color": "#FFFFFF",
          "fontSize": 10,
          "ignoreAxisWidth": true,
          "labelOffset": -1,
          "minorTickLength": -1,
          "minVerticalGap": 45,
          "tickLength": 0,
          "title": "",
          "titleBold": false
        },
        "chartScrollbar": {
          "enabled": true,
          "autoGridCount": true,
          "graphType": "line",
          "hideResizeGrips": true,
          "minimum": -2,
          "tabIndex": -7
        },
        "trendLines": [],
        "graphs": [
          {
            "accessibleLabel": " [[value]]",
            "animationPlayed": true,
            "balloonColor": "#A93E41",
            "balloonText": " [[category]] = [[value]]",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletBorderColor": "#9A1F31",
            "bulletBorderThickness": 3,
            "bulletColor": "#FFFFFF",
            "bulletHitAreaSize": 0,
            "bulletSize": 11,
            "cursorBulletAlpha": 0,
            "fillColors": "#A93E41",
            "fixedColumnWidth": -1,
            "fontSize": 12,
            "id": "AmGraph-1",
            "lineColor": "#A93E41",
            "lineThickness": 3,
            "maxBulletSize": 49,
            "minBulletSize": 0,
            "tabIndex": 4,
            "title": "",
            "valueField": "column-1",
            "visibleInLegend": false
          }
        ],
        "guides": [],
        "valueAxes": [
          {
            "id": "ValueAxis-1",
            "title": ""
          }
        ],
        "allLabels": [],
        "balloon": {
          "color": "#FFFFFF",
          "cornerRadius": 3,
          "fillColor": "#A93E41",
          "horizontalPadding": 9,
          "pointerOrientation": "up",
          "pointerWidth": 5,
          "textAlign": " middle"
        },
        "legend": {
          "enabled": true,
          "tabIndex": -3,
          "useGraphSettings": true
        },
        "titles": [],
        "dataProvider": [
          {
            "category": "JAN",
            "column-1": "300"
          },
          {
            "category": "FEB",
            "column-1": "400"
          },
          {
            "category": "MAR",
            "column-1": "600"
          },
          {
            "category": "APR",
            "column-1": "800"
          },
          {
            "category": "MAY",
            "column-1": "1100"
          },
          {
            "category": "JUN",
            "column-1": "1600"
          },
          {
            "category": "JUL",
            "column-1": "1800"
          },
          {
            "category": "AUG",
            "column-1": "1200"
          },
          {
            "category": "SEP",
            "column-1": "1900"
          },
          {
            "category": "OCT",
            "column-1": "2400"
          }
    
        ]
      }
);