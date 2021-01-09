WIDGET = {
    CONFIG: {
      "modules": "120",
      "background": 5,
      "tmpColor": "212121",
      "tmpSize": "16",
      "cityColor": "212121",
      "citySize": "16",
      "aqiSize": 16,
      "weatherIconSize": "24",
      "alertIconSize": 18,
      "padding": "10px 5px 10px 5px",
      "shadow": "1",
      "language": "auto",
      "fixed": "false",
      "vertical": "middle",
      "horizontal": "right",
      "key": "910eb45d68d7459d8352d6eda5956fc2"
    }
  }

(function (d) {
    var c = d.createElement('link')
    c.rel = 'stylesheet'
    c.href = 'https://widget.heweather.net/simple/static/css/he-simple.css?v=1.4.0'
    var s = d.createElement('script')
    s.src = 'https://cdn.jsdelivr.net/gh/realxizhe/file/weather/h-s.js'
    var sn = d.getElementsByTagName('script')[0]
    sn.parentNode.insertBefore(c, sn)
    sn.parentNode.insertBefore(s, sn)
  })(document)