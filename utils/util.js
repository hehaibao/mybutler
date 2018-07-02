
// 常用接口变量
const API_CONST = {
  TIAN_API_URL: 'http://api.tianapi.com/txapi/', // 天行数据API 地址
  TIAN_API_KEY: '7580e633f05b7a6c7c6392922b6c271c', // 天行数据API KEY
  WEATHER_API_URL: 'https://free-api.heweather.com/s6/weather/', //和风天气API 地址
  WEATHER_API_KEY: '51333c90c8d84db897525fcb6facb03d', //和风天气API KEY
  ZHAOTOOL_API_URL: 'https://www.zhaotool.com/v1/api/', //找工具API 地址
  ZHAOTOOL_API_KEY: 'e10adc3949ba59abbe56e057f20f883e' //找工具API KEY
};

// 格式化时间
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

// 格式化数字
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  API_CONST: API_CONST,
  formatTime: formatTime
}
